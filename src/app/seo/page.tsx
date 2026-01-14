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
  { icon: IconChartLine, title: "Data-Driven Strategy", description: "Every decision backed by analytics" },
  { icon: IconBrandGoogle, title: "White-Hat Only", description: "Google-approved methods that last" },
  { icon: IconReportAnalytics, title: "Transparent Reports", description: "Monthly metrics you understand" },
  { icon: IconGraph, title: "ROI Focused", description: "Measurable business results" },
  { icon: IconTargetArrow, title: "Industry Expertise", description: "E-commerce, healthcare, legal & more" },
  { icon: IconUsers, title: "Dedicated Team", description: "Real experts, not bots" },
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
    <main className="bg-black">
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

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8">
              <span className="text-white">Dominate</span>
              <br />
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Search Results
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto mb-12">
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
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group text-center p-6 rounded-2xl bg-gradient-to-br from-green-500/5 to-emerald-500/5 border border-green-500/10 backdrop-blur-sm overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <stat.icon className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* Services with Live Metrics */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-dot-white/[0.05] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[150px]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-green-500/10 text-green-400 border border-green-500/20 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative rounded-full h-2 w-2 bg-green-500" />
              </span>
              Live Results
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              SEO Services That
              <br />
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Deliver Results
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
                className="group relative p-8 rounded-3xl bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border border-white/5 hover:border-green-500/30 transition-all duration-500 overflow-hidden"
              >
                {/* Hover glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                {service.badge && (
                  <span className="absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                    {service.badge}
                  </span>
                )}

                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-0.5 mb-6`}>
                    <div className="w-full h-full rounded-xl bg-black flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-neutral-400 mb-6 leading-relaxed">{service.description}</p>

                  {/* Live metrics display */}
                  <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-black/50 border border-white/5">
                    {service.metrics.map((metric, i) => (
                      <div key={i}>
                        <div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">
                          {metric.label}
                        </div>
                        <div className={`text-xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                          {metric.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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

      {/* Benefits Grid */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Our <span className="text-green-400">SEO Works</span>
            </h2>
            <p className="text-lg text-neutral-400">What makes our approach different</p>
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
                className="group p-6 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/5 hover:border-green-500/30 transition-all"
              >
                <div className="p-3 rounded-xl bg-green-500/10 border border-green-500/20 w-fit mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-6 h-6 text-green-400" />
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
