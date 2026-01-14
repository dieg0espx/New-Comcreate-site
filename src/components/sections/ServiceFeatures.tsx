"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Service {
  title: string;
  description: string;
  badge?: string;
}

interface ServiceFeaturesProps {
  title: string;
  description: string;
  services: Service[];
  columns?: 2 | 3 | 4;
}

export function ServiceFeatures({
  title,
  description,
  services,
  columns = 2,
}: ServiceFeaturesProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Dot background */}
      <div className="absolute inset-0 bg-dot-white/[0.2] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        <div className={cn("grid grid-cols-1 gap-6", gridCols[columns])}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-6 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/5 hover:border-blue-500/20 transition-colors overflow-hidden"
            >
              {service.badge && (
                <span className="relative inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-500/20 text-blue-400 mb-4">
                  {service.badge}
                </span>
              )}
              <h3 className="relative text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="relative text-neutral-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
