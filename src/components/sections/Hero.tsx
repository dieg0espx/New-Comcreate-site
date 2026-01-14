"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ShinyButton } from "@/components/ui/shiny-button";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const rotatingTexts = [
  "next-gen Digital Power",
  "cutting-edge Web Design",
  "data-driven SEO Growth",
  "high-impact Ad Campaigns",
];

interface AstronautPath {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  rotation: number;
  duration: number;
}

function generatePath(): AstronautPath {
  // Fully random start position (can be anywhere outside the viewport)
  const startSide = Math.random();
  let startX: number, startY: number;

  if (startSide < 0.25) {
    // From top
    startX = Math.random() * 100;
    startY = -25;
  } else if (startSide < 0.5) {
    // From right
    startX = 125;
    startY = Math.random() * 100;
  } else if (startSide < 0.75) {
    // From bottom
    startX = Math.random() * 100;
    startY = 125;
  } else {
    // From left
    startX = -25;
    startY = Math.random() * 100;
  }

  // Random end position (completely random direction)
  const endSide = Math.random();
  let endX: number, endY: number;

  if (endSide < 0.25) {
    endX = Math.random() * 100;
    endY = -25;
  } else if (endSide < 0.5) {
    endX = 125;
    endY = Math.random() * 100;
  } else if (endSide < 0.75) {
    endX = Math.random() * 100;
    endY = 125;
  } else {
    endX = -25;
    endY = Math.random() * 100;
  }

  return {
    startX,
    startY,
    endX,
    endY,
    rotation: Math.random() * 540 - 270, // -270 to 270 degrees
    duration: 15 + Math.random() * 10, // 15-25 seconds
  };
}

function FloatingAstronaut() {
  const [path, setPath] = useState<AstronautPath | null>(null);
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Initial spawn after delay
    const timeout = setTimeout(() => {
      setPath(generatePath());
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  const handleComplete = () => {
    // Wait a bit before spawning again with new random path
    setTimeout(() => {
      setPath(generatePath());
      setKey((prev) => prev + 1);
    }, 5000 + Math.random() * 5000); // Wait 5-10 seconds before respawning
  };

  if (!path) return null;

  return (
    <motion.div
      key={key}
      className="absolute pointer-events-none z-20 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[280px] md:h-[280px] lg:w-[350px] lg:h-[350px]"
      initial={{
        left: `${path.startX}%`,
        top: `${path.startY}%`,
        rotate: 0,
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        left: `${path.endX}%`,
        top: `${path.endY}%`,
        rotate: path.rotation,
        opacity: [0, 1, 1, 1, 0],
        scale: [0.8, 1, 1, 1, 0.8],
      }}
      transition={{
        duration: path.duration,
        ease: "linear",
        opacity: {
          times: [0, 0.1, 0.5, 0.9, 1],
          duration: path.duration,
        },
        scale: {
          times: [0, 0.1, 0.5, 0.9, 1],
          duration: path.duration,
        },
      }}
      onAnimationComplete={handleComplete}
    >
      <Image
        src="/images/astronaut.png"
        alt="Floating astronaut"
        width={350}
        height={350}
        className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(96,165,250,0.5)] md:drop-shadow-[0_0_60px_rgba(96,165,250,0.7)]"
      />
    </motion.div>
  );
}

export function Hero() {
  const [textIndex, setTextIndex] = useState(0);

  // Rotate text every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Single Floating Astronaut */}
      <FloatingAstronaut />

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-2"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.1]">
            Ignite your brand with
          </h1>
          <div className="relative flex items-center justify-center overflow-visible -mt-2">
            <AnimatePresence mode="wait">
              <motion.span
                key={textIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent leading-tight"
              >
                {rotatingTexts[textIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

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
