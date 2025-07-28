import { useGlobePolygons } from "../libs/hooks/useGlobePolygons";
import { CombinedGlobeCore } from "./CombinedGlobeCore";
import { visitedCountries, visitedStates, upcomingTrip } from "../libs/consts";

export default function GlobeContainer() {
  const { polygons, loading, error } = useGlobePolygons({
    visitedCountries,
    visitedStates,
    upcomingTrip,
  });
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;
  return <CombinedGlobeCore polygons={polygons} />;
}
