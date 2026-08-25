
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface CollectionCategory {
  slug: string;
  name: string;
  designCount: number;
  previewImage: string;
}

const categories: CollectionCategory[] = [
  {
    slug: "shirts",
    name: "Shirts",
    designCount: 132,
    previewImage: "/images/trends&books/shirts.jpeg",
  },
  {
    slug: "trousers",
    name: "Trousers",
    designCount: 4,
    previewImage: "/images/trends&books/trouser.jpeg",
  },
  {
    slug: "suits",
    name: "Suits",
    designCount: 5,
    previewImage: "/images/trends&books/suits.jpeg",
  },
  {
    slug: "knitting",
    name: "Knitting",
    designCount: 98,
    previewImage: "/images/trends&books/knitting.jpeg",
  },
  {
    slug: "womenswear",
    name: "Womenswear",
    designCount: 215,
    previewImage: "/images/trends&books/womenwear.jpeg",
  },
  {
    slug: "menswear",
    name: "Menswear",
    designCount: 176,
    previewImage: "/images/trends&books/menswear.webp",
  },
  {
    slug: "kidswear",
    name: "Kidswear",
    designCount: 10,
    previewImage: "/images/trends&books/kids.webp",
  },
  {
    slug: "sportswear",
    name: "Sportswear",
    designCount: 5,
    previewImage: "/images/trends&books/sport.webp",
  },
  {
    slug: "prints",
    name: "Prints",
    designCount: 8,
    previewImage: "/images/trends&books/print.webp",
  },
  {
    slug: "exclusive",
    name: "Exclusive",
    designCount: 15,
    previewImage: "/images/trends&books/exclusive.jpeg",
  },
];

export default function AllCollectionsPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = categories[activeIndex];

  return (
    <main className="max-w-content mx-auto px-4 py-12 md:px-8 md:py-16">
      <p className="mb-8 text-xs font-semibold uppercase tracking-wide text-brand-orange md:mb-10">
        Browse all collections
      </p>

      <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
        {/* Left: list */}
        <div>
          {categories.map((category, index) => {
            const isActive = index === activeIndex;
            return (
              <Link
                key={category.slug}
                href={`/collections/${category.slug}`}
                onMouseEnter={() => setActiveIndex(index)}
                className="group block border-b border-black/10 py-4 transition-colors first:pt-0 md:py-5"
              >
                <p
                  className={`font-serif text-2xl italic transition-colors duration-200 md:text-3xl ${
                    isActive ? "text-brand-black" : "text-brand-black/30"
                  }`}
                >
                  {category.name}
                </p>
                <p
                  className={`mt-1 text-xs transition-colors duration-200 ${
                    isActive ? "text-brand-orange" : "text-brand-black/20"
                  }`}
                >
                  {category.designCount} designs
                </p>
              </Link>
            );
          })}
        </div>

        {/* Right: preview image, sticky on desktop */}
        <div className="md:sticky md:top-24 md:self-start">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-[#1c1c1c]">
            {categories.map((category, index) => (
              <Image
                key={category.slug}
                src={category.previewImage}
                alt={category.name}
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className={`object-cover transition-opacity duration-300 ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
                priority={index === 0}
              />
            ))}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent p-6">
              <p className="font-serif text-2xl italic text-white">
                {active.name}
              </p>
              <p className="mt-1 text-xs text-white/70">
                {active.designCount} designs
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
