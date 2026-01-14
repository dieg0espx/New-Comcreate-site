"use client";

import { motion } from "framer-motion";
import { ShinyButton } from "@/components/ui/shiny-button";

export function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-neutral-400 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-400 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-neutral-400 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="(619) 555-0123"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-400 mb-2">
              Company Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Your Company"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-400 mb-2">
            Service Interest
          </label>
          <select className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors">
            <option value="">Select a service...</option>
            <option value="webdesign">Web Design & Development</option>
            <option value="seo">SEO Strategy</option>
            <option value="ads">Digital Advertising</option>
            <option value="branding">Branding & Identity</option>
            <option value="consultation">General Consultation</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-400 mb-2">
            Message *
          </label>
          <textarea
            required
            rows={5}
            className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
            placeholder="Tell us about your project..."
          />
        </div>

        <ShinyButton className="w-full py-4">Send Message</ShinyButton>
      </form>
    </motion.div>
  );
}
