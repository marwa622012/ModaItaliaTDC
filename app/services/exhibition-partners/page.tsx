import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, Download } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "International Exhibition Partnerships",
  description:
    "Moda Italia TDC collaborates with leading international textile and fashion trade shows, giving clients visibility with targeted buyers and industry professionals.",
  alternates: { canonical: "/services/exhibition-partners" },
};

// ---- Data -------------------------------------------------------------

type Exhibition = {
  name: string;
  location: string;
  description: string;
  flyerImage: string;
  flyerPdf?: string;
};

const exhibitions: Exhibition[] = [
  {
    name: "Saudi Fashion & Tex Expo",
    location: "Jeddah, Saudi Arabia",
    description:
      "The premier fashion and textile event in Saudi Arabia, connecting the Middle Eastern market with global suppliers and manufacturers.",
    flyerImage: "/images/saudi-trade-fair/e9f6ee6b-20ca-48eb-8ff4-ce67db1e40b7.jfif",
    flyerPdf: "/assets/FLYER_ SFTE (1).pdf",
  },
  {
    name: "PTAK Fast Textile Expo",
    location: "Poland",
    description:
      "The largest textile fair in Central and Eastern Europe, focused on sourcing, innovation, and B2B connections.",
    flyerImage: "/images/trade fairs/ptak.jpeg",
    flyerPdf: "/assets/FAST TEXTILE A4 -ENG 0 (2).pdf",
  },
  {
    name: "International Apparel Trend Expo",
    location: "Poland",
    description:
      "Also known as Trends Expo. A key event dedicated to trend forecasting and fashion innovation, bringing together creative visionaries, fabric specialists, and global buyers.",
    flyerImage: "/images/trade fairs/gallery-1.jpg",
  },
];

const offerings = [
  "Exclusive exhibition opportunities for manufacturers, suppliers, and design studios",
  "Local and international support before, during, and after each event",
  "Personalized consultancy to select the right fair and maximize visibility",
  "Assistance with booth reservation, setup, and targeted promotion",
];

// ---- Row (image + text, alternating) -----------------------------------

function ExhibitionRow({
  item,
  reverse,
  delay,
}: {
  item: Exhibition;
  reverse: boolean;
  delay: number;
}) {
  return (
    <FadeIn delay={delay}>
      <div
        className={`flex flex-col items-center gap-6 border-t border-black/5 py-8 md:gap-8 ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div className="relative h-56 w-44 shrink-0 overflow-hidden rounded-xl bg-brand-cream md:h-64 md:w-52">
          <Image
            src={item.flyerImage}
            alt={`${item.name} flyer`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 176px, 208px"
          />
        </div>

        <div className={reverse ? "text-center md:text-right" : "text-center md:text-left"}>
          <h3 className="text-lg font-medium text-brand-black">{item.name}</h3>
          <p className="mb-2 text-xs uppercase tracking-wide text-brand-black/40">
            {item.location}
          </p>
          <p className="mb-4 text-[15px] leading-relaxed text-brand-black/70">
            {item.description}
          </p>

          {item.flyerPdf ? (
            <a
              href={item.flyerPdf}
              download
              className="inline-flex items-center gap-2 rounded-sm border border-brand-black/15 px-4 py-2 text-sm font-medium text-brand-black transition-colors hover:border-brand-orange hover:text-brand-orange"
            >
              Download flyer (PDF) <Download size={14} aria-hidden="true" />
            </a>
          ) : (
            <span className="inline-block rounded-sm border border-brand-black/10 px-4 py-2 text-sm text-brand-black/40">
              Flyer coming soon
            </span>
          )}
        </div>
      </div>
    </FadeIn>
  );
}

// ---- Page ----------------------------------------------------------------

export default function ExhibitionPartners() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <div className="mx-auto max-w-2xl px-6 py-16 md:px-8">
          {/* Hero */}
          <FadeIn>
            <div className="mb-4 text-center">
              <p className="mb-3 text-xs font-medium tracking-[0.15em] text-brand-orange">
                SERVICES
              </p>
              <h1 className="font-serif text-3xl font-semibold text-brand-black md:text-4xl">
                International exhibition partnerships
              </h1>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-brand-black/60">
                We collaborate with leading international textile and fashion trade shows, giving
                our clients exceptional visibility with targeted buyers and industry professionals.
              </p>
            </div>
          </FadeIn>

          {/* Who we are */}
          <FadeIn delay={60}>
            <div className="mx-auto mt-8 max-w-xl">
              <h2 className="mb-3 text-center font-serif text-xl font-semibold text-brand-black">
                Who we are
              </h2>
              <p className="text-center text-[15px] leading-relaxed text-brand-black/70">
                At Moda Italia TDC, we believe in the power of global visibility and strategic
                networking. That&rsquo;s why we proudly collaborate with leading international
                textile and fashion trade shows, offering our clients exceptional opportunities to
                expand their reach and showcase their products to targeted buyers and industry
                professionals.
              </p>
              <p className="mt-4 text-center text-sm font-medium text-brand-black/80">
                We are official partners of renowned international exhibitions such as:
              </p>
            </div>
          </FadeIn>

          {/* Alternating exhibition rows */}
          <div className="mt-4">
            {exhibitions.map((item, i) => (
              <ExhibitionRow key={item.name} item={item} reverse={i % 2 === 1} delay={i * 100} />
            ))}
          </div>

          {/* What we offer */}
          <FadeIn delay={exhibitions.length * 100}>
            <div className="mt-14 border-t border-black/5 pt-10">
              <h2 className="mb-5 text-center font-serif text-xl font-semibold text-brand-black">
                Through these partnerships, we offer
              </h2>
              <div className="mx-auto grid max-w-lg grid-cols-1 gap-3 sm:grid-cols-2">
                {offerings.map((point) => (
                  <div key={point} className="flex items-start gap-2">
                    <Check
                      size={16}
                      strokeWidth={2.5}
                      className="mt-0.5 shrink-0 text-brand-orange"
                      aria-hidden="true"
                    />
                    <p className="text-sm leading-relaxed text-brand-black/75">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={exhibitions.length * 100 + 60}>
            <div className="mt-10 text-center">
              <Link
                href="/contact"
                className="inline-block rounded-sm bg-brand-black px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-black/80"
              >
                Join us on the global stage
              </Link>
            </div>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </>
  );
}