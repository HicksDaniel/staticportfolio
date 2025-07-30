// components/CombinedGlobeCore.tsx
import { useRef, useState } from "react";
import Globe from "react-globe.gl";
import { useAutoRotate } from "../libs/hooks/useAutoRotate";
import { useConstOverlay } from "../libs/hooks/useConstOverlay";
import { usePolygonProps } from "../libs/hooks/usePolygonProps";
import { ControlsPanel } from "./ControlsPanel";
import type {
  CombinedGlobeCoreProps,
  GlobeRef,
  PolygonData,
} from "../libs/types";

export function CombinedGlobeCore({ polygons }: CombinedGlobeCoreProps) {
  const globeRef = useRef<GlobeRef>(undefined);
  const [showFigures, setShowFigures] = useState<boolean>(false);
  const [showBounds, setShowBounds] = useState<boolean>(false);
  useAutoRotate(globeRef);
  useConstOverlay(globeRef, showFigures, showBounds);
  const polyProps = usePolygonProps();

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100%",
      }}
    >
      <ControlsPanel
        showFigures={showFigures}
        toggleFigures={() => setShowFigures((f) => !f)}
        showBounds={showBounds}
        toggleBounds={() => setShowBounds((b) => !b)}
      />
      <Globe
        ref={globeRef}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        backgroundColor="rgba(0,0,0,0)"
        showAtmosphere={true}
        polygonsData={polygons}
        polygonCapColor={(d) => polyProps.capColor(d as PolygonData)}
        polygonSideColor={(d) => polyProps.sideColor(d as PolygonData)}
        polygonLabel={(d) => polyProps.label(d as PolygonData)}
        onPolygonClick={(d) => polyProps.onClick(d as PolygonData)}
      />
    </div>
  );
}
