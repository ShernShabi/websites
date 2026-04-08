import FadeIn from "@/components/ui/FadeIn";

/**
 * Amenities — masonry-style two-column layout with alternating large/small
 * cards, some text-only, some with image placeholders. The layout is
 * deliberately uneven so it reads like an editorial spread, not a grid.
 */

type AmenityCard = {
  title: string;
  description: string;
  variant: "text" | "image" | "feature";
  /** image placeholder gradient — only for variant !== text */
  tone?: "warm" | "sage" | "clay";
  /** how tall the card should be on desktop */
  height?: "short" | "tall" | "xtall";
};

const AMENITIES: AmenityCard[] = [
  {
    title: "Courtyard Pool & Sundeck",
    description:
      "A 55-foot pool edged in honey travertine, fringed with striped umbrellas and low chaise lounges. A shaded outdoor shower tucks into a wall of jasmine.",
    variant: "feature",
    tone: "warm",
    height: "xtall",
  },
  {
    title: "The Larder",
    description:
      "A residents-only pantry and espresso bar, open from seven in the morning to nine at night — fresh loaves on the counter, olive oil for tasting.",
    variant: "text",
    height: "short",
  },
  {
    title: "Fitness Studio",
    description:
      "A soft-lit training room facing the courtyard, stocked with Technogym equipment, a dedicated Pilates corner, and a private stretching loft.",
    variant: "image",
    tone: "sage",
    height: "tall",
  },
  {
    title: "The Library",
    description:
      "Two rooms of oak shelves, reading lamps, and deep bouclé armchairs. Bookable for private work or quiet afternoons with a novel.",
    variant: "text",
    height: "tall",
  },
  {
    title: "Rooftop Terrace",
    description:
      "An olive-tree canopy, a long communal table, and a row of gas fire pits that open each night at dusk — framed by a view that runs to the hills.",
    variant: "feature",
    tone: "clay",
    height: "xtall",
  },
  {
    title: "Resident Concierge",
    description:
      "A hospitality-trained team on-site from 7am to 11pm daily, coordinating deliveries, reservations, and the occasional last-minute birthday cake.",
    variant: "text",
    height: "short",
  },
  {
    title: "Garden Courtyard",
    description:
      "An old olive tree, a fountain that trickles into terracotta tile, and a row of lemon trees that perfume the air in spring.",
    variant: "image",
    tone: "sage",
    height: "tall",
  },
  {
    title: "Pet Spa & Run",
    description:
      "A dedicated wash station and a small, shaded run. Walk service and grooming can be arranged through the concierge.",
    variant: "text",
    height: "short",
  },
];

function toneClass(tone: AmenityCard["tone"]) {
  switch (tone) {
    case "sage":
      return "bg-gradient-to-br from-[#c6cfb4] via-[#a8b594] to-[#7f8f6d]";
    case "clay":
      return "bg-gradient-to-br from-[#e6bca4] via-[#d19a78] to-[#a8613f]";
    default:
      return "bg-gradient-to-br from-[#e5d6c2] via-[#d3b894] to-[#b68b63]";
  }
}

function heightClass(h: AmenityCard["height"]) {
  switch (h) {
    case "short":
      return "md:min-h-[260px]";
    case "tall":
      return "md:min-h-[420px]";
    case "xtall":
      return "md:min-h-[560px]";
    default:
      return "md:min-h-[320px]";
  }
}

