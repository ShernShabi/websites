import Link from "next/link";
import { config } from "@/site.config";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex h-screen min-h-[640px] w-full items-center justify-center overflow-hidden bg-[var(--color-dark)] text-white"
    >
      {/* Subtle radial gradient */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.05) 0%, rgba(201,169,97,0.04) 30%, rgba(26,26,46,1) 70%)",
        }}
      />

      {/* Top/bottom vignettes */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/40 to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/30 to-transparent"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center md:px-10">
        <span className="font-sans text-xs uppercase tracking-[0.32em] text-[var(--color-gold)]">
          Park Avenue · New York
        </span>

        <h1 className="mt-8 font-serif text-6xl font-normal leading-[1.04] tracking-tight text-white md:text-7xl lg:text-[5.5rem]">
          {config.businessName}
        </h1>

        <div className="mx-auto mt-10 h-px w-16 bg-[var(--color-gold)]" />

        <p className="mx-auto mt-8 max-w-xl font-sans text-lg font-light leading-relaxed text-neutral-400">
          {config.tagline}
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-gold)] px-10 py-4 font-sans text-sm tracking-wide text-[var(--color-fg)] transition-colors duration-300 hover:bg-[var(--color-gold-deep)]"
          >
            Schedule a Tour
          </Link>
          <Link
            href="/floor-plans"
            className="inline-flex items-center justify-center rounded-full border border-white/60 px-10 py-4 font-sans text-sm tracking-wide text-white transition-colors duration-300 hover:bg-white hover:text-[var(--color-fg)]"
          >
            View Floor Plans
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute inset-x-0 bottom-10 z-10 flex flex-col items-center gap-3 text-white/60">
        <span className="font-sans text-[10px] uppercase tracking-[0.28em]">
          Scroll
        </span>
        <div className="scroll-bob h-10 w-px bg-white/60" />
      </div>
    </section>
  );
}
