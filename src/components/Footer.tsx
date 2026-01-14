import Link from "next/link";
import Image from "next/image";
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandYoutube,
} from "@tabler/icons-react";

const footerLinks = {
  services: [
    { label: "Web Design", href: "/webdesign" },
    { label: "SEO Strategy", href: "/seo" },
    { label: "Digital Advertising", href: "/ads" },
    { label: "Branding", href: "/branding" },
  ],
  company: [
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ],
  connect: [
    { label: "(619) 955-0105", href: "tel:6199550105" },
    { label: "sales@comcreate.org", href: "mailto:sales@comcreate.org" },
  ],
};

const socialLinks = [
  { icon: IconBrandFacebook, href: "#" },
  { icon: IconBrandTwitter, href: "#" },
  { icon: IconBrandLinkedin, href: "#" },
  { icon: IconBrandInstagram, href: "#" },
  { icon: IconBrandYoutube, href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="Comcreate"
                width={160}
                height={45}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 text-sm text-neutral-500">
              Professional Web Design & Development Services in San Diego, CA
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="text-neutral-500 hover:text-white transition-colors"
                >
                  <social.icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-500 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-500 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Connect
            </h3>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-500 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-500">
            &copy; {new Date().getFullYear()} Comcreate. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="text-sm text-neutral-500 hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm text-neutral-500 hover:text-white transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
