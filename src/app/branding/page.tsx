"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  IconPalette,
  IconBrush,
  IconTypography,
  IconColorSwatch,
  IconPhoto,
  IconCertificate,
  IconArrowRight,
  IconCheck,
  IconSparkles,
  IconWand,
  IconPencil,
  IconEye,
  IconHeart,
  IconBulb,
  IconUsers,
  IconTarget,
  IconRefresh,
  IconBookmark,
  IconBrandFigma,
  IconBrandAdobe,
  IconBrandSketch,
  IconVectorTriangle,
  IconLayoutGrid,
  IconStack,
  IconPlayerPlay,
} from "@tabler/icons-react";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { SparklesCore } from "@/components/ui/sparkles";

const services = [
  {
    icon: IconPalette,
    title: "Logo & Visual Identity",
    description:
      "Custom logos, color palettes, typography, business cards, social assets, and complete brand style guides that make your business unforgettable.",
    badge: "Most Popular",
    gradient: "from-orange-500 to-amber-500",
    deliverables: ["Logo Design", "Color Palette", "Typography", "Brand Assets"],
    stats: { projects: "200+", satisfaction: "100%" },
  },
  {
    icon: IconTarget,
    title: "Brand Strategy",
    description:
      "Market positioning, audience research, competitive analysis, and brand voice development that differentiates you from competitors.",
    gradient: "from-rose-500 to-pink-500",
    deliverables: ["Market Research", "Positioning", "Voice & Tone", "Messaging"],
    stats: { clients: "150+", growth: "+85%" },
  },
  {
    icon: IconBookmark,
    title: "Brand Guidelines",
    description:
      "Comprehensive guidelines, digital asset libraries, print standards, and imagery direction for total brand consistency.",
    gradient: "from-violet-500 to-purple-500",
    deliverables: ["Style Guide", "Asset Library", "Usage Rules", "Templates"],
    stats: { pages: "50+", assets: "100+" },
  },
  {
    icon: IconRefresh,
    title: "Rebranding",
    description:
      "Brand audits, modernization, and strategic transformation for businesses ready to evolve and capture new markets.",
    badge: "Transformation",
    gradient: "from-cyan-500 to-blue-500",
    deliverables: ["Brand Audit", "Strategy", "New Identity", "Rollout Plan"],
    stats: { transformations: "75+", retention: "95%" },
  },
];

const brandElements = [
  { icon: IconPalette, name: "Logo Design", gradient: "from-orange-500 to-amber-500" },
  { icon: IconColorSwatch, name: "Color Systems", gradient: "from-rose-500 to-pink-500" },
  { icon: IconTypography, name: "Typography", gradient: "from-violet-500 to-purple-500" },
  { icon: IconCertificate, name: "Business Cards", gradient: "from-blue-500 to-cyan-500" },
  { icon: IconPhoto, name: "Photography", gradient: "from-green-500 to-emerald-500" },
  { icon: IconBrush, name: "Illustrations", gradient: "from-pink-500 to-rose-500" },
  { icon: IconLayoutGrid, name: "Social Media", gradient: "from-purple-500 to-indigo-500" },
  { icon: IconStack, name: "Packaging", gradient: "from-amber-500 to-orange-500" },
];

