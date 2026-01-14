"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import {
  IconCode,
  IconBrandShopee,
  IconBrandWordpress,
  IconBrandReact,
  IconRocket,
  IconShieldCheck,
  IconDeviceMobile,
  IconSearch,
  IconTrendingUp,
  IconPalette,
  IconArrowRight,
  IconCheck,
  IconBrandNextjs,
  IconBrandTailwind,
  IconBrandTypescript,
  IconDatabase,
  IconCloud,
  IconBrandVercel,
} from "@tabler/icons-react";
import { ShinyButton } from "@/components/ui/shiny-button";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { SparklesCore } from "@/components/ui/sparkles";
import { MovingBorder } from "@/components/ui/moving-border";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Spotlight } from "@/components/ui/spotlight";

const services = [
  {
    icon: IconCode,
    title: "Custom Development",
    description:
      "Complete custom websites built from scratch using modern technologies. React, Next.js, Node.js with custom UI/UX and advanced functionality.",
    badge: "Full Stack",
    gradient: "from-blue-500 to-cyan-500",
    features: ["React & Next.js", "Custom APIs", "Database Design", "Cloud Deploy"],
  },
  {
    icon: IconBrandShopee,
    title: "Shopify E-Commerce",
    description:
      "Theme customization, custom apps, payment gateway setup, and inventory management for your online store.",
    badge: "Most Popular",
    gradient: "from-green-500 to-emerald-500",
    features: ["Theme Custom", "Payment Setup", "Inventory Mgmt", "App Dev"],
  },
  {
    icon: IconBrandReact,
    title: "Webflow Development",
    description:
      "Responsive design with custom animations, CMS setup, and SEO optimization for marketing-focused sites.",
    gradient: "from-purple-500 to-pink-500",
    features: ["Visual Design", "CMS Setup", "Animations", "SEO Ready"],
  },
  {
    icon: IconBrandWordpress,
    title: "WordPress & CMS",
    description:
      "Theme development, plugin customization, e-commerce integration, and security hardening.",
    gradient: "from-orange-500 to-red-500",
    features: ["Theme Dev", "Plugin Custom", "WooCommerce", "Security"],
  },
];

const features = [
  {
    icon: IconRocket,
    title: "Lightning Fast",
    description: "Optimized performance with sub-2-second load times and 99.9% uptime guarantee",
    stat: "3x",
    statLabel: "Faster",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: IconShieldCheck,
    title: "Security First",
    description: "Enterprise-grade SSL, DDoS protection, and regular security audits",
    stat: "256-bit",
    statLabel: "Encryption",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: IconDeviceMobile,
    title: "Mobile-First",
    description: "Responsive designs that look and perform perfectly on every device",
    stat: "100%",
    statLabel: "Responsive",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: IconSearch,
    title: "SEO Optimized",
    description: "Built-in SEO best practices to help you rank higher in search results",
    stat: "Top 10",
    statLabel: "Rankings",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: IconTrendingUp,
    title: "Scalable",
    description: "Architecture that grows seamlessly with your business needs",
    stat: "∞",
    statLabel: "Scalability",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    icon: IconPalette,
    title: "Custom Design",
    description: "Uniquely crafted designs that reflect your brand identity perfectly",
    stat: "100%",
    statLabel: "Custom",
    gradient: "from-pink-500 to-rose-500"
  },
];

