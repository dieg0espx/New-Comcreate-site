"use client";

import { cn } from "@/lib/utils";
import React from "react";

export function BackgroundBeams({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden",
        className
      )}
    >
      <svg
        className="absolute z-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.3)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
          </linearGradient>
        </defs>
        {[...Array(6)].map((_, i) => (
          <line
            key={i}
            x1={`${i * 20}%`}
            y1="0%"
            x2={`${i * 20 + 50}%`}
            y2="100%"
            stroke="url(#beamGradient)"
            strokeWidth="1"
            className="animate-pulse"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
    </div>
  );
}
