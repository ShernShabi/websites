"use client";

import { useState } from "react";
import { config } from "@/site.config";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * Contact form, consumed by /contact. Posts to /api/contact and shows a
 * success or error state in place. Includes a hidden honeypot field.
 * Residence dropdown is populated from site.config.ts.
 */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        throw new Error(data.error ?? "Something went wrong.");
      }

      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unable to submit.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-[var(--color-bg)] p-10 text-center shadow-xl ring-1 ring-[var(--color-line)] md:p-14">
        <span className="font-body text-xs uppercase tracking-[0.3em] text-[var(--color-terracotta)]">
          Inquiry Received
        </span>
        <h3 className="mt-6 font-display text-4xl font-normal leading-tight text-[var(--color-fg)] md:text-5xl">
          Thank you.
        </h3>
        <div className="mx-auto mt-6 h-px w-12 bg-[var(--color-terracotta)]" />
        <p className="mx-auto mt-8 max-w-md font-body text-lg leading-loose text-[var(--color-fg)]/70">
          Our leasing team will be in touch within 24 hours to arrange a
          private walk-through of {config.businessName}.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl bg-[var(--color-bg)] p-8 shadow-xl ring-1 ring-[var(--color-line)] md:p-12"
    >
      {/* Honeypot */}
      <div className="hidden" aria-hidden>
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
      </div>

      <div className="space-y-6">
        <Field label="Full Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
        <Field
          label="Desired Move-In"
          name="moveInDate"
          placeholder="MM / YYYY"
        />

        <div>
          <label
            htmlFor="floorPlan"
            className="font-body text-xs uppercase tracking-[0.3em] text-[var(--color-terracotta)]"
          >
            Residence of Interest
          </label>
          <select
            id="floorPlan"
            name="floorPlan"
            defaultValue=""
            className="mt-3 w-full rounded-2xl border border-[var(--color-line)] bg-white px-5 py-4 font-body text-base text-[var(--color-fg)] shadow-sm transition-colors duration-300 focus:border-[var(--color-terracotta)] focus:outline-none focus:ring-2 focus:ring-[var(--color-terracotta)]/20"
          >
            <option value="">Select a residence</option>
            {config.floorPlans.map((plan) => (
              <option key={plan.slug} value={plan.name}>
                {plan.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="font-body text-xs uppercase tracking-[0.3em] text-[var(--color-terracotta)]"
          >
            Message
            <span className="ml-1 text-[var(--color-terracotta)]">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us what you're looking for — a sunny courtyard-side studio, a penthouse with a plunge pool, or something in between."
            className="mt-3 w-full resize-none rounded-2xl border border-[var(--color-line)] bg-white px-5 py-4 font-body text-base text-[var(--color-fg)] shadow-sm placeholder:text-[var(--color-muted)]/70 transition-colors duration-300 focus:border-[var(--color-terracotta)] focus:outline-none focus:ring-2 focus:ring-[var(--color-terracotta)]/20"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-10 inline-flex w-full items-center justify-center rounded-full bg-[var(--color-terracotta)] px-8 py-4 font-body text-sm text-white shadow-lg transition-all duration-300 hover:scale-[1.01] hover:bg-[var(--color-terracotta-deep)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting…" : "Submit Inquiry"}
      </button>

      {status === "error" && (
        <div className="mt-6 rounded-2xl bg-[var(--color-terracotta)]/10 p-5">
          <p className="font-body text-sm text-[var(--color-terracotta-deep)]">
            {error ?? "We couldn't submit your inquiry."}
          </p>
          <p className="mt-3 font-body text-xs leading-relaxed text-[var(--color-fg)]/70">
            Please reach out directly at{" "}
            <a
              href={`mailto:${config.email}`}
              className="underline decoration-[var(--color-terracotta)] underline-offset-4"
            >
              {config.email}
            </a>{" "}
            or{" "}
            <a
              href={`tel:${config.phone.replace(/[^0-9+]/g, "")}`}
              className="underline decoration-[var(--color-terracotta)] underline-offset-4"
            >
              {config.phone}
            </a>
            .
          </p>
        </div>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="font-body text-xs uppercase tracking-[0.3em] text-[var(--color-terracotta)]"
      >
        {label}
        {required && <span className="ml-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-3 w-full rounded-2xl border border-[var(--color-line)] bg-white px-5 py-4 font-body text-base text-[var(--color-fg)] shadow-sm placeholder:text-[var(--color-muted)]/70 transition-colors duration-300 focus:border-[var(--color-terracotta)] focus:outline-none focus:ring-2 focus:ring-[var(--color-terracotta)]/20"
      />
    </div>
  );
}