const technologies = [
  { icon: IconBrandReact, name: "React" },
  { icon: IconBrandNextjs, name: "Next.js" },
  { icon: IconBrandTypescript, name: "TypeScript" },
  { icon: IconBrandTailwind, name: "Tailwind" },
  { icon: IconDatabase, name: "PostgreSQL" },
  { icon: IconCloud, name: "AWS" },
  { icon: IconBrandVercel, name: "Vercel" },
  { icon: IconBrandShopee, name: "Shopify" },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We dive deep into your business goals, target audience, and competition to create a winning strategy.",
    icon: IconSearch,
    gradient: "from-blue-500 to-cyan-500",
    details: ["Business Analysis", "User Research", "Competitor Audit", "Goal Setting"]
  },
  {
    step: "02",
    title: "Design",
    description: "Transform ideas into stunning visuals with wireframes, mockups, and interactive prototypes.",
    icon: IconPalette,
    gradient: "from-purple-500 to-pink-500",
    details: ["Wireframing", "UI Design", "Prototyping", "User Testing"]
  },
  {
    step: "03",
    title: "Develop",
    description: "Build with clean, scalable code using modern technologies. Rigorous QA ensures perfection.",
    icon: IconCode,
    gradient: "from-pink-500 to-rose-500",
    details: ["Frontend Dev", "Backend Dev", "QA Testing", "Optimization"]
  },
  {
    step: "04",
    title: "Launch",
    description: "Deploy to production with ongoing support, monitoring, and maintenance to ensure success.",
    icon: IconRocket,
    gradient: "from-cyan-500 to-blue-500",
    details: ["Deployment", "Training", "Monitoring", "Support"]
  },
];

