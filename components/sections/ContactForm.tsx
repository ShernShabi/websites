"use client";

import { useState } from "react";
import { config } from "@/site.config";

type Status = "idle" | "submitting" | "success" | "error";

const FLOOR_PLAN_OPTIONS = [
  { value: "", label: "Select a residence" },
  { value: "Studio", label: "Studio" },
  { value: "One Bedroom", label: "One Bedroom" },
  { value: "Two Bedroom", label: "Two Bedroom" },
  { value: "Penthouse", label: "Penthouse" },
];

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

      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
      };

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
      <div className="border-t-2 border-[var(--color-gold)] bg-white p-10 md:p-14">
        <span className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
          Inquiry Received
        </span>
        <h3 className="mt-6 font-serif text-3xl font-normal leading-tight text-[var(--color-fg)] md:text-4xl">
          Thank you for your inquiry.
        </h3>
        <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-neutral-600">
          Our leasing team will be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="border-t-2 border-[var(--color-gold)] bg-white p-8 md:p-12"
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

      <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
        <Field label="Full Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
        <Field label="Desired Move-In" name="moveInDate" placeholder="MM/YYYY" />
        <div className="md:col-span-2">
          <label
            htmlFor="floorPlan"
            className="font-sans text-[10px] uppercase tracking-[0.22em] text-neutral-500"
          >
            Residence of Interest
          </label>
          <select
            id="floorPlan"
            name="floorPlan"
            defaultValue=""
            className="mt-2 w-full border-0 border-b border-[var(--color-line)] bg-transparent py-3 font-sans text-base text-[var(--color-fg)] focus:border-[var(--color-gold)] focus:outline-none focus:ring-0"
          >
            {FLOOR_PLAN_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label
            htmlFor="message"
            className="font-sans text-[10px] uppercase tracking-[0.22em] text-neutral-500"
          >
            Message<span className="ml-1 text-[var(--color-gold)]">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="mt-2 w-full resize-none border-0 border-b border-[var(--color-line)] bg-transparent py-3 font-sans text-base text-[var(--color-fg)] placeholder:text-neutral-400 focus:border-[var(--color-gold)] focus:outline-none focus:ring-0"
            placeholder="Tell us a little about what you&rsquo;re looking for."
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-10 inline-flex w-full items-center justify-center rounded-full bg-[var(--color-gold)] px-8 py-4 font-sans text-sm tracking-wide text-[var(--color-fg)] transition-colors duration-300 hover:bg-[var(--color-gold-deep)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting…" : "Submit Inquiry"}
      </button>

      {status === "error" && (
        <div className="mt-6 border-t border-red-100 pt-6">
          <p className="font-sans text-sm text-red-600">
            {error ?? "We couldn&rsquo;t submit your inquiry."}
          </p>
          <p className="mt-3 font-sans text-xs leading-relaxed text-neutral-500">
            Please reach out directly at{" "}
            <a
              href={`mailto:${config.email}`}
              className="underline decoration-[var(--color-gold)] underline-offset-4"
            >
              {config.email}
            </a>{" "}
            or{" "}
            <a
              href={`tel:${config.phone.replace(/[^0-9+]/g, "")}`}
              className="underline decoration-[var(--color-gold)] underline-offset-4"
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
        className="font-sans text-[10px] uppercase tracking-[0.22em] text-neutral-500"
      >
        {label}
        {required && <span className="ml-1 text-[var(--color-gold)]">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full border-0 border-b border-[var(--color-line)] bg-transparent py-3 font-sans text-base text-[var(--color-fg)] placeholder:text-neutral-400 focus:border-[var(--color-gold)] focus:outline-none focus:ring-0"
      />
    </div>
  );
}
