"use client";
import React, { useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail?: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product, idx) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
              index={idx}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product, idx) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
              index={idx + 5}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product, idx) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
              index={idx + 10}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 border border-blue-500/20 backdrop-blur-sm mb-6"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        Our Portfolio
      </motion.span>
      <h1 className="text-4xl md:text-7xl font-bold text-white">
        Projects That{" "}
        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Deliver Results
        </span>
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 text-neutral-400">
        From startups to established brands, we&apos;ve helped businesses across
        industries build stunning digital experiences that convert visitors into customers.
      </p>
      <div className="mt-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
        >
          View all projects
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

const gradients = [
  "from-blue-600 via-blue-500 to-cyan-500",
  "from-purple-600 via-purple-500 to-pink-500",
  "from-green-600 via-green-500 to-emerald-500",
  "from-orange-600 via-orange-500 to-amber-500",
  "from-rose-600 via-rose-500 to-pink-500",
  "from-indigo-600 via-indigo-500 to-purple-500",
  "from-cyan-600 via-cyan-500 to-blue-500",
  "from-amber-600 via-amber-500 to-yellow-500",
];

export const ProductCard = ({
  product,
  translate,
  index = 0,
}: {
  product: {
    title: string;
    link: string;
    thumbnail?: string;
  };
  translate: MotionValue<number>;
  index?: number;
}) => {
  const [iframeError, setIframeError] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const gradient = gradients[index % gradients.length];

  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      key={product.title}
      className="group/product h-96 w-[30rem] relative shrink-0 rounded-xl overflow-hidden border border-white/10"
    >
      {/* Thumbnail image if provided */}
      {product.thumbnail && (
        <Image
          src={product.thumbnail}
          height={600}
          width={600}
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      )}

      {/* Iframe for live preview - only if no thumbnail */}
      {!product.thumbnail && !iframeError && (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div
            className="w-full h-full transition-transform duration-[3s] ease-in-out"
            style={{
              transform: isHovered ? "translateY(-400px)" : "translateY(0px)",
            }}
          >
            <iframe
              src={product.link}
              className={`w-[200%] h-[200%] origin-top-left scale-50 pointer-events-none transition-opacity duration-500 ${
                iframeLoaded ? "opacity-100" : "opacity-0"
              }`}
              title={product.title}
              loading="lazy"
              sandbox="allow-scripts allow-same-origin"
              onLoad={() => setIframeLoaded(true)}
              onError={() => setIframeError(true)}
            />
          </div>
          {/* Loading state */}
          {!iframeLoaded && (
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-80 flex items-center justify-center`}>
              <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            </div>
          )}
        </div>
      )}

      {/* Fallback gradient card if iframe fails or no thumbnail */}
      {!product.thumbnail && iframeError && (
        <>
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-80`} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h2 className="text-white font-bold text-2xl text-center mb-2">{product.title}</h2>
            <p className="text-white/60 text-sm">Web Project</p>
          </div>
        </>
      )}

      {/* Dark overlay gradient at bottom for text readability */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

      {/* Title overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h2 className="text-white font-bold text-xl">{product.title}</h2>
      </div>

      {/* Hover overlay with link */}
      <a
        href={product.link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10"
      >
        <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-100 bg-black/40 backdrop-blur-sm transition-all duration-300 flex items-center justify-center">
          <div className="px-6 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-white font-medium flex items-center gap-2 group-hover/product:scale-105 transition-transform">
            Visit Site
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
        </div>
      </a>
    </motion.div>
  );
};
