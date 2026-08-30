"use client";

import { FormEvent, useState } from "react";

const interests = [
  "Strategy & Consulting",
  "Done-For-You Content",
  "Automation Implementation",
  "Franchise / Multi-Location",
  "Not sure yet",
];

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-accent bg-accent-soft/40 p-8 text-center">
        <h3 className="font-display text-xl font-semibold text-ink">
          Thanks — we&apos;ve got it!
        </h3>
        <p className="mt-2 text-sm text-ink-soft">
          We typically reply within 1 business day. Talk soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-tan-dark bg-cream p-6 sm:p-8"
    >
      {/* Honeypot — hidden from real users, catches basic bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_website">Website</label>
        <input
          id="company_website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-ink">
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1.5 w-full rounded-lg border border-tan-dark bg-cream px-4 py-2.5 text-sm text-ink outline-none focus:border-accent"
          />
        </div>
        <div>
          <label htmlFor="business" className="text-sm font-medium text-ink">
            Business name
          </label>
          <input
            id="business"
            name="business"
            type="text"
            required
            className="mt-1.5 w-full rounded-lg border border-tan-dark bg-cream px-4 py-2.5 text-sm text-ink outline-none focus:border-accent"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-ink">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1.5 w-full rounded-lg border border-tan-dark bg-cream px-4 py-2.5 text-sm text-ink outline-none focus:border-accent"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-ink">
            Phone <span className="text-ink-soft">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="mt-1.5 w-full rounded-lg border border-tan-dark bg-cream px-4 py-2.5 text-sm text-ink outline-none focus:border-accent"
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="interest" className="text-sm font-medium text-ink">
          What are you interested in?
        </label>
        <select
          id="interest"
          name="interest"
          required
          defaultValue=""
          className="mt-1.5 w-full rounded-lg border border-tan-dark bg-cream px-4 py-2.5 text-sm text-ink outline-none focus:border-accent"
        >
          <option value="" disabled>
            Select one
          </option>
          {interests.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="text-sm font-medium text-ink">
          Tell us a bit about your business
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="mt-1.5 w-full rounded-lg border border-tan-dark bg-cream px-4 py-2.5 text-sm text-ink outline-none focus:border-accent"
        />
      </div>

      {error ? (
        <p className="mt-4 text-sm font-medium text-red-700">{error}</p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 w-full rounded-full bg-accent px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-accent-dark disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send my message"}
      </button>
    </form>
  );
}
