import FadeIn from "@/components/ui/FadeIn";

const TESTIMONIALS = [
  {
    quote:
      "The first morning I woke up here, I made coffee and sat in the courtyard with the olive tree for almost an hour. I didn't check my phone once. That's the best review I can give.",
    name: "Naomi R.",
    detail: "Resident since 2023",
  },
  {
    quote:
      "The light. Nobody tells you about the light until you live with it — how it comes through the kitchen arch in the morning and throws these long shadows across the plaster. I keep meaning to photograph it and never getting around to it.",
    name: "Jonah M.",
    detail: "One-bedroom, Courtyard side",
  },
  {
    quote:
      "I moved from a much flashier building and I don't miss the flash. The Linden feels like a real place — the concierge knows your dog's name, the fitness studio is always empty when you want it, and the pool is absurd in the best way.",
    name: "Priya & Daniel K.",
    detail: "Two-bedroom residents",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-dark)] py-20 text-[var(--color-bg)] md:py-28">
      <div className="grain" aria-hidden />

      {/* Warm glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full opacity-10 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-terracotta) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6 md:px-10">
        <FadeIn>
          <span className="font-body text-xs uppercase tracking-[0.3em] text-[var(--color-terracotta)]">
            Residents
          </span>
          <h2 className="mt-6 max-w-2xl font-display text-5xl font-normal leading-[1.05] text-[var(--color-bg)] md:text-6xl">
            What it&rsquo;s like to live here.
          </h2>
        </FadeIn>

        <div className="mt-20 space-y-16 md:space-y-20">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={t.name} delay={i * 100}>
              <figure className="relative">
                <div
                  aria-hidden
                  className="select-none font-display text-[140px] leading-none text-[var(--color-terracotta)]/90 md:text-[180px]"
                  style={{ lineHeight: 0.6 }}
                >
                  &ldquo;
                </div>
                <blockquote className="mt-2 max-w-3xl">
                  <p className="font-display text-2xl font-normal italic leading-[1.35] text-[var(--color-bg)] md:text-3xl lg:text-4xl">
                    {t.quote}
                  </p>
                  <figcaption className="mt-10">
                    <p className="font-body text-[11px] uppercase tracking-[0.3em] text-[var(--color-bg)]">
                      {t.name}
                    </p>
                    <p className="mt-2 font-body text-xs text-[var(--color-bg)]/50">
                      {t.detail}
                    </p>
                  </figcaption>
                </blockquote>

                {i !== TESTIMONIALS.length - 1 && (
                  <div className="mt-16 h-px w-full bg-[var(--color-bg)]/10 md:mt-20" />
                )}
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
