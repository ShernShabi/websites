import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import { buildMetadata } from "@/lib/seo";
import { config, type Amenity } from "@/site.config";

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata(
    "Amenities",
    `The amenity program at ${config.businessName} in West Hollywood.`
  );
}

function toneClass(tone: Amenity["tone"]) {
  switch (tone) {
    case "sage":
      return "bg-gradient-to-br from-[#c6cfb4] via-[#a8b594] to-[#7f8f6d]";
    case "clay":
      return "bg-gradient-to-br from-[#e6bca4] via-[#d19a78] to-[#a8613f]";
    case "shadow":
      return "bg-gradient-to-br from-[#5a534c] via-[#433d37] to-[#2c2926]";
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
              {config.amenitiesEyebrow}
            </span>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-normal leading-[1.05] text-[var(--color-fg)] md:text-7xl">
              {config.amenitiesHeadline}
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
            {config.amenities.map((item, i) => {
              const reverse = i % 2 === 1;
              return (
                <FadeIn key={item.title}>
                  <article className="grid grid-cols-1 items-stretch overflow-hidden rounded-2xl bg-[var(--color-bg)] shadow-lg transition-transform duration-500 hover:scale-[1.01] md:grid-cols-12">
                    <div
                      className={`relative aspect-[4/3] md:col-span-5 md:aspect-auto ${
                        reverse ? "md:order-2" : ""
                      }`}
                    >
                      <div
                        className={`relative h-full w-full ${toneClass(item.tone)}`}
                      >
                        <div className="grain" aria-hidden />
                        <div className="relative flex h-full w-full items-center justify-center">
                          <span
                            className={`font-body text-xs uppercase tracking-[0.3em] ${
                              item.tone === "shadow"
                                ? "text-[var(--color-bg)]/40"
                                : "text-[var(--color-dark)]/40"
                            }`}
                          >
                            Photo
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center p-10 md:col-span-7 md:p-14 lg:p-16">
                      <p className="font-body text-xs uppercase tracking-[0.3em] text-[var(--color-terracotta)]">
                        {String(i + 1).padStart(2, "0")}
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
