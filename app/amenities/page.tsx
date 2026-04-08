import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import { buildMetadata } from "@/lib/seo";
import { config } from "@/site.config";

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata(
    "Amenities",
    `A deliberate, edited collection of amenities at ${config.businessName}.`
  );
}

const EXPANDED_AMENITIES = [
  {
    title: "Rooftop Pool & Sundeck",
    description:
      "A heated 60-foot lap pool crowned by private cabanas, chaise lounges, and 360-degree skyline views. The sundeck is landscaped with mature plantings and offers open-air showers, an attendant-staffed towel service, and a shaded reading lounge. Open year-round.",
  },
  {
    title: "State-of-the-Art Fitness Center",
    description:
      "A double-height atelier outfitted with the full Technogym Artis collection, a dedicated Pilates reformer studio, and private training rooms available by reservation. A separate yoga and meditation room looks onto a small interior courtyard, and personal training can be arranged through the concierge.",
  },
  {
    title: "Co-Working Lounge",
    description:
      "Library-style workspaces, private phone booths for focused calls, and two bookable conference rooms with high-speed fiber and wireless presentation. Coffee service, filtered water, and concierge-managed print and delivery are available throughout the day.",
  },
  {
    title: "24-Hour Concierge",
    description:
      "A discreet, hospitality-trained team attending to reservations, deliveries, and residence needs at all hours. Services include dry cleaning, grocery coordination, car service, house-sitting arrangements, and a private network of partner providers vetted by the building.",
  },
  {
    title: "Pet Spa & Dog Park",
    description:
      "A dedicated wash station with professional-grade tubs, dryers, and grooming tools, paired with a landscaped dog run on the garden level. Walk and sitting services are available through partner providers, and welcome kits are prepared for new four-legged residents.",
  },
  {
    title: "Private Parking Garage",
    description:
      "Valet-operated, climate-controlled parking with direct elevator access to every residential floor. EV charging stations are available throughout, and vehicles can be held, retrieved, or detailed on request through the concierge.",
  },
  {
    title: "Outdoor Kitchen & Fire Pits",
    description:
      "A terraced entertaining level featuring gas grills, communal dining tables for private dinners, and a row of gas fire pits that open for residents each evening. The space is bookable for private gatherings of up to forty guests.",
  },
  {
    title: "Smart Home Technology",
    description:
      "Integrated lighting, climate, shades, and entry managed from a single in-residence control panel and companion mobile app. Keyless entry, guest pre-authorization, and delivery notifications are included as standard in every home.",
  },
];

export default function AmenitiesPage() {
  return (
    <>
      <div className="h-24 bg-white md:h-32" />

      <section className="bg-white pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <FadeIn>
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
              Amenities
            </span>
            <h1 className="mt-6 max-w-3xl font-serif text-5xl font-normal leading-[1.05] tracking-tight text-[var(--color-fg)] md:text-6xl">
              Every daily ritual, considered.
            </h1>
            <div className="mt-8 h-px w-16 bg-[var(--color-gold)]" />
            <p className="mt-8 max-w-2xl font-sans text-base leading-relaxed text-neutral-600">
              The amenity program at The Ellington is deliberately edited. A
              small number of spaces, each considered in its own right, each
              intended to be used — not merely admired.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-neutral-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 gap-x-16 gap-y-16 md:grid-cols-2">
            {EXPANDED_AMENITIES.map((item, i) => (
              <FadeIn key={item.title} delay={(i % 2) * 80}>
                <article className="border-t-2 border-[var(--color-gold)] bg-white p-10 md:p-12">
                  <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-neutral-500">
                    0{i + 1}
                  </p>
                  <h2 className="mt-3 font-serif text-3xl font-normal leading-tight text-[var(--color-fg)]">
                    {item.title}
                  </h2>
                  <div className="mt-6 h-px w-10 bg-[var(--color-gold)]" />
                  <p className="mt-6 font-sans text-base leading-relaxed text-neutral-600">
                    {item.description}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
