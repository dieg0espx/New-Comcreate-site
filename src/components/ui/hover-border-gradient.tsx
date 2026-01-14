"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

interface HoverBorderGradientProps {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
  as?: "button" | "div" | "a" | "span";
  duration?: number;
  clockwise?: boolean;
  onClick?: () => void;
  href?: string;
}

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as = "button",
  duration = 1,
  clockwise = true,
  onClick,
  href,
}: HoverBorderGradientProps) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = (currentDirection: Direction): Direction => {
    const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  const movingMap: Record<Direction, string> = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    BOTTOM:
      "radial-gradient(20.7% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
    RIGHT:
      "radial-gradient(16.2% 41.199999999999996% at 100% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
  };

  const highlight =
    "radial-gradient(75% 181.15942028985506% at 50% 50%, #3275F8 0%, rgba(255, 255, 255, 0) 100%)";

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered, duration]);

  const wrapperClassName = cn(
    "relative flex rounded-full border border-white/10 content-center bg-black/20 hover:bg-black/10 transition duration-500 items-center flex-col flex-nowrap h-min justify-center overflow-hidden p-px decoration-clone",
    containerClassName
  );

  const innerContent = (
    <>
      <div
        className={cn(
          "w-full text-white z-10 bg-black px-4 py-2 rounded-[inherit]",
          className
        )}
      >
        {children}
      </div>
      <motion.div
        className="flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
        style={{
          filter: "blur(2px)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: duration ?? 1 }}
      />
      <div className="bg-black absolute z-1 flex-none inset-[2px] rounded-[inherit]" />
    </>
  );

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  if (as === "a" && href) {
    return (
      <a
        href={href}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={wrapperClassName}
      >
        {innerContent}
      </a>
    );
  }

  if (as === "div") {
    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={wrapperClassName}
        onClick={onClick}
      >
        {innerContent}
      </div>
    );
  }

  if (as === "span") {
    return (
      <span
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={wrapperClassName}
        onClick={onClick}
      >
        {innerContent}
      </span>
    );
  }

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={wrapperClassName}
      onClick={onClick}
    >
      {innerContent}
    </button>
  );
}
