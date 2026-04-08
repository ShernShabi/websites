/**
 * SEO helpers — builds JSON-LD structured data and a `Metadata` object
 * seeded from `site.config.ts` so every page can share one source of truth.
 */
import type { Metadata } from "next";
import { config } from "@/site.config";

export function buildMetadata(
  title: string,
  description?: string
): Metadata {
  return {
    title,
    description: description ?? config.seo.description,
    openGraph: {
      title,
      description: description ?? config.seo.description,
      url: config.seo.siteUrl,
      siteName: config.businessName,
      images: [{ url: config.seo.ogImage }],
      locale: config.seo.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: description ?? config.seo.description,
      images: [config.seo.ogImage],
    },
    alternates: {
      canonical: config.seo.siteUrl,
    },
  };
}

/**
 * Generates ApartmentComplex JSON-LD structured data.
 * Injected once in the root layout.
 */
export function apartmentComplexJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ApartmentComplex",
    name: config.businessName,
    url: config.seo.siteUrl,
    description: config.seo.description,
    telephone: config.phone,
    email: config.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: config.address.line1,
      addressLocality: config.address.city,
      addressRegion: config.address.state,
      postalCode: config.address.zip,
      addressCountry: config.address.country,
    },
    numberOfAccommodationUnits: config.floorPlans.length,
    amenityFeature: [
      "Rooftop Pool & Sundeck",
      "State-of-the-Art Fitness Center",
      "Co-Working Lounge",
      "24-Hour Concierge",
      "Pet Spa & Dog Park",
      "Private Parking Garage",
      "Outdoor Kitchen & Fire Pits",
      "Smart Home Technology",
    ].map((name) => ({
      "@type": "LocationFeatureSpecification",
      name,
      value: true,
    })),
    makesOffer: config.floorPlans.map((plan) => ({
      "@type": "Offer",
      name: plan.name,
      price: plan.startingPrice.replace(/[^0-9.]/g, ""),
      priceCurrency: "USD",
      description: plan.description,
    })),
  };
}
