/**
 * site.config.ts
 *
 * Single source of truth for property-level content. Everything a client
 * would want to change — business name, address, colors, section order,
 * SEO — lives here so components stay generic and reusable.
 */

export type HomeSection =
  | "hero"
  | "about"
  | "floorPlans"
  | "amenities"
  | "gallery"
  | "testimonials"
  | "neighborhood"
  | "cta"
  | "contactForm";

export type FloorPlan = {
  slug: "studio" | "one-bedroom" | "two-bedroom" | "penthouse";
  name: string;
  startingPrice: string;
  squareFootage: string;
  bedrooms: number;
  bathrooms: number;
  description: string;
};

export const config = {
  businessName: "The Ellington Residences",
  shortName: "The Ellington",
  tagline: "An address of considered proportion, in the quiet heart of the city.",

  email: "leasing@theellingtonresidences.com",
  phone: "(212) 555-0142",

  address: {
    line1: "450 Park Avenue",
    line2: "",
    city: "New York",
    state: "NY",
    zip: "10022",
    country: "US",
  },

  leasingHours: [
    { days: "Monday – Saturday", hours: "9:00 AM – 6:00 PM" },
    { days: "Sunday", hours: "10:00 AM – 5:00 PM" },
  ],

  /**
   * Design tokens. These are injected as CSS variables on <body> in
   * app/layout.tsx. Components read them via `var(--color-*)`.
   */
  colors: {
    bg: "#ffffff",
    fg: "#0a0a0a",
    dark: "#1a1a2e",
    muted: "#737373",
    line: "#e5e5e5",
    gold: "#c9a961",
    goldDeep: "#a88944",
  },

  /**
   * Order of sections rendered by the homepage (app/page.tsx).
   * Reorder freely — the homepage reads this list and renders each
   * component in order. No re-deploy-to-reorder.
   */
  homeSections: [
    "hero",
    "about",
    "floorPlans",
    "amenities",
    "gallery",
    "testimonials",
    "neighborhood",
    "cta",
  ] as HomeSection[],

  floorPlans: [
    {
      slug: "studio",
      name: "Studio",
      startingPrice: "$2,200",
      squareFootage: "450 – 550 sq ft",
      bedrooms: 0,
      bathrooms: 1,
      description:
        "A compact, light-filled residence with floor-to-ceiling windows, integrated kitchen, and custom millwork throughout.",
    },
    {
      slug: "one-bedroom",
      name: "One Bedroom",
      startingPrice: "$2,800",
      squareFootage: "650 – 800 sq ft",
      bedrooms: 1,
      bathrooms: 1,
      description:
        "A generous layout with a separated sleeping quarter, oak flooring, and a spa-inspired bath clad in honed marble.",
    },
    {
      slug: "two-bedroom",
      name: "Two Bedroom",
      startingPrice: "$3,800",
      squareFootage: "1,000 – 1,200 sq ft",
      bedrooms: 2,
      bathrooms: 2,
      description:
        "Split-bedroom planning, a chef's kitchen anchored by a waterfall island, and a private terrace on select lines.",
    },
    {
      slug: "penthouse",
      name: "Penthouse",
      startingPrice: "$6,500",
      squareFootage: "1,800+ sq ft",
      bedrooms: 3,
      bathrooms: 3,
      description:
        "A crowning collection of residences with double-height ceilings, wrap terraces, and uninterrupted skyline views.",
    },
  ] as FloorPlan[],

  seo: {
    titleTemplate: "%s | The Ellington Residences",
    defaultTitle: "The Ellington Residences — Luxury Apartments on Park Avenue",
    description:
      "The Ellington Residences is a collection of thoughtfully designed studio, one-, two-bedroom, and penthouse apartments on Park Avenue, offering resort-style amenities, full-service concierge, and a refined Midtown address.",
    siteUrl: "https://www.theellingtonresidences.com",
    ogImage: "/og.jpg",
    locale: "en_US",
  },
} as const;

export type SiteConfig = typeof config;
