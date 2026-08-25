"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { servicesItems } from "@/components/ServicesMenu";
import { collectionsItems } from "@/components/CollectionsMenu";

const simpleLinks = [
  { label: "Home", href: "/" },
  { label: "Partners", href: "/partners" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function AccordionSection({
  title,
  items,
  sectionPrefix,
  pathname,
  onNavigate,
}: {
  title: string;
  items: { label: string; href: string }[];
  sectionPrefix: string;
  pathname: string;
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = useState(pathname.startsWith(sectionPrefix));

  return (
    <div className="border-b border-black/5">
      <button
        onClick={() => setExpanded((v) => !v)}
        className={`flex w-full items-center justify-between py-4 text-left text-base font-medium transition-colors ${
          pathname.startsWith(sectionPrefix) ? "text-[#E6531F]" : "text-[#111111]"
        }`}
        aria-expanded={expanded}
      >
        {title}
        <span
          aria-hidden
          className={`text-sm transition-transform ${expanded ? "rotate-180" : ""}`}
        >
          ▾
        </span>
      </button>

      {expanded && (
        <div className="flex flex-col pb-3">
          {items.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onNavigate}
                className={`border-l-2 py-2.5 pl-4 text-sm transition-colors ${
                  active
                    ? "border-[#E6531F] bg-[#F6F3EE] font-medium text-[#111111]"
                    : "border-transparent text-black/70"
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

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="flex flex-col justify-center gap-1.5 p-2 text-[#111111]"
      >
        <span className="block h-0.5 w-6 bg-current" />
        <span className="block h-0.5 w-6 bg-current" />
        <span className="block h-0.5 w-4 bg-current" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/40" onClick={close} />

          <div className="relative ml-auto flex h-full w-[85vw] max-w-sm flex-col overflow-y-auto bg-white px-6 py-5 shadow-lg">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-medium text-[#111111]">Menu</span>
              <button
                onClick={close}
                aria-label="Close menu"
                className="p-1 text-xl leading-none text-[#111111]"
              >
                ×
              </button>
            </div>

            <Link
              href="/"
              onClick={close}
              className={`border-b border-black/5 py-4 text-base font-medium transition-colors ${
                pathname === "/" ? "text-[#E6531F]" : "text-[#111111]"
              }`}
            >
              Home
            </Link>

            <AccordionSection
              title="Services"
              items={servicesItems}
              sectionPrefix="/services"
              pathname={pathname}
              onNavigate={close}
            />

            <AccordionSection
              title="Collections"
              items={collectionsItems}
              sectionPrefix="/collections"
              pathname={pathname}
              onNavigate={close}
            />

            {simpleLinks
              .filter((l) => l.label !== "Home")
              .map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className={`border-b border-black/5 py-4 text-base font-medium transition-colors ${
                    pathname === link.href ? "text-[#E6531F]" : "text-[#111111]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

            <Link
              href="/contact"
              onClick={close}
              className="mt-6 rounded-sm bg-[#111111] px-4 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-black/80"
            >
              Get in touch
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
