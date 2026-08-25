"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const servicesItems = [
  { label: "Design Solutions & Trend Services", href: "/collections" },
  { label: "Fabrics & Garment Sourcing", href: "/services/sourcing-profile" },
  { label: "Product Development", href: "/services/sourcing-profile" },
  { label: "International Business Development", href: "/collections" },
  { label: "International Textile Exhibition", href: "/services/exhibition-partners" },
];

export default function ServicesMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isSectionActive = pathname.startsWith("/services");

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
          isSectionActive ? "text-[#E6531F]" : "text-[#111111] hover:text-[#E6531F]"
        }`}
        aria-expanded={open}
      >
        Services
        <span aria-hidden className={`text-xs transition-transform ${open ? "rotate-180" : ""}`}>
          ▾
        </span>
      </button>

      {open && (
        <div className="absolute left-0 top-full mt-3 w-[90vw] max-w-[288px] rounded-sm border border-black/5 bg-white py-2 shadow-lg">
          {servicesItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block border-l-2 px-4 py-3 text-sm transition-colors ${
                  active
                    ? "border-[#E6531F] bg-[#F6F3EE] font-medium text-[#111111]"
                    : "border-transparent text-black/70 hover:bg-brand-cream hover:text-brand-orange"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
