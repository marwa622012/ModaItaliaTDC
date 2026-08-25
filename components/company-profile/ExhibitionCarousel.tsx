"use client";

import { useRef } from "react";

type Exhibition = {
  country: string;
  name: string;
  detail: string;
};

const exhibitions: Exhibition[] = [
  {
    country: "Poland",
    name: "Trends Expo",
    detail: "B2B apparel & sourcing · ~3,000 visitors daily",
  },
  {
    country: "Poland",
    name: "Fast Textile",
    detail: "Textiles, accessories & machinery · November",
  },
  {
    country: "Poland",
    name: "Fast Textile Fabrics",
    detail: "Woven, knitted & yarns · 3,500+ visitors daily",
  },
  {
    country: "Italy",
    name: "Intertex Milano",
    detail: "Fabrics, yarns & sourcing · targeted buyer lists",
  },
  {
    country: "Italy",
    name: "Ready to Show",
    detail: "Fiera Milano Rho · Sep 12–14, 2026",
  },
  {
    country: "Morocco",
    name: "Fashion Style & Tex",
    detail: "Gateway to African & Mediterranean markets",
  },
  {
    country: "Spain",
    name: "Barcelona Textile Expo",
    detail: "4,200 visitors · 300+ exhibitors, 12 countries",
  },
  {
    country: "Algeria",
    name: "Alger Textile",
    detail: "6,800 visitors · 100+ exhibitors (2025)",
  },
  {
    country: "Syria",
    name: "Textile Expo Syria",
    detail: "Fabrics, yarn & accessories",
  },
  {
    country: "Saudi Arabia",
    name: "Saudi Fashion & Tex Expo",
    detail: "Market entry & business matching",
  },
];

export default function ExhibitionCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = 320;
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div
        ref={scrollerRef}
        className="flex gap-5 overflow-x-auto no-scrollbar pb-4 -mx-6 px-6 scroll-smooth"
      >
        {exhibitions.map((exhibition) => (
          <div
            key={`${exhibition.country}-${exhibition.name}`}
            className="min-w-[220px] card rounded-xl p-6 bg-white shrink-0 transition-colors border border-brand-black/10 hover:border-brand-orange"
          >
            <span className="tag text-brand-orange">{exhibition.country}</span>
            <h3 className="font-serif text-lg mt-2 mb-2">{exhibition.name}</h3>
            <p className="text-xs text-brand-black/50">{exhibition.detail}</p>
          </div>
        ))}
      </div>

      <div className="flex md:hidden justify-center gap-2 mt-4">
        <button
          type="button"
          onClick={() => scroll("left")}
          aria-label="Scroll left"
          className="w-10 h-10 rounded-full border border-brand-black/20 flex items-center justify-center"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => scroll("right")}
          aria-label="Scroll right"
          className="w-10 h-10 rounded-full border border-brand-black/20 flex items-center justify-center"
        >
          →
        </button>
      </div>
    </div>
  );
}
