"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";

export function CTA() {
  return (
    <section className="relative py-32 bg-black">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
        >
          Let&apos;s build something{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            great together
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-neutral-400 mb-10 max-w-xl mx-auto"
        >
          Ready to take your business to the next level? Get in touch and let&apos;s discuss your project.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-neutral-200 transition-colors group"
          >
            Start a Project
            <IconArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Simple contact info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-neutral-500"
        >
          <a href="mailto:sales@comcreate.org" className="hover:text-white transition-colors">
            sales@comcreate.org
          </a>
          <span className="hidden sm:block">·</span>
          <a href="tel:6199550105" className="hover:text-white transition-colors">
            (619) 955-0105
          </a>
        </motion.div>
      </div>
    </section>
  );
}
