import { useRef, useEffect, useImperativeHandle, forwardRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import type { PolygonData } from "../libs/types";

interface GlobeRef {
  scene: () => THREE.Scene;
  controls: () => any;
}

// Props interface
interface CombinedEarthGlobeProps {
  globeImageUrl?: string;
  backgroundColor?: string;
  showAtmosphere?: boolean;
  polygonsData?: PolygonData[];
  polygonCapColor?: (d: PolygonData) => string;
  polygonSideColor?: (d: PolygonData) => string;
  polygonLabel?: (d: PolygonData) => string;
  onPolygonClick?: (d: PolygonData) => void;
  showFigures?: boolean;
  showBounds?: boolean;
}

// Convert lat/lng to 3D coordinates
function latLngToVector3(
  lat: number,
  lng: number,
  radius: number = 100,
): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return new THREE.Vector3(x, y, z);
}

// Create a polygon mesh from GeoJSON polygon data
function createPolygonMesh(
  polygon: PolygonData,
  capColor: (d: PolygonData) => string,
  sideColor: (d: PolygonData) => string,
  radius: number = 100,
): THREE.Group | null {
  try {
    // Check if polygon has geometry
    const polygonGeometry = (polygon as any).geometry;

    if (!polygonGeometry || polygonGeometry.type !== "Polygon") {
      return null;
    }

    const coordinates = polygonGeometry.coordinates as number[][][];
    if (!coordinates || coordinates.length === 0) {
      return null;
    }

    const group = new THREE.Group();
    const outerRing = coordinates[0];

    if (!outerRing || outerRing.length < 3) {
      return null;
    }

    // Convert coordinates to 3D points on sphere surface
    const points: THREE.Vector3[] = [];
    for (const coord of outerRing) {
      const [lng, lat] = coord;
      if (typeof lng === "number" && typeof lat === "number") {
        const point = latLngToVector3(lat, lng, radius);
        points.push(point);
      }
    }

    if (points.length < 3) {
      return null;
    }

    // Create a simple polygon mesh using triangulation
    const vertices: number[] = [];
    const indices: number[] = [];

    // Add all points as vertices
    points.forEach((point) => {
      vertices.push(point.x, point.y, point.z);
    });

    // Simple fan triangulation from first vertex
    for (let i = 1; i < points.length - 1; i++) {
      indices.push(0, i, i + 1);
    }

    // Create geometry
    const geometry = new THREE.BufferGeometry();
    geometry.setFromPoints(points);
    geometry.setIndex(indices);
    geometry.computeVertexNormals();

    // Create materials
    const capMaterial = new THREE.MeshPhongMaterial({
      color: capColor(polygon),
      transparent: true,
      opacity: 0.8,
      depthWrite: false,
      side: THREE.BackSide,
    });

    const sideMaterial = new THREE.LineBasicMaterial({
      color: sideColor(polygon),
      transparent: true,
      opacity: 0.8,
    });

    // Create cap mesh (filled polygon)
    const capMesh = new THREE.Mesh(geometry, capMaterial);
    group.add(capMesh);

    // Create outline (border)
    const outlineGeometry = new THREE.BufferGeometry().setFromPoints([
      ...points,
      points[0],
    ]); // Close the loop
    const outlineMesh = new THREE.Line(outlineGeometry, sideMaterial);
    group.add(outlineMesh);

    return group;
  } catch (error) {
    console.error("Error creating polygon mesh:", error);
    return null;
  }
}

