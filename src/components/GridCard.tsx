import type { ReactNode, ComponentType } from "react";
import { clsx } from "clsx";
import { useNavigate } from "react-router";

export default function GridCard({
  cHeight,
  cWidth,
  comp: Component,
  cursor,
  nav,
  url,
  label,
  children,
}: {
  cHeight: number;
  cWidth: number;
  comp?: ComponentType<{}>;
  cursor?: string;
  nav?: string;
  url?: string;
  label?: string;
  children?: any;
}) {
  const className = clsx(
    `flex`,
    `flex-col`,
    `text-xl font-semibold`,
    `tracking-wider`,
    `justify-center`,
    `p-5`,
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

  const handleNavigation = () => {
    if (nav) {
      window.location.href = nav;
    } else if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <div className={className} onClick={handleNavigation}>
      {Component ? <Component label={label} /> : (children ?? null)}
    </div>
  );
}
