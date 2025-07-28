// hooks/useAutoRotate.ts
import { useEffect } from "react";

export function useAutoRotate(globeElRef: React.RefObject<any>) {
  useEffect(() => {
    const globe = globeElRef.current;
    if (!globe) return;
    const controls = globe.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
  }, [globeElRef]);
}
