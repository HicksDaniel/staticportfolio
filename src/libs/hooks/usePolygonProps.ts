import { useCallback } from "react";
import { stateLookup, countryLookup, upcomingTrip } from "../consts";
import type { PolygonData, PolygonProps } from "../types";

function isUSState(d: PolygonData): boolean {
  return Boolean(d.properties?.name && !d.properties?.ADMIN);
}

export function isUpcomingTripCountry(d: PolygonData): boolean {
  if (isUSState(d)) return false;

  const countryName = d.properties?.name;
  if (!countryName) return false;

  const countryCode = Object.keys(countryLookup).find(
    (key) => countryLookup[key] === countryName,
  );

  return countryCode ? upcomingTrip.includes(countryCode) : false;
}

export function usePolygonProps(): PolygonProps {
  const capColor = useCallback((d: PolygonData) => {
    const isUSState = d.id && d.id.length <= 2;
    if (isUSState) {
      const stateName = d.properties?.name;
      const stateCode = Object.keys(stateLookup).find(
        (key) => stateLookup[key] === stateName,
      );
      if (stateCode && upcomingTrip.includes(stateCode)) {
        return "rgba(255,255,255,0.6)";
      }
      return "rgba(0,150,0,0.6)";
    } else {
      const countryName = d.properties?.name;
      const countryCode = Object.keys(countryLookup).find(
        (key) => countryLookup[key] === countryName,
      );

      if (countryCode && upcomingTrip.includes(countryCode)) {
        return "rgba(150,150,150,0.6)";
      }
      return "rgba(0,150,0,0.6)";
    }
  }, []);

  const sideColor = useCallback((_d: PolygonData) => "rgba(0,0,0,0.8)", []);

  const label = useCallback((d: PolygonData) => {
    return d.properties?.name ?? d.properties?.ADMIN ?? "";
  }, []);

  const onClick = useCallback((d: PolygonData) => {
    const name = d.properties?.name ?? d.properties?.ADMIN;
    const kind = isUSState(d) ? `USA - State` : `Country`;
    alert(`${kind}: ${name}`);
  }, []);

  return { capColor, sideColor, label, onClick };
}
