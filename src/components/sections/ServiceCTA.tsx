"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShinyButton } from "@/components/ui/shiny-button";
import { BackgroundBeams } from "@/components/ui/background-beams";

interface ServiceCTAProps {
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
}

export function ServiceCTA({
  title,
  description,
  ctaText,
  ctaHref,
}: ServiceCTAProps) {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      <BackgroundBeams className="opacity-30" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-neutral-400 mb-10">{description}</p>
          <Link href={ctaHref}>
            <ShinyButton className="px-10 py-5 text-lg">{ctaText}</ShinyButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
