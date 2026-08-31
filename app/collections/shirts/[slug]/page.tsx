import { notFound } from "next/navigation";
import CatalogGallery from "@/components/CatalogGallery";
import { shirtsCatalogs } from "@/lib/shirtsCatalogs";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return shirtsCatalogs.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: PageProps) {
  const catalog = shirtsCatalogs.find((c) => c.slug === params.slug);
  if (!catalog) return {};

  return {
    // title: `${catalog.catalogName} — Autumn/Winter | Moda Italia`,
    // description: `Browse the ${catalog.catalogName} shirts catalogue from Moda Italia's Autumn/Winter range.`,
  };
}

export default function ShirtsCatalogPage({ params }: PageProps) {
  const catalog = shirtsCatalogs.find((c) => c.slug === params.slug);

  if (!catalog) return notFound();

  return (
    <CatalogGallery
      categoryLabel="Shirts"
      categorySlug="shirts"
      catalogName={catalog.catalogName ?? `Catalog ${catalog.slug}`}
      // season="Autumn / Winter"
      images={catalog.images}
    />
  );
}
