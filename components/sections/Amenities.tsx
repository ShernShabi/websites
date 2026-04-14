import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import { config, type Amenity } from "@/site.config";

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

/**
 * Homepage amenities preview — a 4-up editorial grid of the first four
 * amenities, with a "see all" link to the full /amenities page. Cards
 * stagger with a small fade-in delay for a rhythmic reveal.
 */
export default function Amenities() {
  const preview = config.amenities.slice(0, 4);

  return (
    <section id="amenities" className="bg-[var(--color-bg)] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <FadeIn>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <span className="font-body text-xs uppercase tracking-[0.3em] text-[var(--color-terracotta)]">
                {config.amenitiesEyebrow}
              </span>
              <h2 className="mt-6 font-display text-5xl font-normal leading-[1.05] text-[var(--color-fg)] md:text-6xl">
                {config.amenitiesHeadline}
              </h2>
              <p className="mt-8 font-body text-lg leading-loose text-[var(--color-fg)]/70">
                {config.amenitiesBody}
              </p>
            </div>
            <Link
              href="/amenities"
              className="font-body text-xs uppercase tracking-[0.3em] text-[var(--color-terracotta)] transition-all duration-300 hover:translate-x-1"
            >
              See all amenities &rarr;
            </Link>
          </div>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-20 md:gap-8 lg:grid-cols-4">
          {preview.map((item, i) => (
            <FadeIn key={item.title} delay={i * 80}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-[var(--color-bg)] shadow-lg transition-transform duration-500 hover:scale-[1.02]">
                <div
                  className={`relative aspect-[4/5] w-full ${toneClass(item.tone)}`}
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
                <div className="flex flex-1 flex-col p-8">
                  <p className="font-body text-[10px] uppercase tracking-[0.3em] text-[var(--color-terracotta)]">
                    0{i + 1}
                  </p>
                  <h3 className="mt-4 font-display text-2xl font-normal leading-tight text-[var(--color-fg)]">
                    {item.title}
                  </h3>
                  <p className="mt-4 font-body text-sm leading-relaxed text-[var(--color-fg)]/70">
                    {item.description.split(".")[0]}.
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
