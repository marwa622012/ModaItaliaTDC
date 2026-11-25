import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CatalogGallery from "@/components/CatalogGallery";
import { sportswearCatalogs } from "@/lib/sportswearCatalogs";

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
  return sportswearCatalogs.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const catalog = sportswearCatalogs.find((c) => c.slug === params.slug);
  if (!catalog) return { title: "Catalogue not found" };

  const name = (catalog.catalogName ?? prettify(catalog.slug)).trim();
  const count = new Set(
    [catalog.coverImage, ...(catalog.images ?? [])].filter(Boolean),
  ).size;

  return {
    title: `${name} — Sportswear Catalogue`,
    description:
      count > 0
        ? `Browse ${count} designs from the ${name} sportswear catalogue by Moda Italia TDC.`
        : `Browse the ${name} sportswear catalogue by Moda Italia TDC.`,
    alternates: { canonical: `/collections/sportswear/${catalog.slug}` },
  };
}

export default function SportswearCatalogPage({ params }: PageProps) {
  const catalog = sportswearCatalogs.find((c) => c.slug === params.slug);

  if (!catalog) return notFound();

  // Set عشان صورة الغلاف ما تتكررش لو كانت موجودة كمان في images
  const allImages = Array.from(
    new Set([catalog.coverImage, ...(catalog.images ?? [])]),
  );

  return (
    <CatalogGallery
      categoryLabel="Sportswear"
      categorySlug="sportswear"
      catalogName={catalog.catalogName ?? prettify(catalog.slug)}
      images={allImages}
    />
  );
}