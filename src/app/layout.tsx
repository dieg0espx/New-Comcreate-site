import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Comcreate | Web Design, SEO & Digital Advertising | San Diego",
  description:
    "Ignite your brand with next-gen Digital Power. Professional web design, SEO strategy, and digital advertising services in San Diego, CA.",
  keywords: [
    "web design",
    "SEO",
    "digital marketing",
    "San Diego",
    "branding",
    "advertising",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
