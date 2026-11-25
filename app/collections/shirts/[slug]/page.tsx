import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CatalogGallery from "@/components/CatalogGallery";
import { shirtsCatalogs } from "@/lib/shirtsCatalogs";

interface PageProps {
  params: { slug: string };
}

function prettify(slug: string) {
  return slug.replace(/[-_]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export function generateStaticParams() {
  return shirtsCatalogs.map((c) => ({ slug: c.slug }));
}
export function generateMetadata({ params }: PageProps): Metadata {
  const catalog = shirtsCatalogs.find((c) => c.slug === params.slug);
  if (!catalog) return { title: "Catalogue not found" };

  const name = catalog.catalogName ?? prettify(catalog.slug);
  const count = catalog.images?.length ?? 0;

  return {
    title: `${name} — Shirts Catalogue`,
    description:
      count > 0
        ? `Browse ${count} shirt designs from the ${name} catalogue by Moda Italia TDC.`
        : `Browse the ${name} shirts catalogue by Moda Italia TDC.`,
    alternates: { canonical: `/collections/shirts/${catalog.slug}` },
  };
}

export default function ShirtsCatalogPage({ params }: PageProps) {
  const catalog = shirtsCatalogs.find((c) => c.slug === params.slug);

  if (!catalog) return notFound();

  return (
    <CatalogGallery
      categoryLabel="Shirts"
      categorySlug="shirts"
      catalogName={catalog.catalogName ?? prettify(catalog.slug)}
      images={catalog.images}
    />
  );
}