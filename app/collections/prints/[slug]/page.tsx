import { notFound } from "next/navigation";
import CatalogGallery from "@/components/CatalogGallery";
import { printsCatalogs } from "@/lib/printsCatalogs";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return printsCatalogs.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: PageProps) {
  const catalog = printsCatalogs.find((c) => c.slug === params.slug);
  if (!catalog) return {};

  return {
    // title: `${catalog.slug.replace(/-/g, " ")} — Autumn/Winter | Moda Italia`,
    // description: `Browse the ${catalog.slug.replace(/-/g, " ")} trousers catalogue from Moda Italia's Autumn/Winter range.`,
  };
}

export default function TrousersCatalogPage({ params }: PageProps) {
  const catalog = printsCatalogs.find((c) => c.slug === params.slug);

  if (!catalog) return notFound();

  const allImages = [catalog.coverImage, ...(catalog.images ?? [])];

  return (
    <CatalogGallery
      categoryLabel="Prints"
      categorySlug="prints"
      catalogName={catalog.slug.replace(/-/g, " ")}
      // season="Autumn / Winter"
      images={allImages}
    />
  );
}
