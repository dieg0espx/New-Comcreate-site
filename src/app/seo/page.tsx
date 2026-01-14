"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  IconSearch,
  IconChartLine,
  IconTargetArrow,
  IconLink,
  IconMapPin,
  IconTools,
  IconFileText,
  IconTrendingUp,
  IconArrowRight,
  IconCheck,
  IconChartBar,
  IconWorld,
  IconBrandGoogle,
  IconGraph,
  IconReportAnalytics,
  IconUsers,
} from "@tabler/icons-react";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { ShootingStars } from "@/components/ui/shooting-stars";

const services = [
  {
    icon: IconMapPin,
    title: "Local SEO",
    description:
      "Optimize your Google Business Profile, build citations, and create location-specific content to drive foot traffic and calls.",
    gradient: "from-green-500 to-emerald-500",
    metrics: [
      { label: "Map Pack Rankings", value: "#1-3" },
      { label: "Local Visibility", value: "+400%" },
    ],
  },
  {
    icon: IconTools,
    title: "Technical SEO",
    description:
      "Address crawling and indexing issues through site speed optimization, mobile improvements, and comprehensive technical audits.",
    gradient: "from-cyan-500 to-blue-500",
    metrics: [
      { label: "Core Web Vitals", value: "Pass" },
      { label: "Site Speed", value: "<2s" },
    ],
  },
  {
    icon: IconFileText,
    title: "Content Optimization",
    description:
      "Combine keyword research with user intent to create content that ranks and converts visitors into customers.",
    badge: "High Impact",
    gradient: "from-purple-500 to-pink-500",
    metrics: [
      { label: "Keywords Ranked", value: "500+" },
      { label: "Organic Traffic", value: "+300%" },
    ],
  },
  {
    icon: IconLink,
    title: "Link Building",
    description:
      "Acquire high-quality backlinks using white-hat outreach and guest posting strategies that Google rewards.",
    gradient: "from-orange-500 to-red-500",
    metrics: [
      { label: "Domain Authority", value: "+40" },
      { label: "Quality Links", value: "100+/mo" },
    ],
  },
];

const stats = [
  { value: "300%", label: "Avg Traffic Increase", icon: IconTrendingUp },
  { value: "500+", label: "Keywords Ranked", icon: IconSearch },
  { value: "98%", label: "Client Retention", icon: IconUsers },
  { value: "50+", label: "Industries Served", icon: IconWorld },
];

const benefits = [
  {
    icon: IconChartLine,
    title: "Data-Driven Strategy",
    description: "Every decision backed by analytics",
    stat: "10M+",
    statLabel: "Data points analyzed",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: IconBrandGoogle,
    title: "White-Hat Only",
    description: "Google-approved methods that last",
    stat: "100%",
    statLabel: "Compliant practices",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: IconReportAnalytics,
    title: "Transparent Reports",
    description: "Monthly metrics you understand",
    stat: "24/7",
    statLabel: "Dashboard access",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: IconGraph,
    title: "ROI Focused",
    description: "Measurable business results",
    stat: "312%",
    statLabel: "Avg. ROI increase",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: IconTargetArrow,
    title: "Industry Expertise",
    description: "E-commerce, healthcare, legal & more",
    stat: "50+",
    statLabel: "Industries served",
    gradient: "from-yellow-500 to-orange-500"
  },
];

const process = [
  {
    step: "01",
    title: "Deep Audit",
    description: "Comprehensive analysis of your current search presence and competitors",
    icon: IconSearch,
  },
  {
    step: "02",
    title: "Strategy",
    description: "Custom roadmap based on your goals, budget, and timeline",
    icon: IconTargetArrow,
  },
  {
    step: "03",
    title: "Execute",
    description: "On-page, technical, and off-page optimization implementation",
    icon: IconTools,
  },
  {
    step: "04",
    title: "Optimize",
    description: "Continuous monitoring, testing, and improvement",
    icon: IconChartLine,
  },
];

// Animated counter component
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

