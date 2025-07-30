import React from "react";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import type { ControlsPanelProps } from "../libs/types";

export const ControlsPanel: React.FC<ControlsPanelProps> = ({
  showFigures,
  toggleFigures,
  showBounds,
  toggleBounds,
}) => {
  const navigate = useNavigate();
  return (
    <div style={{ position: "absolute", top: 10, left: 50, zIndex: 1000 }}>
      <Button
        className="btn animate-fade-in-up gap-2"
        label=""
        icon="pi pi-arrow-left"
        onClick={() => navigate(-1)}
      >
        Go Back
      </Button>
      <Button
        className="btn animate-fade-in-up gap-3"
        label={showFigures ? "Hide Figures" : "Show Figures"}
        icon="pi pi-box"
        onClick={toggleFigures}
      />

      <Button
        className="btn animate-fade-in-up gap-3"
        label={showBounds ? "Hide Bounds" : "Show Bounds"}
        icon="pi pi-box"
        onClick={toggleBounds}
      />
    </div>
  );
};
