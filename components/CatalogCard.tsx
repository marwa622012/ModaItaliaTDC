"use client";

import Image from "next/image";
import Link from "next/link";

interface CatalogCardProps {
  slug: string;
  categorySlug: string;
  coverImage: string;
  images?: string[];
}

export default function CatalogCard({
  slug,
  categorySlug,
  coverImage,
}: CatalogCardProps) {
  return (
    <Link
      href={`/collections/${categorySlug}/${slug}`}
      className="group relative block overflow-hidden rounded-xl pt-[130%]"
    >
      <Image
        src={coverImage}
        alt={slug}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 640px) 50vw, 33vw"
      />
    </Link>
  );
}