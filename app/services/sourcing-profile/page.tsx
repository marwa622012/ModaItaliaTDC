import type { Metadata } from "next";
import Link from "next/link";
import { Shirt, Layers, Scissors, Ruler, Check, type LucideIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Fabric & Garment Sourcing",
  description:
    "Sourcing and representing textile and garment production from established Egyptian factories for European fashion brands: shirts, knitwear, pants and custom development.",
  alternates: { canonical: "/services/sourcing-profile" },
};

const sourcingServices: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Shirt, title: "Men's shirts", desc: "Formal and casual" },
  { icon: Layers, title: "Knitwear", desc: "T-shirts, polos, sweatshirts, jumpers" },
  { icon: Scissors, title: "Pants", desc: "Formal trousers, chinos, joggers" },
  { icon: Ruler, title: "Custom development", desc: "Based on your tech packs or seasonal needs" },
];

const whyWorkWithUs = [
  "Direct relationships with partner factories", // كان: "Direct collaboration with factories, no intermediaries" (راجعي مع العميلة)
  "Fast turnaround and flexibility on small to medium productions",
  "Competitive pricing thanks to cost-efficient Egyptian production", // كان فيها "customs advantages" (راجعي مع العميلة)
  "High quality standards and custom developments",
  "Transparent communication and full production follow-up",
];

const whatWeOffer = [
  "Technical development based on your style sheets",
  "Sampling and prototyping for fitting and quality validation",
  "Bulk production with consistent quality control",
  "Optional certifications or eco-compliance upon request",
];

export default function SourcingProfile() {
  return (
    <>
      <Header />
      <main className="bg-brand-cream">
        <div className="mx-auto max-w-2xl px-6 py-16 md:px-8">
          {/* Hero */}
          <FadeIn>
            <div className="mb-10 text-center">
              <p className="mb-3 text-xs font-medium tracking-[0.15em] text-brand-orange">
                SERVICE
              </p>
              <h1 className="font-serif text-4xl font-semibold text-brand-black md:text-5xl">
                Fabric &amp; Garment Sourcing
              </h1>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-brand-black/60">
                Independent sourcing agency based in Egypt, founded and managed by Heba Ahmad
              </p>
            </div>
          </FadeIn>

          {/* Who we are */}
          <FadeIn delay={80}>
            <div className="mx-auto mb-10 max-w-xl rounded-xl bg-white p-6 md:p-8">
              <h2 className="mb-3 font-serif text-xl font-semibold text-brand-black">Who we are</h2>
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
              <h2 className="mb-5 text-center font-serif text-xl font-semibold text-brand-black">
                Our sourcing services
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {sourcingServices.map(({ icon: Icon, title, desc }, i) => (
                <FadeIn key={title} delay={140 + i * 60}>
                  <div className="h-full rounded-xl bg-white p-5">
                    <Icon size={20} strokeWidth={1.6} className="text-brand-orange" aria-hidden="true" />
                    <p className="mt-3 text-sm font-medium text-brand-black">{title}</p>
                    <p className="mt-1 text-xs text-brand-black/60">{desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Why work with us */}
          <div className="mb-12">
            <FadeIn delay={200}>
              <h2 className="mb-5 text-center font-serif text-xl font-semibold text-brand-black">
                Why work with us
              </h2>
            </FadeIn>
            <div className="mx-auto flex max-w-xl flex-col gap-3">
              {whyWorkWithUs.map((point, i) => (
                <FadeIn key={point} delay={220 + i * 50}>
                  <div className="flex items-start gap-3">
                    <Check size={16} strokeWidth={2.5} className="mt-0.5 shrink-0 text-brand-orange" aria-hidden="true" />
                    <p className="text-sm leading-relaxed text-brand-black/75">{point}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* What we offer */}
          <div className="mb-12">
            <FadeIn delay={260}>
              <h2 className="mb-5 text-center font-serif text-xl font-semibold text-brand-black">
                What we offer
              </h2>
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

          {/* References */}
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
              <Link
                href="/contact"
                className="inline-block rounded-sm bg-brand-black px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-black/80"
              >
                Request references
              </Link>
            </div>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </>
  );
}