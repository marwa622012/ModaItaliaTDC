
import { notFound } from "next/navigation";
import CatalogGallery from "@/components/CatalogGallery";
import { menswearCatalogs } from "@/lib/menswearCatalogs";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return menswearCatalogs.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: PageProps) {
  const catalog = menswearCatalogs.find((c) => c.slug === params.slug);
  if (!catalog) return {};

  return {
    // title: `${catalog.slug.replace(/-/g, " ")} — Autumn/Winter | Moda Italia`,
    // description: `Browse the ${catalog.slug.replace(/-/g, " ")} menswear catalogue from Moda Italia's Autumn/Winter range.`,
  };
}

export default function MenswearCatalogPage({ params }: PageProps) {
  const catalog = menswearCatalogs.find((c) => c.slug === params.slug);

  if (!catalog) return notFound();

  const allImages = [catalog.coverImage, ...(catalog.images ?? [])];

  return (
    <CatalogGallery
      categoryLabel="Menswear"
      categorySlug="menswear"
      catalogName={catalog.slug.replace(/-/g, " ")}
      // season="Autumn / Winter"
      images={allImages}
    />
  );
}
