import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import { buildMetadata } from "@/lib/seo";
import { config } from "@/site.config";

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata(
    "Gallery",
    `Interiors, common spaces, and views from ${config.businessName}.`
  );
}

export default function GalleryPage() {
  const slots = Array.from({ length: 12 });

  return (
    <>
      <div className="h-24 bg-white md:h-32" />

      <section className="bg-white pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <FadeIn>
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
              Gallery
            </span>
            <h1 className="mt-6 max-w-3xl font-serif text-5xl font-normal leading-[1.05] tracking-tight text-[var(--color-fg)] md:text-6xl">
              Scenes from the residence.
            </h1>
            <div className="mt-8 h-px w-16 bg-[var(--color-gold)]" />
            <p className="mt-8 max-w-2xl font-sans text-base leading-relaxed text-neutral-600">
              Photographed on quiet mornings, in the light the building was
              designed around — a record of interiors, common spaces, and
              details too small to describe.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-neutral-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {slots.map((_, i) => (
              <FadeIn key={i} delay={(i % 3) * 80}>
                <figure
                  className={
                    // Feature every 7th image tall, every 5th wide, for editorial variety
                    i % 7 === 3
                      ? "aspect-[3/4] w-full bg-neutral-200"
                      : i % 5 === 2
                        ? "aspect-[4/3] w-full bg-neutral-200"
                        : "aspect-square w-full bg-neutral-200"
                  }
                >
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="font-sans text-xs uppercase tracking-[0.28em] text-neutral-400">
                      Photo
                    </span>
                  </div>
                </figure>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
