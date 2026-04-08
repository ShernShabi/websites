import FadeIn from "@/components/ui/FadeIn";

export const AMENITIES = [
  {
    title: "Rooftop Pool & Sundeck",
    description:
      "A heated 60-foot lap pool crowned by cabanas, chaise lounges, and 360-degree skyline views.",
  },
  {
    title: "State-of-the-Art Fitness Center",
    description:
      "A double-height atelier outfitted with Technogym equipment and private training rooms.",
  },
  {
    title: "Co-Working Lounge",
    description:
      "Library-style workspaces, private phone rooms, and concierge-managed print services.",
  },
  {
    title: "24-Hour Concierge",
    description:
      "A discreet team attending to reservations, deliveries, and residence needs at all hours.",
  },
  {
    title: "Pet Spa & Dog Park",
    description:
      "A dedicated wash station and a landscaped run for residents with a four-legged household.",
  },
  {
    title: "Private Parking Garage",
    description:
      "Valet-operated, climate-controlled parking with direct elevator access to each floor.",
  },
  {
    title: "Outdoor Kitchen & Fire Pits",
    description:
      "A terraced entertaining level with gas grills, communal tables, and glowing fire pits.",
  },
  {
    title: "Smart Home Technology",
    description:
      "Integrated lighting, climate, and entry managed from a single in-residence control panel.",
  },
];

export default function Amenities() {
  return (
    <section id="amenities" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <FadeIn>
          <div className="max-w-3xl">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
              Amenities
            </span>
            <h2 className="mt-6 font-serif text-4xl font-normal leading-[1.1] tracking-tight text-[var(--color-fg)] md:text-5xl">
              A quiet catalogue of every daily ritual.
            </h2>
            <div className="mt-8 h-px w-16 bg-[var(--color-gold)]" />
            <p className="mt-8 font-sans text-base leading-relaxed text-neutral-600">
              The amenity program at The Ellington is deliberately edited — a
              small number of spaces, each considered in its own right, each
              meant to be used, not merely admired.
            </p>
          </div>
        </FadeIn>

        <div className="mt-20 grid grid-cols-1 gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {AMENITIES.map((item, i) => (
            <FadeIn key={item.title} delay={i * 60}>
              <div className="group border-t border-[var(--color-line)] pt-8">
                <h3 className="font-serif text-2xl font-normal text-[var(--color-fg)]">
                  {item.title}
                </h3>
                <p className="mt-4 font-sans text-sm leading-relaxed text-neutral-600">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
