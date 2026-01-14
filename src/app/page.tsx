import {
  Hero,
  GlobeSection,
  Services,
  Stats,
  Features,
  Testimonials,
  CTA,
  ProjectsParallax,
} from "@/components/sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <GlobeSection />
      <Features />
      <Services />
      <ProjectsParallax />
      <Stats />
      <Testimonials />
      <CTA />
    </main>
  );
}
