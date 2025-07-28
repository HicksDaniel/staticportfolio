import { useCallback } from "react";
import {
  stateLookup,
  countryLookup,
  visitedCountries,
  visitedStates,
  upcomingTrip,
} from "../consts";
import type { PolygonData } from "./useGlobePolygons";

function isUSState(d: PolygonData): boolean {
  // US states have a 'name' property, countries have 'ADMIN'
  return Boolean(d.properties?.name && !d.properties?.ADMIN);
}

function isUpcomingTripCountry(d: PolygonData): boolean {
  if (isUSState(d)) return false;

  const countryName = d.properties?.name;
  if (!countryName) return false;

  // Convert country name to code and check against upcomingTrip array
  const countryCode = Object.keys(countryLookup).find(
    (key) => countryLookup[key] === countryName,
  );

  return countryCode ? upcomingTrip.includes(countryCode) : false;
}

interface PolygonProps {
  capColor: (d: PolygonData) => string;
  sideColor: (d: PolygonData) => string;
  label: (d: PolygonData) => string;
  onClick: (d: PolygonData) => void;
}

export function usePolygonProps(): PolygonProps {
  const capColor = useCallback((d: PolygonData) => {
    // Distinguish between countries and US states by ID length
    const isUSState = d.id && d.id.length <= 2;

    if (isUSState) {
      // US State
      const stateName = d.properties?.name;
      const stateCode = Object.keys(stateLookup).find(
        (key) => stateLookup[key] === stateName,
      );
      if (stateCode && upcomingTrip.includes(stateCode)) {
        return "rgba(255,255,255,0.6)"; // White for upcoming trip states
      }
      return "rgba(0,150,0,0.6)"; // Green for visited states
    } else {
      // Country
      const countryName = d.properties?.name;
      const countryCode = Object.keys(countryLookup).find(
        (key) => countryLookup[key] === countryName,
      );

      if (countryCode && upcomingTrip.includes(countryCode)) {
        return "rgba(150,150,150,0.6)"; // White for upcoming trip countries
      }
      return "rgba(0,150,0,0.6)"; // Green for visited countries
    }
  }, []);

  const sideColor = useCallback(
    (d: PolygonData) => "rgba(0,0,0,0.8)", // Always green
    [],
  );

  const label = useCallback((d: PolygonData) => {
    // Show the actual name for both states and countries
    return d.properties?.name ?? d.properties?.ADMIN ?? "";
  }, []);

  const onClick = useCallback((d: PolygonData) => {
    const name = d.properties?.name ?? d.properties?.ADMIN;
    const kind = isUSState(d) ? `USA - State` : `Country`;
    alert(`${kind}: ${name}`);
  }, []);

  return { capColor, sideColor, label, onClick };
}
