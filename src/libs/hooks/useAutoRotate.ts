import { useEffect } from "react";
import type { GlobeRef } from "../types";

export function useAutoRotate(
  globeElRef: React.RefObject<GlobeRef | undefined>,
) {
  useEffect(() => {
    const globe = globeElRef.current;
    if (!globe) return;
    const controls = globe.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.15;
    controls.enableDamping = true;
    controls.dampingFactor = 0.02;
    controls.panSpeed = 0.15;
    controls.zoomSpeed = 0.5;
    controls.update();
  }, [globeElRef]);
}
