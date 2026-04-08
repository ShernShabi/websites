import FadeIn from "@/components/ui/FadeIn";

export default function Gallery() {
  const slots = Array.from({ length: 8 });
  return (
    <section id="gallery" className="bg-neutral-50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <FadeIn>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
                Gallery
              </span>
              <h2 className="mt-6 font-serif text-4xl font-normal leading-[1.1] tracking-tight text-[var(--color-fg)] md:text-5xl">
                Scenes from the residence.
              </h2>
              <div className="mt-8 h-px w-16 bg-[var(--color-gold)]" />
            </div>
            <p className="max-w-sm font-sans text-sm leading-relaxed text-neutral-600">
              Interiors, common spaces, and views — photographed on quiet
              mornings, in the light the building was designed around.
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {slots.map((_, i) => (
            <FadeIn key={i} delay={(i % 4) * 80}>
              <div className="aspect-square w-full bg-neutral-200">
                <div className="flex h-full w-full items-center justify-center">
                  <span className="font-sans text-xs uppercase tracking-[0.28em] text-neutral-400">
                    Photo
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
