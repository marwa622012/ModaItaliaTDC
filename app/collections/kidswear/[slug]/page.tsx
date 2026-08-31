
import { notFound } from "next/navigation";
import CatalogGallery from "@/components/CatalogGallery";
// import { kidsCatalogs } from "../page";
import { kidsCatalogs } from "@/lib/kidsCatalogs";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return kidsCatalogs.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: PageProps) {
  const catalog = kidsCatalogs.find((c) => c.slug === params.slug);
  if (!catalog) return {};

  return {
    // title: `${catalog.slug.replace(/-/g, " ")} — Autumn/Winter | Moda Italia`,
    // description: `Browse the ${catalog.slug.replace(/-/g, " ")} kidswear catalogue from Moda Italia's Autumn/Winter range.`,
  };
}

export default function KidswearCatalogPage({ params }: PageProps) {
  const catalog = kidsCatalogs.find((c) => c.slug === params.slug);

  if (!catalog) return notFound();

  const allImages = [catalog.coverImage, ...(catalog.images ?? [])];

  return (
    <CatalogGallery
      categoryLabel="Kids Wear"
      categorySlug="kidswear"
      catalogName={catalog.slug.replace(/-/g, " ")}
      // season="Autumn / Winter"
      images={allImages}
    />
  );
}
