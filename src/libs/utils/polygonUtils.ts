import type { PolygonData } from "../types";

import { countryLookup, stateLookup, upcomingTrip } from "../consts";

export function isUSState(d: PolygonData): boolean {
  return Boolean(d.properties?.name && !d.properties?.ADMIN);
}

export function getPolygonCapColor(d: PolygonData): string {
  if (isUSState(d)) {
    const stateName = d.properties?.name;
    const stateCode = Object.keys(stateLookup).find(
      (key) => stateLookup[key] === stateName,
    );
    if (stateCode && upcomingTrip.includes(stateCode)) {
      return "rgb(255,255,255)";
    }
    return "rgb(0,150,0)";
  } else {
    const countryName = d.properties?.name;
    const countryCode = Object.keys(countryLookup).find(
      (key) => countryLookup[key] === countryName,
    );
    if (countryCode && upcomingTrip.includes(countryCode)) {
      return "rgb(150,150,150)";
    }
    return "rgb(0,150,0)"; // Green for countries
  }
}

export const polygonProps = {
  capColor: getPolygonCapColor,
  sideColor: (_d: PolygonData) => "rgb(0,0,0)", // Black outlines
  label: (d: PolygonData) => d.properties?.name ?? d.properties?.ADMIN ?? "",
  onClick: (d: PolygonData) => {
    const name = d.properties?.name ?? d.properties?.ADMIN;
    const kind = isUSState(d) ? `USA - State` : `Country`;
    alert(`${kind}: ${name}`);
  },
};
