"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

const DummyContent = ({ description }: { description: string }) => {
  return (
    <div className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto">
        {description}
      </p>
    </div>
  );
};

const data = [
  {
    category: "High-performance, conversion-focused websites",
    title: "Web Design",
    src: "/images/webdev.jpg",
    content: (
      <DummyContent description="We build modern, responsive websites designed to engage and convert your audience. Speed, design, and UX — everything optimized to turn visitors into loyal clients. Our websites are built with the latest technologies and best practices for maximum performance." />
    ),
  },
  {
    category: "Data-driven optimization for search rankings",
    title: "SEO Strategy",
    src: "/images/seo.jpg",
    content: (
      <DummyContent description="Boost your visibility with strategies that drive organic traffic and long-term growth. From keywords to backlinks, we engineer visibility that grows with your brand. Our SEO experts use data-driven approaches to put you at the top of search results." />
    ),
  },
  {
    category: "Targeted campaigns that deliver real ROI",
    title: "Digital Advertising",
    src: "/images/ads.jpg",
    content: (
      <DummyContent description="Targeted campaigns across Google and social platforms that deliver real results. Whether you're starting small or scaling big, our ad systems flex to your goals. We optimize every dollar spent to maximize your return on investment." />
    ),
  },
  {
    category: "Visual systems that make you unforgettable",
    title: "Brand Identity",
    src: "/images/branding.jpg",
    content: (
      <DummyContent description="From logos to voice — build a brand identity that stands out and connects. Custom design, bold branding, and storytelling that makes your business unforgettable. We create cohesive visual identities that resonate with your target audience." />
    ),
  },
];

export function AllInOneSolution() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            All-in-One Solution
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl">
            Everything your brand needs — from strategy and design to SEO and digital advertising.
          </p>
        </motion.div>
      </div>

      <Carousel items={cards} />
    </section>
  );
}
