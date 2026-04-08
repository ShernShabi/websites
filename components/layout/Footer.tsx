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
    <footer className="bg-[var(--color-dark)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="font-serif text-3xl tracking-tight text-white"
            >
              {config.shortName}
            </Link>
            <div className="mt-4 h-px w-12 bg-[var(--color-gold)]" />
            <p className="mt-6 max-w-xs font-sans text-sm leading-relaxed text-white/60">
              A collection of thoughtfully designed residences in the quiet
              heart of Midtown — where architecture, service, and address
              converge.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
              Explore
            </h4>
            <ul className="mt-6 space-y-3">
              {NAV.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-white/70 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Residences */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
              Residences
            </h4>
            <ul className="mt-6 space-y-3">
              {config.floorPlans.map((plan) => (
                <li key={plan.slug}>
                  <Link
                    href={`/floor-plans#${plan.slug}`}
                    className="font-sans text-sm text-white/70 transition-colors duration-300 hover:text-white"
                  >
                    {plan.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/floor-plans"
                  className="font-sans text-sm text-white/70 transition-colors duration-300 hover:text-white"
                >
                  View All Floor Plans
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
              Leasing Office
            </h4>
            <address className="mt-6 space-y-3 not-italic font-sans text-sm text-white/70">
              <p>
                {config.address.line1}
                <br />
                {config.address.city}, {config.address.state} {config.address.zip}
              </p>
              <p>
                <a
                  href={`mailto:${config.email}`}
                  className="transition-colors duration-300 hover:text-white"
                >
                  {config.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${config.phone.replace(/[^0-9+]/g, "")}`}
                  className="transition-colors duration-300 hover:text-white"
                >
                  {config.phone}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-20 border-t border-white/10 pt-8">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p className="font-sans text-xs text-white/40">
              © {year} {config.businessName}. All rights reserved.
            </p>
            <p className="font-sans text-xs text-white/40">
              Equal Housing Opportunity
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
