import FadeIn from "@/components/ui/FadeIn";

export default function Neighborhood() {
  return (
    <section id="neighborhood" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          <FadeIn className="lg:col-span-6">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
              The Neighborhood
            </span>

            <h2 className="mt-6 font-serif text-4xl font-normal leading-[1.1] tracking-tight text-[var(--color-fg)] md:text-5xl">
              A quiet stretch of Park Avenue — and everything within a walk.
            </h2>

            <div className="mt-8 h-px w-16 bg-[var(--color-gold)]" />

            <div className="mt-10 space-y-6 font-sans text-base leading-relaxed text-neutral-600">
              <p>
                The Ellington sits between 56th and 57th Street, within steps
                of the flagship retail corridor of Fifth Avenue and the
                galleries of the Upper East Side. Central Park is a three-
                minute walk; the Museum of Modern Art, four. The Sherry
                Netherland is across the avenue.
              </p>
              <p>
                Dining is at arm&rsquo;s length — from the polished rooms of
                Le Bernardin and Per Se, to the quiet counters of Sushi Noz
                and La Grenouille, to the neighborhood cafés where residents
                are known by name. Evenings lean toward the restrained: the
                Carlyle, Bemelmans, and a half-dozen reservation-only rooms
                that the concierge can arrange.
              </p>
              <p>
                Transit is immediate — the 57th Street and Fifth Avenue
                stations serve the F, N, Q, R, and W lines, with Grand
                Central a five-minute ride. The building&rsquo;s Walk Score
                is 99, its Transit Score 100. For longer trips, private
                car service is arranged at the front desk.
              </p>
            </div>
          </FadeIn>

          <FadeIn className="lg:col-span-6" delay={100}>
            <div className="relative">
              <div className="aspect-[4/3] w-full bg-neutral-200">
                <div className="flex h-full w-full items-center justify-center">
                  <span className="font-sans text-xs uppercase tracking-[0.28em] text-neutral-400">
                    Map
                  </span>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-6 border-t border-[var(--color-line)] pt-6">
                <div>
                  <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-neutral-500">
                    Walk Score
                  </p>
                  <p className="mt-2 font-serif text-3xl text-[var(--color-fg)]">99</p>
                </div>
                <div>
                  <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-neutral-500">
                    Transit
                  </p>
                  <p className="mt-2 font-serif text-3xl text-[var(--color-fg)]">100</p>
                </div>
                <div>
                  <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-neutral-500">
                    Bike Score
                  </p>
                  <p className="mt-2 font-serif text-3xl text-[var(--color-fg)]">88</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
