"use client";

import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const solutions = [
  {
    title: "Web Design",
    subtitle: "High-performance, conversion-focused websites built for growth.",
    image: "/images/webdev.jpg",
  },
  {
    title: "SEO Strategy",
    subtitle: "Data-driven optimization that puts you at the top of search results.",
    image: "/images/seo.jpg",
  },
  {
    title: "Digital Advertising",
    subtitle: "Targeted ad campaigns across Google and social that deliver real ROI.",
    image: "/images/ads.jpg",
  },
  {
    title: "Brand Identity",
    subtitle: "Logos, voice, and visual systems that make your brand unforgettable.",
    image: "/images/branding.jpg",
  },
];

// Duplicate for seamless infinite scroll
const duplicatedSolutions = [...solutions, ...solutions];

export function AllInOneSolution() {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const [cardWidth, setCardWidth] = useState(320);

  useEffect(() => {
    // Calculate card width based on screen size
    const updateCardWidth = () => {
      if (window.innerWidth >= 1024) {
        setCardWidth(280);
      } else if (window.innerWidth >= 768) {
        setCardWidth(250);
      } else {
        setCardWidth(220);
      }
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  const totalWidth = cardWidth * solutions.length + (solutions.length * 24); // cards + gaps

  useEffect(() => {
    if (isPaused) {
      controls.stop();
    } else {
      controls.start({
        x: -totalWidth,
        transition: {
          duration: 25,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    }
  }, [isPaused, controls, totalWidth]);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            All-in-One Solution
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl">
            Everything your brand needs — from strategy and design to SEO and digital advertising.
          </p>
        </motion.div>
      </div>

      {/* Carousel Container - Constrained width */}
      <div className="relative max-w-7xl mx-auto px-6">
        <div
          ref={containerRef}
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Gradient Overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          {/* Animated Track */}
          <motion.div
            className="flex gap-6"
            animate={controls}
            initial={{ x: 0 }}
          >
            {duplicatedSolutions.map((solution, index) => (
              <motion.div
                key={`${solution.title}-${index}`}
                className="group relative flex-shrink-0"
                style={{ width: cardWidth }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-[450px] md:h-[520px] rounded-2xl overflow-hidden bg-neutral-900">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <p className="text-xs md:text-sm text-neutral-300 mb-2">
                      {solution.subtitle}
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {solution.title}
                    </h3>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-white/30 transition-colors duration-500" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
