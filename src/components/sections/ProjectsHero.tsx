"use client";

import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { SparklesCore } from "@/components/ui/sparkles";

export function ProjectsHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-black pt-32">
      {/* Multiple Spotlights */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#3b82f6" />
      <Spotlight className="-top-40 right-0 md:right-60 md:-top-20" fill="#8b5cf6" />

      {/* Grid Background */}
      <div className="absolute inset-0 w-full h-full bg-black bg-grid-white/[0.03] pointer-events-none" />

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 border border-blue-500/20 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Our Portfolio
          </span>
        </motion.div>

        {/* Main Heading with Gradient */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
              Digital
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Excellence
            </span>
          </h1>
        </motion.div>

        {/* Subtitle with Text Generate Effect */}
        <div className="max-w-3xl mx-auto mb-12">
          <TextGenerateEffect
            words="Transforming businesses through innovative web solutions that drive measurable results and exceptional experiences"
            className="text-xl md:text-2xl text-neutral-300 font-light leading-relaxed"
            duration={0.4}
          />
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative group p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300"
          >
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent mb-2">
              15+
            </div>
            <div className="text-neutral-400 text-sm">Industries Served</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="relative group p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300"
          >
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent mb-2">
              $300K+
            </div>
            <div className="text-neutral-400 text-sm">Revenue Generated</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="relative group p-6 rounded-2xl bg-gradient-to-br from-pink-500/10 to-pink-600/5 border border-pink-500/20 backdrop-blur-sm hover:border-pink-500/40 transition-all duration-300"
          >
            <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-pink-300 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <div className="text-neutral-400 text-sm">Client Satisfaction</div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Sparkles */}
      <div className="absolute bottom-0 left-0 right-0 h-60 overflow-hidden">
        <SparklesCore
          particleDensity={30}
          particleColor="#8b5cf6"
          className="w-full h-full"
        />
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
