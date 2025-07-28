// hooks/useGlobePolygons.ts
import { useEffect, useState } from "react";
import * as topojson from "topojson-client";
import iso from "iso-3166-1";
import { stateLookup } from "../consts";

export interface PolygonData {
  properties: {
    name?: string;
    ADMIN?: string;
    [key: string]: any;
  };
  id?: string;
  [key: string]: any;
}

export function useGlobePolygons({
  visitedCountries,
  visitedStates,
  upcomingTrip,
}: {
  visitedCountries: string[];
  visitedStates: string[];
  upcomingTrip: string[];
}) {
  const [polygons, setPolygons] = useState<PolygonData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const worldRes = await fetch(
          "https://unpkg.com/world-atlas@2/countries-110m.json",
        );
        const worldTopo = await worldRes.json();
        const countries = topojson.feature(
          worldTopo,
          worldTopo.objects.countries,
        ).features as PolygonData[];

        // Combine visited and upcoming countries
        const allCountryCodes = [...visitedCountries, ...upcomingTrip];
        const selectedCountries = allCountryCodes
          .map((code) => {
            const numeric = iso.whereAlpha2(code)?.numeric;
            return numeric ? countries.find((f) => f.id === numeric) : null;
          })
          .filter((f): f is PolygonData => Boolean(f));

        const usRes = await fetch(
          "https://unpkg.com/us-atlas@3/states-10m.json",
        );
        const usTopo = await usRes.json();
        const states = topojson.feature(usTopo, usTopo.objects.states)
          .features as PolygonData[];
        const selectedStates = states.filter((s) =>
          visitedStates
            .map((code) => stateLookup[code])
            .includes(s.properties.name ?? ""),
        );

        setPolygons([...selectedCountries, ...selectedStates]);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [visitedCountries, visitedStates, upcomingTrip]);

  return { polygons, loading, error };
}
