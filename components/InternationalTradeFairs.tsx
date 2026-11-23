"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Organizer = "PTAK" | "Intertex" | "Meridian" | "Pyramids";

const organizerStyle: Record<
  Organizer,
  { bg: string; text: string; label: string; logo?: string }
> = {
  PTAK: {
    bg: "#0B1F3A",
    text: "#FFFFFF",
    label: "PTAK WARSAW EXPO",
    logo: "/images/trade fairs/logo_pwe_ufi_black_rgb.png",
  },
  Intertex: {
    bg: "#B8202C",
    text: "#FFFFFF",
    label: "INTERTEX MILANO",
    logo: "/images/trade fairs/INTERTEX-WHITE-scaled.webp",
  },
  Meridian: {
    bg: "#C81E2C",
    text: "#FFFFFF",
    label: "MERIDIAN",
    logo: "/images/trade fairs/meridyen-logo.jpg",
  },
  Pyramids: {
    bg: "#8A5A2E",
    text: "#FFFFFF",
    label: "PYRAMIDS",
    logo: "/images/trade fairs/logopyramids.png",
  },
};

const exhibitionNetwork: {
  country: string;
  slug: string;
  organizer: Organizer;
  image: string;
}[] = [
  {
    country: "Poland",
    slug: "poland",
    organizer: "PTAK",
    image: "/images/trade fairs/polandexpo.jpeg",
  },
  {
    country: "Italy",
    slug: "italy",
    organizer: "Intertex",
    image: "/images/italy trade fair/71959217-7f28-4fa0-aa88-87357a61016a.jfif",
  },
  {
    country: "Spain",
    slug: "spain",
    organizer: "Meridian",
    image: "/images/spain/WhatsApp Image 2026-08-13 at 3.29.59 PM (1).jpeg",
  },
  {
    country: "Algeria",
    slug: "algeria",
    organizer: "Meridian",
    image: "/images/trade fairs/safex-1.jpg",
  },
  {
    country: "Saudi Arabia",
    slug: "saudi-arabia",
    organizer: "Pyramids",
    image: "/images/trade fairs/saudiatradefair.jpeg",
  },
  {
    country: "Morocco",
    slug: "morocco",
    organizer: "Pyramids",
    image: "/images/trade fairs/3cc539b9-ef27-4513-be68-08064655495c.jpg",
  },
  {
    country: "Syria",
    slug: "syria",
    organizer: "Meridian",
    image: "/images/syria/2-2.jpg",
  },
];

const marqueeItems = [...exhibitionNetwork, ...exhibitionNetwork];

export default function InternationalTradeFairs() {
  const [isPaused, setIsPaused] = useState(false);
  const [brokenImages, setBrokenImages] = useState<Set<string>>(new Set());

  return (
    <section id="trade-fairs" className="bg-brand-black text-white">
      <div className="max-w-content mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 px-4 md:px-8">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl mb-2">
              International <br /> Exhibition Network
            </h2>
            <Link
              href="/trade-fairs"
              className="text-brand-orange font-medium inline-flex items-center gap-2 hover:underline"
            >
              View all fairs <span aria-hidden>→</span>
            </Link>
          </div>

          <button
            type="button"
            aria-label={isPaused ? "Resume scrolling" : "Pause scrolling"}
            onClick={() => setIsPaused((p) => !p)}
            className="hidden sm:flex w-9 h-9 rounded-full border border-white/20 items-center justify-center hover:bg-white hover:text-brand-black transition-colors"
          >
            {isPaused ? "▶" : "❚❚"}
          </button>
        </div>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 bottom-2 w-16 md:w-32 bg-gradient-to-r from-brand-black to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-2 w-16 md:w-32 bg-gradient-to-l from-brand-black to-transparent z-10" />

          <div
            className="flex gap-6 w-max marquee-track"
            style={{ animationPlayState: isPaused ? "paused" : "running" }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
          >
            {marqueeItems.map((item, idx) => {
              const style = organizerStyle[item.organizer];
              const imageKey = `${item.slug}-${idx}`;
              const imageFailed = brokenImages.has(imageKey);
              const isCopy = idx >= exhibitionNetwork.length;

              return (
                <Link
                  key={imageKey}
                  href={`/trade-fairs?country=${item.slug}`}
                  aria-hidden={isCopy || undefined}
                  tabIndex={isCopy ? -1 : undefined}
                  className="shrink-0 w-64 sm:w-60 group"
                >
                  <div className="relative aspect-[4/3] rounded-sm overflow-hidden mb-4">
                    {imageFailed ? (
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(135deg, ${style.bg}, #111111)`,
                        }}
                      />
                    ) : (
                      <Image
                        src={item.image}
                        alt={`${item.country} textile exhibitions`}
                        fill
                        sizes="240px"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        onError={() =>
                          setBrokenImages((prev) => new Set(prev).add(imageKey))
                        }
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    {style.logo ? (
                      <div className="absolute top-3 left-3 rounded-sm px-2.5 py-1.5 shadow-sm">
                        <div className="relative w-16 h-6">
                          <Image
                            src={style.logo}
                            alt={`${item.organizer} logo`}
                            fill
                            sizes="64px"
                            className="object-contain"
                          />
                        </div>
                      </div>
                    ) : (
                      <span
                        className="absolute top-3 left-3 text-[10px] font-semibold tracking-wide px-2 py-1 rounded-sm"
                        style={{ backgroundColor: style.bg, color: style.text }}
                      >
                        {style.label}
                      </span>
                    )}

                    <div className="absolute bottom-3 left-3 flex items-center gap-2">
                      <p className="font-serif text-lg text-white">{item.country}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .marquee-track {
          animation: marquee-scroll 40s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}