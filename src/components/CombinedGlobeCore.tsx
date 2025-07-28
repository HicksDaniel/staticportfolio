// components/CombinedGlobeCore.tsx
import React, { useRef, useState } from "react";
import Globe from "react-globe.gl";
import { useAutoRotate } from "../libs/hooks/useAutoRotate";
import { useConstOverlay } from "../libs/hooks/useConstOverlay";
import { usePolygonProps } from "../libs/hooks/usePolygonProps";
import { ControlsPanel } from "./ControlsPanel";
import type { PolygonData } from "../libs/hooks/useGlobePolygons";

interface GlobeRef {
  scene(): any;
  controls(): any;
}

interface CombinedGlobeCoreProps {
  polygons: PolygonData[];
}

export function CombinedGlobeCore({
  polygons,
}: CombinedGlobeCoreProps): JSX.Element {
  console.log("CombinedGlobeCore rendering with polygons:", polygons);
  const globeRef = useRef<GlobeRef>(null);
  const [showFigures, setShowFigures] = useState<boolean>(false);
  const [showBounds, setShowBounds] = useState<boolean>(false);

  useAutoRotate(globeRef);
  console.log("About to call useConstOverlay");
  useConstOverlay(globeRef, showFigures, showBounds);
  console.log("useConstOverlay called");
  const polyProps = usePolygonProps();
  console.log(polyProps);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
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
        polygonCapColor={polyProps.capColor}
        polygonSideColor={polyProps.sideColor}
        polygonLabel={polyProps.label}
        onPolygonClick={polyProps.onClick}
      />
    </div>
  );
}
