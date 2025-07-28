import type { ComponentType, ReactNode } from "react";
import { clsx } from "clsx";

export default function GridCard({
  index,
  cHeight,
  cWidth,
  comp: Component,
  cursor,
  nav,
  url,
  label,
  children,
}: {
  index?: number;
  cHeight?: number;
  cWidth?: number;
  comp?: ComponentType<{ label: string }>;
  cursor?: string;
  nav?: string;
  url?: string;
  label?: string;
  children?: ReactNode;
}) {
  const className = clsx(
    `bg-surface`,
    `opacity-0`,
    `animate-fade-in-up`,
    `flex`,
    `flex-col`,
    `text-base font-semibold`,
    `tracking-wide`,
    `justify-center`,
    `p-4`,
    `border-brdr-primary`,
    `border-2`,
    `rounded-md`,
    `transition-shadow`,
    `shadow-[0px_0px_0px_0px_var(--color-primary)]`,
    `duration-3000`,
    `hover:duration-300`,
    `hover:border-primary`,
    `hover:shadow-[0px_0px_5px_2px_var(--color-primary)]`,
    `w-full`,
    cHeight ? `lg:row-span-${cHeight}` : "",
    cWidth ? `lg:col-span-${cWidth}` : "",
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

  if (!index || !label) return null;

  return (
    <div
      className={`${className}`}
      onClick={handleNavigation}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {Component ? <Component label={label} /> : (children ?? null)}
    </div>
  );
}
