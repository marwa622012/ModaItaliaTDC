
"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import { useEffect, useState } from "react";

const expertiseCategories = [
  "Shirts",
  "T-shirts",
  "Pants",
  "Jackets",
  "Suits",
  "Jeans",
  "Denim for both men's and women's fashion",
];

const whyChooseUs = [
  {
    number: "01",
    title: "Strategic sourcing and customization",
    description:
      "Privileged partnerships with leading fabric mills and garment factories, ensuring customized solutions tailored to your requirements.",
  },
  {
    number: "02",
    title: "Cost and time efficiency",
    description:
      "Thanks to Egypt's geographic proximity to Europe, we offer reduced transportation times and eliminate additional costs such as customs duties and taxes.",
  },
  {
    number: "03",
    title: "Strong industry connections",
    description:
      "As agents for top Italian and German textile designers, we provide direct access to the latest trends and high-quality materials.",
  },
];

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);

  // أنيميشن دخول بسيط لما الصفحة تحمل - فيد إن + طلوع خفيف لفوق
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
      <>
    <Header />
    <main className="flex min-h-screen items-center justify-center bg-[#FAF9F7] px-4 py-16 md:py-16">
    
      <div
        className={`w-full max-w-[560px] overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)] transition-all duration-700 ease-out ${
          mounted ? "translate-y-0 scale-100 opacity-100" : "translate-y-4 scale-[0.98] opacity-0"
        }`}
      >
        {/* Header */}
        <div className="border-b border-black/5 px-8 py-7">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-orange">
            About us
          </p>
          <h1 className="mt-2 font-serif text-2xl font-semibold leading-snug text-brand-black md:text-3xl">
            Your strategic partner in textiles & fashion
          </h1>
          <p className="mt-2 text-xs text-black/40">
            Founded 2015 · Based in Egypt
          </p>
        </div>

        {/* Intro */}
        <div className="border-b border-black/5 px-8 py-6">
          <p className="text-sm leading-relaxed text-black/60">
            MODA ITALIA is a leading agency specializing in textile design,
            fabric sourcing, and garment production. We serve as a vital
            link between garment manufacturers, weaving mills, and
            internationally renowned Italian and German textile designers.
          </p>
        </div>

        {/* Mission */}
        <div className="border-b border-black/5 px-8 py-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-black/40">
            Our mission
          </p>
          <p className="font-serif text-base italic leading-relaxed text-brand-black">
            Delivering high-quality fabrics and finished products, with
            innovative designs and tailored solutions for every client.
          </p>
        </div>

        {/* Expertise */}
        <div className="border-b border-black/5 px-8 py-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-black/40">
            Our expertise
          </p>
          <div className="flex flex-wrap gap-1.5">
            {expertiseCategories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-dashed border-brand-orange/40 px-3 py-1 text-[11px] text-brand-black transition-colors hover:border-brand-orange hover:bg-brand-orange/5"
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        {/* Why choose us */}
        <div className="border-b border-black/5 px-8 py-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-black/40">
            Why choose Moda Italia
          </p>
          <div className="flex flex-col gap-3">
            {whyChooseUs.map((item) => (
              <div key={item.number} className="flex gap-3">
                <span className="flex-shrink-0 font-serif text-sm text-brand-orange">
                  {item.number}
                </span>
                <p className="text-xs leading-relaxed text-black/70">
                  <span className="font-semibold text-brand-black">
                    {item.title} —{" "}
                  </span>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-brand-black px-8 py-7 text-center">
          <p className="mb-1 text-sm font-medium text-white">
            Let&apos;s collaborate.
          </p>
          <p className="mb-4 text-xs text-white/50">
            Fashion brand, manufacturer, or fabric producer — we&apos;re
            your ideal partner.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-sm bg-white px-6 py-2.5 text-xs font-medium text-brand-black transition-transform hover:scale-[1.03]"
          >
            Contact us
          </Link>
        </div>
      </div>
    </main>
        
    <Footer />
  </>

  );
}
