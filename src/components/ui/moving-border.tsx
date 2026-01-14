"use client";

import React from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface MovingBorderProps {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  className?: string;
  containerClassName?: string;
  borderClassName?: string;
  as?: "button" | "div" | "a" | "span";
  onClick?: () => void;
  href?: string;
}

export function MovingBorder({
  children,
  duration = 2000,
  rx = "30%",
  ry = "30%",
  className,
  containerClassName,
  borderClassName,
  as = "button",
  onClick,
  href,
}: MovingBorderProps) {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMs = length / duration;
      progress.set((time * pxPerMs) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x ?? 0
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y ?? 0
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  const wrapperClassName = cn(
    "relative text-xl h-16 w-40 p-[1px] overflow-hidden bg-transparent",
    containerClassName
  );

  const innerContent = (
    <>
      <div
        className="absolute inset-0"
        style={{ borderRadius: "inherit" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="absolute h-full w-full"
          width="100%"
          height="100%"
        >
          <rect
            fill="none"
            width="100%"
            height="100%"
            rx={rx}
            ry={ry}
            ref={pathRef}
          />
        </svg>
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            display: "inline-block",
            transform,
          }}
        >
          <div
            className={cn(
              "h-20 w-20 opacity-[0.8] bg-[radial-gradient(#3b82f6_40%,transparent_60%)]",
              borderClassName
            )}
          />
        </motion.div>
      </div>
      <div
        className={cn(
          "relative bg-neutral-900 border border-neutral-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased",
          className
        )}
        style={{ borderRadius: "calc(30% - 1px)" }}
      >
        {children}
      </div>
    </>
  );

  if (as === "a" && href) {
    return (
      <a href={href} className={wrapperClassName}>
        {innerContent}
      </a>
    );
  }

  if (as === "div") {
    return (
      <div className={wrapperClassName} onClick={onClick}>
        {innerContent}
      </div>
    );
  }

  if (as === "span") {
    return (
      <span className={wrapperClassName} onClick={onClick}>
        {innerContent}
      </span>
    );
  }

  return (
    <button className={wrapperClassName} onClick={onClick}>
      {innerContent}
    </button>
  );
}
