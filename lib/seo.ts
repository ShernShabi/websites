/**
 * SEO helpers — builds JSON-LD structured data and a `Metadata` object
 * seeded from `site.config.ts` so every page shares one source of truth.
 */
import type { Metadata } from "next";
import { config } from "@/site.config";

export function buildMetadata(
  title: string,
  description?: string
): Metadata {
  const desc = description ?? config.seo.description;
  return {
    title,
    description: desc,
    openGraph: {
      title,
      description: desc,
      url: config.seo.siteUrl,
      siteName: config.businessName,
      images: [{ url: config.seo.ogImage }],
      locale: config.seo.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: [config.seo.ogImage],
    },
    alternates: {
      canonical: config.seo.siteUrl,
    },
  };
}

/**
 * ApartmentComplex JSON-LD structured data. Injected once in the root
 * layout. Amenities and offers are read from site.config.ts — nothing
 * is hardcoded here.
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
    amenityFeature: config.amenities.map((amenity) => ({
      "@type": "LocationFeatureSpecification",
      name: amenity.title,
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
