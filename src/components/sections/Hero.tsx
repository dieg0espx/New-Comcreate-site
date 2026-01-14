"use client";

import { motion } from "framer-motion";
import { ShinyButton } from "@/components/ui/shiny-button";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Stars background */}
      <StarsBackground starDensity={0.0003} />

      {/* Shooting stars */}
      <ShootingStars
        minSpeed={15}
        maxSpeed={35}
        minDelay={1000}
        maxDelay={3000}
        starColor="#60a5fa"
        trailColor="#3b82f6"
        starWidth={15}
        starHeight={2}
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 backdrop-blur-sm">
            San Diego&apos;s Premier Digital Agency
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-2 tracking-tight leading-[1.1]"
        >
          Ignite your brand with
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            next-gen Digital Power
          </span>
        </motion.h1>

        {/* Text Hover Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-24 md:h-32 lg:h-40 w-full max-w-5xl mx-auto mb-4"
        >
          <TextHoverEffect text="Web • SEO • Ads" duration={0.15} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg text-neutral-400 mb-10"
        >
          Your business deserves more than clicks — it needs conversion, impact,
          and a digital edge. Work with the team rewriting what success looks like online.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/contact">
            <ShinyButton className="px-8 py-4 text-base">
              Get Started
            </ShinyButton>
          </Link>
          <a
            href="#services"
            className="px-8 py-4 text-base text-neutral-400 hover:text-white transition-colors"
          >
            Learn More →
          </a>
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
