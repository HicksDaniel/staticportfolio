import React from "react";

export default function LocalTime() {
  const time = new Date();
  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
    timeZoneName: "short",
  });

  return <div className="nixie-clock">{formattedTime}</div>;
}
