import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

export default function CTA() {
  return (
    <section className="bg-[var(--color-gold)] py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center md:px-10">
        <FadeIn>
          <h2 className="font-serif text-4xl font-normal leading-[1.1] tracking-tight text-[var(--color-fg)] md:text-5xl">
            Schedule Your Private Tour
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-sans text-base leading-relaxed text-[var(--color-fg)]/75">
            Experience the residence in person. Our leasing team is ready to
            show you around.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-fg)] px-10 py-4 font-sans text-sm tracking-wide text-white transition-colors duration-300 hover:bg-black"
            >
              Book a Tour
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
