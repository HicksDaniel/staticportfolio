import { useEffect, useRef } from "react";
import * as THREE from "three";

export function useConstOverlay(
  globeElRef: React.RefObject<any>,
  showFigures: boolean,
  showBounds: boolean,
) {
  const starMeshRef = useRef<THREE.Mesh>();
  const materialsRef = useRef<{
    matStar: THREE.MeshBasicMaterial;
    matFigures: THREE.MeshBasicMaterial;
    matBounds: THREE.MeshBasicMaterial;
  }>();

  // Initial setup - load all textures
  useEffect(() => {
    console.log("Initial useEffect running");

    async function load() {
      console.log("Load function called");
      if (!globeElRef.current) {
        console.log("globeElRef.current is null, returning");
        return;
      }

      // Wait for Globe scene
      let attempts = 0;
      const maxAttempts = 50;
      while (attempts < maxAttempts) {
        console.log(`Attempt ${attempts + 1}: checking for scene`);
        if (globeElRef.current && globeElRef.current.scene) {
          console.log("Scene found!");
          break;
        }
        await new Promise((resolve) => setTimeout(resolve, 100));
        attempts++;
      }

      if (!globeElRef.current || !globeElRef.current.scene) {
        console.error("Globe scene not available");
        return;
      }

      try {
        const loader = new THREE.TextureLoader();
        console.log("Loading textures...");
        const [starTex, figuresTex, boundsTex] = await Promise.all([
          loader.loadAsync("/starmap.webp"),
          loader.loadAsync("/figures.webp"),
          loader.loadAsync("/bounds.webp"),
        ]);

        console.log("All textures loaded");
        const scene = globeElRef.current.scene();
        const geom = new THREE.SphereGeometry(10000, 64, 32);
        geom.scale(-10, 10, 10);

        // Create materials
        const matStar = new THREE.MeshBasicMaterial({
          map: starTex,
          side: THREE.DoubleSide,
          depthWrite: false,
        });
        const matFigures = new THREE.MeshBasicMaterial({
          map: figuresTex,
          transparent: true,
          alphaTest: 0.9,
          depthWrite: false,
          side: THREE.FrontSide,
        });
        const matBounds = new THREE.MeshBasicMaterial({
          map: boundsTex,
          transparent: true,
          alphaTest: 0.45,
          depthWrite: false,
          side: THREE.FrontSide,
        });

        // Create and add star mesh
        const starMesh = new THREE.Mesh(geom, matStar);
        starMesh.renderOrder = -1;
        scene.add(starMesh);

        starMeshRef.current = starMesh;
        materialsRef.current = { matStar, matFigures, matBounds };

        console.log(
          "Star mesh added to scene, children count:",
          scene.children.length,
        );
      } catch (error) {
        console.error("Error loading textures:", error);
      }
    }

    // Only load if we don't already have the star mesh
    if (!starMeshRef.current) {
      load();
    }
  }); // No dependency array - runs on every render but with guard

  // Handle overlay toggles
  useEffect(() => {
    const mesh = starMeshRef.current;
    if (!mesh || !materialsRef.current) return;

    const scene = globeElRef.current?.scene();
    if (!scene) return;

    const { matFigures, matBounds } = materialsRef.current;

    // Remove existing overlay meshes
    const overlaysToRemove = scene.children.filter(
      (child: any) => child.userData.isOverlay,
    );
    overlaysToRemove.forEach((overlay: any) => scene.remove(overlay));

    // Add figure overlay if enabled
    if (showFigures) {
      const figuresMesh = new THREE.Mesh(mesh.geometry, matFigures);
      figuresMesh.userData.isOverlay = true;
      figuresMesh.renderOrder = -1;
      scene.add(figuresMesh);
    }

    // Add bounds overlay if enabled
    if (showBounds) {
      const boundsMesh = new THREE.Mesh(mesh.geometry, matBounds);
      boundsMesh.userData.isOverlay = true;
      boundsMesh.renderOrder = -1;
      scene.add(boundsMesh);
    }
  }, [showFigures, showBounds]);
}
