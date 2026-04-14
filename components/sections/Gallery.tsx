import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import { config, type GalleryTile } from "@/site.config";

function aspectClass(a: GalleryTile["aspect"]) {
  switch (a) {
    case "tall":
      return "aspect-[3/4]";
    case "xtall":
      return "aspect-[2/3]";
    case "wide":
      return "aspect-[4/3]";
    default:
      return "aspect-square";
  }
}

function toneClass(t: GalleryTile["tone"]) {
  switch (t) {
    case "sage":
      return "bg-gradient-to-br from-[#c6cfb4] via-[#a8b594] to-[#7f8f6d]";
    case "clay":
      return "bg-gradient-to-br from-[#e6bca4] via-[#d19a78] to-[#a8613f]";
    case "shadow":
      return "bg-gradient-to-br from-[#5a534c] via-[#433d37] to-[#2c2926]";
    default:
      return "bg-gradient-to-br from-[#e5d6c2] via-[#d3b894] to-[#b68b63]";
  }
}

/**
 * Homepage gallery preview — shows the first 6 tiles in a 3-column
 * masonry-ish grid. The full /gallery page carries the whole spread.
 */
export default function Gallery() {
  const tiles = config.galleryTiles.slice(0, 6);

  return (
    <section id="gallery" className="bg-[var(--color-bg)] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <FadeIn>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <span className="font-body text-xs uppercase tracking-[0.3em] text-[var(--color-terracotta)]">
                {config.galleryEyebrow}
              </span>
              <h2 className="mt-6 font-display text-5xl font-normal leading-[1.05] text-[var(--color-fg)] md:text-6xl">
                {config.galleryHeadline}
              </h2>
              <p className="mt-8 font-body text-lg leading-loose text-[var(--color-fg)]/70">
                {config.galleryBody}
              </p>
            </div>
            <Link
              href="/gallery"
              className="font-body text-xs uppercase tracking-[0.3em] text-[var(--color-terracotta)] transition-all duration-300 hover:translate-x-1"
            >
              Full gallery &rarr;
            </Link>
          </div>
        </FadeIn>

        <div className="mt-16 grid grid-cols-2 gap-4 md:mt-20 md:grid-cols-3 md:gap-6">
          {tiles.map((tile, i) => (
            <FadeIn
              key={i}
              delay={(i % 3) * 80}
              className={tile.span === "double" ? "col-span-2" : ""}
            >
              <figure
                className={`group relative h-full w-full overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 hover:scale-[1.02] ${aspectClass(tile.aspect)} ${toneClass(tile.tone)}`}
              >
                <div className="grain" aria-hidden />
                <div className="relative flex h-full w-full items-center justify-center">
                  <span
                    className={`font-body text-xs uppercase tracking-[0.3em] ${
                      tile.tone === "shadow"
                        ? "text-[var(--color-bg)]/40"
                        : "text-[var(--color-dark)]/40"
                    }`}
                  >
                    Photo
                  </span>
                </div>
                {tile.caption && (
                  <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/40 to-transparent p-4 font-body text-[10px] uppercase tracking-[0.3em] text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {tile.caption}
                  </figcaption>
                )}
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
