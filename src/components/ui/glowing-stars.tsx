"use client";

import React from "react";
import { cn } from "@/lib/utils";

export function GlowingStarsBackground({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animationDelay: Math.random() * 3 + "s",
              animationDuration: Math.random() * 3 + 2 + "s",
              opacity: Math.random() * 0.5 + 0.2,
            }}
          />
        ))}
      </div>
      {children}
    </div>
  );
}
