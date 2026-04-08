import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import { buildMetadata } from "@/lib/seo";
import { config } from "@/site.config";

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata(
    "Gallery",
    `Interiors, common spaces, and views from ${config.businessName}.`
  );
}

type Tile = {
  aspect: "square" | "tall" | "xtall" | "wide" | "panorama";
  tone: "warm" | "sage" | "clay" | "shadow";
  span?: "single" | "double";
  row?: "single" | "double";
};

const TILES: Tile[] = [
  { aspect: "tall", tone: "warm", span: "single" },
  { aspect: "square", tone: "clay", span: "single" },
  { aspect: "wide", tone: "sage", span: "double" },
  { aspect: "xtall", tone: "shadow", span: "single", row: "double" },
  { aspect: "square", tone: "warm", span: "single" },
  { aspect: "tall", tone: "clay", span: "single" },
  { aspect: "square", tone: "sage", span: "single" },
  { aspect: "wide", tone: "warm", span: "double" },
  { aspect: "tall", tone: "shadow", span: "single" },
  { aspect: "square", tone: "clay", span: "single" },
  { aspect: "tall", tone: "sage", span: "single" },
  { aspect: "wide", tone: "clay", span: "double" },
];

function aspectClass(a: Tile["aspect"]) {
  switch (a) {
    case "tall":
      return "aspect-[3/4]";
    case "xtall":
      return "aspect-[2/3]";
    case "wide":
      return "aspect-[4/3]";
    case "panorama":
      return "aspect-[16/9]";
    default:
      return "aspect-square";
  }
}

function toneClass(t: Tile["tone"]) {
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

export default function GalleryPage() {
  return (
    <>
      <div className="h-24 bg-[var(--color-bg)] md:h-32" />

      <section className="bg-[var(--color-bg)] pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <FadeIn>
            <span className="font-body text-xs uppercase tracking-[0.3em] text-[var(--color-terracotta)]">
              Gallery
            </span>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-normal leading-[1.05] text-[var(--color-fg)] md:text-8xl">
              Scenes from the courtyard.
            </h1>
            <div className="mt-10 h-px w-16 bg-[var(--color-terracotta)]" />
            <p className="mt-10 max-w-2xl font-body text-lg leading-loose text-[var(--color-fg)]/70">
              Interiors, common spaces, and the slow California light that
              moves through the building from morning to evening.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-[var(--color-bg)] pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {TILES.map((tile, i) => (
              <FadeIn
                key={i}
                delay={(i % 4) * 80}
                className={`${tile.span === "double" ? "col-span-2" : ""} ${
                  tile.row === "double" ? "row-span-2" : ""
                }`}
              >
                <figure
                  className={`group relative h-full w-full overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 hover:scale-[1.02] ${aspectClass(
                    tile.aspect
                  )} ${toneClass(tile.tone)}`}
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
                </figure>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
