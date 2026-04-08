import Link from "next/link";
import { config } from "@/site.config";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/amenities", label: "Amenities" },
  { href: "/gallery", label: "Gallery" },
  { href: "/#neighborhood", label: "Neighborhood" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[var(--color-dark)] text-[var(--color-bg)]">
      <div className="grain" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="font-display text-4xl leading-none tracking-tight text-[var(--color-bg)]"
            >
              {config.shortName}
            </Link>
            <div className="mt-6 h-px w-16 bg-[var(--color-terracotta)]" />
            <p className="mt-6 max-w-xs font-body text-sm leading-loose text-[var(--color-bg)]/60">
              A collection of residences in West Hollywood, designed around
              warmth, sunlight, and the rituals of California living.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-body text-xs uppercase tracking-[0.3em] text-[var(--color-terracotta)]">
              Explore
            </h4>
            <ul className="mt-6 space-y-3">
              {NAV.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-[var(--color-bg)]/70 transition-colors duration-300 hover:text-[var(--color-bg)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Residences */}
          <div>
            <h4 className="font-body text-xs uppercase tracking-[0.3em] text-[var(--color-terracotta)]">
              Residences
            </h4>
            <ul className="mt-6 space-y-3">
              {config.floorPlans.map((plan) => (
                <li key={plan.slug}>
                  <Link
                    href={`/floor-plans#${plan.slug}`}
                    className="font-body text-sm text-[var(--color-bg)]/70 transition-colors duration-300 hover:text-[var(--color-bg)]"
                  >
                    {plan.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/floor-plans"
                  className="font-body text-sm text-[var(--color-bg)]/70 transition-colors duration-300 hover:text-[var(--color-bg)]"
                >
                  View All Floor Plans
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-xs uppercase tracking-[0.3em] text-[var(--color-terracotta)]">
              Visit
            </h4>
            <address className="mt-6 space-y-3 not-italic font-body text-sm text-[var(--color-bg)]/70">
              <p>
                {config.address.line1}
                <br />
                {config.address.city}, {config.address.state} {config.address.zip}
              </p>
              <p>
                <a
                  href={`mailto:${config.email}`}
                  className="transition-colors duration-300 hover:text-[var(--color-bg)]"
                >
                  {config.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${config.phone.replace(/[^0-9+]/g, "")}`}
                  className="transition-colors duration-300 hover:text-[var(--color-bg)]"
                >
                  {config.phone}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-20 border-t border-[var(--color-bg)]/10 pt-8">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p className="font-body text-xs text-[var(--color-bg)]/40">
              © {year} {config.businessName}. All rights reserved.
            </p>
            <p className="font-body text-xs text-[var(--color-bg)]/40">
              Equal Housing Opportunity
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
