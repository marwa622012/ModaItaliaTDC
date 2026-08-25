"use client";

import { useState } from "react";
import Image from "next/image";

type Organizer = "PTAK" | "Intertex" | "Meridian" | "Pyramids";


const organizerStyle: Record<Organizer, { bg: string; label: string; logo: string }> = {
  PTAK: { bg: "#0B1F3A", label: "PTAK Warsaw Expo", logo: "/images/trade fairs/ptak.jpeg" },
  Intertex: { bg: "#B8202C", label: "Intertex Milano", logo: "/images/trade fairs/INTERTEX-WHITE-scaled.webp" },
  Meridian: { bg: "#C81E2C", label: "Meridian International Fairs", logo: "/images/trade fairs/meridyen-logo.jpg" },
  Pyramids: { bg: "#8A5A2E", label: "Pyramids Group", logo: "/images/trade fairs/logopyramids.png" },
};

const fairs = [
  {
    country: "Poland",
    slug: "poland",
    organizer: "PTAK" as Organizer,
    image: "/images/trade fairs/gallery-1.jpg",
    exhibitions: ["Trends Expo — August Edition", "Fast Textile — November Edition", "Fast Textile — March Edition"],
  },
  {
    country: "Italy",
    slug: "italy",
    organizer: "Intertex" as Organizer,
    image: "/images/italy trade fair/71959217-7f28-4fa0-aa88-87357a61016a.jfif",
    exhibitions: ["Intertex Milano — Twice per Year", "Ready to Show — Rho Fiera Milano"],
  },
  {
    country: "Spain",
    slug: "spain",
    organizer: "Meridian" as Organizer,
    image: "/images/spain/f8f9b662-e0c8-4baa-a3fd-1dce8ab17636.jfif",
    exhibitions: ["Barcelona Textile Expo"],
  },
  {
    country: "Algeria",
    slug: "algeria",
    organizer: "Meridian" as Organizer,
    image: "/images/trade fairs/safex-1.jpg",
    exhibitions: ["Alger Textile — International Textile Exhibition"],
  },
  
  {
    country: "Saudi Arabia",
    slug: "saudi-arabia",
    organizer: "Pyramids" as Organizer,
    image: "/images/trade fairs/43fa2e3a-42ca-480a-bf91-6d674bedcac9-logo_saudifashiontexjpg.jpg",
    exhibitions: ["Saudi Fashion & Tex Expo — Fashion, Textiles, Machinery"],
  },
  {
    country: "Morocco",
    slug: "morocco",
    organizer: "Pyramids" as Organizer,
    image: "/images/trade fairs/3cc539b9-ef27-4513-be68-08064655495c.jpg",
    exhibitions: ["Morocco Fashion Style & Tex — International Fashion & Textile Exhibition"],
  },
  {
    country: "Syria",
    slug: "syria",
    organizer: "Meridian" as Organizer,
    image: "/images/syria/2-2.jpg",
    exhibitions: ["Textile Expo Syria — International Textile Exhibition"],
  },
];

export default function TradeFairsTabs() {
  const [activeCountry, setActiveCountry] = useState<string>("all");
  const [brokenImages, setBrokenImages] = useState<Set<string>>(new Set());

  const filtered =
    activeCountry === "all" ? fairs : fairs.filter((f) => f.slug === activeCountry);

  return (
    <section className="bg-brand-cream text-brand-black min-h-screen">
      <div className="max-w-content mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="mb-10 md:mb-14">
          <p className="text-xs tracking-widest uppercase text-brand-orange font-medium mb-3">
            Global Reach
          </p>
          <h1 className="font-serif text-3xl md:text-5xl mb-3">
            International Exhibition Network
          </h1>
          <p className="text-brand-black/60 max-w-xl">
            Moda Italia collaborates with international exhibition organizers and
            trade-event partners across seven markets to connect factories with buyers.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-12 border-b border-brand-black/10 pb-6">
          <button
            onClick={() => setActiveCountry("all")}
            className={`px-4 py-2 text-sm rounded-full border transition-colors ${
              activeCountry === "all"
                ? "bg-brand-black text-white border-brand-black"
                : "border-brand-black/20 text-brand-black/60 hover:border-brand-black/50"
            }`}
          >
            All Countries
          </button>
          {fairs.map((f) => (
            <button
              key={f.slug}
              onClick={() => setActiveCountry(f.slug)}
              className={`px-4 py-2 text-sm rounded-full border transition-colors ${
                activeCountry === f.slug
                  ? "bg-brand-black text-white border-brand-black"
                  : "border-brand-black/20 text-brand-black/60 hover:border-brand-black/50"
              }`}
            >
              {f.country}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => {
            const style = organizerStyle[item.organizer];
            const imageFailed = brokenImages.has(item.slug);

            return (
              <div key={item.slug} className="group">
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden mb-4">
                  {imageFailed ? (
                    <div
                      className="absolute inset-0"
                      style={{ background: `linear-gradient(135deg, ${style.bg}, #111111)` }}
                    />
                  ) : (
                    <Image
                      src={item.image}
                      alt={`${item.country} textile exhibitions`}
                      fill
                      sizes="360px"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={() => setBrokenImages((prev) => new Set(prev).add(item.slug))}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  {/* <span
                    className="absolute top-3 left-3 text-[10px] font-semibold tracking-wide px-2 py-1 rounded-sm text-white"
                    style={{ backgroundColor: style.bg }}
                  >
                    {style.label}
                  </span> */}
                    <Image
                        src={style.logo}
                        alt={style.label}
                        width={80}
                        height={28}
                        className="h-5 w-auto object-contain absolute"
                      />
                  <p className="absolute bottom-3 left-3 font-serif text-lg text-white">
                    {item.country}
                  </p>
                </div>

                <ul className="text-sm text-brand-black/60 space-y-1">
                  {item.exhibitions.map((ex) => (
                    <li key={ex}>• {ex}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}