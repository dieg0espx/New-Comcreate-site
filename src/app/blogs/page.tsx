import type { Metadata } from "next";
import { BlogHero } from "@/components/sections/BlogHero";
import { BlogGrid } from "@/components/sections/BlogGrid";
import { BlogPost } from "@/components/sections/BlogCard";

export const metadata: Metadata = {
  title: "Blog | Comcreate",
  description:
    "Expert digital marketing insights, industry trends, and actionable strategies to help your business grow online.",
};

const blogPosts: BlogPost[] = [
  {
    slug: "small-business-seo-strategies",
    title: "How Small Business SEO Drives Long-Term Growth",
    excerpt:
      "Discover how small business SEO drives long-term growth with proven local SEO strategies. See real client results and get actionable tips to boost your organic traffic.",
    category: "SEO",
    readTime: "8 min read",
    date: "Jan 15, 2025",
    gradient: "from-green-500 to-emerald-500",
    featured: true,
  },
  {
    slug: "local-seo-google-maps-ranking",
    title: "Local SEO: How to Rank in Google Maps & Near Me Searches",
    excerpt:
      "Learn how local SEO helps small businesses rank in Google Maps and near me searches. Get actionable tips for Google Business Profile optimization and drive more local leads.",
    category: "SEO",
    readTime: "10 min read",
    date: "Jan 12, 2025",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    slug: "how-long-does-seo-take",
    title: "How Long Does SEO Take? A Realistic Timeline",
    excerpt:
      "Wondering how long SEO takes to work? Get honest answers about SEO timelines for small businesses, what to expect month by month, and how to measure real progress.",
    category: "SEO",
    readTime: "9 min read",
    date: "Jan 8, 2025",
    gradient: "from-purple-500 to-pink-500",
  },
];

export default function BlogsPage() {
  return (
    <main>
      <BlogHero />
      <BlogGrid posts={blogPosts} />
    </main>
  );
}
