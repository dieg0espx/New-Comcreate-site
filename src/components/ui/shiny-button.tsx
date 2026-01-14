"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ShinyButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export function ShinyButton({ children, className, onClick, disabled }: ShinyButtonProps) {
  return (
    <motion.button
      initial={{ "--x": "100%", scale: 0.8 } as never}
      animate={{ "--x": "-100%", scale: 1 } as never}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 200,
          damping: 5,
          mass: 0.5,
        },
      }}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "relative rounded-full px-8 py-4 font-medium backdrop-blur-xl transition-shadow duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]",
        disabled && "opacity-60 cursor-not-allowed",
        className
      )}
      style={{
        border: "1px solid rgba(255,255,255,0.1)",
        background: "linear-gradient(180deg, rgba(60,60,60,1) 0%, rgba(20,20,20,1) 100%)",
      }}
    >
      <span
        className="relative inline-flex items-center justify-center text-base tracking-wide text-white whitespace-nowrap"
        style={{
          maskImage:
            "linear-gradient(-75deg, white calc(var(--x) + 20%), transparent calc(var(--x) + 30%), white calc(var(--x) + 100%))",
        }}
      >
        {children}
      </span>
      <span
        style={{
          mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box, linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          maskComposite: "exclude",
        }}
        className="absolute inset-0 z-10 block rounded-full bg-[linear-gradient(-75deg,rgba(255,255,255,0.1)_calc(var(--x)+20%),rgba(255,255,255,0.5)_calc(var(--x)+25%),rgba(255,255,255,0.1)_calc(var(--x)+100%))] p-px"
      />
    </motion.button>
  );
}
