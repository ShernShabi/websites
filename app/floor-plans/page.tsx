import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import { buildMetadata } from "@/lib/seo";
import { config } from "@/site.config";

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata(
    "Floor Plans",
    `Studio, one-bedroom, two-bedroom, and penthouse residences at ${config.businessName}.`
  );
}

const TONE_BY_INDEX = [
  "bg-gradient-to-br from-[#e5d6c2] via-[#d3b894] to-[#b68b63]",
  "bg-gradient-to-br from-[#c6cfb4] via-[#a8b594] to-[#7f8f6d]",
  "bg-gradient-to-br from-[#e6bca4] via-[#d19a78] to-[#a8613f]",
  "bg-gradient-to-br from-[#5a534c] via-[#433d37] to-[#2c2926]",
];

export default function FloorPlansPage() {
  return (
    <>
      <div className="h-24 bg-[var(--color-bg)] md:h-32" />

      <section className="bg-[var(--color-bg)] pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <FadeIn>
            <span className="font-body text-xs uppercase tracking-[0.3em] text-[var(--color-terracotta)]">
              Residences
            </span>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-normal leading-[1.05] text-[var(--color-fg)] md:text-8xl">
              Four ways to live here.
            </h1>
            <div className="mt-10 h-px w-16 bg-[var(--color-terracotta)]" />
            <p className="mt-10 max-w-2xl font-body text-lg leading-loose text-[var(--color-fg)]/70">
              Sixty-four residences, each drawn around the California sun.
              Finishes and materials carry through every floor plan — white
              oak, limewashed plaster, travertine, brushed brass — so every
              home feels like part of the same building.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-[var(--color-line)]/40 py-16 md:py-24">
        <div className="mx-auto max-w-7xl space-y-16 px-6 md:space-y-24 md:px-10">
          {config.floorPlans.map((plan, i) => {
            const reverse = i % 2 === 1;
            const isDark = i === config.floorPlans.length - 1;
            return (
              <FadeIn key={plan.slug}>
                <article
                  id={plan.slug}
                  className={`grid scroll-mt-28 grid-cols-1 overflow-hidden rounded-2xl shadow-xl lg:grid-cols-12 ${
                    isDark
                      ? "bg-[var(--color-dark)] text-[var(--color-bg)]"
                      : "bg-[var(--color-bg)]"
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:col-span-6 ${
                      reverse ? "lg:order-2" : ""
                    }`}
                  >
                    <div
                      className={`relative h-full w-full ${TONE_BY_INDEX[i % TONE_BY_INDEX.length]}`}
                    >
                      <div className="grain" aria-hidden />
                      <div className="relative flex h-full w-full items-center justify-center">
                        <span
                          className={`font-body text-xs uppercase tracking-[0.3em] ${
                            i === 3
                              ? "text-[var(--color-bg)]/40"
                              : "text-[var(--color-dark)]/40"
                          }`}
                        >
                          {plan.name}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="flex flex-col justify-center p-10 md:p-14 lg:col-span-6 lg:p-20">
                    <span
                      className={`font-body text-xs uppercase tracking-[0.3em] ${
                        isDark
                          ? "text-[var(--color-terracotta)]"
                          : "text-[var(--color-terracotta)]"
                      }`}
                    >
                      {plan.squareFootage}
                    </span>
                    <h2
                      className={`mt-4 font-display text-4xl font-normal leading-tight md:text-6xl ${
                        isDark ? "text-[var(--color-bg)]" : "text-[var(--color-fg)]"
                      }`}
                    >
                      {plan.name}
                    </h2>
                    <div className="mt-6 h-px w-12 bg-[var(--color-terracotta)]" />

                    <p
                      className={`mt-8 max-w-lg font-body text-lg leading-loose ${
                        isDark
                          ? "text-[var(--color-bg)]/70"
                          : "text-[var(--color-fg)]/70"
                      }`}
                    >
                      {plan.description}
                    </p>

                    <dl
                      className={`mt-10 grid grid-cols-3 gap-6 border-t pt-8 ${
                        isDark
                          ? "border-[var(--color-bg)]/10"
                          : "border-[var(--color-line)]"
                      }`}
                    >
                      <div>
                        <dt
                          className={`font-body text-[10px] uppercase tracking-[0.22em] ${
                            isDark
                              ? "text-[var(--color-bg)]/50"
                              : "text-[var(--color-muted)]"
                          }`}
                        >
                          Bedrooms
                        </dt>
                        <dd
                          className={`mt-2 font-display text-3xl ${
                            isDark
                              ? "text-[var(--color-bg)]"
                              : "text-[var(--color-fg)]"
                          }`}
                        >
                          {plan.bedrooms === 0 ? "Studio" : plan.bedrooms}
                        </dd>
                      </div>
                      <div>
                        <dt
                          className={`font-body text-[10px] uppercase tracking-[0.22em] ${
                            isDark
                              ? "text-[var(--color-bg)]/50"
                              : "text-[var(--color-muted)]"
                          }`}
                        >
                          Baths
                        </dt>
                        <dd
                          className={`mt-2 font-display text-3xl ${
                            isDark
                              ? "text-[var(--color-bg)]"
                              : "text-[var(--color-fg)]"
                          }`}
                        >
                          {plan.bathrooms}
                        </dd>
                      </div>
                      <div>
                        <dt
                          className={`font-body text-[10px] uppercase tracking-[0.22em] ${
                            isDark
                              ? "text-[var(--color-bg)]/50"
                              : "text-[var(--color-muted)]"
                          }`}
                        >
                          From
                        </dt>
                        <dd className="mt-2 font-display text-3xl text-[var(--color-terracotta)]">
                          {plan.startingPrice}
                        </dd>
                      </div>
                    </dl>

                    <div className="mt-10">
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-full bg-[var(--color-terracotta)] px-10 py-4 font-body text-sm text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-[var(--color-terracotta-deep)]"
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
