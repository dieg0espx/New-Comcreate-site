"use client";

import { motion } from "framer-motion";
import {
  IconPhone,
  IconMail,
  IconMapPin,
  IconClock,
  IconCalendar,
} from "@tabler/icons-react";
import { ShinyButton } from "@/components/ui/shiny-button";

const contactDetails = [
  {
    icon: IconPhone,
    label: "Phone",
    value: "(619) 955-0105",
    href: "tel:6199550105",
  },
  {
    icon: IconMail,
    label: "Email",
    value: "sales@comcreate.org",
    href: "mailto:sales@comcreate.org",
  },
  {
    icon: IconMapPin,
    label: "Location",
    value: "San Diego, California, USA",
  },
  {
    icon: IconClock,
    label: "Business Hours",
    value: "Mon-Fri: 9AM - 6PM PST",
  },
];

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>

      <div className="space-y-6 mb-10">
        {contactDetails.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
              <item.icon className="h-6 w-6 text-blue-400" />
            </div>
            <div>
              <p className="text-sm text-neutral-500">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-white">{item.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Free consultation card */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20">
        <div className="flex items-center gap-3 mb-4">
          <IconCalendar className="h-6 w-6 text-blue-400" />
          <h3 className="text-lg font-semibold text-white">
            Free 30-Minute Consultation
          </h3>
        </div>
        <p className="text-neutral-400 mb-6">
          Book a no-obligation call to discuss your project and get expert
          advice on how we can help your business grow.
        </p>
        <a
          href="https://calendly.com/analytics-comcreate/30min"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ShinyButton className="w-full py-3">Book a Call</ShinyButton>
        </a>
      </div>

      {/* Response time note */}
      <p className="text-sm text-neutral-500 mt-6">
        We respond to all inquiries within 24 hours. Weekend appointments
        available by request.
      </p>
    </motion.div>
  );
}
