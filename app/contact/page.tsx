"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState } from "react";

const tradeFairs = [
  { city: "SAUDIA", country: "saudia", rotate: "-rotate-3" },
  // { city: "Paris", country: "France", rotate: "rotate-2" },
  // { city: "Munich", country: "Germany", rotate: "-rotate-2" },
  // { city: "Shanghai", country: "China", rotate: "rotate-3" },
];

export default function Contact() {
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
    <>
      <Header />
      <main className="bg-white">
        {/* <section className="border-b border-black/5 bg-[#FAF9F7]">
        <div className="max-w-content mx-auto px-4 md:px-8 py-16 md:py-10">
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand-orange">
            Get in touch
        </p>
        <h1 className="mt-4 max-w-2xl font-serif text-4xl font-semibold leading-tight text-brand-black md:text-6xl">
            Let&apos;s talk textiles.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-black/60 md:text-lg">
            Designers, manufacturers, or press — tell us what you&apos;re
            working on and we&apos;ll get back to you within one business
            day.
        </p>
        </div>
    </section> */}

        <section className="max-w-content mx-auto grid grid-cols-1 gap-12 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          {/* Form */}
          <div>
            {status === "sent" ? (
              <div className="rounded-2xl border border-brand-orange/20 bg-[#FAF9F7] p-8">
                <p className="font-serif text-2xl font-semibold text-brand-black">
                  Message sent.
                </p>
                <p className="mt-2 text-sm text-black/60">
                  Thanks for reaching out — someone from our team will reply to
                  you shortly.
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
                    <option value="collections">Sourcing request</option>
                    <option value="manufacturing">
                      Participate in a Fair
                    </option>
                    <option value="trade-fairs">Trend book</option>
                    <option value="press">Exclusive collection.</option>
                    <option value="other">Brand Development.</option>
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
                  <p className="text-sm text-red-600">
                    Something went wrong sending your message. Please try again,
                    or email us directly.
                  </p>
                )}
              </form>
            )}
          </div>

          <div className="space-y-10">
            <div>
              {/* <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40">
            Studio
            </p> */}
              <p className="mt-3 font-serif text-lg text-brand-black">
                6 El sheiekh Mohamed Salama St,
                <br />
                El Hejaz St, Heliopolis, Cairo
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href="mailto:info@modaitalia.com"
                className="text-sm font-medium text-brand-black hover:text-brand-orange"
              >
                heba.modaitalia@yahoo.com
              </a>
              <a
                href="tel:+390212345678"
                className="text-sm font-medium text-brand-black hover:text-brand-orange"
              >
                +20 12 86693375
              </a>
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40">
                Find us at
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                {tradeFairs.map((fair) => (
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
          </div>
        </section>
      </main>
      <Footer />
    </>
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