export default function Amenities() {
  const left = AMENITIES.filter((_, i) => i % 2 === 0);
  const right = AMENITIES.filter((_, i) => i % 2 === 1);

  return (
    <section id="amenities" className="bg-[var(--color-bg)] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <FadeIn>
          <div className="max-w-3xl">
            <span className="font-body text-xs uppercase tracking-[0.3em] text-[var(--color-terracotta)]">
              Amenities
            </span>
            <h2 className="mt-6 font-display text-5xl font-normal leading-[1.05] text-[var(--color-fg)] md:text-6xl">
              Small pleasures, carefully kept.
            </h2>
            <p className="mt-8 font-body text-lg leading-loose text-[var(--color-fg)]/70">
              The amenity program at The Linden isn&rsquo;t a checklist —
              it&rsquo;s a collection of spaces you&rsquo;ll actually use.
              Places designed around the quiet hours of the day.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-2 md:gap-8">
          <div className="flex flex-col gap-6 md:gap-8">
            {left.map((item, i) => (
              <AmenityTile key={item.title} item={item} delay={i * 80} />
            ))}
          </div>
          <div className="flex flex-col gap-6 pt-0 md:gap-8 md:pt-16">
            {right.map((item, i) => (
              <AmenityTile key={item.title} item={item} delay={i * 80 + 40} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AmenityTile({ item, delay }: { item: AmenityCard; delay: number }) {
  if (item.variant === "text") {
    return (
      <FadeIn delay={delay}>
        <article
          className={`flex flex-col justify-between rounded-2xl bg-[var(--color-line)]/40 p-8 shadow-lg transition-transform duration-500 hover:scale-[1.02] md:p-10 ${heightClass(
            item.height
          )}`}
        >
          <span className="font-body text-xs uppercase tracking-[0.3em] text-[var(--color-terracotta)]">
            Amenity
          </span>
          <div className="mt-8">
            <h3 className="font-display text-3xl font-normal leading-tight text-[var(--color-fg)] md:text-4xl">
              {item.title}
            </h3>
            <p className="mt-6 font-body text-base leading-loose text-[var(--color-fg)]/70">
              {item.description}
            </p>
          </div>
        </article>
      </FadeIn>
    );
  }

  if (item.variant === "feature") {
    return (
      <FadeIn delay={delay}>
        <article
          className={`relative flex flex-col overflow-hidden rounded-2xl shadow-xl transition-transform duration-500 hover:scale-[1.02] ${heightClass(
            item.height
          )}`}
        >
          <div className={`relative flex-1 ${toneClass(item.tone)}`}>
            <div className="grain" aria-hidden />
            <div className="relative flex h-full w-full items-center justify-center">
              <span className="font-body text-xs uppercase tracking-[0.3em] text-[var(--color-dark)]/40">
                Photo
              </span>
            </div>
          </div>
          <div className="bg-[var(--color-bg)] p-8 md:p-10">
            <span className="font-body text-xs uppercase tracking-[0.3em] text-[var(--color-terracotta)]">
              Signature
            </span>
            <h3 className="mt-4 font-display text-3xl font-normal leading-tight text-[var(--color-fg)] md:text-4xl">
              {item.title}
            </h3>
            <p className="mt-5 font-body text-base leading-loose text-[var(--color-fg)]/70">
              {item.description}
            </p>
          </div>
        </article>
      </FadeIn>
    );
  }

  // image variant — image top, small body bottom
  return (
    <FadeIn delay={delay}>
      <article
        className={`flex flex-col overflow-hidden rounded-2xl bg-[var(--color-bg)] shadow-lg transition-transform duration-500 hover:scale-[1.02] ${heightClass(
          item.height
        )}`}
      >
        <div
          className={`relative aspect-[4/3] w-full ${toneClass(item.tone)}`}
        >
          <div className="grain" aria-hidden />
          <div className="relative flex h-full w-full items-center justify-center">
            <span className="font-body text-xs uppercase tracking-[0.3em] text-[var(--color-dark)]/40">
              Photo
            </span>
          </div>
        </div>
        <div className="flex flex-1 flex-col p-8 md:p-10">
          <h3 className="font-display text-2xl font-normal leading-tight text-[var(--color-fg)] md:text-3xl">
            {item.title}
          </h3>
          <p className="mt-4 font-body text-base leading-loose text-[var(--color-fg)]/70">
            {item.description}
          </p>
        </div>
      </article>
    </FadeIn>
  );
}
