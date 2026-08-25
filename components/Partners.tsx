"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";


const partners = [
{
    name: "Mede Bookstore",
    tagline: "Libreria della moda e del tessuto",
    href: "https://www.medesrl.it/en/meta-trend-milano-collections-spring-summer.html",
    logo: "/images/download.png",
},
{
    name: "Italtex",
    tagline: "Tessuti Italiani dal 1946",
    href: "https://italtextrends.com/", 
    logo: "/images/Logo-b_180x (1).avif",
},
{
    name: "Progetto Stile",
    tagline: "Textile Design & Collections",
    href: "https://www.progettostile.net/", 
    logo: "/images/LOGO PROGETTO STILE CARTA PAVONE.avif",
},
{
    name: "modainfo",
    tagline: "Textile Design & Collections",
    href: "https://modeinfo.com/By-manufacturer/View/", 
    logo: "/images/logo.png",
},
{
    name: "biellatextile",
    tagline: "Textile Design & Collections",
    href: "https://www.biellatextiletrend.com/", 
    logo: "/images/1.avif",
},
];
/** ====== لحد هنا ====== */

export default function PartnersMenu() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      {/* زر Partners في الـ navbar - بنفس ستايل باقي اللينكات */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        className={`group flex items-center gap-1 text-sm font-medium transition-colors ${
          open ? "text-brand-orange" : "text-brand-black hover:text-brand-orange"
        }`}
      >
        Partners
        <span
          aria-hidden
          className={`text-xs transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          ▾
        </span>
      </button>

      {/* اللوحة المنسدلة */}
      <div
        className={`absolute left-1/2 top-full z-50 w-[min(90vw,720px)] -translate-x-1/2 pt-4 transition-all duration-300 ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="relative overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_24px_60px_-15px_rgba(17,17,17,0.35)]">
          {/* شريط علوي بلون البراند */}
          <div className="h-[3px] w-full bg-brand-orange" />

          <div className="p-6">
            <div className="mb-5 flex items-center justify-between">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-black/50">
                Our Trusted Partners
              </p>
              <span className="text-[11px] text-brand-black/40">
                {partners.length} partners
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {partners.map((partner) => (
                <a
                key={partner.name}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group/card relative flex flex-col items-center gap-3 rounded-xl border border-black/5 bg-[#FAF9F7] p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/30 hover:bg-white hover:shadow-[0_12px_30px_-10px_rgba(230,83,31,0.35)]"
                >
                  {/* شكل "بطاقة قماش" - سن الخياطة في الزاوية */}
                <span className="pointer-events-none absolute right-2.5 top-2.5 h-2.5 w-2.5 rounded-full border border-dashed border-brand-orange/40 transition-colors group-hover/card:border-brand-orange" />

                <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-black/5 bg-white">
                    <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={64}
                    height={64}
                    className="h-full w-full object-contain p-1.5"
                    />
                </div>

                <div>
                    <p className="text-sm font-bold text-brand-black">
                    {partner.name}
                    </p>
                    <p className="mt-1 text-xs leading-snug text-brand-black/50">
                    {partner.tagline}
                    </p>
                </div>

                <span className="mt-1 flex items-center gap-1 text-[11px] font-semibold text-brand-orange opacity-0 transition-opacity duration-300 group-hover/card:opacity-100">
                    Visit site
                    <svg
                    className="h-3 w-3"
                    viewBox="0 0 12 12"
                    fill="none"
                    >
                    <path
                        d="M3 9L9 3M9 3H4M9 3V8"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    </svg>
                </span>
                </a>
            ))}
            </div>
        </div>
        </div>
    </div>
    </div>
);
}
