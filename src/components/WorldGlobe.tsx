import React, { useEffect, useState, useRef } from "react";
import Globe from "react-globe.gl";
import * as topojson from "topojson-client";
import iso from "iso-3166-1";

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
      onPolygonClick={({ properties }) =>
        stateLookup[(properties as any).name.slice(0, 2).toUpperCase()]
          ? `State: ${(properties as any).name}`
          : `Country: ${(properties as any).ADMIN}`
            ? alert(`Country: ${(properties as any).ADMIN}`)
            : null
      }
      backgroundColor="black"
    />
  );
}

export default CombinedGlobe;

// import React, { useEffect, useState, useRef } from "react";
// import Globe from "react-globe.gl";
// import * as topojson from "topojson-client";
// import iso from "iso-3166-1"; // npm install iso-3166-1

// function SpinningGlobe() {
//   const globeEl = useRef<any>();
//   const [polygons, setPolygons] = useState<any[]>([]);

//   const visitedNations = [
//     "US",
//     "DE",
//     "DO",
//     "BS",
//     "PE",
//     "BR",
//     "AR",
//     "CL",
//     "IE",
//     "GB",
//   ];

//   useEffect(() => {
//     // Enable auto-rotation
//     globeEl.current.controls().autoRotate = true;
//     globeEl.current.controls().autoRotateSpeed = 3;

//     fetch("https://unpkg.com/world-atlas@2/countries-110m.json")
//       .then((res) => res.json())
//       .then((topology) => {
//         const allCountries = topojson.feature(
//           topology,
//           topology.objects.countries,
//         ).features;

//         const matched = visitedNations
//           .map((code) => {
//             const country = iso.whereAlpha2(code.toUpperCase());
//             if (!country) {
//               console.warn(`No ISO mapping for ${code}`);
//               return null;
//             }
//             return allCountries.find((f) => f.id === country.numeric);
//           })
//           .filter(Boolean) as any[];

//         setPolygons(matched);
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <Globe
//       ref={globeEl}
//       globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
//       polygonsData={polygons}
//       polygonCapColor={() => "rgba(200, 200, 200, 0.7)"}
//       polygonSideColor={() => "rgba(0, 100, 255, 1)"}
//       polygonStrokeColor={() => "#888"}
//       polygonLabel={({ properties: d }) => d.ADMIN}
//       onPolygonClick={({ properties: d }) => alert(`You clicked: ${d.ADMIN}`)}
//       backgroundColor="black"
//     />
//   );
// }

// export default SpinningGlobe;
