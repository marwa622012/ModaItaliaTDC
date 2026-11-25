import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CatalogGallery from "@/components/CatalogGallery";
import { kidsCatalogs } from "@/lib/kidsCatalogs";

interface PageProps {
  params: { slug: string };
}

// "NEWBORN-BABY" و"kids-youth" بيتحولوا لـ "Newborn Baby" و"Kids Youth"
function prettify(slug: string) {
  return slug
    .toLowerCase()
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export function generateStaticParams() {
  return kidsCatalogs.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const catalog = kidsCatalogs.find((c) => c.slug === params.slug);
  if (!catalog) return { title: "Catalogue not found" };

  const name = (catalog.catalogName ?? prettify(catalog.slug)).trim();
  const count = new Set(
    [catalog.coverImage, ...(catalog.images ?? [])].filter(Boolean),
  ).size;

  return {
    title: `${name} — Kidswear Catalogue`,
    description:
      count > 0
        ? `Browse ${count} designs from the ${name} kidswear catalogue by Moda Italia TDC.`
        : `Browse the ${name} kidswear catalogue by Moda Italia TDC.`,
    alternates: { canonical: `/collections/kidswear/${catalog.slug}` },
  };
}

export default function KidswearCatalogPage({ params }: PageProps) {
  const catalog = kidsCatalogs.find((c) => c.slug === params.slug);

  if (!catalog) return notFound();

  // Set عشان صورة الغلاف ما تتكررش لو كانت موجودة كمان في images
  const allImages = Array.from(
    new Set([catalog.coverImage, ...(catalog.images ?? [])]),
  );

  return (
    <CatalogGallery
      categoryLabel="Kidswear"
      categorySlug="kidswear"
      catalogName={catalog.catalogName ?? prettify(catalog.slug)}
      images={allImages}
    />
  );
}