const benefits = [
  { icon: IconBulb, title: "Strategic Foundation", description: "Every design decision backed by research and data", gradient: "from-orange-500 to-amber-500" },
  { icon: IconSparkles, title: "Creative Excellence", description: "Award-worthy design that stands out from competition", gradient: "from-rose-500 to-pink-500" },
  { icon: IconEye, title: "Full Service", description: "From initial concept to final implementation", gradient: "from-violet-500 to-purple-500" },
  { icon: IconUsers, title: "Collaborative Process", description: "Your vision combined with our expertise", gradient: "from-cyan-500 to-blue-500" },
  { icon: IconTarget, title: "Audience-Focused", description: "Designs that resonate with your target market", gradient: "from-green-500 to-emerald-500" },
  { icon: IconHeart, title: "Future-Proof", description: "Scalable systems built to evolve with you", gradient: "from-pink-500 to-rose-500" },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "Deep dive into your business, audience, competitors, and goals to understand what makes you unique",
    icon: IconBulb,
    gradient: "from-orange-500 to-amber-500",
    details: ["Business Analysis", "Audience Research", "Competitor Audit", "Goal Definition"],
  },
  {
    step: "02",
    title: "Strategy",
    description: "Define your unique market position, brand personality, and messaging framework",
    icon: IconTarget,
    gradient: "from-rose-500 to-pink-500",
    details: ["Brand Positioning", "Personality Define", "Voice & Tone", "Key Messages"],
  },
  {
    step: "03",
    title: "Design",
    description: "Bring your brand to life with stunning visuals, logo concepts, and identity systems",
    icon: IconPencil,
    gradient: "from-violet-500 to-purple-500",
    details: ["Logo Concepts", "Visual Identity", "Color Systems", "Typography"],
  },
  {
    step: "04",
    title: "Deliver",
    description: "Complete rollout with comprehensive guidelines and all assets you need",
    icon: IconCheck,
    gradient: "from-cyan-500 to-blue-500",
    details: ["Brand Guidelines", "Asset Library", "File Formats", "Training"],
  },
];

const tools = [
  { icon: IconBrandFigma, name: "Figma" },
  { icon: IconBrandAdobe, name: "Adobe CC" },
  { icon: IconBrandSketch, name: "Sketch" },
  { icon: IconVectorTriangle, name: "Illustrator" },
];

