"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import {
  IconExternalLink,
  IconWorld,
  IconChartBar,
  IconSpeakerphone,
  IconPalette,
  IconArrowRight,
} from "@tabler/icons-react";

interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  result?: string;
  liveUrl?: string;
  gradient?: string;
}

interface ProjectsGridProps {
  projects: Project[];
}

const tagIcons: Record<string, React.ReactNode> = {
  "Web Design": <IconWorld className="w-3 h-3" />,
  "SEO": <IconChartBar className="w-3 h-3" />,
  "Ads": <IconSpeakerphone className="w-3 h-3" />,
  "Branding": <IconPalette className="w-3 h-3" />,
};

const categories = ["All", "Landscaping", "Fitness", "Healthcare", "Home Services", "Childcare", "Waste Management", "Medical", "Roofing", "Boat Charters", "Construction", "E-Commerce"];

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  // Get unique categories from projects
  const availableCategories = ["All", ...new Set(projects.map(p => p.category))];

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,80,200,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(80,120,200,0.1),transparent_50%)]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-purple-400 text-sm font-medium">Our Portfolio</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Projects that{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                deliver results
              </span>
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full origin-left"
              />
            </span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            Real businesses, real transformations, real growth
          </p>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {availableCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeFilter === category
                  ? "bg-white text-black"
                  : "bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white border border-white/10"
              )}
            >
              {category}
              {category !== "All" && (
                <span className="ml-2 text-xs opacity-60">
                  ({projects.filter(p => p.category === category).length})
                </span>
              )}
            </button>
          ))}
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12"
        >
          {[
            { value: `${projects.length}+`, label: "Projects Delivered" },
            { value: "$2M+", label: "Revenue Generated" },
            { value: "100%", label: "Client Satisfaction" },
            { value: "15+", label: "Industries Served" },
          ].map((stat, i) => (
            <div
              key={i}
              className="relative group rounded-2xl bg-white/5 border border-white/10 p-3 sm:p-4 text-center hover:border-purple-500/30 transition-colors"
            >
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-[10px] sm:text-xs text-neutral-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Projects Bento Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {filteredProjects.map((project, index) => {
            const isLarge = index === 0 || index === 5;
            const isHovered = hoveredProject === project.title;

            return (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={cn(
                  "relative group rounded-3xl",
                  isLarge && "md:col-span-2 md:row-span-1"
                )}
                onMouseEnter={() => setHoveredProject(project.title)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Glowing Effect */}
                <GlowingEffect
                  blur={0}
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={2}
                />

                <div className={cn(
                  "relative h-full rounded-3xl bg-neutral-900 border border-white/10 overflow-hidden transition-all duration-500",
                  isHovered && "border-white/20"
                )}>
                  {/* Live Site Preview */}
                  {project.liveUrl && (
                    <div className={cn(
                      "relative overflow-hidden",
                      isLarge ? "h-64" : "h-48"
                    )}>
                      {/* Bottom gradient for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent z-10" />

                      {/* Category & Result Badges */}
                      <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-20">
                        <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-black/30 backdrop-blur-sm text-white border border-white/20">
                          {project.category}
                        </span>
                        {project.result && (
                          <motion.span
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="px-3 py-1.5 text-xs font-bold rounded-full bg-green-500/20 backdrop-blur-sm text-green-300 border border-green-500/30"
                          >
                            {project.result}
                          </motion.span>
                        )}
                      </div>

                      {/* Iframe Preview */}
                      <div className="absolute inset-0 overflow-hidden">
                        <iframe
                          src={project.liveUrl}
                          className="pointer-events-none"
                          title={project.title}
                          loading="lazy"
                          style={{
                            width: "400%",
                            height: "400%",
                            transform: "scale(0.25)",
                            transformOrigin: "top left",
                          }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Project Content */}
                  <div className="relative p-6">
                    {/* Title with animated underline */}
                    <div className="mb-3">
                      <h3 className="text-xl font-bold text-white inline-block">
                        {project.title}
                        <motion.div
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: isHovered ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 origin-left mt-1"
                        />
                      </h3>
                    </div>

                    {/* Description */}
                    <p className={cn(
                      "text-neutral-400 text-sm mb-4 leading-relaxed",
                      isLarge ? "line-clamp-3" : "line-clamp-2"
                    )}>
                      {project.description}
                    </p>

                    {/* Tags with icons */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1.5 px-3 py-1 text-xs rounded-full bg-white/5 text-neutral-300 border border-white/10"
                        >
                          {tagIcons[tag]}
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* View Site Button */}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center gap-2 text-sm font-medium text-white"
                      >
                        <span className="relative">
                          View Live Site
                          <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover/btn:w-full transition-all duration-300" />
                        </span>
                        <IconArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    )}
                  </div>

                  {/* Hover glow effect */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent pointer-events-none"
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Load More / CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-neutral-500 mb-6">
            Want to see your business here?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] transition-all duration-300"
          >
            Start Your Project
            <IconExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
