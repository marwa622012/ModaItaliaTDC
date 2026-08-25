"use client";

import { useState } from "react";
import Image from "next/image";
import { Download } from "lucide-react";

const slides = [
  {
    image:
      "/images/hero2.webp",
    alt: "Runway models wearing Fall/Winter 2026/2027 coats and outerwear",
    tag: "Trending now",
  
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  const goTo = (index: number) => {
    setActive(((index % slides.length) + slides.length) % slides.length);
  };

  const slide = slides[active];

  return (
    <section className="bg-brand-cream">
      <div className="max-w-content mx-auto px-4 md:px-8 py-10 md:py-14 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-brand-orange text-xs font-semibold tracking-widest uppercase mb-4">
            Fashion &amp; Textile Agency
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-brand-orange italic">
            Moda Italia TDC
          </h1>
          <p className="mt-6 text-black/60 max-w-md leading-relaxed">
            MODA ITALIA is a specialized agency operating in fashion trends,
            textile sourcing, garment production and international business development, connecting
            manufacturers, brands, suppliers, designers and exhibition organizers across Europe, the Middle
            East and North Africa.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="/collections"
              className="inline-flex items-center gap-2 bg-brand-orange text-white font-medium px-6 py-3.5 rounded-sm hover:bg-brand-orange/90 transition-colors"
            >
              Explore Designs <span aria-hidden>→</span>
            </a>
            <a
              href="/assets/MODA_Italia_Brochure-1.pdf"
              className="inline-flex items-center gap-2 border border-brand-black text-brand-black font-medium px-6 py-3.5 rounded-sm hover:bg-brand-black hover:text-white transition-colors"
            >
              Download Brochure <Download size={16} />
            </a>
          </div>
        </div>


        <div className="relative">
          <div className="relative w-full aspect-[4/5] sm:aspect-[16/11] rounded-sm overflow-hidden bg-black/5">
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
