"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export interface CollectionCategory {
  slug: string;
  name: string;
  designCount: number;
  previewImage: string;
}

interface EditorialIndexProps {
  categories: CollectionCategory[];
}

export default function EditorialIndex({ categories }: EditorialIndexProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = categories[activeIndex];

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
      {/* القائمة */}
      <div>
        {categories.map((category, index) => (
          <Link
            key={category.slug}
            href={`/collections/${category.slug}`}
            onMouseEnter={() => setActiveIndex(index)}
            className={`block border-b border-black/10 py-3 pl-0 transition-[padding] duration-300 hover:pl-2.5 ${
              index === categories.length - 1 ? "border-b-0" : ""
            }`}
          >
            <p
              className={`font-serif text-xl transition-colors duration-300 md:text-2xl ${
                index === activeIndex ? "text-brand-black" : "text-black/35"
              }`}
            >
              {category.name}
            </p>
            <span className="text-[11px] text-black/40">
              {category.designCount} designs
            </span>
          </Link>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-lg bg-[#1c1c1c] transition-colors duration-300 aspect-square]">
        <Image
          key={active.slug}
          src={active.previewImage}
          alt={active.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}
