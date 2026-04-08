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
  businessName: "The Linden",
  shortName: "The Linden",
  tagline:
    "A sun-drenched collection of residences, tucked into the shade of West Hollywood's quietest street.",

  email: "hello@thelindenwh.com",
  phone: "(323) 555-0148",

  address: {
    line1: "8422 Fountain Avenue",
    line2: "",
    city: "West Hollywood",
    state: "CA",
    zip: "90069",
    country: "US",
  },

  leasingHours: [
    { days: "Monday – Saturday", hours: "9:00 AM – 6:00 PM" },
    { days: "Sunday", hours: "10:00 AM – 5:00 PM" },
  ],

  /**
   * Design tokens — Warm Modernist palette.
   * Injected as CSS variables on <body> in app/layout.tsx.
   */
  colors: {
    bg: "#f7f3ee", // creamy warm off-white
    fg: "#2c2926", // warm dark brown for text on light
    dark: "#2c2926", // warm dark brown for dark sections
    charcoal: "#3d3a38", // warm charcoal primary
    terracotta: "#c67d5b", // clay accent
    terracottaDeep: "#a8613f",
    sage: "#8a9a7b", // secondary accent
    muted: "#7a716a", // warm muted
    line: "#e8e0d4", // warm hairline on light bg
  },

  /**
   * Order of sections rendered by the homepage (app/page.tsx).
   * Reorder freely — the homepage reads this list and renders each
   * component in order.
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
      startingPrice: "$2,400",
      squareFootage: "480 – 560 sq ft",
      bedrooms: 0,
      bathrooms: 1,
      description:
        "A bright, open layout with a built-in banquette nook, limewashed walls, and a Juliet balcony framing a lemon tree in the courtyard below.",
    },
    {
      slug: "one-bedroom",
      name: "One Bedroom",
      startingPrice: "$3,200",
      squareFootage: "720 – 860 sq ft",
      bedrooms: 1,
      bathrooms: 1,
      description:
        "A generous living room that opens onto a private terrace, white oak floors warmed by afternoon sun, and a softly curved kitchen island in travertine.",
    },
    {
      slug: "two-bedroom",
      name: "Two Bedroom",
      startingPrice: "$4,500",
      squareFootage: "1,100 – 1,280 sq ft",
      bedrooms: 2,
      bathrooms: 2,
      description:
        "A split-plan home with an open great room, arched doorways, and a sunken seating area that feels lifted from a Tulum hillside villa.",
    },
    {
      slug: "penthouse",
      name: "Penthouse",
      startingPrice: "$8,000",
      squareFootage: "1,850+ sq ft",
      bedrooms: 3,
      bathrooms: 3,
      description:
        "A crown of three residences with wrap terraces, a plunge pool, outdoor shower, and an olive tree planted in a limestone-clad courtyard under the California sky.",
    },
  ] as FloorPlan[],

  seo: {
    titleTemplate: "%s | The Linden",
    defaultTitle: "The Linden — Warm Modernist Residences in West Hollywood",
    description:
      "The Linden is a collection of 64 studio, one-, two-bedroom, and penthouse residences in West Hollywood, designed around warmth, sunlight, and the rituals of California living.",
    siteUrl: "https://www.thelindenwh.com",
    ogImage: "/og.jpg",
    locale: "en_US",
  },
} as const;

export type SiteConfig = typeof config;
