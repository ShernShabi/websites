import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import { config } from "@/site.config";

export default function FloorPlans() {
  return (
    <section id="floor-plans" className="bg-neutral-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <FadeIn>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div>
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
                Floor Plans
              </span>
              <h2 className="mt-6 max-w-2xl font-serif text-4xl font-normal leading-[1.1] tracking-tight text-[var(--color-fg)] md:text-5xl">
                Four collections, each drawn with care.
              </h2>
            </div>
            <p className="max-w-sm font-sans text-sm leading-relaxed text-neutral-600">
              From a compact studio to a crowning penthouse, every residence
              shares the same palette, the same finishes, and the same
              attention to proportion.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {config.floorPlans.map((plan, i) => (
            <FadeIn key={plan.slug} delay={i * 80}>
              <Link
                href={`/floor-plans#${plan.slug}`}
                className="group flex h-full flex-col border-t-2 border-[var(--color-gold)] bg-white p-10 transition-transform duration-300 hover:-translate-y-1"
              >
                <h3 className="font-serif text-2xl font-normal text-[var(--color-fg)]">
                  {plan.name}
                </h3>
                <p className="mt-2 font-sans text-xs uppercase tracking-[0.18em] text-neutral-500">
                  {plan.squareFootage}
                </p>

                <div className="my-8 h-px w-10 bg-[var(--color-gold)]" />

                <p className="font-sans text-sm leading-relaxed text-neutral-600">
                  {plan.description}
                </p>

                <div className="mt-10 flex items-end justify-between">
                  <div>
                    <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-neutral-500">
                      Starting from
                    </p>
                    <p className="mt-1 font-serif text-2xl text-[var(--color-gold)]">
                      {plan.startingPrice}
                    </p>
                  </div>
                  <span className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--color-fg)] transition-colors duration-300 group-hover:text-[var(--color-gold)]">
                    View Details →
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
