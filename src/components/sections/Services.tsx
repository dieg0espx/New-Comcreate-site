"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  IconWorld,
  IconChartBar,
  IconSpeakerphone,
  IconPalette,
  IconArrowRight,
} from "@tabler/icons-react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

const services = [
  {
    title: "Web Design",
    description:
      "Modern, responsive websites designed to engage and convert your audience.",
    icon: <IconWorld className="h-8 w-8" />,
    href: "/webdesign",
    colors: [[0, 149, 255], [59, 130, 246]],
    dotColor: "text-blue-400",
  },
  {
    title: "SEO Strategy",
    description:
      "Boost your visibility with strategies that drive organic traffic and long-term growth.",
    icon: <IconChartBar className="h-8 w-8" />,
    badge: "MOST POPULAR",
    href: "/seo",
    colors: [[34, 197, 94], [16, 185, 129]],
    dotColor: "text-green-400",
  },
  {
    title: "Digital Ads",
    description:
      "Targeted campaigns across Google and social platforms that deliver real results.",
    icon: <IconSpeakerphone className="h-8 w-8" />,
    href: "/ads",
    colors: [[168, 85, 247], [217, 70, 239]],
    dotColor: "text-purple-400",
  },
  {
    title: "Branding",
    description:
      "From logos to voice — build a brand identity that stands out and connects.",
    icon: <IconPalette className="h-8 w-8" />,
    badge: "BEST VALUE",
    href: "/branding",
    colors: [[249, 115, 22], [251, 146, 60]],
    dotColor: "text-orange-400",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 bg-black overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-black to-neutral-950" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            We don&apos;t just deliver services — we build results. Everything you need
            to scale confidently across web, SEO, and advertising.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: {
    title: string;
    description: string;
    icon: React.ReactNode;
    href: string;
    colors: number[][];
    dotColor: string;
    badge?: string;
  };
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="relative h-[320px] rounded-2xl bg-neutral-900 border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col">
        {/* Canvas Reveal Effect Background */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0"
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-transparent"
            colors={service.colors}
            dotSize={2}
            showGradient={false}
          />
        </motion.div>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500" />

        {/* Badge */}
        {service.badge && (
          <div className="absolute top-4 right-4 z-20">
            <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-white/10 text-white/80 backdrop-blur-sm border border-white/10">
              {service.badge}
            </span>
          </div>
        )}

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full p-6">
          {/* Icon with animated background */}
          <div className="relative mb-5">
            <motion.div
              animate={{
                scale: isHovered ? 1.1 : 1,
                rotate: isHovered ? 5 : 0,
              }}
              transition={{ duration: 0.3 }}
              className={`w-16 h-16 rounded-xl bg-white/5 backdrop-blur-sm flex items-center justify-center border border-white/10 ${service.dotColor}`}
            >
              {service.icon}
            </motion.div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-grow group-hover:text-neutral-300 transition-colors">
            {service.description}
          </p>

          {/* Learn More Link */}
          <Link
            href={service.href}
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors group/link"
          >
            Learn more
            <IconArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Bottom gradient line on hover */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-0 left-0 right-0 h-1 origin-left"
          style={{
            background: `linear-gradient(to right, rgb(${service.colors[0].join(",")}), rgb(${service.colors[1].join(",")}))`,
          }}
        />
      </div>
    </motion.div>
  );
}
