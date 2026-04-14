import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import { config } from "@/site.config";

export default function CTA() {
  return (
    <section className="bg-[var(--color-bg)] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <FadeIn>
          <div className="grid grid-cols-1 overflow-hidden rounded-2xl shadow-2xl md:grid-cols-5">
            {/* LEFT — warm dark text */}
            <div className="relative flex flex-col justify-center bg-[var(--color-dark)] p-10 text-[var(--color-bg)] md:col-span-3 md:p-16 lg:p-20">
              <div className="grain" aria-hidden />
              <div className="relative">
                <span className="font-body text-xs uppercase tracking-[0.3em] text-[var(--color-terracotta)]">
                  {config.ctaEyebrow}
                </span>
                <h2 className="mt-6 max-w-xl font-display text-4xl font-normal leading-[1.05] text-[var(--color-bg)] md:text-5xl lg:text-6xl">
                  {config.ctaHeadline}
                </h2>
                <p className="mt-8 max-w-md font-body text-lg leading-loose text-[var(--color-bg)]/70">
                  {config.ctaBody}
                </p>
              </div>
            </div>

            {/* RIGHT — terracotta button side */}
            <div className="relative flex flex-col items-start justify-center bg-[var(--color-terracotta)] p-10 text-[var(--color-bg)] md:col-span-2 md:p-16 lg:p-20">
              <div className="grain" aria-hidden />
              <div className="relative">
                <p className="font-body text-xs uppercase tracking-[0.3em] text-[var(--color-bg)]/80">
                  No pressure, no script
                </p>
                <p className="mt-6 max-w-xs font-display text-2xl font-normal italic leading-snug text-[var(--color-bg)] md:text-3xl">
                  &ldquo;{config.ctaPullquote}&rdquo;
                </p>
                <Link
                  href="/contact"
                  className="mt-10 inline-flex items-center justify-center rounded-full bg-[var(--color-bg)] px-10 py-4 font-body text-sm text-[var(--color-fg)] shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-white"
                >
                  {config.ctaButton}
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
