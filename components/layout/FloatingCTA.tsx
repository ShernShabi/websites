"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * Mobile-only floating "Schedule a Tour" button. Fades in after the
 * user has scrolled past the hero so it never overlaps the hero CTAs.
 * Hidden on /contact — redundant there. Uses `usePathname()` so it
 * reacts to client-side navigation.
 */
export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname?.startsWith("/contact")) return null;

  return (
    <Link
      href="/contact"
      aria-label="Schedule a tour"
      className={`fixed bottom-6 right-6 z-40 inline-flex items-center justify-center rounded-full bg-[var(--color-terracotta)] px-6 py-4 font-body text-sm text-white shadow-xl transition-all duration-500 hover:bg-[var(--color-terracotta-deep)] lg:hidden ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      Schedule a Tour
    </Link>
  );
}