const CombinedEarthGlobe = forwardRef<GlobeRef, CombinedEarthGlobeProps>(
  (
    {
      globeImageUrl = "https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg",
      backgroundColor = "rgb(50,50,50)",
      polygonsData = [],
      polygonCapColor = () => "rgb(0,150,0)",
      polygonSideColor = () => "rgb(0,0,0)",
      polygonLabel = (d) => d.properties?.name || d.properties?.ADMIN || "",
      onPolygonClick: _onPolygonClick = () => {},
      showFigures = false,
      showBounds = false,
    },
    ref,
  ) => {
    const mountRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const controlsRef = useRef<OrbitControls | null>(null);
    const animationIdRef = useRef<number | null>(null);
    const raycasterRef = useRef<THREE.Raycaster | null>(null);
    const mouseRef = useRef<THREE.Vector2 | null>(null);
    const polygonMeshesRef = useRef<THREE.Group[]>([]);

    // Constellation overlay refs
    const starMeshRef = useRef<THREE.Mesh | null>(null);
    const outerSphereMeshRef = useRef<THREE.Mesh | null>(null);
    const outerSphereMesh2Ref = useRef<THREE.Mesh | null>(null);
    const materialsRef = useRef<{
      matStar: THREE.MeshBasicMaterial;
      matFigures: THREE.MeshBasicMaterial;
      matBounds: THREE.MeshBasicMaterial;
    } | null>(null);

    // Expose methods to parent components
    useImperativeHandle(
      ref,
      () =>
        ({
          scene: () => sceneRef.current!,
          controls: () => controlsRef.current!,
        }) as GlobeRef,
      [],
    );

    // Load constellation overlay function
    const loadConstellationOverlay = async () => {
      if (!sceneRef.current) return;

      try {
        console.log("CombinedEarthGlobe: Loading constellation textures...");
        const loader = new THREE.TextureLoader();

        console.log("CombinedEarthGlobe: Loading starmap.webp...");
        const starTexture = await loader.loadAsync("starmap.webp");
        console.log("CombinedEarthGlobe: Starmap loaded successfully");

        console.log("CombinedEarthGlobe: Loading figures.webp...");
        const figuresTexture = await loader.loadAsync("figures.webp");
        console.log("CombinedEarthGlobe: Figures loaded successfully");

        console.log("CombinedEarthGlobe: Loading bounds.webp...");
        const boundsTexture = await loader.loadAsync("bounds.webp");
        console.log("CombinedEarthGlobe: Bounds loaded successfully");

        console.log("CombinedEarthGlobe: All constellation textures loaded");
        console.log(
          "CombinedEarthGlobe: Star texture dimensions:",
          starTexture.image.width,
          "x",
          starTexture.image.height,
        );
        console.log(
          "CombinedEarthGlobe: Figures texture dimensions:",
          figuresTexture.image.width,
          "x",
          figuresTexture.image.height,
        );
        console.log(
          "CombinedEarthGlobe: Bounds texture dimensions:",
          boundsTexture.image.width,
          "x",
          boundsTexture.image.height,
        );

        const scene = sceneRef.current;
        const geom = new THREE.SphereGeometry(999999, 32, 16);

        geom.scale(-15, 15, 15);

        const matStar = new THREE.MeshBasicMaterial({
          map: starTexture,
          side: THREE.FrontSide,
          depthWrite: false,
          transparent: true,
          opacity: 1,
        });

        const matFigures = new THREE.MeshBasicMaterial({
          map: figuresTexture,
          transparent: true,
          alphaTest: 0.8,
          depthWrite: false,
          side: THREE.DoubleSide,
        });

        const matBounds = new THREE.MeshBasicMaterial({
          map: boundsTexture,
          transparent: true,
          alphaTest: 0.4,
          depthWrite: false,
          side: THREE.DoubleSide,
        });

        // Create and add star mesh
        const starMesh = new THREE.Mesh(geom, matStar);
        starMesh.renderOrder = -1;
        scene.add(starMesh);

        // Create outer sphere (outside Earth's orbit)
        const outerSphereGeometry = new THREE.SphereGeometry(27.2, 32, 16);
        const outerSphereMaterial = new THREE.MeshBasicMaterial({
          color: 0xaaaaaa,
          transparent: true,
          opacity: 1,
          side: THREE.BackSide,
        });
        const outerSphereMesh = new THREE.Mesh(
          outerSphereGeometry,
          outerSphereMaterial,
        );
        const outerSphereGeometry2 = new THREE.SphereGeometry(10913, 32, 16);
        const outerSphereMaterial2 = new THREE.MeshBasicMaterial({
          color: "rgb(255,255,0)",
          transparent: true,
          opacity: 1,
          side: THREE.FrontSide,
        });
        const outerSphereMesh2 = new THREE.Mesh(
          outerSphereGeometry2,
          outerSphereMaterial2,
        );
        outerSphereMesh.position.set(3700, 0, 0);
        outerSphereMesh.renderOrder = 0;
        outerSphereMesh2.position.set(1173300, 0, 0);
        outerSphereMesh2.renderOrder = 0;

        scene.add(outerSphereMesh);
        scene.add(outerSphereMesh2);
        starMeshRef.current = starMesh;
        outerSphereMeshRef.current = outerSphereMesh;
        outerSphereMesh2Ref.current = outerSphereMesh2;
        materialsRef.current = { matStar, matFigures, matBounds };

        console.log("CombinedEarthGlobe: Star field added to scene");
        console.log("CombinedEarthGlobe: Star sphere radius:", 5000);
        console.log("CombinedEarthGlobe: Camera position: (0, 0, 300)");
        console.log("CombinedEarthGlobe: Star material side:", matStar.side);
        console.log("CombinedEarthGlobe: Star mesh visible:", starMesh.visible);
      } catch (error) {
        console.error(
          "CombinedEarthGlobe: Error loading constellation textures:",
          error,
        );
      }
    };

    // Initialize Three.js scene
    useEffect(() => {
      if (!mountRef.current || sceneRef.current) return; // Prevent double initialization

      // Create scene
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        50,
        mountRef.current.clientWidth / mountRef.current.clientHeight,
        0.1,
        99999999999,
      );

      // Create renderer
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(
        mountRef.current.clientWidth,
        mountRef.current.clientHeight,
      );
      renderer.setPixelRatio(window.devicePixelRatio);

      // Parse background color
      const bgColor = "rgb(50,50,50)";

      const bgAlpha = backgroundColor === "rgb(50,50,50)" ? 0 : 1;
      renderer.setClearColor(bgColor, bgAlpha);

      mountRef.current.appendChild(renderer.domElement);

      // Create controls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.02;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.15;
      controls.panSpeed = 0.15;
      controls.zoomSpeed = 0.5;
      controls.minDistance = 150;
      controls.maxDistance = 1000000;

      const ambientLight = new THREE.AmbientLight(0xffffff, 1);
      scene.add(ambientLight);

      const globeGeometry = new THREE.SphereGeometry(99, 128, 64);
      const fallbackMaterial = new THREE.MeshPhongMaterial({ color: 0x4444ff });
      const globeMesh = new THREE.Mesh(globeGeometry, fallbackMaterial);
      scene.add(globeMesh);
      if (globeImageUrl) {
        const textureLoader = new THREE.TextureLoader();
        textureLoader.crossOrigin = "anonymous";
        textureLoader.load(
          globeImageUrl,
          (texture) => {
            const globeMaterial = new THREE.MeshPhongMaterial({ map: texture });
            globeMesh.material = globeMaterial;
            globeMesh.material.needsUpdate = true;
          },
          undefined,
          (error) => {
            console.error("Failed to load Earth texture:", error);
          },
        );
      }

      // Set camera position
      camera.position.set(0, 0, 300);

      // Initialize raycaster and mouse for interactions
      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2();

      // Store refs
      sceneRef.current = scene;
      rendererRef.current = renderer;
      controlsRef.current = controls;
      raycasterRef.current = raycaster;
      mouseRef.current = mouse;

      // Load constellation textures and create star field
      console.log("CombinedEarthGlobe: About to call loadConstellationOverlay");
      loadConstellationOverlay();

      // Animation loop
      const animate = () => {
        animationIdRef.current = requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      };
      animate();

      // Handle resize
      const handleResize = () => {
        if (!mountRef.current) return;
        camera.aspect =
          mountRef.current.clientWidth / mountRef.current.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(
          mountRef.current.clientWidth,
          mountRef.current.clientHeight,
        );
      };
      window.addEventListener("resize", handleResize);

      // Cleanup
      return () => {
        window.removeEventListener("resize", handleResize);
        if (animationIdRef.current) {
          cancelAnimationFrame(animationIdRef.current);
        }

        // Clean up outer sphere
        if (outerSphereMeshRef.current && sceneRef.current) {
          sceneRef.current.remove(outerSphereMeshRef.current);
          outerSphereMeshRef.current.geometry.dispose();
          if (outerSphereMeshRef.current.material instanceof THREE.Material) {
            outerSphereMeshRef.current.material.dispose();
          }
        }

        if (mountRef.current && renderer.domElement) {
          mountRef.current.removeChild(renderer.domElement);
        }
        renderer.dispose();
      };
    }, []);

    // Render polygons when data changes
    useEffect(() => {
      if (!sceneRef.current || !polygonsData.length) return;

      // Clear existing polygon meshes
      polygonMeshesRef.current.forEach((mesh) => {
        sceneRef.current!.remove(mesh);
      });
      polygonMeshesRef.current = [];

      // Create new polygon meshes
      polygonsData.forEach((polygon) => {
        const mesh = createPolygonMesh(
          polygon,
          polygonCapColor,
          polygonSideColor,
          100.1,
        );
        if (mesh) {
          sceneRef.current!.add(mesh);
          polygonMeshesRef.current.push(mesh);
        }
      });
    }, [polygonsData, polygonCapColor, polygonSideColor, polygonLabel]);

    // Handle constellation overlay visibility changes
    useEffect(() => {
      const mesh = starMeshRef.current;
      if (!mesh || !materialsRef.current || !sceneRef.current) return;

      const scene = sceneRef.current;
      const { matFigures, matBounds } = materialsRef.current;

      // Remove existing overlay meshes (exactly like the old hook)
      const overlaysToRemove = scene.children.filter(
        (child: THREE.Object3D) => child.userData.isOverlay,
      );
      overlaysToRemove.forEach((overlay: THREE.Object3D) =>
        scene.remove(overlay),
      );

      // Add figure overlay if enabled (reusing star mesh geometry)
      if (showFigures) {
        const figuresMesh = new THREE.Mesh(mesh.geometry, matFigures);
        figuresMesh.userData.isOverlay = true;
        figuresMesh.renderOrder = -1;
        scene.add(figuresMesh);
      }

      // Add bounds overlay if enabled (reusing star mesh geometry)
      if (showBounds) {
        const boundsMesh = new THREE.Mesh(mesh.geometry, matBounds);
        boundsMesh.userData.isOverlay = true;
        boundsMesh.renderOrder = -1;
        scene.add(boundsMesh);
      }
    }, [showFigures, showBounds]);

    return (
      <div
        ref={mountRef}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    );
  },
);

CombinedEarthGlobe.displayName = "CombinedEarthGlobe";

export default CombinedEarthGlobe;
