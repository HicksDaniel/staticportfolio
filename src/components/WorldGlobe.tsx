import { useEffect, useState, useRef } from "react";
import Globe from "react-globe.gl";
import * as topojson from "topojson-client";
import iso from "iso-3166-1";
import * as THREE from "three";
import { stateLookup, visitedCountries, visitedStates } from "../libs/consts";

function CombinedGlobe() {
  const globeEl = useRef();
  const starMeshRef = useRef();
  const materialsRef = useRef<{
    matStar: any;
    matFigures: any;
    matBounds: any;
  }>();
  const [showFigures, setShowFigures] = useState(false);
  const [showBounds, setShowBounds] = useState(false);
  const [polygons, setPolygons] = useState([]);

  useEffect(() => {
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.1;

    // Load and filter countries
    const pCountries = fetch(
      "https://unpkg.com/world-atlas@2/countries-110m.json",
    )
      .then((res) => res.json())
      .then((worldTopo) => {
        const countries = topojson.feature(
          worldTopo,
          worldTopo.objects.countries,
        ).features;
        return visitedCountries
          .map((code) => {
            const numeric = iso.whereAlpha2(code)?.numeric;
            return numeric ? countries.find((f) => f.id === numeric) : null;
          })
          .filter(Boolean) as any[];
      });

    const pStates = fetch("https://unpkg.com/us-atlas@3/states-10m.json")
      .then((res) => res.json())
      .then((usTopo) => {
        const states = topojson.feature(usTopo, usTopo.objects.states).features;
        return states.filter((s) =>
          visitedStates
            .map((code) => stateLookup[code])
            .includes((s.properties as any).name),
        ) as any[];
      });

    Promise.all([pCountries, pStates])
      .then(([countries, states]) => setPolygons([...countries, ...states]))
      .catch(console.error);

    const loader = new THREE.TextureLoader();
    Promise.all([
      loader.loadAsync("/starmap_2020_8k_gal.webp"),
      loader.loadAsync("/constellation_figures_8k_gal_figures_only.webp"),
      loader.loadAsync(
        "/constellation_bounds_8k_gal_bound_only_50transparent.webp",
      ),
    ]).then(([starTex, figuresTex, boundsTex]) => {
      const scene = globeEl.current.scene();
      const geom = new THREE.SphereGeometry(9999, 64, 32);
      geom.scale(-10, 10, 10);

      const matStar = new THREE.MeshBasicMaterial({
        map: starTex,
        side: THREE.FrontSide,
        depthWrite: false,
      });
      const matFigures = new THREE.MeshBasicMaterial({
        map: figuresTex,
        transparent: true,
        alphaTest: 0.5,
        depthWrite: false,
        side: THREE.FrontSide,
      });
      const matBounds = new THREE.MeshBasicMaterial({
        map: boundsTex,
        transparent: true,
        alphaTest: 0.1,
        depthWrite: false,
        side: THREE.FrontSide,
      });

      const mesh = new THREE.Mesh(geom, matStar);
      scene.add(mesh);

      starMeshRef.current = mesh;
      materialsRef.current = { matStar, matFigures, matBounds };
    });
  }, []);

  useEffect(() => {
    const mesh = starMeshRef.current;
    if (!mesh || !materialsRef.current) return;

    const { matStar, matFigures, matBounds } = materialsRef.current;

    // Remove existing overlay meshes
    const scene = globeEl.current.scene();
    const overlaysToRemove = scene.children.filter(
      (child) => child.userData.isOverlay,
    );
    overlaysToRemove.forEach((overlay) => scene.remove(overlay));

    // Add figure overlay if enabled
    if (showFigures) {
      const figuresMesh = new THREE.Mesh(mesh.geometry, matFigures);
      figuresMesh.userData.isOverlay = true;
      scene.add(figuresMesh);
    }

    // Add bounds overlay if enabled
    if (showBounds) {
      const boundsMesh = new THREE.Mesh(mesh.geometry, matBounds);
      boundsMesh.userData.isOverlay = true;
      scene.add(boundsMesh);
    }
  }, [showFigures, showBounds]);

  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "absolute", top: 10, left: 10, zIndex: 1000 }}>
        <button
          onClick={() => setShowFigures(!showFigures)}
          style={{ marginRight: 10, padding: "5px 10px" }}
        >
          {showFigures ? "Hide" : "Show"} Figures
        </button>
        <button
          onClick={() => setShowBounds(!showBounds)}
          style={{ padding: "5px 10px" }}
        >
          {showBounds ? "Hide" : "Show"} Bounds
        </button>
      </div>
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        polygonsData={polygons}
        polygonCapColor={({ properties }) =>
          stateLookup[(properties as any).name.slice(0, 2).toUpperCase()]
            ? "rgba(0,150,0,0.6)"
            : "rgba(200,200,200,0.7)"
        }
        polygonSideColor={({ properties }) =>
          stateLookup[(properties as any).name.slice(0, 2).toUpperCase()]
            ? "rgba(0,100,0,0.8)"
            : "rgba(0,100,255,1)"
        }
        polygonLabel={({ properties }) =>
          stateLookup[(properties as any).name.slice(0, 2).toUpperCase()]
            ? (properties as any).name
            : (properties as any).ADMIN
        }
        onPolygonClick={({ properties }) => {
          const name = (properties as any).name || (properties as any).ADMIN;
          alert(
            stateLookup[(properties as any).name?.slice(0, 2).toUpperCase()]
              ? `State: ${name}`
              : `Country: ${name}`,
          );
        }}
      />
    </div>
  );
}

export default CombinedGlobe;
