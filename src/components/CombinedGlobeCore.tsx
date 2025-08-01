import { useRef, useState } from "react";
import CombinedEarthGlobe from "../components/CombinedEarthGlobe";
import { ControlsPanel } from "../components/ControlsPanel";
import { polygonProps } from "../libs/utils/polygonUtils";
import type {
  CombinedGlobeCoreProps,
  GlobeRef,
  PolygonData,
} from "../libs/types";

export function CombinedGlobeCore({ polygons }: CombinedGlobeCoreProps) {
  const globeRef = useRef<GlobeRef>(null);
  const [showFigures, setShowFigures] = useState<boolean>(false);
  const [showBounds, setShowBounds] = useState<boolean>(false);

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100%",
      }}
    >
      <CombinedEarthGlobe
        ref={globeRef}
        globeImageUrl="https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        backgroundColor="rgba(0,0,0,0)"
        showAtmosphere={true}
        polygonsData={polygons}
        polygonCapColor={(d: PolygonData) => polygonProps.capColor(d)}
        polygonSideColor={(d: PolygonData) => polygonProps.sideColor(d)}
        polygonLabel={(d: PolygonData) => polygonProps.label(d)}
        onPolygonClick={(d: PolygonData) => polygonProps.onClick(d)}
        showFigures={showFigures}
        showBounds={showBounds}
      />
      <ControlsPanel
        showFigures={showFigures}
        toggleFigures={() => setShowFigures((f) => !f)}
        showBounds={showBounds}
        toggleBounds={() => setShowBounds((b) => !b)}
      />
    </div>
  );
}
