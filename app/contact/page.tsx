import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";
import FadeIn from "@/components/ui/FadeIn";
import { buildMetadata } from "@/lib/seo";
import { config } from "@/site.config";

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata("Contact", `Contact the leasing team at ${config.businessName}.`);
}

export default function ContactPage() {
  return (
    <>
      {/* Spacer under fixed navbar */}
      <div className="h-24 bg-white md:h-32" />

      <section className="bg-white pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <FadeIn>
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
              Leasing
            </span>
            <h1 className="mt-6 max-w-3xl font-serif text-5xl font-normal leading-[1.05] tracking-tight text-[var(--color-fg)] md:text-6xl">
              Contact Us
            </h1>
            <div className="mt-8 h-px w-16 bg-[var(--color-gold)]" />
            <p className="mt-8 max-w-xl font-sans text-base leading-relaxed text-neutral-600">
              Our leasing team answers every inquiry personally. Share a few
              details about what you&rsquo;re looking for, and we&rsquo;ll be
              in touch within 24 hours to arrange a private viewing.
            </p>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-16">
            <FadeIn className="lg:col-span-3">
              <ContactForm />
            </FadeIn>

            <FadeIn className="lg:col-span-2" delay={120}>
              <aside className="h-full bg-[var(--color-dark)] p-10 text-white md:p-12">
                <span className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
                  Visit
                </span>
                <h2 className="mt-6 font-serif text-3xl font-normal leading-tight text-white">
                  The Leasing Gallery
                </h2>
                <div className="mt-6 h-px w-12 bg-[var(--color-gold)]" />

                <address className="mt-8 space-y-8 not-italic font-sans text-sm leading-relaxed text-white/75">
                  <div>
                    <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-white/50">
                      Address
                    </p>
                    <p className="mt-2 text-white">
                      {config.address.line1}
                      <br />
                      {config.address.city}, {config.address.state}{" "}
                      {config.address.zip}
                    </p>
                  </div>

                  <div>
                    <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-white/50">
                      Email
                    </p>
                    <a
                      href={`mailto:${config.email}`}
                      className="mt-2 block text-white transition-colors duration-300 hover:text-[var(--color-gold)]"
                    >
                      {config.email}
                    </a>
                  </div>

                  <div>
                    <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-white/50">
                      Telephone
                    </p>
                    <a
                      href={`tel:${config.phone.replace(/[^0-9+]/g, "")}`}
                      className="mt-2 block text-white transition-colors duration-300 hover:text-[var(--color-gold)]"
                    >
                      {config.phone}
                    </a>
                  </div>

                  <div>
                    <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-white/50">
                      Leasing Hours
                    </p>
                    <ul className="mt-2 space-y-1 text-white">
                      {config.leasingHours.map((row) => (
                        <li key={row.days}>
                          <span className="text-white/70">{row.days}</span>
                          <span className="mx-2 text-white/30">·</span>
                          {row.hours}
                        </li>
                      ))}
                    </ul>
                  </div>
                </address>

                <div className="mt-10 aspect-[4/3] w-full bg-white/5">
                  <div className="flex h-full w-full items-center justify-center border border-white/10">
                    <span className="font-sans text-xs uppercase tracking-[0.28em] text-white/40">
                      Map
                    </span>
                  </div>
                </div>
              </aside>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
