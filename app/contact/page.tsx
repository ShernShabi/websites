import type { Metadata } from "next";
import ContactForm from "@/components/sections/ContactForm";
import FadeIn from "@/components/ui/FadeIn";
import { buildMetadata } from "@/lib/seo";
import { config } from "@/site.config";

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata(
    "Contact",
    `Schedule a private tour of ${config.businessName} in West Hollywood.`
  );
}

export default function ContactPage() {
  return (
    <>
      {/* Spacer under fixed navbar */}
      <div className="h-24 bg-[var(--color-bg)] md:h-32" />

      <section className="bg-[var(--color-bg)] pb-24 md:pb-32">
        <div className="mx-auto max-w-xl px-6 md:px-0">
          <FadeIn>
            <div className="text-center">
              <span className="font-body text-xs uppercase tracking-[0.3em] text-[var(--color-terracotta)]">
                {config.contactEyebrow}
              </span>
              <h1 className="mt-6 font-display text-5xl font-normal leading-[1.05] text-[var(--color-fg)] md:text-6xl">
                {config.contactHeadline}
              </h1>
              <div className="mx-auto mt-8 h-px w-16 bg-[var(--color-terracotta)]" />
              <p className="mx-auto mt-8 max-w-md font-body text-lg leading-loose text-[var(--color-fg)]/70">
                {config.contactBody}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={120} className="mt-12">
            <ContactForm />
          </FadeIn>

          <FadeIn delay={200} className="mt-14">
            <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
              <div>
                <p className="font-body text-xs uppercase tracking-[0.3em] text-[var(--color-terracotta)]">
                  Visit
                </p>
                <p className="mt-3 font-body text-sm leading-relaxed text-[var(--color-fg)]/80">
                  {config.address.line1}
                  <br />
                  {config.address.city}, {config.address.state}{" "}
                  {config.address.zip}
                </p>
              </div>
              <div>
                <p className="font-body text-xs uppercase tracking-[0.3em] text-[var(--color-terracotta)]">
                  Email
                </p>
                <a
                  href={`mailto:${config.email}`}
                  className="mt-3 inline-block font-body text-sm text-[var(--color-fg)]/80 transition-colors duration-300 hover:text-[var(--color-terracotta)]"
                >
                  {config.email}
                </a>
              </div>
              <div>
                <p className="font-body text-xs uppercase tracking-[0.3em] text-[var(--color-terracotta)]">
                  Hours
                </p>
                <div className="mt-3 space-y-1 font-body text-sm leading-relaxed text-[var(--color-fg)]/80">
                  {config.leasingHours.map((row) => (
                    <p key={row.days}>
                      {row.days}
                      <br />
                      <span className="text-[var(--color-muted)]">
                        {row.hours}
                      </span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
