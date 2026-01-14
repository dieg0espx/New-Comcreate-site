"use client";

import { cn } from "@/lib/utils";
import React, { useMemo } from "react";

export function Meteors({
  number = 20,
  className,
}: {
  number?: number;
  className?: string;
}) {
  const meteors = useMemo(() => {
    return new Array(number).fill(true).map((_, idx) => ({
      id: idx,
      left: Math.floor(Math.random() * 100) + "%",
      top: Math.floor(Math.random() * 50) - 10 + "%",
      animationDelay: Math.random() * 2 + "s",
      animationDuration: Math.floor(Math.random() * 8 + 4) + "s",
    }));
  }, [number]);

  return (
    <>
      {meteors.map((meteor) => (
        <span
          key={"meteor" + meteor.id}
          className={cn(
            "animate-meteor-effect absolute h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
            className
          )}
          style={{
            top: meteor.top,
            left: meteor.left,
            animationDelay: meteor.animationDelay,
            animationDuration: meteor.animationDuration,
          }}
        />
      ))}
    </>
  );
}
