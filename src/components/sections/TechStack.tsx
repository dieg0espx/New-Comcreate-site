"use client";

import { motion } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";

interface TechStackProps {
  technologies: string[];
}

export function TechStack({ technologies }: TechStackProps) {
  return (
    <section className="relative py-16 bg-black border-y border-white/5 overflow-hidden">
      {/* Sparkles background */}
      <div className="absolute inset-0">
        <SparklesCore
          particleDensity={30}
          particleColor="#60a5fa"
          className="w-full h-full"
        />
      </div>
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {technologies.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="px-4 py-2 rounded-full text-sm font-medium bg-neutral-900 text-neutral-400 border border-white/5"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
