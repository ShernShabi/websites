"use client";

import { useEffect, useState } from "react";
import FadeIn from "@/components/ui/FadeIn";

const TESTIMONIALS = [
  {
    quote:
      "We moved in quietly three years ago and still feel like we discovered something rare. The light, the service, the way the building just works — it has changed what we expect from a home.",
    name: "Helena & Marcus Whitfield",
    detail: "Residents since 2022",
  },
  {
    quote:
      "The concierge team is the best I&rsquo;ve encountered anywhere — attentive without being intrusive, and somehow already one step ahead. It makes the difference between an apartment and a residence.",
    name: "David Lin",
    detail: "Penthouse Resident",
  },
  {
    quote:
      "I travel often for work and the peace of mind is extraordinary. Everything is handled, every package, every delivery, every detail. Coming home feels like checking into a favourite hotel — except it&rsquo;s mine.",
    name: "Priya Chandra",
    detail: "One Bedroom Resident",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % TESTIMONIALS.length),
      7000
    );
    return () => window.clearInterval(id);
  }, []);

  const current = TESTIMONIALS[index];

  return (
    <section className="relative overflow-hidden bg-[var(--color-dark)] py-24 text-white md:py-32">
      {/* Subtle radial */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(201,169,97,0.08) 0%, rgba(26,26,46,1) 60%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center md:px-10">
        <FadeIn>
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
            Residents
          </span>

          <div
            aria-hidden
            className="mt-12 select-none font-serif text-[140px] leading-none text-[var(--color-gold)]/90 md:text-[180px]"
            style={{ lineHeight: 0.7 }}
          >
            &ldquo;
          </div>

          <blockquote className="mx-auto mt-6 max-w-3xl">
            <p
              key={index}
              className="fade-in is-visible font-serif text-2xl font-normal leading-[1.4] text-white md:text-3xl"
              dangerouslySetInnerHTML={{ __html: current.quote }}
            />
            <footer className="mt-10">
              <p className="font-sans text-[11px] uppercase tracking-[0.28em] text-white">
                {current.name}
              </p>
              <p className="mt-2 font-sans text-xs text-white/50">
                {current.detail}
              </p>
            </footer>
          </blockquote>

          <div className="mt-12 flex items-center justify-center gap-3">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Testimonial ${i + 1}`}
                className={`h-px w-8 transition-all duration-300 ${
                  i === index
                    ? "bg-[var(--color-gold)]"
                    : "bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
