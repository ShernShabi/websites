import FadeIn from "@/components/ui/FadeIn";
import { config } from "@/site.config";

export default function Neighborhood() {
  return (
    <section
      id="neighborhood"
      className="bg-[var(--color-bg)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <FadeIn>
          <div className="max-w-3xl">
            <span className="font-body text-xs uppercase tracking-[0.3em] text-[var(--color-terracotta)]">
              {config.neighborhoodEyebrow}
            </span>
            <h2 className="mt-6 font-display text-5xl font-normal leading-[1.05] text-[var(--color-fg)] md:text-6xl">
              {config.neighborhoodHeadline}
            </h2>
            <p className="mt-8 max-w-2xl font-body text-lg leading-loose text-[var(--color-fg)]/70">
              {config.neighborhoodBody}
            </p>
          </div>
        </FadeIn>

        <div className="relative mt-16 md:mt-20">
          {/* Large map area */}
          <FadeIn delay={100}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl md:aspect-[16/9] md:w-[70%]">
              <div className="relative h-full w-full bg-gradient-to-br from-[#c6cfb4] via-[#a8b594] to-[#6e7f5e]">
                <div className="grain" aria-hidden />
                {/* Pin */}
                <div
                  aria-hidden
                  className="absolute left-[38%] top-[44%] h-6 w-6 -translate-x-1/2 -translate-y-full"
                >
                  <div className="h-5 w-5 rounded-full border-4 border-[var(--color-bg)] bg-[var(--color-terracotta)] shadow-lg" />
                  <div className="mx-auto h-2 w-px bg-[var(--color-dark)]" />
                </div>
                <div className="relative flex h-full w-full items-center justify-center">
                  <span className="font-body text-xs uppercase tracking-[0.3em] text-[var(--color-dark)]/40">
                    Map
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Floating info cards */}
          <FadeIn delay={240}>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:absolute md:right-0 md:top-10 md:mt-0 md:w-[42%] md:grid-cols-1 md:gap-5 lg:top-16">
              <div className="rounded-2xl bg-[var(--color-bg)] p-6 shadow-xl ring-1 ring-[var(--color-line)] md:p-8">
                <span className="font-body text-xs uppercase tracking-[0.3em] text-[var(--color-terracotta)]">
                  Walkability
                </span>
                <div className="mt-4 flex items-baseline gap-6">
                  <div>
                    <p className="font-display text-5xl leading-none text-[var(--color-fg)]">
                      {config.walkScore}
                    </p>
                    <p className="mt-2 font-body text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)]">
                      Walk Score
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-5xl leading-none text-[var(--color-fg)]">
                      {config.transitScore}
                    </p>
                    <p className="mt-2 font-body text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)]">
                      Transit
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-[var(--color-dark)] p-6 text-[var(--color-bg)] shadow-xl md:p-8">
                <span className="font-body text-xs uppercase tracking-[0.3em] text-[var(--color-terracotta)]">
                  Nearby
                </span>
                <ul className="mt-5 space-y-4">
                  {config.neighborhoodNearby.map((group) => (
                    <li key={group.label}>
                      <p className="font-body text-[10px] uppercase tracking-[0.22em] text-[var(--color-bg)]/50">
                        {group.label}
                      </p>
                      <p className="mt-1 font-body text-sm leading-relaxed text-[var(--color-bg)]/90">
                        {group.items.join(" · ")}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
