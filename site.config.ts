/**
 * site.config.ts
 *
 * Single source of truth for property-level content. A client should be
 * able to change every word on the site by editing this one file.
 * Components never hardcode copy — they read from here.
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

export type Amenity = {
  title: string;
  description: string;
  /** Warm gradient tone for the placeholder photo panel. */
  tone: "warm" | "sage" | "clay" | "shadow";
};

export type Testimonial = {
  quote: string;
  name: string;
  detail: string;
};

export type NeighborhoodGroup = {
  label: string;
  items: string[];
};

export type GalleryTile = {
  /** Placeholder aspect ratio. */
  aspect: "square" | "tall" | "xtall" | "wide";
  tone: "warm" | "sage" | "clay" | "shadow";
  /** Column span on desktop grid. */
  span?: "single" | "double";
  /** Row span on desktop grid. */
  row?: "single" | "double";
  /** Short caption displayed on hover. */
  caption?: string;
};

export const config = {
  businessName: "The Linden",
  shortName: "The Linden",
  tagline:
    "A sun-drenched collection of residences, tucked into the shade of West Hollywood's quietest street.",

  heroEyebrow: "West Hollywood, California",
  heroHeadline: ["The", "Linden"],
  heroBody:
    "Sixty-four studio, one-, two-bedroom, and penthouse residences, drawn around a courtyard olive tree and the slow California sun.",

  aboutEyebrow: "The Residence",
  aboutParagraphs: [
    "The Linden is a building you come home to the way you come home to a good meal — slowly, hungrily, already a little in love. Sixty-four residences wrap a shaded central courtyard planted with an old olive tree, a fountain that trickles into terracotta tile, and the kind of afternoon shadows that make you forget what day it is.",
    "Interiors are a quiet conversation between limewashed plaster, white oak, travertine, and brushed linen. Kitchens turn on arched stone hoods and hand-thrown tile splashbacks; bathrooms lean into honeyed marble and brushed-brass fittings that age the way good objects should. Every residence faces the courtyard or opens onto a private balcony, and every window was placed to catch a specific hour of the California sun.",
  ],
  aboutClosing:
    "Above the courtyard, the amenity deck unfolds the way a good hotel rooftop does — a long pool flanked by striped umbrellas, an outdoor kitchen shaded by an awning, and a row of daybeds facing the hills. It is the kind of place where you keep meaning to go back upstairs, and keep finding reasons to stay.",
  aboutQuote:
    "A building you come home to the way you come home to a good meal — slowly, hungrily, already a little in love.",
  aboutQuoteAttribution: "Dwell, on The Linden",

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
    charcoal: "#3d3a38", // warm charcoal
    terracotta: "#c67d5b", // clay accent
    terracottaDeep: "#a8613f",
    sage: "#8a9a7b", // secondary accent
    muted: "#7a716a", // warm muted text
    line: "#e8e0d4", // warm hairline
  },

  /**
   * Order of sections rendered by the homepage (app/page.tsx). Reorder
   * freely — the homepage reads this list and renders each component in
   * order.
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

  amenitiesEyebrow: "Amenities",
  amenitiesHeadline: "Small pleasures, carefully kept.",
  amenitiesBody:
    "The amenity program at The Linden isn't a checklist — it's a collection of spaces you'll actually use. Places designed around the quiet hours of the day.",

  amenities: [
    {
      title: "Courtyard Pool & Sundeck",
      description:
        "A 55-foot saltwater pool ringed in honey travertine and lined with striped umbrellas, low chaise lounges, and a shaded outdoor shower tucked into a wall of flowering jasmine. Attendant-managed towel service on weekends, cold water and sliced fruit set out each morning.",
      tone: "warm",
    },
    {
      title: "The Larder",
      description:
        "A residents-only pantry and espresso bar on the ground floor, open seven in the morning to nine at night. Fresh loaves from a neighborhood bakery, a rotating selection of California olive oils for tasting, and an espresso bar staffed through lunch.",
      tone: "clay",
    },
    {
      title: "Fitness Studio",
      description:
        "A soft-lit atelier overlooking the courtyard, outfitted with a full Technogym collection, a dedicated Pilates corner with a reformer, and a private stretching loft for quiet mornings. Personal training and group mat classes can be arranged through the concierge.",
      tone: "sage",
    },
    {
      title: "The Library",
      description:
        "Two rooms of floor-to-ceiling oak shelves, reading lamps, and deep bouclé armchairs — equal parts workspace and afternoon refuge. Bookable for private meetings, quiet calls, or an afternoon with a novel from the rotating resident collection.",
      tone: "warm",
    },
    {
      title: "Rooftop Terrace",
      description:
        "An olive-tree canopy, a long communal dining table, and a row of gas fire pits that open each night at dusk. A view that runs from the Runyon hills to the Pacific on a clear day, and a weekly schedule of informal resident gatherings.",
      tone: "clay",
    },
    {
      title: "Resident Concierge",
      description:
        "A hospitality-trained team on-site from seven in the morning to eleven at night, handling deliveries, reservations, dry cleaning, house-sitting, car service, dog walking, and the occasional last-minute birthday cake. After hours, a remote concierge is on call.",
      tone: "shadow",
    },
    {
      title: "Garden Courtyard",
      description:
        "At the heart of the building — an old olive tree, a fountain that trickles into terracotta tile, and a row of lemon trees that perfume the air every spring. The courtyard is lit softly by string lights from dusk until midnight and anchors every residence in the building.",
      tone: "sage",
    },
    {
      title: "Pet Spa & Run",
      description:
        "A dedicated wash station with professional tubs and dryers, paired with a small, shaded dog run on the garden level. Walk and sitting services are arranged through vetted partners, and welcome kits are prepared for new four-legged residents.",
      tone: "warm",
    },
  ] as Amenity[],

  galleryEyebrow: "Gallery",
  galleryHeadline: "Scenes from the courtyard.",
  galleryBody:
    "Interiors, common spaces, and the slow California light that moves through the building from morning to evening.",

  galleryTiles: [
    { aspect: "tall", tone: "warm", caption: "Courtyard, 4pm" },
    { aspect: "square", tone: "clay", caption: "Kitchen arch" },
    { aspect: "wide", tone: "sage", span: "double", caption: "The olive tree" },
    { aspect: "xtall", tone: "shadow", row: "double", caption: "Library at dusk" },
    { aspect: "square", tone: "warm", caption: "Bath, travertine" },
    { aspect: "tall", tone: "clay", caption: "Terrace, one-bedroom" },
    { aspect: "square", tone: "sage", caption: "Garden path" },
    { aspect: "wide", tone: "warm", span: "double", caption: "Pool deck" },
    { aspect: "tall", tone: "shadow", caption: "Rooftop, fire pits" },
    { aspect: "square", tone: "clay", caption: "Entry door" },
    { aspect: "tall", tone: "sage", caption: "Lemon trees" },
    { aspect: "wide", tone: "clay", span: "double", caption: "The Larder" },
  ] as GalleryTile[],

  testimonialsEyebrow: "Residents",
  testimonialsHeadline: "What it's like to live here.",
  testimonials: [
    {
      quote:
        "The first morning I woke up here, I made coffee and sat in the courtyard with the olive tree for almost an hour. I didn't check my phone once. That's the best review I can give.",
      name: "Naomi R.",
      detail: "Resident since 2023",
    },
    {
      quote:
        "The light. Nobody tells you about the light until you live with it — how it comes through the kitchen arch in the morning and throws long shadows across the plaster. I keep meaning to photograph it and never getting around to it.",
      name: "Jonah M.",
      detail: "One-bedroom, courtyard side",
    },
    {
      quote:
        "I moved from a much flashier building and I don't miss the flash. The Linden feels like a real place — the concierge knows your dog's name, the fitness studio is empty when you want it, and the pool is absurd in the best way.",
      name: "Priya & Daniel K.",
      detail: "Two-bedroom residents",
    },
  ] as Testimonial[],

  neighborhoodEyebrow: "The Neighborhood",
  neighborhoodHeadline:
    "On Fountain, between two of LA's best mornings.",
  neighborhoodBody:
    "Step out the front door and you're six minutes from a great loaf of bread, eight from the trail up Runyon, and ten from the quiet end of Melrose. West Hollywood is a walking neighborhood — The Linden sits on the best block of it.",
  walkScore: 96,
  transitScore: 82,
  neighborhoodNearby: [
    {
      label: "Dining",
      items: ["Gjelina (2 min)", "Jon & Vinny's (5 min)", "Carthay Ct. (6 min)"],
    },
    {
      label: "Coffee",
      items: ["Verve (3 min)", "Go Get Em Tiger (4 min)", "Maru (7 min)"],
    },
    {
      label: "Green",
      items: [
        "Runyon Canyon (8 min)",
        "Plummer Park (4 min)",
        "Holloway Trail (6 min)",
      ],
    },
  ] as NeighborhoodGroup[],

  ctaEyebrow: "Private Tour",
  ctaHeadline: "Come see the light for yourself.",
  ctaBody:
    "The best way to understand The Linden is to walk the courtyard at four o'clock on a Thursday. Our leasing team will meet you at the gate.",
  ctaPullquote: "Just come for the courtyard and stay for the coffee.",
  ctaButton: "Book a Tour",

  contactEyebrow: "Get in Touch",
  contactHeadline: "Come visit.",
  contactBody:
    "Every inquiry is answered personally by a member of our leasing team. Share a few details and we'll be in touch within 24 hours.",

  seo: {
    titleTemplate: "%s | The Linden",
    defaultTitle:
      "The Linden — Warm Modernist Residences in West Hollywood",
    description:
      "The Linden is a collection of 64 studio, one-, two-bedroom, and penthouse residences in West Hollywood, designed around warmth, sunlight, and the rituals of California living.",
    siteUrl: "https://www.thelindenwh.com",
    ogImage: "/og.jpg",
    locale: "en_US",
  },
} as const;

export type SiteConfig = typeof config;
