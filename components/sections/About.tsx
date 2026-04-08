import FadeIn from "@/components/ui/FadeIn";

export default function About() {
  return (
    <section id="about" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Copy */}
          <FadeIn className="lg:col-span-7">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
              The Residence
            </span>

            <h2 className="mt-6 max-w-2xl font-serif text-4xl font-normal leading-[1.1] tracking-tight text-[var(--color-fg)] md:text-5xl">
              An address defined by proportion, light, and a quiet sense of
              arrival.
            </h2>

            <div className="mt-10 h-px w-16 bg-[var(--color-gold)]" />

            <div className="mt-10 max-w-xl space-y-6 font-sans text-base leading-relaxed text-neutral-600">
              <p>
                Set along one of Manhattan&rsquo;s most storied avenues, The
                Ellington Residences is a collection of 112 studio, one-,
                two-bedroom, and penthouse homes conceived for residents who
                value privacy, proportion, and a daily rhythm of considered
                service. Interiors are finished in honed marble, quarter-sawn
                white oak, and solid brass — materials that age gracefully and
                were selected for the way they hold the light.
              </p>
              <p>
                Every residence is oriented to maximize northern and western
                exposures, with floor-to-ceiling windows framing the skyline
                and custom millwork built to sit flush with the architecture.
                Kitchens are anchored by integrated Gaggenau appliances and
                waterfall-edge islands; primary baths are clad in book-matched
                stone and outfitted with radiant floors.
              </p>
              <p>
                Above, the amenity program is deliberately restrained — a
                rooftop pool and sundeck, a double-height fitness atelier, and
                a residents&rsquo; lounge with curated programming. Below, a
                24-hour concierge anticipates the needs of a small community.
                The result is a building that feels less like a rental and
                more like a private residence club.
              </p>
            </div>
          </FadeIn>

          {/* Image placeholder */}
          <FadeIn className="lg:col-span-5" delay={120}>
            <div className="relative">
              <div className="aspect-[3/4] w-full bg-neutral-200">
                <div className="flex h-full w-full items-center justify-center">
                  <span className="font-sans text-xs uppercase tracking-[0.28em] text-neutral-400">
                    Image
                  </span>
                </div>
              </div>
              {/* Gold rule detail */}
              <div className="absolute -left-6 top-10 hidden h-16 w-px bg-[var(--color-gold)] md:block" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
