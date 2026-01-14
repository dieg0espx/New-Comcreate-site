"use client";

import { motion } from "framer-motion";

interface Step {
  step: string;
  title: string;
  description: string;
}

interface ServiceProcessProps {
  steps: Step[];
}

export function ServiceProcess({ steps }: ServiceProcessProps) {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-white/[0.03]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Process
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            A proven approach that delivers results every time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="text-6xl font-bold text-blue-500/20 mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-neutral-400">{item.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-blue-500/20 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
