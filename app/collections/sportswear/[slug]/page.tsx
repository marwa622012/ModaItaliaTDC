import { notFound } from "next/navigation";
import CatalogGallery from "@/components/CatalogGallery";
import { sportswearCatalogs } from "../page";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return sportswearCatalogs.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: PageProps) {
  const catalog = sportswearCatalogs.find((c) => c.slug === params.slug);
  if (!catalog) return {};

  return {
    // title: `${catalog.slug.replace(/-/g, " ")} — Autumn/Winter | Moda Italia`,
    // description: `Browse the ${catalog.slug.replace(/-/g, " ")} sportswear catalogue from Moda Italia's Autumn/Winter range.`,
  };
}

export default function SportswearCatalogPage({ params }: PageProps) {
  const catalog = sportswearCatalogs.find((c) => c.slug === params.slug);

  if (!catalog) return notFound();

  const allImages = [catalog.coverImage, ...(catalog.images ?? [])];

  return (
    <CatalogGallery
      categoryLabel="Sportswear"
      categorySlug="sportswear"
      catalogName={catalog.slug.replace(/-/g, " ")}
      // season="Autumn / Winter"
      images={allImages}
    />
  );
}
