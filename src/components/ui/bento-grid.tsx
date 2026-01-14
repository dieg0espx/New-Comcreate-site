"use client";

import { cn } from "@/lib/utils";

export function BentoGrid({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
}

export function BentoGridItem({
  className,
  title,
  description,
  header,
  icon,
  badge,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  badge?: string;
}) {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        "bg-gradient-to-br from-neutral-900 to-neutral-950 border-white/[0.1]",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {badge && (
          <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-blue-500/20 text-blue-400 mb-2">
            {badge}
          </span>
        )}
        <div className="flex items-center gap-2 mb-2">
          {icon}
          <div className="font-sans font-bold text-neutral-200">
            {title}
          </div>
        </div>
        <div className="font-sans font-normal text-neutral-400 text-sm">
          {description}
        </div>
      </div>
    </div>
  );
}
