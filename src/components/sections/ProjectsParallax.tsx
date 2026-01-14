"use client";

import { HeroParallax } from "@/components/ui/hero-parallax";

const projects = [
  {
    title: "EM Landscape Design",
    link: "https://www.emlandscapedesign.com/",
  },
  {
    title: "Jake Rath",
    link: "https://jake-rath.vercel.app/",
  },
  {
    title: "Hansen Chiropractic",
    link: "https://www.hansenchiropracticaz.com/",
  },
  {
    title: "Casita Azul",
    link: "https://www.casitaazulpdx.com/es",
  },
  {
    title: "SD Dumps",
    link: "https://sd-dumps-site.vercel.app/",
  },
  {
    title: "V3 Biomedical",
    link: "https://v3-biomedical-jade.vercel.app/",
  },
  {
    title: "King Roof",
    link: "https://www.kingroofco.com/",
  },
  {
    title: "Reef Health",
    link: "https://honestaffordablehealthcare.com/",
  },
  {
    title: "Endless Wave Charters",
    link: "https://www.endlesswavecharters.com/",
  },
  {
    title: "Cosent",
    link: "https://cosent-site.vercel.app/",
  },
  {
    title: "Bald Eagle Builders",
    link: "https://www.baldeaglebuilders.com/",
  },
  {
    title: "San Diego Dumpster Pros",
    link: "https://dumpster-glass.vercel.app/",
  },
  {
    title: "Crea Development",
    link: "https://www.crea-development.com/",
  },
  {
    title: "Cadiz Lluis Concierge",
    link: "https://www.cadizlluisconcierge.com/",
  },
  {
    title: "Key Real Estate Capital",
    link: "https://www.keyrealestatecapital.com/",
  },
];

export function ProjectsParallax() {
  return <HeroParallax products={projects} />;
}
