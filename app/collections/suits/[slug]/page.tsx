
import { notFound } from "next/navigation";
import CatalogGallery from "@/components/CatalogGallery";
import { suitsCatalogs } from "@/lib/suitsCatalogs";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return suitsCatalogs.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: PageProps) {
  const catalog = suitsCatalogs.find((c) => c.slug === params.slug);
  if (!catalog) return {};

  return {
    // title: `${catalog.slug.replace(/-/g, " ")} — Autumn/Winter | Moda Italia`,
    // description: `Browse the ${catalog.slug.replace(/-/g, " ")} trousers catalogue from Moda Italia's Autumn/Winter range.`,
  };
}

export default function suitCatalogPage({ params }: PageProps) {
  const catalog = suitsCatalogs.find((c) => c.slug === params.slug);

  if (!catalog) return notFound();

  const allImages = [catalog.coverImage, ...(catalog.images ?? [])];

  return (
    <CatalogGallery
      categoryLabel="Suits"
      categorySlug="suits"
      catalogName={catalog.slug.replace(/-/g, " ")}
      // season="Autumn / Winter"
      images={allImages}
    />
  );
}
