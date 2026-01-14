"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  IconRocket,
  IconChartLine,
  IconTargetArrow,
  IconHeadset,
  IconSparkles,
  IconSettings,
} from "@tabler/icons-react";
import { Ripple } from "@/components/ui/ripple";

const features = [
  {
    icon: IconRocket,
    title: "High-Performance Websites",
    description:
      "Speed, design, and UX — everything optimized to convert visitors into loyal clients.",
    color: "blue",
    gradient: "from-blue-500 to-cyan-500",
    stat: "3x",
    statLabel: "Faster Load Times",
  },
  {
    icon: IconChartLine,
    title: "Data-Driven SEO",
    description:
      "From keywords to backlinks, we engineer visibility that grows with your brand.",
    color: "green",
    gradient: "from-green-500 to-emerald-500",
    stat: "200%",
    statLabel: "Traffic Increase",
  },
  {
    icon: IconTargetArrow,
    title: "Scalable Ad Campaigns",
    description:
      "Whether you're starting small or scaling big, our ad systems flex to your goals.",
    color: "purple",
    gradient: "from-purple-500 to-pink-500",
    stat: "5x",
    statLabel: "ROAS Average",
  },
  {
    icon: IconHeadset,
    title: "Real Human Support",
    description:
      "Our experts are with you at every step — strategy, execution, and growth tracking.",
    color: "orange",
    gradient: "from-orange-500 to-red-500",
    stat: "24/7",
    statLabel: "Support Available",
  },
  {
    icon: IconSparkles,
    title: "Unlimited Creative Potential",
    description:
      "Custom design, bold branding, and storytelling that makes your business unforgettable.",
    color: "pink",
    gradient: "from-pink-500 to-rose-500",
    stat: "100%",
    statLabel: "Custom Designs",
  },
  {
    icon: IconSettings,
    title: "Free Setup & Optimization",
    description:
      "We don't just launch. We launch right — optimized, branded, and ready to perform.",
    color: "cyan",
    gradient: "from-cyan-500 to-blue-500",
    stat: "$0",
    statLabel: "Setup Fees",
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string; glow: string }> = {
  blue: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/20", glow: "group-hover:shadow-blue-500/20" },
  green: { bg: "bg-green-500/10", text: "text-green-400", border: "border-green-500/20", glow: "group-hover:shadow-green-500/20" },
  purple: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/20", glow: "group-hover:shadow-purple-500/20" },
  orange: { bg: "bg-orange-500/10", text: "text-orange-400", border: "border-orange-500/20", glow: "group-hover:shadow-orange-500/20" },
  pink: { bg: "bg-pink-500/10", text: "text-pink-400", border: "border-pink-500/20", glow: "group-hover:shadow-pink-500/20" },
  cyan: { bg: "bg-cyan-500/10", text: "text-cyan-400", border: "border-cyan-500/20", glow: "group-hover:shadow-cyan-500/20" },
};

export function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Background Ripple Effect */}
      <Ripple
        mainCircleSize={300}
        mainCircleOpacity={0.15}
        numCircles={10}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
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
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 border border-blue-500/20 backdrop-blur-sm mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Why Choose Us
          </motion.span>

          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Everything you need to
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              dominate online
            </span>
          </h2>

          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            We combine cutting-edge technology with proven strategies to deliver results that matter
          </p>
        </motion.div>

        {/* Features Grid - Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const colors = colorClasses[feature.color];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative p-8 rounded-3xl bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 border border-white/5 hover:border-white/10 transition-all duration-500 backdrop-blur-sm overflow-hidden ${colors.glow} hover:shadow-2xl`}
              >
                {/* Hover gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Animated border on hover */}
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="featureHighlight"
                    className={`absolute inset-0 rounded-3xl border-2 ${colors.border}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon and Stat Row */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`h-16 w-16 rounded-2xl ${colors.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border ${colors.border}`}>
                      <feature.icon className={`h-8 w-8 ${colors.text}`} />
                    </div>

                    {/* Stat Badge */}
                    <div className="text-right">
                      <div className={`text-2xl font-bold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                        {feature.stat}
                      </div>
                      <div className="text-xs text-neutral-500 uppercase tracking-wider">
                        {feature.statLabel}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-300 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-neutral-500 text-sm">
            Ready to transform your digital presence?{" "}
            <a href="/contact" className="text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors">
              Let&apos;s talk
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
