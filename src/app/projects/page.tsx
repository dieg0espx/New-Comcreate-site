import type { Metadata } from "next";
import { ProjectsHero } from "@/components/sections/ProjectsHero";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { ServiceCTA } from "@/components/sections/ServiceCTA";

export const metadata: Metadata = {
  title: "Our Projects | Comcreate",
  description:
    "Explore our portfolio of successful web design, SEO, and branding projects across multiple industries.",
};

const projects = [
  {
    title: "EM Landscape Design",
    category: "Landscaping",
    description:
      "EM Landscape Design needed a site that matched their image and effectively converted visitors into leads. We built a clean, fast, conversion-focused website that highlights their credibility. Combined with targeted Meta and Google Ads campaigns, the site has closed over $300,000 in new revenue from leads driven through our system.",
    tags: ["Web Design", "Ads"],
    result: "$300K Revenue",
    liveUrl: "https://www.emlandscapedesign.com/",
    gradient: "from-green-500/80 to-green-700/60",
  },
  {
    title: "Jake Rath",
    category: "Fitness",
    description:
      "Jake, an extremely talented fitness coach, needed a full website build to make it easy for clients to access his coaching and meal plans. He wanted a professional online presence that clearly showcased his skills as an athlete and coach. We delivered a clean, easy-to-use site designed to highlight his expertise and convert visitors into clients.",
    tags: ["Web Design"],
    liveUrl: "https://jake-rath.vercel.app/",
    gradient: "from-purple-500/80 to-pink-600/60",
  },
  {
    title: "Hansen Chiropractic",
    category: "Healthcare",
    description:
      "Hansen Chiropractic needed a full website revamp to showcase Dr. Hansen's expertise and earn the trust of new patients. We created a modern, easy-to-use website that clearly explains who Dr. Hansen is and what he offers. Built-in SEO now brings in steady, high-quality leads from local searches.",
    tags: ["Web Design", "SEO"],
    liveUrl: "https://www.hansenchiropracticaz.com/",
    gradient: "from-blue-500/80 to-cyan-600/60",
  },
  {
    title: "4 Corners",
    category: "Home Services",
    description:
      "4 Corners needed a complete website redesign and rebranding to better fit their style and stand out in the home services market. Their old site lacked a clear theme and didn't connect well with customers. We delivered a modern, professional look tailored to their ideal style, helping them build trust and attract the right clients.",
    tags: ["Web Design", "SEO"],
    liveUrl: "https://4corners-site.vercel.app/home",
    gradient: "from-orange-500/80 to-red-600/60",
  },
  {
    title: "Casita Azul",
    category: "Childcare",
    description:
      "Casita Azul needed an easy-to-use website that builds trust and comfort for parents. Their goal was to make it simple for new clients to learn about their services and feel confident choosing them. We delivered a clean, welcoming site with SEO to attract organic traffic and ad campaigns to bring in new clients.",
    tags: ["Web Design", "Ads"],
    liveUrl: "https://www.casitaazulpdx.com/es",
    gradient: "from-yellow-500/80 to-orange-600/60",
  },
  {
    title: "SD Dumps",
    category: "Waste Management",
    description:
      "SD Dumps needed a new website and branding to make their service easy to understand and book. Their goal was a smooth, solid user experience that converts visitors into customers. We delivered a clean, easy-to-navigate site with a strong interface designed to drive bookings.",
    tags: ["Web Design", "Branding"],
    liveUrl: "https://sd-dumps-site.vercel.app/",
    gradient: "from-indigo-500/80 to-purple-600/60",
  },
  {
    title: "V3 Biomedical",
    category: "Medical",
    description:
      "V3 Biomedical needed a full website redesign and rebranding to match their ideal style in the medical market. Their old site didn't reflect their professionalism or connect well with clients. We created a modern, clean site with a new logo and branding tailored to the medical field, helping them build trust and stand out.",
    tags: ["Web Design", "Branding"],
    liveUrl: "https://v3-biomedical-jade.vercel.app/",
    gradient: "from-cyan-500/80 to-blue-600/60",
  },
  {
    title: "King Roof",
    category: "Roofing",
    description:
      "King Roof needed a full website revamp to make it easy for customers to get quotes and drive more profitable leads. The old site was confusing and didn't support their sales process well. We built a clean, easy-to-navigate site with SEO to bring in organic traffic and a self-serve form to generate high-quality leads.",
    tags: ["Web Design", "SEO"],
    liveUrl: "https://www.kingroofco.com/",
    gradient: "from-gray-500/80 to-gray-700/60",
  },
  {
    title: "Reef Health",
    category: "Medical",
    description:
      "Complete website build that matched their ideal style in the medical market. Their old look didn't reflect the level of professionalism or trust they wanted to convey. We delivered a modern, clean site with consistent, medical-focused branding to help them stand out and connect with clients.",
    tags: ["Web Design"],
    liveUrl: "https://honestaffordablehealthcare.com/",
    gradient: "from-teal-500/80 to-green-600/60",
  },
  {
    title: "Endless Wave Charters",
    category: "Boat Charters",
    description:
      "Endless Wave Charters needed a complete digital revamp with new branding, created a logo, a clear website, and running effective ads. Their old site didn't clearly show what they offered or make booking easy. We delivered a modern site with clear boat listings, an easy-to-use form, and ad campaigns designed to bring in profitable leads.",
    tags: ["Web Design", "Branding", "Ads"],
    liveUrl: "https://www.endlesswavecharters.com/",
    gradient: "from-blue-500/80 to-indigo-600/60",
  },
  {
    title: "Cosent",
    category: "Medical",
    description:
      "Cosent needed a complete website and rebranding tailored to their ideal style in the medical market. Previously had no site, so this was a fresh build. We delivered a clean, modern website with consistent branding designed to build trust and clearly present their services.",
    tags: ["Web Design", "Branding"],
    liveUrl: "https://cosent-site.vercel.app/",
    gradient: "from-purple-500/80 to-pink-600/60",
  },
  {
    title: "Bald Eagle Builders",
    category: "Construction",
    description:
      "Bald Eagle Builders needed a revamped website to clearly show what they do and highlight their best projects. We created a clean, easy-to-use site that showcases their services and completed work.",
    tags: ["Web Design"],
    liveUrl: "https://www.baldeaglebuilders.com/",
    gradient: "from-yellow-500/80 to-orange-600/60",
  },
  {
    title: "RS Surf",
    category: "E-Commerce",
    description:
      "This project needed a complete Shopify website revamp to match and support an already strong brand. The old site didn't reflect their brand or quality. We delivered a modern, user-friendly store that strengthens their digital presence and drives sales.",
    tags: ["Web Design"],
    liveUrl: "https://rssurf.com",
    gradient: "from-blue-500/80 to-cyan-600/60",
  },
  {
    title: "House of Sacred Flame",
    category: "E-Commerce",
    description:
      "House of Sacred Flame needed their Shopify website completely redone to better showcase their products and improve the shopping experience. We delivered a modern, easy-to-use online store that highlights their brand and makes buying simple.",
    tags: ["Web Design"],
    liveUrl: "https://houseofsacredflame.com/",
    gradient: "from-red-500/80 to-pink-600/60",
  },
  {
    title: "San Diego Dumpster Pros",
    category: "Waste Management",
    description:
      "San Diego Dumpster Pros needed a new website, branding, and SEO to make their dumpster service easy to understand and book. They wanted a smooth, solid user experience that converts visitors into customers. We delivered a clean, easy-to-navigate site with a strong interface designed to drive bookings, along with SEO that brings in valuable organic traffic.",
    tags: ["Web Design", "Branding", "SEO"],
    liveUrl: "https://dumpster-glass.vercel.app/",
    gradient: "from-green-500/80 to-blue-600/60",
  },
];

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsHero />
      <ProjectsGrid projects={projects} />
      <ServiceCTA
        title="Ready to Start Your Project?"
        description="Let's create something amazing together."
        ctaText="Get Started"
        ctaHref="/contact"
      />
    </main>
  );
}
