"use client";

import { motion } from "framer-motion";
import { Globe } from "@/components/ui/globe";
import { IconRocket, IconClick, IconTrendingUp, IconUsers } from "@tabler/icons-react";

const stats = [
  {
    icon: IconRocket,
    value: "500+",
    label: "Brands Launched",
    color: "blue",
  },
  {
    icon: IconClick,
    value: "1M+",
    label: "Clicks Generated",
    color: "purple",
  },
  {
    icon: IconTrendingUp,
    value: "200%",
    label: "Avg. Growth Rate",
    color: "cyan",
  },
  {
    icon: IconUsers,
    value: "98%",
    label: "Client Retention",
    color: "green",
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
  blue: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/20" },
  purple: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/20" },
  cyan: { bg: "bg-cyan-500/10", text: "text-cyan-400", border: "border-cyan-500/20" },
  green: { bg: "bg-green-500/10", text: "text-green-400", border: "border-green-500/20" },
};

export function GlobeSection() {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Gradient overlay top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Globe with floating stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center order-2 lg:order-1"
          >
            <div className="relative">
              {/* Glow effect behind globe */}
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[100px]" />
              <Globe className="relative z-10" />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 border border-blue-500/20 backdrop-blur-sm mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Proven Results
            </motion.span>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Real growth tools for{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                real digital brands
              </span>
            </h2>
            <p className="text-lg text-neutral-400 mb-10">
              We don&apos;t just deliver services — we build results. From web to SEO
              to ads, Comcreate empowers creators, startups, and businesses to scale
              with confidence.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const colors = colorClasses[stat.color];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className={`group p-5 rounded-2xl ${colors.bg} border ${colors.border} hover:scale-105 transition-transform duration-300`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <stat.icon className={`w-5 h-5 ${colors.text}`} />
                      <span className={`text-2xl md:text-3xl font-bold ${colors.text}`}>
                        {stat.value}
                      </span>
                    </div>
                    <span className="text-sm text-neutral-400">{stat.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gradient overlay bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  );
}
