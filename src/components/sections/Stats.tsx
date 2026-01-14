"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { IconRocket, IconClick, IconClock, IconTrendingUp } from "@tabler/icons-react";

const stats = [
  {
    value: 500,
    suffix: "+",
    label: "Brands Launched",
    description: "Successful projects delivered",
    icon: IconRocket,
    color: "blue"
  },
  {
    value: 1,
    suffix: "M+",
    label: "Clicks Generated",
    description: "Driving real traffic worldwide",
    icon: IconClick,
    color: "purple"
  },
  {
    value: 80,
    suffix: "%",
    label: "Launch in 3 Months",
    description: "Fast turnaround guaranteed",
    icon: IconClock,
    color: "cyan"
  },
  {
    value: 95,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Happy clients, real results",
    icon: IconTrendingUp,
    color: "green"
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string; gradient: string }> = {
  blue: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/20", gradient: "from-blue-500 to-cyan-500" },
  purple: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/20", gradient: "from-purple-500 to-pink-500" },
  cyan: { bg: "bg-cyan-500/10", text: "text-cyan-400", border: "border-cyan-500/20", gradient: "from-cyan-500 to-blue-500" },
  green: { bg: "bg-green-500/10", text: "text-green-400", border: "border-green-500/20", gradient: "from-green-500 to-emerald-500" },
};

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export function Stats() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Subtle gradient line at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 border border-blue-500/20 backdrop-blur-sm mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Our Impact
          </motion.span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Results That{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Speak
            </span>
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            We serve creators, startups, and businesses aiming to scale confidently.
            Here&apos;s what we&apos;ve achieved together.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const colors = colorClasses[stat.color];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className={`relative p-8 rounded-3xl bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border ${colors.border} hover:border-opacity-50 transition-all duration-500 overflow-hidden h-full`}>
                  {/* Hover gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className={`w-6 h-6 ${colors.text}`} />
                  </div>

                  {/* Number */}
                  <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent mb-2`}>
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  </div>

                  {/* Label */}
                  <div className="text-white font-semibold mb-2">{stat.label}</div>

                  {/* Description */}
                  <div className="text-sm text-neutral-500">{stat.description}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
