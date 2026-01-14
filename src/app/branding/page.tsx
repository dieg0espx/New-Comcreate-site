"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
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
} from "@tabler/icons-react";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { LampContainer } from "@/components/ui/lamp";

const services = [
  {
    icon: IconPalette,
    title: "Logo & Visual Identity",
    description:
      "Custom logos, color palettes, typography, business cards, social assets, and complete brand style guides.",
    badge: "Most Popular",
    gradient: "from-orange-500 to-amber-500",
    deliverables: ["Logo Design", "Color Palette", "Typography", "Brand Assets"],
  },
  {
    icon: IconTarget,
    title: "Brand Strategy",
    description:
      "Market positioning, audience research, competitive analysis, and brand voice development that differentiates you.",
    gradient: "from-rose-500 to-pink-500",
    deliverables: ["Market Research", "Positioning", "Voice & Tone", "Messaging"],
  },
  {
    icon: IconBookmark,
    title: "Brand Guidelines",
    description:
      "Comprehensive guidelines, digital asset libraries, print standards, and imagery direction for consistency.",
    gradient: "from-violet-500 to-purple-500",
    deliverables: ["Style Guide", "Asset Library", "Usage Rules", "Templates"],
  },
  {
    icon: IconRefresh,
    title: "Rebranding",
    description:
      "Brand audits, modernization, and strategic transformation for businesses ready to evolve.",
    badge: "Transformation",
    gradient: "from-cyan-500 to-blue-500",
    deliverables: ["Brand Audit", "Strategy", "New Identity", "Rollout Plan"],
  },
];

const brandElements = [
  { icon: IconPalette, name: "Logo Design" },
  { icon: IconColorSwatch, name: "Color Palette" },
  { icon: IconTypography, name: "Typography" },
  { icon: IconCertificate, name: "Business Cards" },
  { icon: IconPhoto, name: "Photography" },
  { icon: IconBrush, name: "Illustrations" },
];

const benefits = [
  { icon: IconBulb, title: "Strategic Foundation", description: "Every design backed by research" },
  { icon: IconSparkles, title: "Creative Excellence", description: "Award-worthy design" },
  { icon: IconEye, title: "Comprehensive", description: "Concept to implementation" },
  { icon: IconUsers, title: "Collaborative", description: "Your vision, our expertise" },
  { icon: IconTarget, title: "Data-Driven", description: "Audience research informed" },
  { icon: IconHeart, title: "Future-Focused", description: "Built to evolve & grow" },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "Deep dive into your business, audience, and goals",
    icon: IconBulb,
    color: "orange",
  },
  {
    step: "02",
    title: "Strategy",
    description: "Define your unique market position",
    icon: IconTarget,
    color: "rose",
  },
  {
    step: "03",
    title: "Design",
    description: "Bring your brand to life visually",
    icon: IconPencil,
    color: "violet",
  },
  {
    step: "04",
    title: "Deliver",
    description: "Complete rollout with documentation",
    icon: IconCheck,
    color: "cyan",
  },
];

