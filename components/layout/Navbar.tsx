"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { config } from "@/site.config";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/floor-plans", label: "Floor Plans" },
  { href: "/amenities", label: "Amenities" },
  { href: "/gallery", label: "Gallery" },
  { href: "/#neighborhood", label: "Neighborhood" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route-style hash navigation
  useEffect(() => {
    if (!mobileOpen) return;
    const close = () => setMobileOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, [mobileOpen]);

  const onDark = !scrolled && !mobileOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        onDark
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-[0_1px_0_0_rgba(0,0,0,0.06)]"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link
          href="/"
          className={`font-serif text-2xl tracking-tight transition-colors duration-300 ${
            onDark ? "text-white" : "text-[var(--color-fg)]"
          }`}
        >
          {config.shortName}
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-sans text-sm tracking-wide transition-colors duration-300 ${
                onDark
                  ? "text-white/90 hover:text-[var(--color-gold)]"
                  : "text-[var(--color-fg)] hover:text-[var(--color-gold)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden items-center justify-center rounded-full bg-[var(--color-gold)] px-6 py-2.5 font-sans text-sm tracking-wide text-[var(--color-fg)] transition-colors duration-300 hover:bg-[var(--color-gold-deep)] lg:inline-flex"
          >
            Schedule a Tour
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className={`inline-flex h-10 w-10 items-center justify-center lg:hidden ${
              onDark ? "text-white" : "text-[var(--color-fg)]"
            }`}
          >
            <span className="sr-only">Menu</span>
            <div className="relative h-4 w-6">
              <span
                className={`absolute left-0 top-0 h-px w-full bg-current transition-transform duration-300 ${
                  mobileOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-2 h-px w-full bg-current transition-opacity duration-300 ${
                  mobileOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-4 h-px w-full bg-current transition-transform duration-300 ${
                  mobileOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden bg-white transition-[max-height] duration-300 lg:hidden ${
          mobileOpen ? "max-h-[560px] border-t border-[var(--color-line)]" : "max-h-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="border-b border-[var(--color-line)] py-4 font-sans text-sm tracking-wide text-[var(--color-fg)]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--color-gold)] px-8 py-3.5 font-sans text-sm tracking-wide text-[var(--color-fg)] transition-colors duration-300 hover:bg-[var(--color-gold-deep)]"
          >
            Schedule a Tour
          </Link>
        </nav>
      </div>
    </header>
  );
}
