import type { ReactNode } from "react";
import { clsx } from "clsx";

export default function GridCard({
  cardHeight,
  cardWidth,
  children,
}: {
  cardHeight: string;
  cardWidth: string;
  children?: ReactNode;
}) {
  const className = clsx(
    `bg-primary`,
    `lg:row-span-${cardHeight}`,
    `lg:col-span-${cardWidth}`,
    "lg:overflow-x-hidden",
    "lg:overflow-y-auto",
  );

  return <div className={className}>GridCard</div>;
}
