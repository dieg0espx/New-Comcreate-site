import {
  Hero,
  HeroScroll,
  GlobeSection,
  Services,
  AllInOneSolution,
  Stats,
  Features,
  Testimonials,
  CTA,
  FAQ,
  ProjectsParallax,
} from "@/components/sections";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function Home() {
  return (
    <main className="bg-black relative">
      {/* Global Star Background */}
      <div className="fixed inset-0 z-0">
        <StarsBackground />
        <ShootingStars />
      </div>

      <div className="relative z-10">
        <Hero />
        <HeroScroll />
        <GlobeSection />
        <Features />
        <AllInOneSolution />
        <Services />
        <ProjectsParallax />
        <Stats />
        <Testimonials />
        <FAQ />
        <CTA />
      </div>
    </main>
  );
}
