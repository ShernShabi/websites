import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import { buildMetadata } from "@/lib/seo";
import { config } from "@/site.config";

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata(
    "Amenities",
    `The amenity program at ${config.businessName} in West Hollywood.`
  );
}

const EXPANDED = [
  {
    title: "Courtyard Pool & Sundeck",
    description:
      "A 55-foot saltwater pool ringed in honey travertine and lined with striped umbrellas, low chaise lounges, and a shaded outdoor shower tucked into a wall of flowering jasmine. Attendant-managed towel service through the weekend, cold water and sliced fruit set out by the courtyard team each morning.",
    tone: "warm",
  },
  {
    title: "The Larder",
    description:
      "A residents-only pantry and espresso bar on the ground floor, open 7am to 9pm daily. Fresh loaves on the counter each morning from a neighborhood bakery, a rotating selection of California olive oils for tasting, and an espresso bar staffed from opening through lunch.",
    tone: "warm",
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
      "Two rooms of floor-to-ceiling oak shelves, reading lamps, and deep bouclé armchairs — equal parts workspace and afternoon refuge. Bookable for private meetings, quiet phone calls, or an afternoon with a novel from the rotating resident collection.",
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
      "A hospitality-trained team on-site from 7am to 11pm daily, handling dry cleaning, deliveries, reservations, house-sitting, car service, dog walking, and the occasional last-minute birthday cake. After hours, a remote concierge is on call.",
    tone: "warm",
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
];

function tone(t: string) {
  switch (t) {
    case "sage":
      return "bg-gradient-to-br from-[#c6cfb4] via-[#a8b594] to-[#7f8f6d]";
    case "clay":
      return "bg-gradient-to-br from-[#e6bca4] via-[#d19a78] to-[#a8613f]";
    default:
      return "bg-gradient-to-br from-[#e5d6c2] via-[#d3b894] to-[#b68b63]";
  }
}

export default function AmenitiesPage() {
  return (
    <>
      <div className="h-24 bg-[var(--color-bg)] md:h-32" />

      <section className="bg-[var(--color-bg)] pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <FadeIn>
            <span className="font-body text-xs uppercase tracking-[0.3em] text-[var(--color-terracotta)]">
              Amenities
            </span>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-normal leading-[1.05] text-[var(--color-fg)] md:text-8xl">
              Small pleasures, carefully kept.
            </h1>
            <div className="mt-10 h-px w-16 bg-[var(--color-terracotta)]" />
            <p className="mt-10 max-w-2xl font-body text-lg leading-loose text-[var(--color-fg)]/70">
              Spaces designed around the quiet hours of the day — a pool you
              can swim before anyone else is up, a library with a good lamp,
              a courtyard that smells like lemon in April.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-[var(--color-line)]/40 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="space-y-12 md:space-y-16">
            {EXPANDED.map((item, i) => {
              const reverse = i % 2 === 1;
              return (
                <FadeIn key={item.title}>
                  <article
                    className={`grid grid-cols-1 items-stretch overflow-hidden rounded-2xl bg-[var(--color-bg)] shadow-lg transition-transform duration-500 hover:scale-[1.01] md:grid-cols-12`}
                  >
                    <div
                      className={`relative aspect-[4/3] md:aspect-auto md:col-span-5 ${
                        reverse ? "md:order-2" : ""
                      }`}
                    >
                      <div className={`relative h-full w-full ${tone(item.tone)}`}>
                        <div className="grain" aria-hidden />
                        <div className="relative flex h-full w-full items-center justify-center">
                          <span className="font-body text-xs uppercase tracking-[0.3em] text-[var(--color-dark)]/40">
                            Photo
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center p-10 md:col-span-7 md:p-14 lg:p-16">
                      <p className="font-body text-xs uppercase tracking-[0.3em] text-[var(--color-terracotta)]">
                        0{i + 1}
                      </p>
                      <h2 className="mt-4 font-display text-3xl font-normal leading-tight text-[var(--color-fg)] md:text-5xl">
                        {item.title}
                      </h2>
                      <div className="mt-6 h-px w-10 bg-[var(--color-terracotta)]" />
                      <p className="mt-8 max-w-lg font-body text-lg leading-loose text-[var(--color-fg)]/70">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
