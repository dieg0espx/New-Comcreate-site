"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  IconAd,
  IconBrandGoogle,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconBrandTiktok,
  IconTargetArrow,
  IconChartPie,
  IconArrowRight,
  IconCheck,
  IconTrendingUp,
  IconUsers,
  IconCoin,
  IconEye,
  IconClick,
  IconChartBar,
  IconSparkles,
  IconBolt,
  IconBrandTwitter,
  IconBrandPinterest,
  IconPlayerPlay,
  IconAdjustments,
  IconReportAnalytics,
} from "@tabler/icons-react";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Spotlight } from "@/components/ui/spotlight";
import { SparklesCore } from "@/components/ui/sparkles";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

const platforms = [
  { icon: IconBrandGoogle, name: "Google Ads", color: "from-blue-500 to-blue-400", stat: "5.2x ROAS" },
  { icon: IconBrandFacebook, name: "Meta Ads", color: "from-blue-600 to-indigo-500", stat: "4.8x ROAS" },
  { icon: IconBrandInstagram, name: "Instagram", color: "from-pink-500 to-purple-500", stat: "-35% CPA" },
  { icon: IconBrandLinkedin, name: "LinkedIn", color: "from-blue-700 to-blue-500", stat: "+200% Leads" },
  { icon: IconBrandYoutube, name: "YouTube", color: "from-red-600 to-red-500", stat: "10M+ Views" },
  { icon: IconBrandTiktok, name: "TikTok", color: "from-neutral-800 to-neutral-600", stat: "+150% Eng" },
  { icon: IconBrandTwitter, name: "X/Twitter", color: "from-neutral-700 to-neutral-500", stat: "3.2x ROAS" },
  { icon: IconBrandPinterest, name: "Pinterest", color: "from-red-600 to-red-400", stat: "-28% CPC" },
];

const services = [
  {
    icon: IconBrandGoogle,
    title: "Search Advertising",
    description:
      "Google Ads campaigns that reach customers actively searching for your products. Shopping ads, display network, YouTube video ads, and local campaigns.",
    badge: "Google Ads",
    gradient: "from-blue-500 to-cyan-500",
    features: ["Search Campaigns", "Shopping Ads", "Display Network", "YouTube Ads"],
    stats: { roas: "5.2x", cpc: "-40%" },
  },
  {
    icon: IconBrandFacebook,
    title: "Social Media Ads",
    description:
      "Engaging Facebook and Instagram campaigns that build brand awareness. Feed ads, story ads, carousel ads, and lead generation campaigns.",
    badge: "Meta Ads",
    gradient: "from-pink-500 to-purple-500",
    features: ["Feed Ads", "Story Ads", "Reels Ads", "Lead Gen"],
    stats: { roas: "4.8x", cpc: "-35%" },
  },
  {
    icon: IconBrandLinkedin,
    title: "LinkedIn Ads",
    description:
      "Target B2B professionals and decision-makers with sponsored content, message ads, and dynamic lead gen forms.",
    badge: "B2B Focus",
    gradient: "from-blue-600 to-blue-400",
    features: ["Sponsored Content", "Message Ads", "Lead Gen Forms", "ABM Targeting"],
    stats: { roas: "3.5x", leads: "+200%" },
  },
  {
    icon: IconBrandYoutube,
    title: "Video Advertising",
    description:
      "Compelling YouTube and TikTok video campaigns that drive engagement and conversions across platforms.",
    badge: "Video First",
    gradient: "from-red-500 to-orange-500",
    features: ["Pre-roll Ads", "In-stream Ads", "TikTok Ads", "Connected TV"],
    stats: { views: "10M+", engagement: "+150%" },
  },
];

const benefits = [
  { icon: IconTargetArrow, title: "Precision Targeting", description: "Reach your exact audience with advanced targeting", gradient: "from-purple-500 to-pink-500" },
  { icon: IconChartPie, title: "Data-Driven", description: "Every decision backed by real-time analytics", gradient: "from-blue-500 to-cyan-500" },
  { icon: IconCoin, title: "Maximum ROI", description: "Optimize every dollar for peak performance", gradient: "from-green-500 to-emerald-500" },
  { icon: IconBolt, title: "Multi-Platform", description: "Seamless campaigns across all networks", gradient: "from-yellow-500 to-orange-500" },
  { icon: IconSparkles, title: "Creative Excellence", description: "Scroll-stopping ads that convert", gradient: "from-pink-500 to-rose-500" },
  { icon: IconChartBar, title: "Transparent Reporting", description: "Real-time dashboards and insights", gradient: "from-indigo-500 to-purple-500" },
];

