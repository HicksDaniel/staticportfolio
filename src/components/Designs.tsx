import React from "react";
import GridCard from "./GridCard";

export default function Designs() {
  return (
    <div className="max-h-[200px] w-screen max-w-2xl grid-cols-1 grid-rows-2 flex-col items-center self-center">
      <GridCard cHeight={2} cWidth={3}>
        Design Page
      </GridCard>
      <GridCard cHeight={1} cWidth={3}>
        Page is Under Construction...
      </GridCard>
    </div>
  );
}
