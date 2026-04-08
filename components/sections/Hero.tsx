import Link from "next/link";
import { config } from "@/site.config";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative grid min-h-screen grid-cols-1 lg:grid-cols-2"
    >
      {/* LEFT — warm dark text half */}
      <div className="relative flex items-center overflow-hidden bg-[var(--color-dark)] text-[var(--color-bg)]">
        <div className="grain" aria-hidden />

        {/* Soft sage glow top-left */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--color-sage) 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10 w-full px-6 pb-20 pt-36 md:px-12 md:pb-28 md:pt-40 lg:px-20 lg:pt-32">
          <span className="font-body text-xs uppercase tracking-[0.3em] text-[var(--color-terracotta)]">
            West Hollywood, California
          </span>

          <h1 className="mt-8 font-display text-5xl font-normal leading-[1.02] tracking-tight text-[var(--color-bg)] md:text-7xl lg:text-8xl">
            The
            <br />
            Linden
          </h1>

          <div className="mt-10 h-px w-20 bg-[var(--color-terracotta)]" />

          <p className="mt-10 max-w-md font-body text-lg font-light leading-loose text-[var(--color-bg)]/70">
            {config.tagline}
          </p>

          <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-terracotta)] px-10 py-4 font-body text-sm text-white shadow-lg shadow-[var(--color-terracotta)]/20 transition-all duration-300 hover:scale-[1.02] hover:bg-[var(--color-terracotta-deep)]"
            >
              Schedule a Tour
            </Link>
            <Link
              href="/floor-plans"
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-bg)]/40 px-10 py-4 font-body text-sm text-[var(--color-bg)] transition-all duration-300 hover:scale-[1.02] hover:border-[var(--color-bg)] hover:bg-[var(--color-bg)] hover:text-[var(--color-fg)]"
            >
              View Residences
            </Link>
          </div>

          {/* Scroll cue — desktop left column only */}
          <div className="mt-20 hidden items-center gap-4 text-[var(--color-bg)]/50 lg:flex">
            <div className="scroll-bob h-10 w-px bg-[var(--color-bg)]/60" />
            <span className="font-body text-[10px] uppercase tracking-[0.3em]">
              Scroll to explore
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT — image half */}
      <div className="relative min-h-[60vh] bg-[var(--color-line)] lg:min-h-full">
        <div className="absolute inset-0 p-6 md:p-10 lg:p-12">
          <div className="relative h-full w-full overflow-hidden rounded-2xl bg-neutral-300 shadow-2xl">
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#d9c7b3] via-[#c9b299] to-[#a68868]">
              <div className="flex flex-col items-center gap-3 text-[var(--color-dark)]/40">
                <span className="font-body text-xs uppercase tracking-[0.3em]">
                  Hero Imagery
                </span>
                <div className="h-px w-12 bg-[var(--color-dark)]/20" />
              </div>
            </div>

            {/* Floating plaque */}
            <div className="absolute bottom-6 left-6 rounded-xl bg-[var(--color-bg)]/90 px-5 py-4 shadow-lg backdrop-blur md:bottom-10 md:left-10">
              <p className="font-body text-[10px] uppercase tracking-[0.3em] text-[var(--color-terracotta)]">
                Now Leasing
              </p>
              <p className="mt-1 font-display text-xl text-[var(--color-fg)]">
                64 Residences
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
