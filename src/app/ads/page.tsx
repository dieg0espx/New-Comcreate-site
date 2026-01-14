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
} from "@tabler/icons-react";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Spotlight } from "@/components/ui/spotlight";
import { SparklesCore } from "@/components/ui/sparkles";
import { BackgroundBeams } from "@/components/ui/background-beams";

const platforms = [
  { icon: IconBrandGoogle, name: "Google", color: "#4285F4" },
  { icon: IconBrandFacebook, name: "Facebook", color: "#1877F2" },
  { icon: IconBrandInstagram, name: "Instagram", color: "#E4405F" },
  { icon: IconBrandLinkedin, name: "LinkedIn", color: "#0A66C2" },
  { icon: IconBrandYoutube, name: "YouTube", color: "#FF0000" },
  { icon: IconBrandTiktok, name: "TikTok", color: "#000000" },
  { icon: IconBrandTwitter, name: "Twitter", color: "#1DA1F2" },
  { icon: IconBrandPinterest, name: "Pinterest", color: "#E60023" },
];

const services = [
  {
    icon: IconBrandGoogle,
    title: "Search Advertising",
    description:
      "Google Ads campaigns that reach customers actively searching for your products. Shopping ads, display network, YouTube video ads, and local campaigns.",
    badge: "Google Ads",
    gradient: "from-blue-500 to-cyan-500",
    stats: { roas: "5.2x", cpc: "-40%" },
  },
  {
    icon: IconBrandFacebook,
    title: "Social Media Ads",
    description:
      "Engaging Facebook and Instagram campaigns that build brand awareness. Feed ads, story ads, carousel ads, and lead generation campaigns.",
    badge: "Meta Ads",
    gradient: "from-pink-500 to-purple-500",
    stats: { roas: "4.8x", cpc: "-35%" },
  },
  {
    icon: IconBrandLinkedin,
    title: "LinkedIn Ads",
    description:
      "Target B2B professionals and decision-makers with sponsored content, message ads, and dynamic lead gen forms.",
    gradient: "from-blue-600 to-blue-400",
    stats: { roas: "3.5x", leads: "+200%" },
  },
  {
    icon: IconBrandYoutube,
    title: "Video Advertising",
    description:
      "Compelling YouTube and TikTok video campaigns that drive engagement and conversions across platforms.",
    gradient: "from-red-500 to-orange-500",
    stats: { views: "10M+", engagement: "+150%" },
  },
];

const benefits = [
  { icon: IconTargetArrow, title: "Precision Targeting", description: "Find your ideal customers" },
  { icon: IconChartPie, title: "Data-Driven", description: "Continuous A/B testing" },
  { icon: IconCoin, title: "Maximum ROI", description: "Every dollar optimized" },
  { icon: IconBolt, title: "Multi-Platform", description: "All major networks" },
  { icon: IconSparkles, title: "Creative Excellence", description: "Ads that convert" },
  { icon: IconChartBar, title: "Transparent", description: "Real-time reporting" },
];

const process = [
  { step: "01", title: "Research", description: "Audience & competition analysis" },
  { step: "02", title: "Setup", description: "Campaign structure & tracking" },
  { step: "03", title: "Creative", description: "Ad design & copywriting" },
  { step: "04", title: "Optimize", description: "Test, learn, improve" },
];

// Animated metrics display
function LiveMetrics() {
  const [metrics, setMetrics] = useState({
    impressions: 1234567,
    clicks: 45678,
    conversions: 1234,
    spend: 12345,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) => ({
        impressions: prev.impressions + Math.floor(Math.random() * 100),
        clicks: prev.clicks + Math.floor(Math.random() * 10),
        conversions: prev.conversions + Math.floor(Math.random() * 3),
        spend: prev.spend + Math.floor(Math.random() * 50),
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        { label: "Impressions", value: metrics.impressions, icon: IconEye, color: "purple" },
        { label: "Clicks", value: metrics.clicks, icon: IconClick, color: "pink" },
        { label: "Conversions", value: metrics.conversions, icon: IconTrendingUp, color: "blue" },
        { label: "ROAS", value: "5.2x", icon: IconCoin, color: "green" },
      ].map((metric, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          className="p-4 rounded-xl bg-white/5 border border-white/10"
        >
          <metric.icon className={`w-5 h-5 text-${metric.color}-400 mb-2`} />
          <div className="text-2xl font-bold text-white">
            {typeof metric.value === "number"
              ? metric.value.toLocaleString()
              : metric.value}
          </div>
          <div className="text-xs text-neutral-500">{metric.label}</div>
        </motion.div>
      ))}
    </div>
  );
}

