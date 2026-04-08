"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { config } from "@/site.config";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/floor-plans", label: "Residences" },
  { href: "/amenities", label: "Amenities" },
  { href: "/gallery", label: "Gallery" },
  { href: "/#neighborhood", label: "Neighborhood" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const close = () => setMobileOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, [mobileOpen]);

  const onWarm = !scrolled && !mobileOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        onWarm
          ? "bg-transparent"
          : "bg-[var(--color-bg)]/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(44,41,38,0.06)]"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link
          href="/"
          className="font-display text-2xl leading-none tracking-tight text-[var(--color-fg)] transition-colors duration-300"
        >
          {config.shortName}
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm text-[var(--color-fg)]/80 transition-colors duration-300 hover:text-[var(--color-terracotta)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden items-center justify-center rounded-full bg-[var(--color-terracotta)] px-6 py-2.5 font-body text-sm text-white shadow-sm transition-all duration-300 hover:scale-[1.02] hover:bg-[var(--color-terracotta-deep)] lg:inline-flex"
          >
            Schedule a Tour
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center text-[var(--color-fg)] lg:hidden"
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
        className={`overflow-hidden bg-[var(--color-bg)] transition-[max-height] duration-500 lg:hidden ${
          mobileOpen ? "max-h-[560px] border-t border-[var(--color-line)]" : "max-h-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="border-b border-[var(--color-line)] py-4 font-body text-base text-[var(--color-fg)]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--color-terracotta)] px-8 py-3.5 font-body text-sm text-white transition-all duration-300 hover:bg-[var(--color-terracotta-deep)]"
          >
            Schedule a Tour
          </Link>
        </nav>
      </div>
    </header>
  );
}
