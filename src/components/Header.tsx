"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconMenu2, IconX, IconChevronDown } from "@tabler/icons-react";
import { ShinyButton } from "./ui/shiny-button";

const services = [
  { href: "/webdesign", label: "Web Design" },
  { href: "/seo", label: "SEO" },
  { href: "/ads", label: "Advertising" },
  { href: "/branding", label: "Branding" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full max-w-[100vw] overflow-x-hidden">
      {/* Mobile Header - minimal floating bar */}
      <div className="md:hidden w-full max-w-[100vw] overflow-x-hidden">
        <div className="flex items-center justify-between px-3 py-2">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Comcreate"
              width={100}
              height={28}
              className="h-6 w-auto"
            />
          </Link>

          <button
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/10"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <IconX size={18} className="text-white" />
            ) : (
              <IconMenu2 size={18} className="text-white" />
            )}
          </button>
        </div>

        {/* Full screen mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-14 bg-black/98 backdrop-blur-xl z-40"
            >
              <nav className="flex flex-col h-full px-6 py-8">
                {/* Main nav links */}
                <div className="flex flex-col gap-1">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className="block py-3 text-2xl font-medium text-white hover:text-blue-400 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Services section */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mt-8 pt-6 border-t border-white/10"
                >
                  <p className="text-xs text-neutral-500 uppercase tracking-widest mb-4">
                    Services
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {services.map((service, i) => (
                      <motion.div
                        key={service.href}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 + i * 0.05 }}
                      >
                        <Link
                          href={service.href}
                          className="block px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-neutral-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* CTA at bottom */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-auto pt-8"
                >
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <ShinyButton className="w-full py-4 text-base">
                      Get Started
                    </ShinyButton>
                  </Link>
                  <p className="text-center text-xs text-neutral-500 mt-4">
                    sales@comcreate.org
                  </p>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop Header - unchanged */}
      <div className="hidden md:block mx-auto max-w-7xl px-6 py-4">
        <div className="relative flex items-center justify-between rounded-full border border-white/10 bg-black/50 backdrop-blur-xl px-6 py-3">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Comcreate"
              width={140}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Nav - Centered */}
          <nav className="flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            <Link
              href="/"
              className="text-sm text-neutral-400 hover:text-white transition-colors"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-1 text-sm text-neutral-400 hover:text-white transition-colors"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                Services
                <IconChevronDown size={16} />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-48 rounded-xl border border-white/10 bg-black/90 backdrop-blur-xl p-2"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-2 text-sm text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/projects"
              className="text-sm text-neutral-400 hover:text-white transition-colors"
            >
              Projects
            </Link>

            <Link
              href="/blogs"
              className="text-sm text-neutral-400 hover:text-white transition-colors"
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className="text-sm text-neutral-400 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </nav>

          <Link href="/contact">
            <ShinyButton className="text-sm px-6 py-2">Get Started</ShinyButton>
          </Link>
        </div>
      </div>
    </header>
  );
}
