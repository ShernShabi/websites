import type { Metadata } from "next";
import { config, type HomeSection } from "@/site.config";
import { buildMetadata } from "@/lib/seo";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import FloorPlans from "@/components/sections/FloorPlans";
import Amenities from "@/components/sections/Amenities";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Neighborhood from "@/components/sections/Neighborhood";
import CTA from "@/components/sections/CTA";
import ContactForm from "@/components/sections/ContactForm";

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata(config.seo.defaultTitle, config.seo.description);
}

const SECTION_MAP: Record<HomeSection, React.ComponentType> = {
  hero: Hero,
  about: About,
  floorPlans: FloorPlans,
  amenities: Amenities,
  gallery: Gallery,
  testimonials: Testimonials,
  neighborhood: Neighborhood,
  cta: CTA,
  contactForm: ContactForm,
};

export default function HomePage() {
  return (
    <>
      {config.homeSections.map((key) => {
        const Section = SECTION_MAP[key];
        if (!Section) return null;
        return <Section key={key} />;
      })}
    </>
  );
}