// Platform orbit animation
function PlatformOrbit() {
  return (
    <div className="relative w-64 h-64 mx-auto">
      {/* Center icon */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center z-10">
        <IconAd className="w-8 h-8 text-white" />
      </div>

      {/* Orbiting platforms */}
      {platforms.slice(0, 6).map((platform, i) => {
        const angle = (i * 60) * (Math.PI / 180);
        const radius = 100;
        return (
          <motion.div
            key={platform.name}
            className="absolute w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center"
            animate={{
              x: Math.cos(angle) * radius + 112,
              y: Math.sin(angle) * radius + 112,
              rotate: [0, 360],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              x: { duration: 0 },
              y: { duration: 0 },
            }}
            style={{ left: -20, top: -20 }}
          >
            <platform.icon className="w-5 h-5 text-white" />
          </motion.div>
        );
      })}

      {/* Orbit ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-purple-500/20" />
    </div>
  );
}

export default function AdsPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main className="bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#a855f7" />

        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-grid-white/[0.02]" />

        {/* Floating ad icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{
                x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
                y: (typeof window !== "undefined" ? window.innerHeight : 800) + 100,
                rotate: Math.random() * 360,
                opacity: 0.3,
              }}
              animate={{
                y: -100,
                rotate: Math.random() * 360 + 360,
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 10,
              }}
            >
              {i % 3 === 0 ? (
                <IconBrandGoogle className="w-6 h-6 text-purple-500/30" />
              ) : i % 3 === 1 ? (
                <IconBrandFacebook className="w-6 h-6 text-pink-500/30" />
              ) : (
                <IconBrandInstagram className="w-6 h-6 text-purple-500/30" />
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8"
            >
              <IconAd className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 font-medium">Digital Advertising</span>
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
              Reach your ideal customers and maximize every dollar spent.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/contact">
                <ShinyButton className="px-10 py-5 text-lg">
                  Get Free Ad Audit
                  <IconArrowRight className="ml-2 w-5 h-5" />
                </ShinyButton>
              </Link>
              <button className="px-10 py-5 rounded-full border border-purple-500/30 text-white hover:bg-purple-500/10 transition-colors flex items-center justify-center gap-2">
                <IconChartBar className="w-5 h-5" />
                See Case Studies
              </button>
            </div>

            {/* Platform logos row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {platforms.map((platform, i) => (
                <motion.div
                  key={platform.name}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-purple-500/30 transition-colors"
                >
                  <platform.icon className="w-6 h-6 text-white" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: "$10M+", label: "Ad Spend Managed" },
              { value: "5.2x", label: "Average ROAS" },
              { value: "500+", label: "Campaigns Launched" },
              { value: "-40%", label: "Cost Per Acquisition" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 border border-purple-500/10"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* Services - Tab Style */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-dot-white/[0.03]" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-6">
              <IconSparkles className="w-4 h-4" />
              Advertising Services
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Full-Funnel
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ad Solutions
              </span>
            </h2>
          </motion.div>

          {/* Service tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {services.map((service, i) => (
              <motion.button
                key={i}
                onClick={() => setActiveTab(i)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  activeTab === i
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                    : "bg-white/5 text-neutral-400 hover:text-white border border-white/10"
                }`}
              >
                <service.icon className="w-4 h-4 inline mr-2" />
                {service.title}
              </motion.button>
            ))}
          </div>

          {/* Active service content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className="p-8 rounded-3xl bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border border-white/5">
                {services[activeTab].badge && (
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${services[activeTab].gradient} text-white mb-4`}>
                    {services[activeTab].badge}
                  </span>
                )}
                <h3 className="text-3xl font-bold text-white mb-4">
                  {services[activeTab].title}
                </h3>
                <p className="text-neutral-400 mb-6 leading-relaxed text-lg">
                  {services[activeTab].description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(services[activeTab].stats).map(([key, value]) => (
                    <div key={key} className="p-4 rounded-xl bg-black/50 border border-white/5">
                      <div className={`text-2xl font-bold bg-gradient-to-r ${services[activeTab].gradient} bg-clip-text text-transparent`}>
                        {value}
                      </div>
                      <div className="text-xs text-neutral-500 uppercase">{key}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center">
                <PlatformOrbit />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Live Dashboard Preview */}
      <section className="relative py-24 border-y border-white/5 overflow-hidden">
        <div className="absolute inset-0">
          <SparklesCore
            particleDensity={30}
            particleColor="#a855f7"
            className="w-full h-full"
          />
        </div>
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Real-Time Campaign Metrics</h3>
            <p className="text-neutral-500">Live data from our managed campaigns</p>
          </motion.div>

          <LiveMetrics />
        </div>
      </section>

      {/* Process */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-6">
              Our Process
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              Launch to
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Scale</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/5 group-hover:border-purple-500/30 transition-all h-full">
                  <div className="text-5xl font-bold bg-gradient-to-r from-purple-500/20 to-pink-500/20 bg-clip-text text-transparent mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-neutral-400 text-sm">{item.description}</p>
                </div>

                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-purple-500/30 to-transparent" />
                )}
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
              Why Our <span className="text-purple-400">Ads Work</span>
            </h2>
            <p className="text-lg text-neutral-400">What makes our campaigns deliver better results</p>
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
                className="group p-6 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/5 hover:border-purple-500/30 transition-all"
              >
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 w-fit mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-6 h-6 text-purple-400" />
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
        <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Scale{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Your Ads?
              </span>
            </h2>
            <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">
              Get a free ad audit and discover untapped opportunities to grow your business.
            </p>
            <Link href="/contact">
              <ShinyButton className="px-12 py-6 text-xl">
                Schedule Strategy Call
                <IconArrowRight className="ml-2 w-6 h-6" />
              </ShinyButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
