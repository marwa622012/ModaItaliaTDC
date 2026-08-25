"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const collectionsItems = [
  { label: "Shirts", href: "/collections/shirts" },
  { label: "Trousers", href: "/collections/trousers" },
  { label: "Suits", href: "/collections/suits" },
  { label: "Knitting", href: "/collections/knitting" },
  { label: "Womenswear", href: "/collections/womenswear" },
  { label: "Menswear", href: "/collections/menswear" },
  { label: "Kidswear", href: "/collections/kidswear" },
  { label: "Sportswear", href: "/collections/sportswear" },
  { label: "Prints", href: "/collections/prints" },
  { label: "Exclusive", href: "/collections/exclusive" },
];

export default function CollectionsMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isSectionActive = pathname.startsWith("/collections");

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1 transition-colors ${
          // isSectionActive ? "border-brand-orange bg-brand-cream font-medium text-brand-black"
          // : "border-transparent text-black/70 hover:bg-brand-cream hover:text-brand-orange"
          isSectionActive ? "text-brand-orange" : "text-brand-black hover:text-brand-orange"
        }`}
        aria-expanded={open}
      >
        Designs & Trends
        <span aria-hidden className={`text-xs transition-transform ${open ? "rotate-180" : ""}`}>
          ▾
        </span>
      </button>

      {open && (
        <div className="absolute left-0 top-full mt-3 w-[90vw] max-w-[420px] rounded-sm border border-black/5 bg-white p-3 shadow-lg">
          <div className="grid grid-cols-2 gap-x-6 gap-y-1">
            {collectionsItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`border-l-2 px-3 py-2 text-sm transition-colors ${
                    // active
                    //   ? "border-[#E6531F] bg-[#F6F3EE] font-medium text-[#111111]"
                    //   : "border-transparent text-black/70 hover:bg-[#F6F3EE]"
                    active
    ? "border-brand-orange bg-brand-cream font-medium text-brand-black"
    : "border-transparent text-black/70 hover:bg-brand-cream hover:text-brand-orange"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
