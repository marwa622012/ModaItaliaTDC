import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CatalogGallery from "@/components/CatalogGallery";
import { printsCatalogs } from "@/lib/printsCatalogs";

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
  return printsCatalogs.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const catalog = printsCatalogs.find((c) => c.slug === params.slug);
  if (!catalog) return { title: "Catalogue not found" };

  const name = (catalog.catalogName ?? prettify(catalog.slug)).trim();
  const count = new Set(
    [catalog.coverImage, ...(catalog.images ?? [])].filter(Boolean),
  ).size;

  return {
    title: `${name} — Prints Catalogue`,
    description:
      count > 0
        ? `Browse ${count} designs from the ${name} prints catalogue by Moda Italia TDC.`
        : `Browse the ${name} prints catalogue by Moda Italia TDC.`,
    alternates: { canonical: `/collections/prints/${catalog.slug}` },
  };
}

export default function PrintsCatalogPage({ params }: PageProps) {
  const catalog = printsCatalogs.find((c) => c.slug === params.slug);

  if (!catalog) return notFound();

  // Set عشان صورة الغلاف ما تتكررش لو كانت موجودة كمان في images
  const allImages = Array.from(
    new Set([catalog.coverImage, ...(catalog.images ?? [])]),
  );

  return (
    <CatalogGallery
      categoryLabel="Prints"
      categorySlug="prints"
      catalogName={catalog.catalogName ?? prettify(catalog.slug)}
      images={allImages}
    />
  );
}