// Live ranking position indicator
function RankingIndicator() {
  const [positions, setPositions] = useState([3, 7, 12, 5, 2]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPositions((prev) =>
        prev.map((p) => Math.max(1, Math.min(10, p + (Math.random() > 0.5 ? -1 : 1))))
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-end gap-1 h-16">
      {positions.map((pos, i) => (
        <motion.div
          key={i}
          className="w-4 rounded-t bg-gradient-to-t from-green-500 to-emerald-400"
          initial={{ height: 0 }}
          animate={{ height: `${(11 - pos) * 10}%` }}
          transition={{ duration: 0.5 }}
        />
      ))}
    </div>
  );
}

export default function SEOPage() {
  return (
    <main className="bg-black relative">
      {/* Global Shooting Stars */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <ShootingStars
          starColor="#22c55e"
          trailColor="#10b981"
          minSpeed={15}
          maxSpeed={35}
          minDelay={800}
          maxDelay={2000}
        />
        <ShootingStars
          starColor="#06b6d4"
          trailColor="#22c55e"
          minSpeed={10}
          maxSpeed={25}
          minDelay={1500}
          maxDelay={3000}
        />
        <ShootingStars
          starColor="#10b981"
          trailColor="#06b6d4"
          minSpeed={20}
          maxSpeed={40}
          minDelay={1000}
          maxDelay={2500}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#22c55e" />

        {/* Animated grid background */}
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 via-transparent to-transparent" />

        {/* Floating data points */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-green-500/30"
              initial={{
                x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
                y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
                scale: 0,
              }}
              animate={{
                y: [null, -20, 20],
                scale: [0.5, 1, 0.5],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/20 mb-8"
            >
              <IconChartLine className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-medium">SEO & Search Optimization</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8">
              <span className="text-white">Dominate</span>
              <br />
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Search Results
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-400 max-w-3xl mx-auto mb-8 md:mb-12 px-4 sm:px-0">
              Data-driven SEO strategies that increase organic traffic,
              improve rankings, and drive qualified leads to your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <ShinyButton className="px-10 py-5 text-lg bg-gradient-to-r from-green-600 to-emerald-600 whitespace-nowrap">
                  Get Free SEO Audit
                  <IconArrowRight className="ml-2 w-5 h-5 inline" />
                </ShinyButton>
              </Link>
              <HoverBorderGradient
                containerClassName="rounded-full"
                className="flex items-center gap-2 px-8 py-4 whitespace-nowrap"
              >
                <IconChartBar className="w-5 h-5" />
                See Case Studies
              </HoverBorderGradient>
            </div>
          </motion.div>

          {/* Animated Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group text-center p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-green-500/5 to-emerald-500/5 border border-green-500/10 backdrop-blur-sm overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-green-400 mx-auto mb-2 sm:mb-3" />
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-neutral-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* Services with Live Metrics */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Enhanced background effects */}
        <div className="absolute inset-0 bg-dot-white/[0.03] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]" />
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-green-500/8 rounded-full blur-[200px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px]" />

        {/* Animated gradient line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-20"
          >
            {/* Enhanced badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full text-sm bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-400 border border-green-500/20 mb-8 backdrop-blur-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="font-medium">Live Results</span>
              <span className="h-4 w-px bg-green-500/30" />
              <span className="text-green-300/70 text-xs">Updated in real-time</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 tracking-tight">
              SEO Services That
              <br />
              <span className="relative">
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Deliver Results
                </span>
                {/* Underline accent */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-cyan-500 rounded-full origin-left"
                />
              </span>
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto mt-6">
              Proven strategies backed by data. Real metrics from real campaigns.
            </p>
          </motion.div>

          {/* Bento-style grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`group relative rounded-3xl bg-gradient-to-br from-neutral-900/95 to-neutral-950/95 border border-white/5 hover:border-green-500/40 transition-all duration-500 overflow-hidden backdrop-blur-xl ${
                  index === 0 ? "lg:col-span-7 p-8" :
                  index === 1 ? "lg:col-span-5 p-8" :
                  index === 2 ? "lg:col-span-5 p-8" :
                  "lg:col-span-7 p-8"
                }`}
              >
                {/* Animated gradient border on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-700`} />

                {/* Corner accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${service.gradient} opacity-5 blur-2xl group-hover:opacity-10 transition-opacity`} />

                {/* Animated lines */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {service.badge && (
                  <motion.span
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="absolute top-6 right-6 px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border border-green-500/30 shadow-lg shadow-green-500/10"
                  >
                    {service.badge}
                  </motion.span>
                )}

                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon with glow effect */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity`} />
                    <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-[2px]`}>
                      <div className="w-full h-full rounded-2xl bg-black/90 flex items-center justify-center backdrop-blur-xl">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-green-50 transition-colors">{service.title}</h3>
                  <p className="text-neutral-400 mb-8 leading-relaxed text-base flex-grow">{service.description}</p>

                  {/* Enhanced metrics display */}
                  <div className="grid grid-cols-2 gap-4">
                    {service.metrics.map((metric, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="relative p-4 rounded-2xl bg-gradient-to-br from-black/60 to-black/40 border border-white/5 group-hover:border-white/10 transition-colors overflow-hidden"
                      >
                        {/* Subtle gradient overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-[0.03]`} />

                        <div className="relative">
                          <div className="text-[10px] text-neutral-500 uppercase tracking-widest font-medium mb-2">
                            {metric.label}
                          </div>
                          <div className="flex items-baseline gap-1">
                            <span className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                              {metric.value}
                            </span>
                          </div>
                          {/* Mini progress indicator */}
                          <div className="mt-3 h-1 rounded-full bg-white/5 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: "100%" }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.6 + i * 0.2, duration: 1 }}
                              className={`h-full rounded-full bg-gradient-to-r ${service.gradient}`}
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA hint */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex justify-center mt-12"
          >
            <Link href="/contact" className="group inline-flex items-center gap-3 text-neutral-400 hover:text-green-400 transition-colors">
              <span className="text-sm">See how we can help your business</span>
              <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Process - Vertical Timeline */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-green-950/10 to-black" />

        <div className="relative max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-green-500/10 text-green-400 border border-green-500/20 mb-6">
              Our Process
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              The Path to
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> Page One</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-green-500/50 via-emerald-500/50 to-cyan-500/50" />

            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-green-500 border-4 border-black z-10" />

                <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/5 hover:border-green-500/30 transition-colors">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <div className="text-sm text-green-400 font-medium">Step {item.step}</div>
                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      </div>
                    </div>
                    <p className="text-neutral-400">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid - Premium Design */}
      <section className="relative py-40 overflow-hidden">
        {/* Complex layered background */}
        <div className="absolute inset-0">
          {/* Animated gradient mesh */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(16,185,129,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.08),transparent_50%)]" />

          {/* Animated grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
        </div>

        {/* Floating orbs */}
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-[15%] w-64 h-64 bg-green-500/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 right-[15%] w-80 h-80 bg-emerald-500/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px]"
        />

        {/* Decorative floating elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            className="absolute w-1 h-1 bg-green-400 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
          />
        ))}

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Header with split design */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:max-w-2xl"
            >
              {/* Animated badge */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full text-sm bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-cyan-500/10 border border-green-500/20 mb-8 backdrop-blur-sm"
              >
                <span className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  <span className="text-green-400 font-medium">Proven Methodology</span>
                </span>
                <span className="h-4 w-px bg-green-500/30" />
                <span className="text-neutral-400">5 Core Pillars</span>
              </motion.div>

              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                Why Our{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    SEO Works
                  </span>
                  <motion.svg
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="absolute -bottom-4 left-0 w-full h-4"
                    viewBox="0 0 200 20"
                    fill="none"
                  >
                    <motion.path
                      d="M0 15 Q50 5 100 15 T200 15"
                      stroke="url(#underline-gradient)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <defs>
                      <linearGradient id="underline-gradient" x1="0" y1="0" x2="200" y2="0">
                        <stop offset="0%" stopColor="#22c55e" />
                        <stop offset="50%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#06b6d4" />
                      </linearGradient>
                    </defs>
                  </motion.svg>
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:text-right"
            >
              <p className="text-xl text-neutral-400 max-w-md">
                What makes our approach different — and why it delivers{" "}
                <span className="text-white font-medium">consistent results</span>
              </p>
            </motion.div>
          </div>

          {/* Premium Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -12, scale: 1.02, transition: { duration: 0.3 } }}
                className={`group relative ${
                  index === 0 ? "md:col-span-2 lg:col-span-1 lg:row-span-2" : ""
                }`}
              >
                <div className={`relative h-full rounded-[2rem] overflow-hidden ${
                  index === 0 ? "min-h-[400px] lg:min-h-full" : "min-h-[280px]"
                }`}>
                  {/* Animated border gradient */}
                  <div className="absolute inset-0 rounded-[2rem] p-[1px] bg-gradient-to-br from-white/10 via-transparent to-white/5 group-hover:from-green-500/50 group-hover:via-emerald-500/30 group-hover:to-cyan-500/50 transition-all duration-700">
                    <div className="absolute inset-[1px] rounded-[calc(2rem-1px)] bg-gradient-to-br from-neutral-900 via-neutral-950 to-black" />
                  </div>

                  {/* Inner content */}
                  <div className="relative h-full p-8 flex flex-col">
                    {/* Gradient orb in corner */}
                    <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${benefit.gradient} rounded-full blur-[80px] opacity-20 group-hover:opacity-40 group-hover:scale-150 transition-all duration-700`} />

                    {/* Icon container with morphing background */}
                    <div className="relative z-10 mb-6">
                      <div className={`absolute inset-0 w-20 h-20 bg-gradient-to-br ${benefit.gradient} rounded-2xl blur-2xl opacity-30 group-hover:opacity-60 group-hover:scale-110 transition-all duration-500`} />
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                        className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${benefit.gradient} p-[2px]`}
                      >
                        <div className="w-full h-full rounded-2xl bg-black/80 backdrop-blur-xl flex items-center justify-center">
                          <benefit.icon className="w-10 h-10 text-white" />
                        </div>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex-1 flex flex-col">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-green-50 transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-neutral-400 text-lg leading-relaxed mb-6 flex-1">
                        {benefit.description}
                      </p>

                      {/* Stat display */}
                      <div className="mt-auto">
                        <div className={`inline-flex items-center gap-4 px-5 py-3 rounded-2xl bg-gradient-to-r ${benefit.gradient} bg-opacity-10 border border-white/5 group-hover:border-white/10 transition-colors`} style={{ background: `linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.3))` }}>
                          <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent`}>
                            {benefit.stat}
                          </div>
                          <div className="h-8 w-px bg-white/10" />
                          <div className="text-sm text-neutral-400">
                            {benefit.statLabel}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom accent line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                      className={`absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r ${benefit.gradient} origin-left opacity-50 group-hover:opacity-100 transition-opacity`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Premium CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-20 relative"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-cyan-500/20 blur-xl" />
            <div className="relative rounded-[2rem] p-[1px] bg-gradient-to-r from-green-500/50 via-emerald-500/50 to-cyan-500/50">
              <div className="rounded-[calc(2rem-1px)] bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 p-8 md:p-12">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                  {/* Left side with stats */}
                  <div className="flex flex-col sm:flex-row items-center gap-8">
                    <div className="flex items-center gap-6">
                      {[
                        { value: "500+", label: "Clients" },
                        { value: "98%", label: "Retention" },
                        { value: "10x", label: "Avg. ROI" },
                      ].map((stat, i) => (
                        <div key={i} className="text-center">
                          <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                            {stat.value}
                          </div>
                          <div className="text-xs text-neutral-500 uppercase tracking-wider">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="hidden sm:block h-16 w-px bg-gradient-to-b from-transparent via-green-500/30 to-transparent" />
                    <div className="text-center sm:text-left">
                      <div className="text-white font-semibold text-lg">Ready to see real results?</div>
                      <div className="text-neutral-400">Join hundreds of businesses ranking on page one</div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(34,197,94,0.4)" }}
                      whileTap={{ scale: 0.98 }}
                      className="relative group/btn px-8 py-4 rounded-full overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-emerald-500 to-cyan-500" />
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                      <span className="relative flex items-center gap-2 text-black font-bold text-lg">
                        Start Your SEO Journey
                        <IconArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <BackgroundBeams className="opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-green-500/5 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 mb-8 p-4 rounded-2xl bg-green-500/10 border border-green-500/20">
              <RankingIndicator />
              <div className="text-left">
                <div className="text-sm text-green-400">Live Rankings</div>
                <div className="text-xs text-neutral-500">Avg position improvement</div>
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Rank{" "}
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                On Page One?
              </span>
            </h2>
            <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">
              Get a free SEO audit and discover untapped opportunities to grow your organic traffic.
            </p>
            <Link href="/contact">
              <ShinyButton className="px-12 py-6 text-xl">
                Schedule Free Consultation
                <IconArrowRight className="ml-2 w-6 h-6" />
              </ShinyButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
