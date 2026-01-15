"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { IconClock, IconArrowRight } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  gradient: string;
  image: string;
  featured?: boolean;
}

interface BlogCardProps {
  post: BlogPost;
  index: number;
  isHovered: boolean;
  onHover: (slug: string | null) => void;
}

export function BlogCard({ post, index, isHovered, onHover }: BlogCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={cn(
        "relative group rounded-3xl",
        post.featured && "md:col-span-2"
      )}
      onMouseEnter={() => onHover(post.slug)}
      onMouseLeave={() => onHover(null)}
    >
      <GlowingEffect
        blur={0}
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={2}
      />

      <Link href={`/blogs/${post.slug}`}>
        <div
          className={cn(
            "relative h-full rounded-3xl bg-neutral-900 border border-white/10 overflow-hidden transition-all duration-500",
            isHovered && "border-white/20"
          )}
        >
          {/* Image Header */}
          <div
            className={cn(
              "relative h-40 overflow-hidden",
              post.featured && "h-52"
            )}
          >
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-br opacity-40",
                post.gradient
              )}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/20 to-transparent" />

            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-black/50 backdrop-blur-sm text-white border border-white/20">
                {post.category}
              </span>
            </div>

            {/* Featured Badge */}
            {post.featured && (
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-yellow-500/20 backdrop-blur-sm text-yellow-300 border border-yellow-500/30">
                  Featured
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="relative p-6">
            {/* Title */}
            <div className="mb-3">
              <h3
                className={cn(
                  "font-bold text-white inline-block",
                  post.featured ? "text-2xl" : "text-xl"
                )}
              >
                {post.title}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 origin-left mt-1"
                />
              </h3>
            </div>

            {/* Excerpt */}
            <p
              className={cn(
                "text-neutral-400 text-sm mb-4 leading-relaxed",
                post.featured ? "line-clamp-3" : "line-clamp-2"
              )}
            >
              {post.excerpt}
            </p>

            {/* Meta */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-neutral-500">
                <span>{post.date}</span>
                <span className="flex items-center gap-1">
                  <IconClock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>

              {/* Read More */}
              <span className="group/btn inline-flex items-center gap-1 text-sm font-medium text-white">
                Read
                <IconArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>

          {/* Hover glow effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent pointer-events-none"
          />
        </div>
      </Link>
    </motion.div>
  );
}
