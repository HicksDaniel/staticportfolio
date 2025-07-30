import { useEffect, useRef } from "react";
import * as THREE from "three";
import type { GlobeRef } from "../types";

export function useConstOverlay(
  globeElRef: React.RefObject<GlobeRef | undefined>,
  showFigures: boolean,
  showBounds: boolean,
) {
  const starMeshRef = useRef<THREE.Mesh>(null);
  const materialsRef = useRef<{
    matStar: THREE.MeshBasicMaterial;
    matFigures: THREE.MeshBasicMaterial;
    matBounds: THREE.MeshBasicMaterial;
  }>(null);

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

        if (globeElRef.current && globeElRef.current.scene()) {
          console.log("Scene found!");
          break;
        }
        await new Promise((resolve) => setTimeout(resolve, 100));
        attempts++;
      }

      if (!globeElRef.current || !globeElRef.current.scene()) {
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
        const geom = new THREE.SphereGeometry(10000, 16, 8);
        geom.scale(-10, 10, 10);

        const matStar = new THREE.MeshBasicMaterial({
          map: starTex,
          side: THREE.DoubleSide,
          depthWrite: false,
        });
        const matFigures = new THREE.MeshBasicMaterial({
          map: figuresTex,
          transparent: true,
          alphaTest: 0.8,
          depthWrite: false,
          side: THREE.FrontSide,
        });
        const matBounds = new THREE.MeshBasicMaterial({
          map: boundsTex,
          transparent: true,
          alphaTest: 0.3,
          depthWrite: false,
          side: THREE.FrontSide,
        });
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

    if (!starMeshRef.current) {
      load();
    }
  });

  useEffect(() => {
    const mesh = starMeshRef.current;
    if (!mesh || !materialsRef.current) return;

    const scene = globeElRef.current?.scene();
    if (!scene) return;

    const { matFigures, matBounds } = materialsRef.current;
    const overlaysToRemove = scene.children.filter(
      (child: THREE.Object3D) => child.userData.isOverlay,
    );
    overlaysToRemove.forEach((overlay: THREE.Object3D) =>
      scene.remove(overlay),
    );

    if (showFigures) {
      const figuresMesh = new THREE.Mesh(mesh.geometry, matFigures);
      figuresMesh.userData.isOverlay = true;
      figuresMesh.renderOrder = -1;
      scene.add(figuresMesh);
    }

    if (showBounds) {
      const boundsMesh = new THREE.Mesh(mesh.geometry, matBounds);
      boundsMesh.userData.isOverlay = true;
      boundsMesh.renderOrder = -1;
      scene.add(boundsMesh);
    }
  }, [showFigures, showBounds, globeElRef]);
}
