"use client";

import { cn } from "@/lib/utils";

export function GridBackground({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative w-full bg-black bg-grid-white/[0.03]",
        className
      )}
    >
      {/* Radial gradient for faded look */}
      <div className="absolute pointer-events-none inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {children}
    </div>
  );
}

export function DotBackground({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative w-full bg-black bg-dot-white/[0.2]",
        className
      )}
    >
      <div className="absolute pointer-events-none inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {children}
    </div>
  );
}