// Color palette showcase
function ColorPaletteDemo() {
  const colors = [
    { name: "Primary", hex: "#FF6B35", className: "bg-orange-500" },
    { name: "Secondary", hex: "#004E89", className: "bg-blue-700" },
    { name: "Accent", hex: "#7B2D8E", className: "bg-purple-700" },
    { name: "Light", hex: "#F0F0F0", className: "bg-neutral-100" },
  ];

  return (
    <div className="flex gap-3">
      {colors.map((color, i) => (
        <motion.div
          key={color.name}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1, type: "spring" }}
          whileHover={{ scale: 1.1, y: -5 }}
          className="group cursor-pointer"
        >
          <div className={`w-16 h-16 rounded-xl ${color.className} shadow-lg`} />
          <div className="text-xs text-neutral-500 text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
            {color.hex}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Animated brand showcase
function BrandShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const brands = [
    { letter: "A", gradient: "from-orange-500 to-red-500" },
    { letter: "B", gradient: "from-blue-500 to-cyan-500" },
    { letter: "C", gradient: "from-purple-500 to-pink-500" },
    { letter: "D", gradient: "from-green-500 to-emerald-500" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % brands.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [brands.length]);

  return (
    <div className="relative w-48 h-48 mx-auto">
      {brands.map((brand, i) => (
        <motion.div
          key={i}
          className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${brand.gradient} flex items-center justify-center`}
          initial={{ opacity: 0, scale: 0.8, rotateY: -180 }}
          animate={{
            opacity: i === activeIndex ? 1 : 0,
            scale: i === activeIndex ? 1 : 0.8,
            rotateY: i === activeIndex ? 0 : 180,
          }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-7xl font-bold text-white">{brand.letter}</span>
        </motion.div>
      ))}
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
    <main className="bg-black">
      <CreativeCursor />

      {/* Hero Section with Lamp Effect */}
      <section className="relative min-h-screen overflow-hidden">
        <LampContainer className="min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8"
            >
              <IconWand className="w-5 h-5 text-orange-400" />
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
              identities that resonate with your audience and drive business growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <ShinyButton className="px-10 py-5 text-lg">
                  Start Your Brand Journey
                  <IconArrowRight className="ml-2 w-5 h-5" />
                </ShinyButton>
              </Link>
              <button className="px-10 py-5 rounded-full border border-orange-500/30 text-white hover:bg-orange-500/10 transition-colors flex items-center justify-center gap-2">
                <IconEye className="w-5 h-5" />
                View Portfolio
              </button>
            </div>
          </motion.div>
        </LampContainer>
      </section>

      {/* Brand Elements Showcase */}
      <section className="relative py-24 border-y border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-pink-500/5" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-12"
          >
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">What We Create</h3>
              <p className="text-neutral-500">Complete brand identity systems</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {brandElements.map((element, index) => (
                <motion.div
                  key={element.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:border-orange-500/30 transition-colors"
                >
                  <element.icon className="w-5 h-5 text-orange-400" />
                  <span className="text-neutral-300">{element.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-dot-white/[0.03]" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-orange-500/10 text-orange-400 border border-orange-500/20 mb-6">
              <IconSparkles className="w-4 h-4" />
              Branding Services
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Craft Your
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                Unique Identity
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative p-8 rounded-3xl bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border border-white/5 hover:border-orange-500/30 transition-all duration-500 overflow-hidden"
              >
                {/* Hover gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                {service.badge && (
                  <span className={`absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${service.gradient} text-white`}>
                    {service.badge}
                  </span>
                )}

                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-0.5 mb-6`}>
                    <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-neutral-400 mb-6 leading-relaxed">{service.description}</p>

                  {/* Deliverables */}
                  <div className="flex flex-wrap gap-2">
                    {service.deliverables.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs bg-white/5 text-neutral-400 border border-white/5"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-orange-950/10 to-black" />

        <div className="relative max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              See the <span className="text-orange-400">Transformation</span>
            </h2>
            <p className="text-lg text-neutral-400">Every brand tells a unique story</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <BrandShowcase />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Sample Color Palette</h3>
                <ColorPaletteDemo />
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h4 className="text-sm text-orange-400 font-medium mb-2">Brand Voice</h4>
                <p className="text-neutral-400 italic">
                  &ldquo;Bold, innovative, and approachable — we speak to dreamers who do.&rdquo;
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h4 className="text-sm text-orange-400 font-medium mb-2">Typography</h4>
                <div className="space-y-2">
                  <p className="text-2xl font-bold text-white">Headlines in Bold</p>
                  <p className="text-lg text-neutral-300">Body text that's readable and elegant</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-orange-500/10 text-orange-400 border border-orange-500/20 mb-6">
              Our Process
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              From Concept to
              <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent"> Reality</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative group"
              >
                <div className="p-8 rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/5 group-hover:border-orange-500/30 transition-all h-full text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-${item.color}-500/10 border border-${item.color}-500/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    <item.icon className={`w-8 h-8 text-${item.color}-400`} />
                  </div>

                  <div className="text-5xl font-bold text-white/10 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-neutral-400 text-sm">{item.description}</p>
                </div>

                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-orange-500/30 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-orange-950/5 to-black" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-orange-400">Our Branding</span>
            </h2>
            <p className="text-lg text-neutral-400">What makes our approach exceptional</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-6 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/5 hover:border-orange-500/30 transition-all"
              >
                <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 w-fit mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{benefit.title}</h3>
                <p className="text-sm text-neutral-500">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <BackgroundBeams className="opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="inline-block mb-8"
            >
              <IconWand className="w-16 h-16 text-orange-400" />
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
            <Link href="/contact">
              <ShinyButton className="px-12 py-6 text-xl">
                Schedule Brand Consultation
                <IconArrowRight className="ml-2 w-6 h-6" />
              </ShinyButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