const process = [
  { step: "01", title: "Research", description: "Deep dive into your audience, competition, and market opportunities", icon: IconReportAnalytics, gradient: "from-blue-500 to-cyan-500" },
  { step: "02", title: "Strategy", description: "Custom campaign structure with precise targeting and budget allocation", icon: IconAdjustments, gradient: "from-purple-500 to-pink-500" },
  { step: "03", title: "Creative", description: "High-converting ad creative and compelling copy that resonates", icon: IconSparkles, gradient: "from-pink-500 to-rose-500" },
  { step: "04", title: "Optimize", description: "Continuous A/B testing and optimization for peak performance", icon: IconTrendingUp, gradient: "from-green-500 to-emerald-500" },
];

// Animated metrics display
function LiveMetrics() {
  const [metrics, setMetrics] = useState({
    impressions: 1234567,
    clicks: 45678,
    conversions: 1234,
    roas: 5.2,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) => ({
        impressions: prev.impressions + Math.floor(Math.random() * 100),
        clicks: prev.clicks + Math.floor(Math.random() * 10),
        conversions: prev.conversions + Math.floor(Math.random() * 3),
        roas: Math.round((prev.roas + (Math.random() - 0.5) * 0.1) * 10) / 10,
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const metricItems = [
    { label: "Impressions", value: metrics.impressions.toLocaleString(), icon: IconEye, gradient: "from-purple-500 to-pink-500", change: "+12.3%" },
    { label: "Clicks", value: metrics.clicks.toLocaleString(), icon: IconClick, gradient: "from-blue-500 to-cyan-500", change: "+8.7%" },
    { label: "Conversions", value: metrics.conversions.toLocaleString(), icon: IconTrendingUp, gradient: "from-green-500 to-emerald-500", change: "+15.2%" },
    { label: "ROAS", value: `${metrics.roas}x`, icon: IconCoin, gradient: "from-yellow-500 to-orange-500", change: "+0.3x" },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {metricItems.map((metric, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -5, scale: 1.02 }}
          className="group relative p-6 rounded-2xl bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border border-white/5 hover:border-purple-500/30 transition-all overflow-hidden"
        >
          {/* Background glow */}
          <div className={`absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br ${metric.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />

          <div className="relative z-10">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${metric.gradient} p-[1px] mb-4`}>
              <div className="w-full h-full rounded-xl bg-black flex items-center justify-center">
                <metric.icon className="w-5 h-5 text-white" />
              </div>
            </div>

            <div className="text-3xl font-bold text-white mb-1">
              {metric.value}
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-neutral-500">{metric.label}</span>
              <span className="text-xs text-green-400 font-medium">{metric.change}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Enhanced Platform Showcase
function PlatformShowcase() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {platforms.map((platform, i) => (
        <motion.div
          key={platform.name}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          whileHover={{ y: -8, scale: 1.05 }}
          className="group relative p-5 rounded-2xl bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 border border-white/5 hover:border-purple-500/30 transition-all overflow-hidden cursor-pointer"
        >
          {/* Hover glow */}
          <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

          <div className="relative z-10 flex flex-col items-center text-center">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${platform.color} p-[1px] mb-3`}>
              <div className="w-full h-full rounded-xl bg-black flex items-center justify-center">
                <platform.icon className="w-6 h-6 text-white" />
              </div>
            </div>
            <h4 className="text-sm font-semibold text-white mb-1">{platform.name}</h4>
            <span className={`text-xs font-medium bg-gradient-to-r ${platform.color} bg-clip-text text-transparent`}>
              {platform.stat}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function AdsPage() {
  const [activeService, setActiveService] = useState(0);

  return (
    <main className="bg-black relative">
      {/* Global Star Background */}
      <div className="fixed inset-0 z-0">
        <StarsBackground />
        <ShootingStars />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden z-10">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#a855f7" />
        <Spotlight className="top-40 right-0 md:right-60" fill="#ec4899" />

        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid-white/[0.02]" />

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: `linear-gradient(to right, ${i % 2 === 0 ? '#a855f7' : '#ec4899'}, transparent)`,
                left: `${Math.random() * 100}%`,
              }}
              initial={{ y: "100vh", opacity: 0 }}
              animate={{
                y: "-100vh",
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear",
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-purple-400 opacity-75" />
                <span className="relative rounded-full h-2 w-2 bg-purple-500" />
              </span>
              <span className="text-purple-400 font-medium">Paid Advertising</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8">
              <span className="text-white">Ads That</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Actually Convert
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto mb-12">
              Data-driven ad campaigns across Google, Meta, LinkedIn, and more.
              <br className="hidden md:block" />
              <span className="text-white font-medium">Reach your ideal customers</span> and maximize every dollar spent.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/contact">
                <ShinyButton className="px-10 py-5 text-lg">
                  Get Free Ad Audit
                  <IconArrowRight className="ml-2 w-5 h-5" />
                </ShinyButton>
              </Link>
              <button className="group px-10 py-5 rounded-full border border-purple-500/30 text-white hover:bg-purple-500/10 transition-all flex items-center justify-center gap-2">
                <IconPlayerPlay className="w-5 h-5 group-hover:scale-110 transition-transform" />
                See Case Studies
              </button>
            </div>

            {/* Hero Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto"
            >
              {[
                { value: "$10M+", label: "Ad Spend Managed", gradient: "from-purple-500 to-pink-500" },
                { value: "5.2x", label: "Average ROAS", gradient: "from-blue-500 to-cyan-500" },
                { value: "500+", label: "Campaigns Launched", gradient: "from-green-500 to-emerald-500" },
                { value: "-40%", label: "Cost Per Acquisition", gradient: "from-orange-500 to-red-500" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 border border-white/5 hover:border-purple-500/20 transition-all"
                >
                  <div className={`text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-neutral-500 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* Platform Showcase */}
      <section className="relative py-24 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Certified Partners Across All Major Platforms</h3>
            <p className="text-neutral-500">We manage campaigns where your customers are</p>
          </motion.div>

          <PlatformShowcase />
        </div>
      </section>

      {/* Services - Premium Bento Grid */}
      <section className="relative py-32 overflow-hidden z-10">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[120px]" />

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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-400 border border-purple-500/20 mb-8"
            >
              <IconSparkles className="w-4 h-4" />
              Advertising Services
            </motion.span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Full-Funnel
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Ad Solutions
              </span>
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              From awareness to conversion, we craft campaigns that drive measurable results
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Search Ads - Large Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-7 group"
            >
              <div className="relative h-full p-8 md:p-10 rounded-3xl bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border border-white/5 hover:border-blue-500/30 transition-all duration-500 overflow-hidden">
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
                  Google Ads
                </motion.span>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="relative w-20 h-20 mb-8">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />
                    <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-[2px]">
                      <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
                        <IconBrandGoogle className="w-10 h-10 text-white" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Search Advertising</h3>
                  <p className="text-neutral-400 text-lg mb-8 leading-relaxed max-w-lg">
                    Google Ads campaigns that reach customers actively searching for your products. Shopping ads, display network, YouTube video ads, and local campaigns.
                  </p>

                  {/* Stats Pills */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                      <span className="text-2xl font-bold text-blue-400">5.2x</span>
                      <span className="text-sm text-neutral-400">ROAS</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
                      <span className="text-2xl font-bold text-green-400">-40%</span>
                      <span className="text-sm text-neutral-400">CPC</span>
                    </div>
                  </div>

                  {/* Features */}
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

            {/* Meta Ads - Medium Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-5 group"
            >
              <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border border-white/5 hover:border-pink-500/30 transition-all duration-500 overflow-hidden">
                {/* Background glow */}
                <div className="absolute -top-20 -right-20 w-48 h-48 bg-pink-500/15 rounded-full blur-[80px] group-hover:bg-pink-500/25 transition-colors duration-500" />

                {/* Badge */}
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, type: "spring" }}
                  className="absolute top-6 right-6 px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg shadow-pink-500/25 flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Meta Ads
                </motion.span>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="relative w-16 h-16 mb-6">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500" />
                    <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 p-[2px]">
                      <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
                        <IconBrandFacebook className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">Social Media Ads</h3>
                  <p className="text-neutral-400 mb-6 leading-relaxed">
                    Engaging Facebook and Instagram campaigns that build brand awareness and drive conversions.
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
                        <div className="w-6 h-6 rounded-full bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                          <IconCheck className="w-3.5 h-3.5 text-pink-400" />
                        </div>
                        <span className="text-sm text-neutral-400">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500/0 via-pink-500/50 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>

            {/* LinkedIn Ads */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-5 group"
            >
              <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border border-white/5 hover:border-blue-600/30 transition-all duration-500 overflow-hidden">
                {/* Background glow */}
                <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-blue-600/15 rounded-full blur-[80px] group-hover:bg-blue-600/25 transition-colors duration-500" />

                {/* Badge */}
                <span className="absolute top-6 right-6 px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-600 to-blue-400 text-white">
                  B2B Focus
                </span>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="relative w-16 h-16 mb-6">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500" />
                    <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 p-[2px]">
                      <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
                        <IconBrandLinkedin className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">LinkedIn Ads</h3>
                  <p className="text-neutral-400 mb-6 leading-relaxed">
                    Target B2B professionals and decision-makers with precision targeting.
                  </p>

                  {/* Features as pills */}
                  <div className="flex flex-wrap gap-2">
                    {services[2].features.map((feature, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.08 }}
                        className="px-4 py-2 rounded-full text-sm bg-blue-600/10 border border-blue-600/20 text-blue-300"
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-600/10 to-transparent rounded-bl-full" />
              </div>
            </motion.div>

            {/* Video Ads */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-7 group"
            >
              <div className="relative h-full p-8 md:p-10 rounded-3xl bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border border-white/5 hover:border-red-500/30 transition-all duration-500 overflow-hidden">
                {/* Background glow */}
                <div className="absolute -top-20 -left-20 w-48 h-48 bg-red-500/15 rounded-full blur-[80px] group-hover:bg-red-500/25 transition-colors duration-500" />
                <div className="absolute -bottom-20 -right-20 w-36 h-36 bg-orange-500/10 rounded-full blur-[60px] group-hover:bg-orange-500/20 transition-colors duration-500" />

                <div className="relative z-10 flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    {/* Icon */}
                    <div className="relative w-16 h-16 mb-6">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500" />
                      <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 p-[2px]">
                        <div className="w-full h-full rounded-2xl bg-black flex items-center justify-center">
                          <IconBrandYoutube className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>

                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-red-500 to-orange-500 text-white mb-4">
                      Video First
                    </span>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Video Advertising</h3>
                    <p className="text-neutral-400 mb-6 leading-relaxed">
                      Compelling YouTube and TikTok video campaigns that drive engagement and conversions across platforms.
                    </p>
                  </div>

                  {/* Features */}
                  <div className="md:w-64 space-y-3">
                    {services[3].features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-red-500/10 to-transparent border border-red-500/10 hover:border-red-500/30 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center flex-shrink-0">
                          <IconCheck className="w-4 h-4 text-red-400" />
                        </div>
                        <span className="text-sm text-neutral-300 font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500/0 via-red-500/50 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Live Dashboard Preview */}
      <section className="relative py-32 border-y border-white/5 overflow-hidden z-10">
        <div className="absolute inset-0">
          <SparklesCore
            particleDensity={30}
            particleColor="#a855f7"
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
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-400 border border-purple-500/20 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative rounded-full h-2 w-2 bg-green-500" />
              </span>
              Live Dashboard
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Real-Time Campaign Metrics</h3>
            <p className="text-neutral-400 text-lg">Live data from our managed campaigns - updated every second</p>
          </motion.div>

          <LiveMetrics />

          {/* Additional dashboard info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-purple-500/5 border border-white/5 text-center"
          >
            <p className="text-neutral-400">
              Get access to your own real-time dashboard with{" "}
              <span className="text-white font-medium">24/7 monitoring</span> and{" "}
              <span className="text-white font-medium">custom reporting</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-32 overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[200px]" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-[150px]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-400 border border-purple-500/20 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-purple-400 opacity-75" />
                <span className="relative rounded-full h-2 w-2 bg-purple-500" />
              </span>
              Our Process
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              From Launch to{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Scale
              </span>
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              A proven 4-step process that transforms your ad spend into predictable revenue
            </p>
          </motion.div>

          {/* Desktop Process */}
          <div className="hidden lg:block">
            {/* Connection Line */}
            <div className="relative mb-16">
              <div className="absolute top-8 left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-full" />
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute top-8 left-[12.5%] right-[12.5%] h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full origin-left"
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
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} p-0.5 shadow-lg shadow-purple-500/20`}>
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
                  <div className="relative p-6 rounded-3xl bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border border-white/5 group-hover:border-purple-500/20 transition-all duration-500 h-full overflow-hidden">
                    {/* Hover glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                    {/* Step number */}
                    <div className={`text-7xl font-bold bg-gradient-to-br ${item.gradient} bg-clip-text text-transparent opacity-20 absolute -top-4 -right-2`}>
                      {item.step}
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-neutral-400 text-sm leading-relaxed">{item.description}</p>
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
                    <p className="text-neutral-400 text-sm">{item.description}</p>
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
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-400 border border-purple-500/20 mb-8">
              <IconCheck className="w-4 h-4" />
              Why Us
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Why Our{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Ads Work
              </span>
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              What makes our campaigns consistently deliver better results
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden z-10">
        <BackgroundBeams className="opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent" />

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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8"
            >
              <IconSparkles className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 font-medium">Free Ad Audit</span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Scale{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Your Ads?
              </span>
            </h2>
            <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">
              Get a free ad audit and discover untapped opportunities to grow your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <ShinyButton className="px-12 py-6 text-xl">
                  Schedule Strategy Call
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
