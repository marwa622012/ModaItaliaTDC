

import CatalogCard from "./CatalogCard";

export interface Catalog {
  slug: string;
  coverImage: string;
  images?: string[];
}

interface CategoryCatalogGridProps {
  categorySlug: string;
  categoryLabel: string;
  season: string;
  description: string;
  catalogs: Catalog[];
}

export default function CategoryCatalogGrid({
  categorySlug,
  categoryLabel,
  season,
  description,
  catalogs,
}: CategoryCatalogGridProps) {
  console.log("CATALOGS FROM GRID:", catalogs);
  return (
    <section className="max-w-content mx-auto px-4 py-16 md:px-8 md:py-0">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-orange">
          {season}
        </p>

        <h1 className="mt-2 font-serif text-4xl font-semibold text-brand-black md:text-5xl">
          {categoryLabel}
        </h1>

        <p className="mt-3 max-w-xl text-sm text-black/60">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {catalogs.map((catalog) => (
          <CatalogCard
            key={catalog.slug}
            slug={catalog.slug}
            categorySlug={categorySlug}
            coverImage={catalog.coverImage}
            images={catalog.images}
          />
        ))}
      </div>
    </section>
  );
}
