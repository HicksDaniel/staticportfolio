import { useEffect, useState } from "react";
import * as topojson from "topojson-client";
import iso from "iso-3166-1";
import { stateLookup } from "../consts";
import type { PolygonData } from "../types";

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
        const countries = worldTopo.objects.countries.geometries.map(
          (geom: any) => topojson.feature(worldTopo, geom),
        ) as PolygonData[];

        console.log("World topo loaded, countries:", countries);

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

        const states = usTopo.objects.states.geometries.map((geom: any) =>
          topojson.feature(usTopo, geom),
        ) as PolygonData[];

        const selectedStates = states.filter((s: PolygonData) =>
          visitedStates
            .map((code) => stateLookup[code])
            .includes(s.properties.name ?? ""),
        );

        setPolygons([...selectedCountries, ...selectedStates]);
      } catch (err: unknown) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [visitedCountries, visitedStates, upcomingTrip]);

  return { polygons, loading, error };
}
