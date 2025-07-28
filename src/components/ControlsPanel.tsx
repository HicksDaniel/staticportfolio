import React from "react";

interface Props {
  showFigures: boolean;
  toggleFigures(): void;
  showBounds: boolean;
  toggleBounds(): void;
}

export const ControlsPanel: React.FC<Props> = ({
  showFigures,
  toggleFigures,
  showBounds,
  toggleBounds,
}) => (
  <div style={{ position: "absolute", top: 10, left: 10, zIndex: 1000 }}>
    <button
      onClick={toggleFigures}
      style={{ marginRight: 10, padding: "5px 10px" }}
    >
      {showFigures ? "Hide Figures" : "Show Figures"}
    </button>
    <button onClick={toggleBounds} style={{ padding: "5px 10px" }}>
      {showBounds ? "Hide Bounds" : "Show Bounds"}
    </button>
  </div>
);
