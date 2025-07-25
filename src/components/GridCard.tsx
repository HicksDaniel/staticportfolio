import type { ReactNode, ComponentType } from "react";
import { clsx } from "clsx";

export default function GridCard({
  cHeight,
  cWidth,
  comp: Component,
  cursor,
  children,
}: {
  cHeight: number;
  cWidth: number;
  comp?: ComponentType<{}>;
  cursor?: string;
  children?: any;
}) {
  const className = clsx(
    `p-6`,
    `border-brdr-primary`,
    `border-4`,
    `rounded-xl`,
    `transition-colors`,
    `duration-2000`,
    `hover:duration-100`,
    `hover:border-primary`,
    `ease-out`,
    `bg-surface`,
    `lg:row-span-${cHeight}`,
    `lg:col-span-${cWidth}`,
    `cursor-${cursor ?? "default"}`,
    `overflow-hidden`,
    "lg:overflow-x-hidden",
    "lg:overflow-y-auto",
  );

  return (
    <div className={className}>
      {Component ? <Component /> : (children ?? null)}
    </div>
  );
}
