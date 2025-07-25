import React, { useEffect, useState, useRef } from "react";
import Globe from "react-globe.gl";
import * as topojson from "topojson-client";
import iso from "iso-3166-1";
import * as THREE from "three";

// Minimal mapping of postal codes to full state names
const stateLookup: Record<string, string> = {
  AL: "Alabama",
  AK: "Alaska",
  AZ: "Arizona",
  AR: "Arkansas",
  CA: "California",
  CO: "Colorado",
  CT: "Connecticut",
  DE: "Delaware",
  FL: "Florida",
  GA: "Georgia",
  HI: "Hawaii",
  ID: "Idaho",
  IL: "Illinois",
  IN: "Indiana",
  IA: "Iowa",
  KS: "Kansas",
  KY: "Kentucky",
  LA: "Louisiana",
  ME: "Maine",
  MD: "Maryland",
  MA: "Massachusetts",
  MI: "Michigan",
  MN: "Minnesota",
  MS: "Mississippi",
  MO: "Missouri",
  MT: "Montana",
  NE: "Nebraska",
  NV: "Nevada",
  NH: "New Hampshire",
  NJ: "New Jersey",
  NM: "New Mexico",
  NY: "New York",
  NC: "North Carolina",
  ND: "North Dakota",
  OH: "Ohio",
  OK: "Oklahoma",
  OR: "Oregon",
  PA: "Pennsylvania",
  RI: "Rhode Island",
  SC: "South Carolina",
  SD: "South Dakota",
  TN: "Tennessee",
  TX: "Texas",
  UT: "Utah",
  VT: "Vermont",
  VA: "Virginia",
  WA: "Washington",
  WV: "West Virginia",
  WI: "Wisconsin",
  WY: "Wyoming",
  DC: "District of Columbia",
};

function CombinedGlobe() {
  const globeEl = useRef<any>();
  const [polygons, setPolygons] = useState<any[]>([]);

  const visitedCountries = [
    "DE",
    "DO",
    "BS",
    "PE",
    "BR",
    "AR",
    "CL",
    "IE",
    "GB",
  ];
  const visitedStates = [
    "MI",
    "IL",
    "IN",
    "OH",
    "FL",
    "KY",
    "VA",
    "WV",
    "PA",
    "CO",
    "CA",
    "NY",
    "NV",
    "AZ",
    "TN",
    "WI",
    "GA",
    "UT",
    "GA",
  ];

  useEffect(() => {
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 1;

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

    // Load and filter U.S. states by postal code (via name match)
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

    // Merge and update
    Promise.all([pCountries, pStates])
      .then(([countries, states]) => setPolygons([...countries, ...states]))
      .catch(console.error);
    const scene = globeEl.current.scene();
    const loader = new THREE.TextureLoader();
    loader.load(
      "/constellations_map_show_milkyway_constallations.webp.webp",
      (texture) => {
        const geom = new THREE.SphereGeometry(100000, 64, 32);
        geom.scale(-1, 1, 1); // invert normals so inside is visible
        const mat = new THREE.MeshBasicMaterial({
          map: texture,
          side: THREE.DoubleSide,
          depthWrite: false, // ensure it's always rendered behind
        });
        const starMesh = new THREE.Mesh(geom, mat);
        scene.add(starMesh);
      },
    );
  }, []);

  return (
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
      backgroundColor="black"
    />
  );
}

export default CombinedGlobe;
