import type { ReactNode } from "react";
import { clsx } from "clsx";

interface GridCardProps {
  index?: number;
  lgHeight?: number;
  lgWidth?: number;
  mdHeight?: number;
  mdWidth?: number;
  comp?: React.ComponentType<any>;
  label?: string;
  cursor?: string;
  nav?: string;
  url?: string;
  children?: ReactNode;
}

export default function GridCard({
  index,
  lgHeight,
  lgWidth,
  mdHeight,
  mdWidth,
  comp: Component,
  cursor,
  nav,
  url,
  label,
  children,
}: GridCardProps) {
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
    lgHeight ? `lg:row-span-${lgHeight}` : "",
    lgWidth ? `lg:col-span-${lgWidth}` : "",
    mdHeight ? `md:row-span-${mdHeight}` : "",
    mdWidth ? `md:col-span-${mdWidth}` : "",
    `cursor-${cursor ?? "default"}`,
  );

  const handleNavigation = () => {
    if (nav) {
      window.location.href = nav;
    } else if (url) {
      window.open(url, "_blank");
    }
  };

  const compLabel = label || "";

  if (!index) return null;

  return (
    <div
      className={`${className}`}
      onClick={handleNavigation}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {Component ? <Component label={compLabel} /> : (children ?? null)}
    </div>
  );
}
