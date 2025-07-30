import * as THREE from "three";
import type { GlobeMethods } from "react-globe.gl";

export type EmailModalContentProps = {
  to: string;
  subject: string;
  body: string;
};

export interface GlobeRef extends GlobeMethods {
  scene: () => THREE.Scene;
  controls: () => any;
}

export interface PolygonData {
  properties: {
    name?: string;
    ADMIN?: string;
    [key: string]: unknown;
  };
  id?: string;
  [key: string]: unknown;
}

export interface CombinedGlobeCoreProps {
  polygons: PolygonData[];
}

export interface PolygonProps {
  capColor: (d: PolygonData) => string;
  sideColor: (d: PolygonData) => string;
  label: (d: PolygonData) => string;
  onClick: (d: PolygonData) => void;
}

export interface ControlsPanelProps {
  showFigures: boolean;
  toggleFigures(): void;
  showBounds: boolean;
  toggleBounds(): void;
}
