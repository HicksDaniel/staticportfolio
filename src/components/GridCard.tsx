import type { ReactNode, ComponentType } from "react";
import { clsx } from "clsx";
import { useNavigate } from "react-router";

export default function GridCard({
  cHeight,
  cWidth,
  comp: Component,
  cursor,
  nav,
  children,
}: {
  cHeight: number;
  cWidth: number;
  comp?: ComponentType<{}>;
  cursor?: string;
  nav?: string;
  children?: any;
}) {
  const navigate = useNavigate();

  const className = clsx(
    `p-6`,
    `border-brdr-primary`,
    `border-4`,
    `rounded-xl`,
    `transition-shadow-colors`,
    `shadow-[0px_0px_0px_0px_var(--color-primary)]`,
    `duration-2000`,
    `hover:duration-200`,
    `hover:border-primary`,
    `hover:shadow-[0px_0px_5px_2px_var(--color-primary)]`,
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
    <div className={className} onClick={() => navigate(nav)}>
      {Component ? <Component /> : (children ?? null)}
    </div>
  );
}
