import FadeIn from "@/components/ui/FadeIn";

export default function About() {
  return (
    <section id="about" className="bg-[var(--color-bg)] py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <FadeIn>
          <span className="font-body text-xs uppercase tracking-[0.3em] text-[var(--color-terracotta)]">
            The Residence
          </span>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="mt-10 space-y-8 font-body text-lg leading-loose text-[var(--color-fg)]/80">
            <p>
              The Linden is a building you come home to the way you come home
              to a good meal — slowly, hungrily, already a little in love.
              Sixty-four residences wrap a shaded central courtyard planted
              with an old olive tree, a fountain that trickles into terracotta
              tile, and the kind of afternoon shadows that make you forget
              what day it is.
            </p>
            <p>
              Interiors are a quiet conversation between limewashed plaster,
              white oak, travertine, and brushed linen. Kitchens turn on
              arched stone hoods and hand-thrown tile splashbacks; bathrooms
              lean into honeyed marble and brushed-brass fittings that age the
              way good objects should. Every residence faces the courtyard or
              opens onto a private balcony, and every window was placed to
              catch a specific hour of the California sun.
            </p>
          </div>
        </FadeIn>

        {/* Oversized pull quote with terracotta left rule */}
        <FadeIn delay={200}>
          <figure className="relative my-20 border-l-2 border-[var(--color-terracotta)] pl-8 md:my-28 md:pl-12">
            <blockquote className="font-display text-3xl font-normal italic leading-[1.2] text-[var(--color-fg)] md:text-4xl lg:text-5xl">
              &ldquo;A building you come home to the way you come home to a
              good meal — slowly, hungrily, already a little in love.&rdquo;
            </blockquote>
            <figcaption className="mt-8 font-body text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
              Dwell, on The Linden
            </figcaption>
          </figure>
        </FadeIn>

        <FadeIn delay={120}>
          <div className="space-y-8 font-body text-lg leading-loose text-[var(--color-fg)]/80">
            <p>
              Above the courtyard, the amenity deck unfolds the way a good
              hotel rooftop does — a long pool flanked by striped umbrellas,
              an outdoor kitchen shaded by an awning, and a row of daybeds
              facing the hills. It is the kind of place where you keep
              meaning to go back upstairs, and keep finding reasons to stay.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
