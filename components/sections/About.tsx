import FadeIn from "@/components/ui/FadeIn";
import { config } from "@/site.config";

export default function About() {
  return (
    <section id="about" className="bg-[var(--color-bg)] py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <FadeIn>
          <span className="font-body text-xs uppercase tracking-[0.3em] text-[var(--color-terracotta)]">
            {config.aboutEyebrow}
          </span>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="mt-10 space-y-8 font-body text-lg leading-loose text-[var(--color-fg)]/80">
            {config.aboutParagraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </FadeIn>

        {/* Oversized pull quote with terracotta left rule */}
        <FadeIn delay={200}>
          <figure className="relative my-20 border-l-2 border-[var(--color-terracotta)] pl-8 md:my-28 md:pl-12">
            <blockquote className="font-display text-3xl font-normal italic leading-[1.2] text-[var(--color-fg)] md:text-4xl lg:text-5xl">
              &ldquo;{config.aboutQuote}&rdquo;
            </blockquote>
            <figcaption className="mt-8 font-body text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
              {config.aboutQuoteAttribution}
            </figcaption>
          </figure>
        </FadeIn>

        <FadeIn delay={120}>
          <p className="font-body text-lg leading-loose text-[var(--color-fg)]/80">
            {config.aboutClosing}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
