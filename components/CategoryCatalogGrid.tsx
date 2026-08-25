import Link from "next/link";
import Image from "next/image";
import { Camera } from "lucide-react";

export interface Catalog {
  slug: string;
  coverImage: string;
    catalogName?: string;
  images?: string[];
}

interface CategoryCatalogGridProps {
  categorySlug: string;
  categoryLabel: string;
  // season: string;
  catalogName?: string; 
  // description: string;
  catalogs: Catalog[];
}

export default function CategoryCatalogGrid({
  categorySlug,
  categoryLabel,
  // season,
  // description,
  catalogs,
}: CategoryCatalogGridProps) {
  return (
    <section className="max-w-content mx-auto px-4 py-16 md:px-8 md:py-0">
      {/* Header */}
      <div className="mb-8">
        {/* <p className="text-xs font-semibold uppercase tracking-wide text-brand-orange">
          {season}
        </p> */}

        <h1 className="mt-2 font-serif text-4xl font-semibold text-brand-black md:text-5xl">
          {categoryLabel}
        </h1>

        {/* <p className="mt-3 max-w-xl text-sm text-black/60">
          {description}
        </p> */}
      </div>

      {/* Catalog grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
  {catalogs.map((catalog) => (
    <Link
      key={catalog.slug}
      href={`/collections/${categorySlug}/${catalog.slug}`}
      className="group relative block overflow-hidden rounded-xl pt-[130%]"
    >
      <Image
        src={catalog.coverImage}
        alt={catalog.slug}
        fill
        className="object-top transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 50vw, 33vw"
      />

      {catalog.images && catalog.images.length > 1 && (
        <div className="absolute top-2.5 right-2.5 z-10 flex items-center gap-1 rounded-full bg-black/70 px-2.5 py-1 text-xs text-white">
          <Camera className="h-3 w-3" />
          {catalog.images.length}
        </div>
      )}
    </Link>
  ))}
</div>
    </section>
  );
}