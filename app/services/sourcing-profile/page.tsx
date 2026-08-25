"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect, useRef, useState, type ReactNode } from "react";

// ---- Scroll fade-in wrapper -----------------------------------------------

function FadeIn({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

// ---- Data --------------------------------------------------------------

const sourcingServices = [
  {
    icon: "shirt",
    title: "Men's shirts",
    desc: "Formal and casual",
  },
  {
    icon: "hanger-2",
    title: "Knitwear",
    desc: "T-shirts, polos, sweatshirts, jumpers",
  },
  {
    icon: "stack-2",
    title: "Pants",
    desc: "Formal trousers, chinos, joggers",
  },
  {
    icon: "ruler-2",
    title: "Custom development",
    desc: "Based on your tech packs or seasonal needs",
  },
];

const whyWorkWithUs = [
  "Direct collaboration with factories, no intermediaries",
  "Fast turnaround and flexibility on small to medium productions",
  "Competitive pricing thanks to Egypt's customs advantages and cost-efficient production",
  "High quality standards and custom developments",
  "Transparent communication and full production follow-up",
];

const whatWeOffer = [
  "Technical development based on your style sheets",
  "Sampling and prototyping for fitting and quality validation",
  "Bulk production with consistent quality control",
  "Optional certifications or eco-compliance upon request",
];

// ---- Icon helper (swap for lucide-react if preferred) ----------------------

function ServiceIcon({ name }: { name: string }) {
  const paths: Record<string, string> = {
    shirt: "M6 4l2.5 2 3.5-2 3.5 2L18 4l3 4-3 2v10H6V10L3 8l3-4z",
    "hanger-2": "M12 4a2 2 0 100 4 2 2 0 000-4zm0 4l-9 6h18l-9-6zM4 16h16",
    "stack-2": "M4 8h16M4 12h16M4 16h16",
    "ruler-2": "M3 17l7-14 11 11-14 7-4-4z",
  };
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name] ?? paths.shirt} />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

// ---- Page -------------------------------------------------------------------

export default function SourcingProfile() {
  return (
    <>
    <Header />
    <div className="bg-brand-cream">
      <div className="mx-auto max-w-2xl px-6 py-16 md:px-8 md:py-16">
        {/* Hero */}
        <FadeIn>
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-medium tracking-[0.15em] text-brand-orange">
              SOURCING PROFILE
            </p>
            <h1 className="font-serif text-4xl font-semibold text-brand-black md:text-5xl">
              Moda Italia
            </h1>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-brand-black/60">
              Independent sourcing agency based in Egypt, founded and managed by Heba Ahmad
              Mahmoud
            </p>
          </div>
        </FadeIn>

        {/* Who we are */}
        <FadeIn delay={80}>
          <div className="mx-auto mb-10 max-w-xl rounded-xl bg-white p-6 md:p-8">
            <h3 className="mb-3 font-serif text-xl font-semibold text-brand-black">Who we are</h3>
            <p className="text-[15px] leading-relaxed text-brand-black/70">
              Moda Italia specializes in sourcing and representing high-quality textile and
              garment production for European fashion brands. With direct access to a network of
              reliable Egyptian factories, we offer complete transparency, quality control, and
              flexibility tailored to your specific needs.
            </p>
          </div>
        </FadeIn>

        {/* Sourcing services grid */}
        <div className="mb-12">
          <FadeIn delay={120}>
            <h3 className="mb-5 text-center font-serif text-xl font-semibold text-brand-black">
              Our sourcing services
            </h3>
          </FadeIn>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {sourcingServices.map((item, i) => (
              <FadeIn key={item.title} delay={140 + i * 60}>
                <div className="h-full rounded-xl bg-white p-5">
                  <span className="text-brand-orange">
                    <ServiceIcon name={item.icon} />
                  </span>
                  <p className="mt-3 text-sm font-medium text-brand-black">{item.title}</p>
                  <p className="mt-1 text-xs text-brand-black/60">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Why work with us */}
        <div className="mb-12">
          <FadeIn delay={200}>
            <h3 className="mb-5 text-center font-serif text-xl font-semibold text-brand-black">
              Why work with us
            </h3>
          </FadeIn>
          <div className="mx-auto flex max-w-xl flex-col gap-3">
            {whyWorkWithUs.map((point, i) => (
              <FadeIn key={point} delay={220 + i * 50}>
                <div className="flex items-start gap-3">
                  <CheckIcon />
                  <p className="text-sm leading-relaxed text-brand-black/75">{point}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* What we offer - numbered steps */}
        <div className="mb-12">
          <FadeIn delay={260}>
            <h3 className="mb-5 text-center font-serif text-xl font-semibold text-brand-black">
              What we offer
            </h3>
          </FadeIn>
          <div className="mx-auto flex max-w-xl flex-col">
            {whatWeOffer.map((item, i) => (
              <FadeIn key={item} delay={280 + i * 50}>
                <div className="flex gap-4 border-b border-black/5 py-3 last:border-b-0">
                  <span className="font-serif text-sm text-brand-black/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-brand-black/80">{item}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Partner factory references - pull quote */}
        <FadeIn delay={340}>
          <div className="mx-auto mb-10 max-w-xl border-l-2 border-brand-orange px-6 py-2">
            <p className="font-serif text-[15px] italic leading-relaxed text-brand-black">
              Our partner factories are well-established and export-ready, already working with
              reputable European brands. References and case studies can be provided upon
              request. All production is managed with quality oversight and professionalism.
            </p>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={380}>
          <div className="text-center">
            <a
              href="/contact"
              className="inline-block rounded-sm bg-brand-black px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-black/80"
            >
              Request references
            </a>
          </div>
        </FadeIn>
      </div>
    </div>
    <Footer />
    </>
  );
}
