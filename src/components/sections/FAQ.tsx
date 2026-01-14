"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  IconPlus,
  IconMinus,
  IconQuestionMark,
  IconRocket,
  IconClock,
  IconCoin,
  IconHeadset,
  IconCode,
  IconChartBar,
  IconPalette,
  IconSparkles,
  IconArrowRight,
} from "@tabler/icons-react";
import Link from "next/link";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Most websites are completed within 2-4 weeks, depending on complexity. Simple landing pages can be done in as little as 1 week, while full e-commerce sites or custom web applications may take 4-8 weeks. We'll provide a detailed timeline during our initial consultation.",
    icon: IconClock,
    color: "blue",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    question: "What's included in your SEO services?",
    answer:
      "Our SEO services include comprehensive keyword research, on-page optimization, technical SEO audits, content strategy, link building, local SEO (Google Business Profile optimization), monthly reporting, and ongoing optimization. We focus on sustainable, white-hat techniques that deliver long-term results.",
    icon: IconChartBar,
    color: "green",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Our pricing varies based on project scope and requirements. Web design projects typically start at $2,500, SEO packages from $1,000/month, and ad management from $500/month + ad spend. We offer custom quotes tailored to your specific needs and budget. Contact us for a free consultation.",
    icon: IconCoin,
    color: "yellow",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer:
      "Yes! We offer monthly maintenance packages that include security updates, backups, performance monitoring, content updates, and priority support. We believe in building long-term partnerships with our clients to ensure their digital presence stays optimal.",
    icon: IconHeadset,
    color: "purple",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    question: "What platforms do you work with?",
    answer:
      "We specialize in modern technologies including React, Next.js, and custom development. We also work with WordPress, Shopify, Webflow, and other popular platforms. We'll recommend the best solution based on your specific needs, budget, and long-term goals.",
    icon: IconCode,
    color: "cyan",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    question: "How do you measure the success of ad campaigns?",
    answer:
      "We track key metrics including ROAS (Return on Ad Spend), CPA (Cost Per Acquisition), CTR (Click-Through Rate), conversion rates, and overall revenue generated. You'll receive detailed monthly reports with insights and recommendations for continuous improvement.",
    icon: IconRocket,
    color: "red",
    gradient: "from-red-500 to-orange-500",
  },
  {
    question: "Can you help with rebranding an existing business?",
    answer:
      "Absolutely! We offer comprehensive rebranding services including brand strategy, logo redesign, visual identity systems, brand guidelines, and website redesign. We'll help you refresh your brand while maintaining the equity you've built with your audience.",
    icon: IconPalette,
    color: "orange",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    question: "What makes Comcreate different from other agencies?",
    answer:
      "We combine cutting-edge technology with data-driven strategies and genuine partnership. We're not just vendors — we're invested in your success. Our team stays ahead of industry trends, we offer transparent pricing, and we focus on measurable results that impact your bottom line.",
    icon: IconSparkles,
    color: "pink",
    gradient: "from-pink-500 to-rose-500",
  },
];

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24h", label: "Response Time" },
  { value: "10+", label: "Years Experience" },
];

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group"
    >
      <div
        className={`relative rounded-3xl border transition-all duration-500 overflow-hidden ${
          isOpen
            ? "bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border-white/20 shadow-2xl shadow-blue-500/10"
            : "bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 border-white/5 hover:border-white/10 hover:bg-neutral-900/70"
        }`}
      >
        {/* Animated background glow when open */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${faq.gradient} opacity-10 rounded-full blur-[80px]`}
          />
        )}

        {/* Question */}
        <button
          onClick={onToggle}
          className="w-full flex items-center gap-5 p-6 md:p-8 text-left relative z-10"
        >
          {/* Icon */}
          <div
            className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
              isOpen
                ? `bg-gradient-to-br ${faq.gradient} shadow-lg`
                : "bg-white/5 group-hover:bg-white/10"
            }`}
          >
            <faq.icon
              className={`w-6 h-6 transition-colors duration-300 ${
                isOpen ? "text-white" : "text-neutral-400 group-hover:text-white"
              }`}
            />
          </div>

          {/* Question text */}
          <span
            className={`flex-1 text-lg md:text-xl font-semibold transition-colors duration-300 ${
              isOpen ? "text-white" : "text-neutral-300 group-hover:text-white"
            }`}
          >
            {faq.question}
          </span>

          {/* Toggle button */}
          <div
            className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
              isOpen
                ? `bg-gradient-to-br ${faq.gradient} rotate-0`
                : "bg-white/5 group-hover:bg-white/10"
            }`}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                <IconMinus className="w-5 h-5 text-white" />
              ) : (
                <IconPlus className="w-5 h-5 text-neutral-400 group-hover:text-white" />
              )}
            </motion.div>
          </div>
        </button>

        {/* Answer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              <div className="px-6 md:px-8 pb-8 relative z-10">
                {/* Gradient divider */}
                <div
                  className={`h-px w-full bg-gradient-to-r ${faq.gradient} opacity-30 mb-6`}
                />

                <div className="pl-[76px]">
                  <p className="text-neutral-400 leading-relaxed text-lg">
                    {faq.answer}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {["Learn More", "Get Quote", "Contact Us"].map((tag, i) => (
                      <span
                        key={i}
                        className={`px-4 py-1.5 rounded-full text-sm bg-gradient-to-r ${faq.gradient} bg-opacity-10 border border-white/10 text-neutral-300`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Split FAQs into two columns
  const leftFaqs = faqs.filter((_, i) => i % 2 === 0);
  const rightFaqs = faqs.filter((_, i) => i % 2 === 1);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/3 rounded-full blur-[200px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 border border-blue-500/20 backdrop-blur-sm mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Got Questions?
          </motion.span>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Frequently Asked{" "}
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto">
            Everything you need to know about working with us. Can&apos;t find what you&apos;re
            looking for? Our team is here to help.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative p-6 rounded-2xl bg-gradient-to-br from-neutral-900/80 to-neutral-950/80 border border-white/5 hover:border-blue-500/30 transition-all group overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-500">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Grid - Two Columns on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            {leftFaqs.map((faq, index) => (
              <FAQItem
                key={index * 2}
                faq={faq}
                index={index * 2}
                isOpen={openIndex === index * 2}
                onToggle={() => handleToggle(index * 2)}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {rightFaqs.map((faq, index) => (
              <FAQItem
                key={index * 2 + 1}
                faq={faq}
                index={index * 2 + 1}
                isOpen={openIndex === index * 2 + 1}
                onToggle={() => handleToggle(index * 2 + 1)}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border border-white/10 overflow-hidden">
            {/* Background glow */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px]" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px]" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Still have questions?
                </h3>
                <p className="text-neutral-400 text-lg max-w-lg">
                  Can&apos;t find the answer you&apos;re looking for? Our team is ready to help
                  you with any questions about our services.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                >
                  Contact Us
                  <IconArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="mailto:sales@comcreate.org"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/10 text-white font-semibold hover:bg-white/5 hover:border-white/20 transition-all"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