export default function WebDesignPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <main ref={containerRef} className="bg-black relative">
      {/* Global Star Background */}
      <div className="fixed inset-0 z-0">
        <StarsBackground />
        <ShootingStars />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden z-10">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="blue" />

        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />

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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8"
            >
              <IconCode className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-medium">Web Design & Development</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8">
              <span className="text-white">Transform Your</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Digital Vision
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto mb-12">
              We create websites that don&apos;t just look amazing — they drive results,
              engage users, and grow your business exponentially.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <ShinyButton className="px-10 py-5 text-lg">
                  Get Free Consultation
                  <IconArrowRight className="ml-2 w-5 h-5" />
                </ShinyButton>
              </Link>
              <Link href="/projects">
                <button className="px-10 py-5 rounded-full border border-white/20 text-white hover:bg-white/5 transition-colors">
                  View Our Work
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Floating Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: "500+", label: "Projects Delivered" },
              { value: "99.9%", label: "Uptime Guarantee" },
              { value: "< 2s", label: "Load Time" },
              { value: "24/7", label: "Support" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* Services Grid - Premium Bento Style */}
      <section className="relative py-32 overflow-hidden z-10">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px]" />

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
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 border border-blue-500/20 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative rounded-full h-2 w-2 bg-blue-500" />
              </span>
              Our Services
            </motion.span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Web Solutions That
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Actually Convert
              </span>
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              From custom development to e-commerce, we build digital experiences that drive real business results
            </p>
          </motion.div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6">
            {/* Full Stack - Large Featured Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-2 lg:col-span-7 group"
            >
              <div className="relative h-full p-6 sm:p-8 md:p-10 rounded-3xl bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border border-white/5 hover:border-blue-500/30 transition-all duration-500 overflow-hidden">
                {/* Animated gradient border on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-950" />
                </div>

                {/* Background glow */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] group-hover:bg-blue-500/30 transition-colors duration-500" />
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-[80px] group-hover:bg-cyan-500/20 transition-colors duration-500" />

                {/* Badge */}
                <motion.span
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute top-6 right-6 px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25"
                >
                  Full Stack
                </motion.span>

                <div className="relative z-10">
                  {/* Icon with animated ring */}
                  <div className="relative w-20 h-20 mb-8">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />
                    <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-[2px]">
                      <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
                        <IconCode className="w-10 h-10 text-white" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Custom Development</h3>
                  <p className="text-neutral-400 text-lg mb-8 leading-relaxed max-w-lg">
                    Complete custom websites built from scratch using modern technologies. React, Next.js, Node.js with custom UI/UX and advanced functionality.
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {[
                      { icon: IconBrandReact, label: "React" },
                      { icon: IconBrandNextjs, label: "Next.js" },
                      { icon: IconBrandTypescript, label: "TypeScript" },
                      { icon: IconDatabase, label: "Database" },
                    ].map((tech, i) => (
                      <motion.div
                        key={tech.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium"
                      >
                        <tech.icon className="w-4 h-4" />
                        {tech.label}
                      </motion.div>
                    ))}
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {services[0].features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                          <IconCheck className="w-4 h-4 text-blue-400" />
                        </div>
                        <span className="text-sm text-neutral-300 font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Shopify - Medium Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-5 group"
            >
              <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border border-white/5 hover:border-green-500/30 transition-all duration-500 overflow-hidden">
                {/* Background glow */}
                <div className="absolute -top-20 -right-20 w-48 h-48 bg-green-500/15 rounded-full blur-[80px] group-hover:bg-green-500/25 transition-colors duration-500" />

                {/* Badge */}
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, type: "spring" }}
                  className="absolute top-6 right-6 px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/25 flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Most Popular
                </motion.span>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="relative w-16 h-16 mb-6">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500" />
                    <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 p-[2px]">
                      <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
                        <IconBrandShopee className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">Shopify E-Commerce</h3>
                  <p className="text-neutral-400 mb-6 leading-relaxed">
                    Theme customization, custom apps, payment gateway setup, and inventory management for your online store.
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {services[1].features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.08 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                          <IconCheck className="w-3.5 h-3.5 text-green-400" />
                        </div>
                        <span className="text-sm text-neutral-400">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500/0 via-green-500/50 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>

            {/* Webflow - Medium Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-5 group"
            >
              <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border border-white/5 hover:border-purple-500/30 transition-all duration-500 overflow-hidden">
                {/* Background glow */}
                <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-purple-500/15 rounded-full blur-[80px] group-hover:bg-purple-500/25 transition-colors duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="relative w-16 h-16 mb-6">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500" />
                    <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-[2px]">
                      <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
                        <IconBrandReact className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">Webflow Development</h3>
                  <p className="text-neutral-400 mb-6 leading-relaxed">
                    Responsive design with custom animations, CMS setup, and SEO optimization for marketing-focused sites.
                  </p>

                  {/* Features as horizontal pills */}
                  <div className="flex flex-wrap gap-2">
                    {services[2].features.map((feature, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.08 }}
                        className="px-4 py-2 rounded-full text-sm bg-purple-500/10 border border-purple-500/20 text-purple-300"
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-full" />
              </div>
            </motion.div>

            {/* WordPress - Medium Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-7 group"
            >
              <div className="relative h-full p-8 md:p-10 rounded-3xl bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border border-white/5 hover:border-orange-500/30 transition-all duration-500 overflow-hidden">
                {/* Background glow */}
                <div className="absolute -top-20 -left-20 w-48 h-48 bg-orange-500/15 rounded-full blur-[80px] group-hover:bg-orange-500/25 transition-colors duration-500" />
                <div className="absolute -bottom-20 -right-20 w-36 h-36 bg-red-500/10 rounded-full blur-[60px] group-hover:bg-red-500/20 transition-colors duration-500" />

                <div className="relative z-10 flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    {/* Icon */}
                    <div className="relative w-16 h-16 mb-6">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500" />
                      <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 p-[2px]">
                        <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
                          <IconBrandWordpress className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">WordPress & CMS</h3>
                    <p className="text-neutral-400 mb-6 leading-relaxed">
                      Theme development, plugin customization, e-commerce integration, and security hardening.
                    </p>
                  </div>

                  {/* Features as vertical list with icons */}
                  <div className="md:w-64 space-y-3">
                    {services[3].features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/10 group/item hover:border-orange-500/30 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center flex-shrink-0">
                          <IconCheck className="w-4 h-4 text-orange-400" />
                        </div>
                        <span className="text-sm text-neutral-300 font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500/0 via-orange-500/50 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="text-neutral-500 mb-6">Not sure which solution is right for you?</p>
            <Link href="/contact">
              <button className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 hover:border-white/20 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                Get a Free Consultation
                <IconArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack - Animated Icons */}
      <section className="relative py-24 border-y border-white/5 overflow-hidden z-10">
        <div className="absolute inset-0">
          <SparklesCore
            particleDensity={40}
            particleColor="#60a5fa"
            className="w-full h-full"
          />
        </div>
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Technologies We Master</h3>
            <p className="text-neutral-500">Built with the best tools for optimal performance</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors"
              >
                <tech.icon className="w-10 h-10 text-white" />
                <span className="text-sm text-neutral-400">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process - Premium Timeline */}
      <section className="relative py-32 overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black" />
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[200px]" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[150px]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 border border-blue-500/20 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative rounded-full h-2 w-2 bg-blue-500" />
              </span>
              Our Process
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              From Idea to{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Launch</span>
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              A proven 4-step process that transforms your vision into a high-performing digital reality
            </p>
          </motion.div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            {/* Animated Connection Line */}
            <div className="relative mb-16">
              <div className="absolute top-8 left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-full" />
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute top-8 left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full origin-left"
                style={{ transformOrigin: "left" }}
              />

              {/* Step Indicators on Line */}
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
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} p-0.5 shadow-lg shadow-blue-500/20`}>
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
                  <div className="relative p-6 rounded-3xl bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border border-white/5 group-hover:border-white/20 transition-all duration-500 h-full overflow-hidden">
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

          {/* Mobile Timeline */}
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
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} p-0.5`}>
                    <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
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

                {/* Connecting line for mobile */}
                {index < process.length - 1 && (
                  <div className="absolute left-7 top-14 w-0.5 h-6 bg-gradient-to-b from-white/20 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Premium Bento Grid */}
      <section className="relative py-32 overflow-hidden z-10">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 border border-blue-500/20 mb-8">
              <IconCheck className="w-4 h-4" />
              Why Us
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Comcreate
              </span>
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              We don&apos;t just build websites — we craft digital experiences that drive real business results
            </p>
          </motion.div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group relative rounded-3xl overflow-hidden ${
                  index === 0 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/95 to-neutral-950/95 backdrop-blur-sm" />

                {/* Animated Border Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-950" />

                {/* Content */}
                <div className="relative p-8 h-full">
                  {/* Top Row - Icon and Stat */}
                  <div className="flex items-start justify-between mb-6">
                    {/* Icon with Gradient Ring */}
                    <div className={`relative p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} p-[2px]`}>
                      <div className="w-full h-full rounded-2xl bg-black p-3 flex items-center justify-center">
                        <feature.icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* Stat Badge */}
                    <div className="text-right">
                      <div className={`text-3xl font-bold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                        {feature.stat}
                      </div>
                      <div className="text-xs text-neutral-500 uppercase tracking-wider">
                        {feature.statLabel}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-300 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-400 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Bottom Accent Line */}
                  <div className="mt-6 pt-4 border-t border-white/5">
                    <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${feature.gradient} rounded-full transition-all duration-500`} />
                  </div>
                </div>

                {/* Corner Glow on Hover */}
                <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${feature.gradient} rounded-full blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
              </motion.div>
            ))}
          </div>

          {/* Bottom Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 border border-white/5"
          >
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {[
                { value: "500+", label: "Projects Completed" },
                { value: "99.9%", label: "Client Satisfaction" },
                { value: "24/7", label: "Support Available" },
                { value: "< 2s", label: "Avg Load Time" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {item.value}
                  </div>
                  <div className="text-xs text-neutral-500 uppercase tracking-wider mt-1">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden z-10">
        <BackgroundBeams className="opacity-40" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Build Your{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Dream Website?
              </span>
            </h2>
            <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">
              Let&apos;s discuss your project and create something extraordinary together.
            </p>
            <Link href="/contact">
              <ShinyButton className="px-12 py-6 text-xl">
                Start Your Project
                <IconArrowRight className="ml-2 w-6 h-6" />
              </ShinyButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
