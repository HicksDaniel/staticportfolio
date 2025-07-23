import type { ReactNode, ComponentType } from "react";
import { clsx } from "clsx";

export default function GridCard({
  cardHeight,
  cardWidth,
  component: Component,
  children,
}: {
  cardHeight: number;
  cardWidth: number;
  component?: ComponentType<{}>;
  children?: any;
}) {
  const className = clsx(
    `p-6`,
    `border-brdr-primary`,
    `border-3`,
    `rounded-xl`,
    `transition-colors`,
    `duration-2000`,
    `hover:duration-100`,
    `hover:border-primary`,
    `ease-out`,
    `bg-surface`,
    `lg:row-span-${cardHeight}`,
    `lg:col-span-${cardWidth}`,
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