// Enhanced Color Palette Demo
function ColorPaletteDemo() {
  const palettes = [
    {
      name: "Energetic",
      colors: [
        { hex: "#FF6B35", name: "Primary" },
        { hex: "#F7C59F", name: "Light" },
        { hex: "#2E294E", name: "Dark" },
        { hex: "#EFEFEF", name: "Neutral" },
      ],
    },
    {
      name: "Professional",
      colors: [
        { hex: "#004E89", name: "Primary" },
        { hex: "#1A659E", name: "Secondary" },
        { hex: "#FF6B35", name: "Accent" },
        { hex: "#EFEFEF", name: "Light" },
      ],
    },
    {
      name: "Creative",
      colors: [
        { hex: "#7B2D8E", name: "Primary" },
        { hex: "#F72585", name: "Secondary" },
        { hex: "#4CC9F0", name: "Accent" },
        { hex: "#1A1A2E", name: "Dark" },
      ],
    },
  ];

  const [activePalette, setActivePalette] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePalette((prev) => (prev + 1) % palettes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [palettes.length]);

  return (
    <div className="space-y-6">
      {/* Palette Switcher */}
      <div className="flex gap-2 justify-center">
        {palettes.map((palette, i) => (
          <button
            key={palette.name}
            onClick={() => setActivePalette(i)}
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              i === activePalette
                ? "bg-orange-500 text-white"
                : "bg-white/5 text-neutral-400 hover:bg-white/10"
            }`}
          >
            {palette.name}
          </button>
        ))}
      </div>

      {/* Color Swatches */}
      <div className="flex gap-4 justify-center">
        {palettes[activePalette].colors.map((color, i) => (
          <motion.div
            key={`${activePalette}-${i}`}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: i * 0.1, type: "spring" }}
            className="group text-center"
          >
            <motion.div
              whileHover={{ scale: 1.1, y: -5 }}
              className="w-16 h-16 md:w-20 md:h-20 rounded-2xl shadow-lg cursor-pointer relative overflow-hidden"
              style={{ backgroundColor: color.hex }}
            >
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors" />
            </motion.div>
            <p className="text-xs text-neutral-500 mt-2">{color.name}</p>
            <p className="text-xs text-neutral-600 font-mono">{color.hex}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Enhanced Brand Showcase with multiple logos
function BrandShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const brands = [
    { letter: "A", gradient: "from-orange-500 to-red-500", name: "Apex" },
    { letter: "B", gradient: "from-blue-500 to-cyan-500", name: "Bloom" },
    { letter: "C", gradient: "from-purple-500 to-pink-500", name: "Create" },
    { letter: "D", gradient: "from-green-500 to-emerald-500", name: "Drive" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % brands.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [brands.length]);

  return (
    <div className="relative">
      {/* Main Logo Display */}
      <div className="relative w-56 h-56 mx-auto mb-8">
        {/* Glow effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${brands[activeIndex].gradient} opacity-30 blur-3xl rounded-full`} />

        {brands.map((brand, i) => (
          <motion.div
            key={i}
            className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${brand.gradient} flex items-center justify-center shadow-2xl`}
            initial={{ opacity: 0, scale: 0.8, rotateY: -180 }}
            animate={{
              opacity: i === activeIndex ? 1 : 0,
              scale: i === activeIndex ? 1 : 0.8,
              rotateY: i === activeIndex ? 0 : 180,
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <span className="text-8xl font-bold text-white drop-shadow-lg">{brand.letter}</span>
          </motion.div>
        ))}
      </div>

      {/* Brand Name */}
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <p className="text-2xl font-bold text-white mb-1">{brands[activeIndex].name}</p>
        <p className="text-sm text-neutral-500">Sample Brand Identity</p>
      </motion.div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {brands.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === activeIndex ? "w-8 bg-orange-500" : "bg-white/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// Interactive cursor follower for creative feel
function CreativeCursor() {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed w-8 h-8 rounded-full bg-gradient-to-r from-orange-500/30 to-pink-500/30 pointer-events-none z-50 hidden md:block mix-blend-screen"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: "-50%",
        translateY: "-50%",
      }}
    />
  );
}

export default function BrandingPage() {
  return (
    <main className="bg-black relative">
      <CreativeCursor />

      {/* Global Star Background */}
      <div className="fixed inset-0 z-0">
        <StarsBackground />
        <ShootingStars />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden z-10">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#f97316" />
        <Spotlight className="top-40 right-0 md:right-60" fill="#ec4899" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid-white/[0.02]" />

        {/* Floating design elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.3, 0],
                scale: [0, 1, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
            >
              {i % 3 === 0 ? (
                <IconPalette className="w-8 h-8 text-orange-500/30" />
              ) : i % 3 === 1 ? (
                <IconBrush className="w-6 h-6 text-pink-500/30" />
              ) : (
                <IconSparkles className="w-5 h-5 text-amber-500/30" />
              )}
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-orange-400 opacity-75" />
                <span className="relative rounded-full h-2 w-2 bg-orange-500" />
              </span>
              <span className="text-orange-400 font-medium">Branding & Identity</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8">
              <span className="text-white">Build a Brand</span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-rose-400 to-pink-400 bg-clip-text text-transparent">
                That Stands Out
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto mb-12">
              From logos to comprehensive brand strategies, we create memorable
              <br className="hidden md:block" />
              identities that <span className="text-white font-medium">resonate with your audience</span> and drive growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/contact">
                <ShinyButton className="px-10 py-5 text-lg">
                  Start Your Brand Journey
                  <IconArrowRight className="ml-2 w-5 h-5" />
                </ShinyButton>
              </Link>
              <button className="group px-10 py-5 rounded-full border border-orange-500/30 text-white hover:bg-orange-500/10 transition-all flex items-center justify-center gap-2">
                <IconPlayerPlay className="w-5 h-5 group-hover:scale-110 transition-transform" />
                View Portfolio
              </button>
            </div>

            {/* Hero Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
            >
              {[
                { value: "200+", label: "Brands Created", gradient: "from-orange-500 to-amber-500" },
                { value: "100%", label: "Client Satisfaction", gradient: "from-rose-500 to-pink-500" },
                { value: "50+", label: "Awards Won", gradient: "from-violet-500 to-purple-500" },
                { value: "15+", label: "Years Experience", gradient: "from-cyan-500 to-blue-500" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 border border-white/5 hover:border-orange-500/20 transition-all"
                >
                  <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-neutral-500 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* Brand Elements Showcase */}
      <section className="relative py-24 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Complete Brand Identity Systems</h3>
            <p className="text-neutral-500">Everything you need to build a memorable brand</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {brandElements.map((element, i) => (
              <motion.div
                key={element.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="group relative p-5 rounded-2xl bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 border border-white/5 hover:border-orange-500/30 transition-all overflow-hidden cursor-pointer"
              >
                {/* Hover glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${element.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${element.gradient} p-[1px] mb-3`}>
                    <div className="w-full h-full rounded-xl bg-black flex items-center justify-center">
                      <element.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h4 className="text-sm font-semibold text-white">{element.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Premium Bento Grid */}
      <section className="relative py-32 overflow-hidden z-10">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-orange-500/10 to-pink-500/10 text-orange-400 border border-orange-500/20 mb-8"
            >
              <IconSparkles className="w-4 h-4" />
              Branding Services
            </motion.span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Craft Your
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-rose-400 to-pink-400 bg-clip-text text-transparent">
                Unique Identity
              </span>
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              From strategy to execution, we create brand identities that captivate and convert
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Logo & Visual Identity - Large Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-7 group"
            >
              <div className="relative h-full p-8 md:p-10 rounded-3xl bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border border-white/5 hover:border-orange-500/30 transition-all duration-500 overflow-hidden">
                {/* Background glow */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-500/20 rounded-full blur-[100px] group-hover:bg-orange-500/30 transition-colors duration-500" />
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-amber-500/10 rounded-full blur-[80px] group-hover:bg-amber-500/20 transition-colors duration-500" />

                {/* Badge */}
                <motion.span
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute top-6 right-6 px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25 flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Most Popular
                </motion.span>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="relative w-20 h-20 mb-8">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />
                    <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 p-[2px]">
                      <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
                        <IconPalette className="w-10 h-10 text-white" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Logo & Visual Identity</h3>
                  <p className="text-neutral-400 text-lg mb-8 leading-relaxed max-w-lg">
                    Custom logos, color palettes, typography, business cards, social assets, and complete brand style guides that make your business unforgettable.
                  </p>

                  {/* Stats Pills */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20">
                      <span className="text-2xl font-bold text-orange-400">200+</span>
                      <span className="text-sm text-neutral-400">Projects</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
                      <span className="text-2xl font-bold text-green-400">100%</span>
                      <span className="text-sm text-neutral-400">Satisfaction</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-4">
                    {services[0].deliverables.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500/20 to-amber-500/20 flex items-center justify-center">
                          <IconCheck className="w-4 h-4 text-orange-400" />
                        </div>
                        <span className="text-sm text-neutral-300 font-medium">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Brand Strategy - Medium Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-5 group"
            >
              <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border border-white/5 hover:border-rose-500/30 transition-all duration-500 overflow-hidden">
                {/* Background glow */}
                <div className="absolute -top-20 -right-20 w-48 h-48 bg-rose-500/15 rounded-full blur-[80px] group-hover:bg-rose-500/25 transition-colors duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="relative w-16 h-16 mb-6">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500" />
                    <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 p-[2px]">
                      <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
                        <IconTarget className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">Brand Strategy</h3>
                  <p className="text-neutral-400 mb-6 leading-relaxed">
                    Market positioning, audience research, competitive analysis, and brand voice development.
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {services[1].deliverables.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.08 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-rose-500/20 flex items-center justify-center flex-shrink-0">
                          <IconCheck className="w-3.5 h-3.5 text-rose-400" />
                        </div>
                        <span className="text-sm text-neutral-400">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500/0 via-rose-500/50 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>

            {/* Brand Guidelines - Medium Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-5 group"
            >
              <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border border-white/5 hover:border-violet-500/30 transition-all duration-500 overflow-hidden">
                {/* Background glow */}
                <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-violet-500/15 rounded-full blur-[80px] group-hover:bg-violet-500/25 transition-colors duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="relative w-16 h-16 mb-6">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500" />
                    <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 p-[2px]">
                      <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
                        <IconBookmark className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">Brand Guidelines</h3>
                  <p className="text-neutral-400 mb-6 leading-relaxed">
                    Comprehensive guidelines for total brand consistency across all touchpoints.
                  </p>

                  {/* Features as pills */}
                  <div className="flex flex-wrap gap-2">
                    {services[2].deliverables.map((item, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.08 }}
                        className="px-4 py-2 rounded-full text-sm bg-violet-500/10 border border-violet-500/20 text-violet-300"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-violet-500/10 to-transparent rounded-bl-full" />
              </div>
            </motion.div>

            {/* Rebranding - Large Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-7 group"
            >
              <div className="relative h-full p-8 md:p-10 rounded-3xl bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border border-white/5 hover:border-cyan-500/30 transition-all duration-500 overflow-hidden">
                {/* Background glow */}
                <div className="absolute -top-20 -left-20 w-48 h-48 bg-cyan-500/15 rounded-full blur-[80px] group-hover:bg-cyan-500/25 transition-colors duration-500" />
                <div className="absolute -bottom-20 -right-20 w-36 h-36 bg-blue-500/10 rounded-full blur-[60px] group-hover:bg-blue-500/20 transition-colors duration-500" />

                <div className="relative z-10 flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    {/* Icon */}
                    <div className="relative w-16 h-16 mb-6">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500" />
                      <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 p-[2px]">
                        <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
                          <IconRefresh className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>

                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-cyan-500 to-blue-500 text-white mb-4">
                      Transformation
                    </span>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Rebranding</h3>
                    <p className="text-neutral-400 mb-6 leading-relaxed">
                      Brand audits, modernization, and strategic transformation for businesses ready to evolve and capture new markets.
                    </p>
                  </div>

                  {/* Features */}
                  <div className="md:w-64 space-y-3">
                    {services[3].deliverables.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-cyan-500/10 to-transparent border border-cyan-500/10 hover:border-cyan-500/30 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
                          <IconCheck className="w-4 h-4 text-cyan-400" />
                        </div>
                        <span className="text-sm text-neutral-300 font-medium">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="relative py-32 border-y border-white/5 overflow-hidden z-10">
        <div className="absolute inset-0">
          <SparklesCore
            particleDensity={30}
            particleColor="#f97316"
            className="w-full h-full"
          />
        </div>
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-orange-500/10 to-pink-500/10 text-orange-400 border border-orange-500/20 mb-6">
              <IconWand className="w-4 h-4" />
              Brand Preview
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              See the <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">Transformation</span>
            </h2>
            <p className="text-lg text-neutral-400">Every brand tells a unique story</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <BrandShowcase />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="p-6 rounded-2xl bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border border-white/5">
                <h3 className="text-xl font-bold text-white mb-6">Sample Color Palette</h3>
                <ColorPaletteDemo />
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border border-white/5">
                <h4 className="text-sm text-orange-400 font-medium mb-3">Brand Voice</h4>
                <p className="text-neutral-300 italic text-lg">
                  &ldquo;Bold, innovative, and approachable — we speak to dreamers who do.&rdquo;
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border border-white/5">
                <h4 className="text-sm text-orange-400 font-medium mb-3">Typography</h4>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-white">Headlines Bold</p>
                  <p className="text-lg text-neutral-400">Body text that&apos;s readable and elegant</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-32 overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-orange-950/10 to-black" />
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[200px]" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-[150px]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-orange-500/10 to-pink-500/10 text-orange-400 border border-orange-500/20 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-orange-400 opacity-75" />
                <span className="relative rounded-full h-2 w-2 bg-orange-500" />
              </span>
              Our Process
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              From Concept to{" "}
              <span className="bg-gradient-to-r from-orange-400 via-rose-400 to-pink-400 bg-clip-text text-transparent">
                Reality
              </span>
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              A proven 4-step process that transforms your vision into a powerful brand identity
            </p>
          </motion.div>

          {/* Desktop Process */}
          <div className="hidden lg:block">
            {/* Connection Line */}
            <div className="relative mb-16">
              <div className="absolute top-8 left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-orange-500/20 rounded-full" />
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute top-8 left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-orange-500 rounded-full origin-left"
              />

              {/* Step Indicators */}
              <div className="flex justify-between px-[10%]">
                {process.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.2, type: "spring" }}
                    className="relative"
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} p-0.5 shadow-lg shadow-orange-500/20`}>
                      <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
                        <item.icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Process Cards */}
            <div className="grid grid-cols-4 gap-6">
              {process.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.15 }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className="relative p-6 rounded-3xl bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border border-white/5 group-hover:border-orange-500/20 transition-all duration-500 h-full overflow-hidden">
                    {/* Hover glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                    {/* Step number */}
                    <div className={`text-7xl font-bold bg-gradient-to-br ${item.gradient} bg-clip-text text-transparent opacity-20 absolute -top-4 -right-2`}>
                      {item.step}
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-neutral-400 text-sm leading-relaxed mb-5">{item.description}</p>

                      {/* Details */}
                      <div className="space-y-2">
                        {item.details.map((detail, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7 + index * 0.1 + i * 0.05 }}
                            className="flex items-center gap-2"
                          >
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.gradient}`} />
                            <span className="text-xs text-neutral-500">{detail}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Process */}
          <div className="lg:hidden space-y-6">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="flex gap-4">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} p-0.5`}>
                    <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <div className="flex-1 p-5 rounded-2xl bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border border-white/5">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-sm font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                        Step {item.step}
                      </span>
                      <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    </div>
                    <p className="text-neutral-400 text-sm mb-3">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.details.map((detail, i) => (
                        <span key={i} className="px-2 py-1 rounded-full text-xs bg-white/5 text-neutral-500">
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {index < process.length - 1 && (
                  <div className="absolute left-7 top-14 w-0.5 h-6 bg-gradient-to-b from-white/20 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="relative py-32 overflow-hidden z-10">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-orange-500/10 to-pink-500/10 text-orange-400 border border-orange-500/20 mb-8">
              <IconCheck className="w-4 h-4" />
              Why Us
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-orange-400 via-rose-400 to-pink-400 bg-clip-text text-transparent">
                Our Branding
              </span>
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              What makes our approach to branding exceptional
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative rounded-3xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/95 to-neutral-950/95 backdrop-blur-sm" />
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-950" />

                <div className="relative p-8 h-full">
                  <div className={`relative p-4 rounded-2xl bg-gradient-to-br ${benefit.gradient} p-[2px] w-fit mb-6`}>
                    <div className="w-full h-full rounded-2xl bg-black p-3 flex items-center justify-center">
                      <benefit.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">{benefit.description}</p>

                  <div className="mt-6 pt-4 border-t border-white/5">
                    <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${benefit.gradient} rounded-full transition-all duration-500`} />
                  </div>
                </div>

                <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${benefit.gradient} rounded-full blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
              </motion.div>
            ))}
          </div>

          {/* Tools we use */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-orange-500/5 via-pink-500/5 to-orange-500/5 border border-white/5"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-neutral-400 text-center md:text-left">
                We use industry-leading tools to bring your brand to life
              </p>
              <div className="flex gap-4">
                {tools.map((tool, i) => (
                  <motion.div
                    key={tool.name}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-orange-500/30 transition-colors"
                  >
                    <tool.icon className="w-6 h-6 text-white" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden z-10">
        <BackgroundBeams className="opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <IconWand className="w-5 h-5 text-orange-400" />
              </motion.div>
              <span className="text-orange-400 font-medium">Free Consultation</span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Create{" "}
              <span className="bg-gradient-to-r from-orange-400 via-rose-400 to-pink-400 bg-clip-text text-transparent">
                Your Brand?
              </span>
            </h2>
            <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">
              Let&apos;s create an identity that truly represents your vision and resonates with your audience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <ShinyButton className="px-12 py-6 text-xl">
                  Schedule Brand Consultation
                  <IconArrowRight className="ml-2 w-6 h-6" />
                </ShinyButton>
              </Link>
            </div>

            <p className="mt-8 text-sm text-neutral-500">
              No commitment required • Response within 24 hours
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
