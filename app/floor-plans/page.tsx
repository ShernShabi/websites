import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import { buildMetadata } from "@/lib/seo";
import { config } from "@/site.config";

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata(
    "Floor Plans",
    `Explore studio, one-bedroom, two-bedroom, and penthouse residences at ${config.businessName}.`
  );
}

export default function FloorPlansPage() {
  return (
    <>
      <div className="h-24 bg-white md:h-32" />

      <section className="bg-white pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <FadeIn>
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
              Floor Plans
            </span>
            <h1 className="mt-6 max-w-3xl font-serif text-5xl font-normal leading-[1.05] tracking-tight text-[var(--color-fg)] md:text-6xl">
              Residences.
            </h1>
            <div className="mt-8 h-px w-16 bg-[var(--color-gold)]" />
            <p className="mt-8 max-w-2xl font-sans text-base leading-relaxed text-neutral-600">
              Four distinct collections — each finished in the same palette
              of honed marble, quarter-sawn white oak, and solid brass, each
              drawn to prioritize light, proportion, and a sense of calm.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-neutral-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl space-y-20 px-6 md:space-y-28 md:px-10">
          {config.floorPlans.map((plan, i) => {
            const reverse = i % 2 === 1;
            return (
              <FadeIn key={plan.slug}>
                <article
                  id={plan.slug}
                  className={`grid scroll-mt-28 grid-cols-1 gap-12 border-t-2 border-[var(--color-gold)] bg-white p-10 md:p-14 lg:grid-cols-12 lg:gap-16 ${
                    reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="lg:col-span-5">
                    <div className="aspect-[4/3] w-full bg-neutral-200">
                      <div className="flex h-full w-full items-center justify-center">
                        <span className="font-sans text-xs uppercase tracking-[0.28em] text-neutral-400">
                          Floor Plan
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-7">
                    <span className="font-sans text-[10px] uppercase tracking-[0.22em] text-neutral-500">
                      {plan.squareFootage}
                    </span>
                    <h2 className="mt-3 font-serif text-4xl font-normal leading-tight text-[var(--color-fg)] md:text-5xl">
                      {plan.name}
                    </h2>
                    <div className="mt-6 h-px w-12 bg-[var(--color-gold)]" />

                    <p className="mt-8 max-w-xl font-sans text-base leading-relaxed text-neutral-600">
                      {plan.description}
                    </p>

                    <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-[var(--color-line)] pt-8">
                      <div>
                        <dt className="font-sans text-[10px] uppercase tracking-[0.22em] text-neutral-500">
                          Bedrooms
                        </dt>
                        <dd className="mt-2 font-serif text-2xl text-[var(--color-fg)]">
                          {plan.bedrooms === 0 ? "Studio" : plan.bedrooms}
                        </dd>
                      </div>
                      <div>
                        <dt className="font-sans text-[10px] uppercase tracking-[0.22em] text-neutral-500">
                          Baths
                        </dt>
                        <dd className="mt-2 font-serif text-2xl text-[var(--color-fg)]">
                          {plan.bathrooms}
                        </dd>
                      </div>
                      <div>
                        <dt className="font-sans text-[10px] uppercase tracking-[0.22em] text-neutral-500">
                          From
                        </dt>
                        <dd className="mt-2 font-serif text-2xl text-[var(--color-gold)]">
                          {plan.startingPrice}
                        </dd>
                      </div>
                    </dl>

                    <div className="mt-10">
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-full bg-[var(--color-fg)] px-8 py-3.5 font-sans text-sm tracking-wide text-white transition-colors duration-300 hover:bg-black"
                      >
                        Inquire About {plan.name}
                      </Link>
                    </div>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </section>
    </>
  );
}
