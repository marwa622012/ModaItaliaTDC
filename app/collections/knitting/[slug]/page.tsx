
import { notFound } from "next/navigation";
import CatalogGallery from "@/components/CatalogGallery";
import { knittingCatalogs } from "@/lib/knittingCatalogs";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return knittingCatalogs.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: PageProps) {
  const catalog = knittingCatalogs.find((c) => c.slug === params.slug);
  if (!catalog) return {};

  return {
    // title: `${catalog.slug.replace(/-/g, " ")} — Autumn/Winter | Moda Italia`,
    // description: `Browse the ${catalog.slug.replace(/-/g, " ")} knitting catalogue from Moda Italia's Autumn/Winter range.`,
  };
}

export default function KnittingCatalogPage({ params }: PageProps) {
  const catalog = knittingCatalogs.find((c) => c.slug === params.slug);

  if (!catalog) return notFound();

  const allImages = [catalog.coverImage, ...(catalog.images ?? [])];

  return (
    <CatalogGallery
      categoryLabel="Knitting"
      categorySlug="knitting"
      catalogName={catalog.slug.replace(/-/g, " ")}
      // season="Autumn / Winter"
      images={allImages}
    />
  );
}
