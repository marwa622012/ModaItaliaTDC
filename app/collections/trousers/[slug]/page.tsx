import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CatalogGallery from "@/components/CatalogGallery";
import { pantsCatalogs } from "@/lib/pantsCatalogs";

interface PageProps {
  params: { slug: string };
}

function prettify(slug: string) {
  return slug
    .toLowerCase()
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export function generateStaticParams() {
  return pantsCatalogs.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const catalog = pantsCatalogs.find((c) => c.slug === params.slug);
  if (!catalog) return { title: "Catalogue not found" };

  const name = (catalog.catalogName ?? prettify(catalog.slug)).trim();
  const count = new Set(
    [catalog.coverImage, ...(catalog.images ?? [])].filter(Boolean),
  ).size;

  return {
    title: `${name} — Trousers Catalogue`,
    description:
      count > 0
        ? `Browse ${count} designs from the ${name} trousers catalogue by Moda Italia TDC.`
        : `Browse the ${name} trousers catalogue by Moda Italia TDC.`,
    alternates: { canonical: `/collections/trousers/${catalog.slug}` },
  };
}

export default function TrousersCatalogPage({ params }: PageProps) {
  const catalog = pantsCatalogs.find((c) => c.slug === params.slug);

  if (!catalog) return notFound();

  // Set عشان صورة الغلاف ما تتكررش لو كانت موجودة كمان في images
  const allImages = Array.from(
    new Set([catalog.coverImage, ...(catalog.images ?? [])]),
  );

  return (
    <CatalogGallery
      categoryLabel="Trousers"
      categorySlug="trousers"
      catalogName={catalog.catalogName ?? prettify(catalog.slug)}
      images={allImages}
    />
  );
}