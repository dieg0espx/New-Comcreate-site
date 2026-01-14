"use client";

import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";

export function ContactHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-black pt-32">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="blue" />

      <div className="absolute inset-0 w-full h-full bg-black bg-grid-white/[0.02] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
            Get In Touch
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
        >
          Let&apos;s Start Your Project
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto"
        >
          Ready to transform your digital presence? Get a free 30-minute
          consultation with our team.
        </motion.p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
