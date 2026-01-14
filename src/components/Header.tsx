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


export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
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
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {/* Home Link */}
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

            {/* Projects Link */}
            <Link
              href="/projects"
              className="text-sm text-neutral-400 hover:text-white transition-colors"
            >
              Projects
            </Link>

            {/* Contact Link */}
            <Link
              href="/contact"
              className="text-sm text-neutral-400 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:block">
            <Link href="/contact">
              <ShinyButton className="text-sm px-6 py-2">Get Started</ShinyButton>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden mt-2 rounded-2xl border border-white/10 bg-black/90 backdrop-blur-xl p-6"
            >
              <nav className="flex flex-col gap-4">
                <Link
                  href="/"
                  className="text-lg text-neutral-400 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>

                <div className="h-px bg-white/10 my-2" />

                <p className="text-xs text-neutral-500 uppercase tracking-wider">
                  Services
                </p>
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="text-lg text-neutral-400 hover:text-white transition-colors pl-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.label}
                  </Link>
                ))}

                <div className="h-px bg-white/10 my-2" />

                <Link
                  href="/projects"
                  className="text-lg text-neutral-400 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  href="/contact"
                  className="text-lg text-neutral-400 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>

                <div className="pt-4">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <ShinyButton className="w-full">Get Started</ShinyButton>
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
