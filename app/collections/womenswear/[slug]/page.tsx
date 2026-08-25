import { notFound } from "next/navigation";
import CatalogGallery from "@/components/CatalogGallery";
import { womenswearCatalogs } from "../page";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return womenswearCatalogs.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: PageProps) {
  const catalog = womenswearCatalogs.find((c) => c.slug === params.slug);
  if (!catalog) return {};

  return {
    // title: `Womenswear Catalog ${catalog.slug} — Autumn/Winter | Moda Italia`,
    // description: `Browse the womenswear catalogue from Moda Italia's Autumn/Winter range.`,
  };
}

export default function WomenswearCatalogPage({ params }: PageProps) {
  const catalog = womenswearCatalogs.find((c) => c.slug === params.slug);

  if (!catalog) return notFound();

  const allImages = [catalog.coverImage, ...(catalog.images ?? [])];

  return (
    <CatalogGallery
      categoryLabel="Womenswear"
      categorySlug="womenswear"
      // catalogName={`Catalog ${catalog.slug}`}
      // catalogName={catalog.catalogName ?? `Catalog ${catalog.slug}`}
      catalogName={catalog.slug.replace(/-/g, " ")}
      // season="Autumn / Winter"
      images={allImages}
    />
  );
}
