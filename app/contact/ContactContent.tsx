"use client";

import { useState } from "react";

const upcomingFairs = [
  { city: "CASABLANCA", country: "Apr 2027", rotate: "-rotate-3" },
];

export default function ContactContent() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">(
    "idle",
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("sent");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <section className="max-w-content mx-auto grid grid-cols-1 gap-12 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
      {/* Form */}
      <div>
        {status === "sent" ? (
          <div
            role="status"
            className="rounded-2xl border border-brand-orange/20 bg-[#FAF9F7] p-8"
          >
            <p className="font-serif text-2xl font-semibold text-brand-black">
              Message sent.
            </p>
            <p className="mt-2 text-sm text-black/60">
              Thanks for reaching out — someone from our team will reply to you
              shortly.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 text-sm font-semibold text-brand-orange hover:underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Field label="Full name" htmlFor="name">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Giulia Rossi"
                  className={inputStyles}
                />
              </Field>
              <Field label="Email" htmlFor="email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="giulia@studio.com"
                  className={inputStyles}
                />
              </Field>
            </div>

            <Field label="Company (optional)" htmlFor="company">
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                placeholder="Studio or brand name"
                className={inputStyles}
              />
            </Field>

            <Field label="I'm reaching out about" htmlFor="topic">
              <select
                id="topic"
                name="topic"
                className={inputStyles}
                defaultValue=""
              >
                <option value="" disabled>
                  Select a topic
                </option>
                <option value="sourcing">Sourcing request</option>
                <option value="fair">Participate in a Fair</option>
                <option value="trend-book">Trend book</option>
                <option value="exclusive">Exclusive collection</option>
                <option value="brand-development">Brand Development</option>
              </select>
            </Field>

            <Field label="Message" htmlFor="message">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell us a little about your project..."
                className={`${inputStyles} resize-none`}
              />
            </Field>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-sm bg-brand-black px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-black/80 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
            >
              {status === "loading" ? "Sending..." : "Send message"}
            </button>

            {status === "error" && (
              <p role="alert" className="text-sm text-red-600">
                Something went wrong sending your message. Please try again, or
                email us directly.
              </p>
            )}
          </form>
        )}
      </div>

      {/* Details */}
      <div className="space-y-10">
        <div>
          <p className="mt-3 font-serif text-lg text-brand-black">
            Obour City, Cairo
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <a
            href="mailto:heba.modaitalia@yahoo.com"
            className="text-sm font-medium text-brand-black hover:text-brand-orange"
          >
            heba.modaitalia@yahoo.com
          </a>
          <a
            href="tel:+201286693375"
            className="text-sm font-medium text-brand-black hover:text-brand-orange"
          >
            +20 128 669 3375
          </a>
        </div>

        {upcomingFairs.length > 0 && (
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40">
              Find us at
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              {upcomingFairs.map((fair) => (
                <div
                  key={fair.city}
                  className={`${fair.rotate} flex h-24 w-24 flex-col items-center justify-center rounded-full border-2 border-dashed border-brand-orange/50 text-center transition-transform hover:rotate-0`}
                >
                  <span className="font-serif text-sm font-bold text-brand-black">
                    {fair.city}
                  </span>
                  <span className="mt-0.5 text-[9px] uppercase tracking-wide text-black/40">
                    {fair.country}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-xs font-semibold uppercase tracking-wide text-black/50"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

const inputStyles =
  "w-full rounded-sm border border-black/10 bg-white px-4 py-3 text-sm text-brand-black placeholder:text-black/30 outline-none transition-colors focus:border-brand-orange";