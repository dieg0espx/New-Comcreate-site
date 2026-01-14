"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  IconPhone,
  IconMail,
  IconMapPin,
  IconClock,
  IconCalendar,
  IconSend,
  IconCheck,
  IconSparkles,
  IconMessageCircle,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { SparklesCore } from "@/components/ui/sparkles";

const contactDetails = [
  {
    icon: IconPhone,
    label: "Phone",
    value: "(619) 955-0105",
    href: "tel:6199550105",
    bgClass: "from-blue-500/10 to-blue-600/5 border-blue-500/20",
    iconClass: "text-blue-400",
  },
  {
    icon: IconMail,
    label: "Email",
    value: "sales@comcreate.org",
    href: "mailto:sales@comcreate.org",
    bgClass: "from-purple-500/10 to-purple-600/5 border-purple-500/20",
    iconClass: "text-purple-400",
  },
  {
    icon: IconMapPin,
    label: "Location",
    value: "San Diego, California",
    bgClass: "from-pink-500/10 to-pink-600/5 border-pink-500/20",
    iconClass: "text-pink-400",
  },
  {
    icon: IconClock,
    label: "Hours",
    value: "Mon-Fri: 9AM - 6PM PST",
    bgClass: "from-cyan-500/10 to-cyan-600/5 border-cyan-500/20",
    iconClass: "text-cyan-400",
  },
];

const socialLinks = [
  { icon: IconBrandLinkedin, href: "#", label: "LinkedIn" },
  { icon: IconBrandInstagram, href: "#", label: "Instagram" },
  { icon: IconBrandTwitter, href: "#", label: "Twitter" },
];

const services = [
  { value: "webdesign", label: "Web Design & Development" },
  { value: "seo", label: "SEO Strategy" },
  { value: "ads", label: "Digital Advertising" },
  { value: "branding", label: "Branding & Identity" },
  { value: "consultation", label: "General Consultation" },
  { value: "other", label: "Other" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <main className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#3b82f6" />
        <Spotlight className="-top-40 right-0 md:right-60 md:-top-20" fill="#8b5cf6" />

        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 border border-blue-500/20 backdrop-blur-sm">
              <IconMessageCircle className="w-4 h-4" />
              Get In Touch
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="text-white">Let&apos;s Build</span>{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Something Amazing
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-neutral-400 max-w-2xl mx-auto mb-12"
          >
            Ready to transform your digital presence? Get a free 30-minute consultation with our team.
          </motion.p>

          {/* Quick contact cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {contactDetails.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`p-3 sm:p-4 rounded-2xl bg-gradient-to-br ${item.bgClass} border backdrop-blur-sm`}
              >
                <item.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${item.iconClass} mx-auto mb-2`} />
                <p className="text-xs text-neutral-500 mb-1">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-sm text-white hover:text-blue-400 transition-colors">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm text-white">{item.value}</p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* Main Contact Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-dot-white/[0.03]" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Form - Takes 3 columns */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="p-6 sm:p-8 md:p-10 rounded-3xl bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border border-white/5 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <IconSend className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Send Us a Message</h2>
                    <p className="text-sm text-neutral-500">We&apos;ll respond within 24 hours</p>
                  </div>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                      <IconCheck className="w-10 h-10 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-neutral-400">We&apos;ll be in touch soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-neutral-400 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-black/50 border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
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
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-black/50 border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
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
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-black/50 border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                          placeholder="(619) 555-0123"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-400 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-black/50 border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-neutral-400 mb-2">
                        Service Interest
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-black/50 border border-white/10 text-white focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                      >
                        <option value="">Select a service...</option>
                        {services.map((service) => (
                          <option key={service.value} value={service.value}>
                            {service.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-neutral-400 mb-2">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-black/50 border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <ShinyButton
                      className="w-full py-4 text-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          Send Message
                          <IconSend className="w-5 h-5" />
                        </span>
                      )}
                    </ShinyButton>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info - Takes 2 columns */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Free Consultation Card */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-500/20 relative overflow-hidden">
                <div className="absolute inset-0">
                  <SparklesCore
                    particleDensity={20}
                    particleColor="#60a5fa"
                    className="w-full h-full"
                  />
                </div>
                <div className="absolute inset-0 bg-black/50" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-blue-500/20 border border-blue-500/30">
                      <IconCalendar className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Free Consultation</h3>
                      <p className="text-sm text-neutral-400">30 minutes, no obligation</p>
                    </div>
                  </div>

                  <p className="text-neutral-300 mb-6 leading-relaxed">
                    Book a call to discuss your project and get expert advice on how we can help grow your business.
                  </p>

                  <a
                    href="https://calendly.com/analytics-comcreate/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ShinyButton className="w-full py-4">
                      <IconCalendar className="w-5 h-5 mr-2" />
                      Book a Call
                    </ShinyButton>
                  </a>
                </div>
              </div>

              {/* Why Contact Us */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border border-white/5">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <IconSparkles className="w-5 h-5 text-purple-400" />
                  Why Work With Us
                </h3>

                <div className="space-y-4">
                  {[
                    "Free initial consultation & strategy session",
                    "Dedicated project manager for your account",
                    "Transparent pricing with no hidden fees",
                    "24-hour response time guaranteed",
                    "Ongoing support after project launch",
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-1">
                        <IconCheck className="w-4 h-4 text-green-400" />
                      </div>
                      <p className="text-neutral-400 text-sm">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-neutral-900/90 to-neutral-950/90 border border-white/5">
                <p className="text-sm text-neutral-500 mb-4">Follow us on social media</p>
                <div className="flex gap-3">
                  {socialLinks.map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-blue-500/30 transition-colors"
                    >
                      <social.icon className="w-5 h-5 text-neutral-400 hover:text-white transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <p className="text-sm text-neutral-500 text-center">
                We respond to all inquiries within 24 hours.<br />
                Weekend appointments available by request.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map/CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <BackgroundBeams className="opacity-20" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Based in <span className="text-blue-400">San Diego</span>, Serving Clients Worldwide
            </h2>
            <p className="text-neutral-400 mb-8">
              Whether you&apos;re local or across the globe, we&apos;re ready to help your business thrive.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:6199550105">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white hover:border-blue-500/30 transition-colors flex items-center gap-2"
                >
                  <IconPhone className="w-5 h-5" />
                  Call Us Now
                </motion.button>
              </a>
              <a href="mailto:sales@comcreate.org">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white hover:border-purple-500/30 transition-colors flex items-center gap-2"
                >
                  <IconMail className="w-5 h-5" />
                  Email Us
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
