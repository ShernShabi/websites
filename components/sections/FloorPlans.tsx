import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import { config, type FloorPlan } from "@/site.config";

const TONE_BY_INDEX = [
  "bg-gradient-to-br from-[#e5d6c2] via-[#d3b894] to-[#b68b63]",
  "bg-gradient-to-br from-[#c6cfb4] via-[#a8b594] to-[#7f8f6d]",
  "bg-gradient-to-br from-[#e6bca4] via-[#d19a78] to-[#a8613f]",
  "bg-gradient-to-br from-[#5a534c] via-[#433d37] to-[#2c2926]",
];

/**
 * Residences preview — a horizontal scroll rail of four residence cards.
 * Drag to scroll on touch; snap-mandatory for a tidy rest position. The
 * dedicated /floor-plans page has the full editorial spread.
 */
export default function FloorPlans() {
  return (
    <section
      id="floor-plans"
      className="bg-[var(--color-line)]/40 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <FadeIn>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="font-body text-xs uppercase tracking-[0.3em] text-[var(--color-terracotta)]">
                Residences
              </span>
              <h2 className="mt-6 font-display text-5xl font-normal leading-[1.05] text-[var(--color-fg)] md:text-6xl">
                Four ways to live here.
              </h2>
              <p className="mt-8 max-w-xl font-body text-lg leading-loose text-[var(--color-fg)]/70">
                From a light-filled studio tucked behind the courtyard olive
                tree to a penthouse with its own plunge pool — each residence
                is drawn around the California sun.
              </p>
            </div>
            <p className="font-body text-xs uppercase tracking-[0.3em] text-[var(--color-muted)] md:text-right">
              Drag to explore &rarr;
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Horizontal scroll rail */}
      <FadeIn delay={120}>
        <div className="scroll-rail mt-16 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-8 md:gap-8 md:px-10 md:pb-10">
          {config.floorPlans.map((plan, i) => (
            <PlanCard
              key={plan.slug}
              plan={plan}
              tone={TONE_BY_INDEX[i % TONE_BY_INDEX.length]}
              invert={i === TONE_BY_INDEX.length - 1}
            />
          ))}

          {/* Trailing spacer so the last card can still snap to start */}
          <div aria-hidden className="min-w-[24px] shrink-0 md:min-w-[40px]" />
        </div>
      </FadeIn>
    </section>
  );
}

function PlanCard({
  plan,
  tone,
  invert,
}: {
  plan: FloorPlan;
  tone: string;
  invert: boolean;
}) {
  return (
    <Link
      href={`/floor-plans#${plan.slug}`}
      className="group flex min-w-[320px] shrink-0 snap-start flex-col overflow-hidden rounded-2xl bg-[var(--color-bg)] shadow-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-xl sm:min-w-[400px] md:min-w-[440px]"
    >
      {/* Placeholder image */}
      <div className={`relative aspect-[4/3] w-full overflow-hidden ${tone}`}>
        <div className="grain" aria-hidden />
        <div className="relative flex h-full w-full items-center justify-center">
          <span
            className={`font-body text-xs uppercase tracking-[0.3em] ${
              invert
                ? "text-[var(--color-bg)]/50"
                : "text-[var(--color-dark)]/40"
            }`}
          >
            {plan.name}
          </span>
        </div>
        <div className="absolute left-5 top-5 rounded-full bg-[var(--color-bg)]/90 px-4 py-1.5 font-body text-[10px] uppercase tracking-[0.22em] text-[var(--color-terracotta)] shadow-sm backdrop-blur">
          From {plan.startingPrice}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-8 md:p-10">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-3xl font-normal text-[var(--color-fg)]">
            {plan.name}
          </h3>
          <span className="font-body text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
            {plan.squareFootage}
          </span>
        </div>

        <p className="mt-6 flex-1 font-body text-base leading-loose text-[var(--color-fg)]/70">
          {plan.description}
        </p>

        <div className="mt-10 flex items-center justify-between border-t border-[var(--color-line)] pt-6">
          <div className="font-body text-xs text-[var(--color-muted)]">
            {plan.bedrooms === 0 ? "Studio" : `${plan.bedrooms} Bed`}
            <span className="mx-2">·</span>
            {plan.bathrooms} Bath
          </div>
          <span className="font-body text-xs uppercase tracking-[0.22em] text-[var(--color-terracotta)] transition-all duration-300 group-hover:translate-x-1">
            Explore &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}
