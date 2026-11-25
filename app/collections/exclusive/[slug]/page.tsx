import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CatalogGallery from "@/components/CatalogGallery";
import { exclusiveCatalogs } from "@/lib/exclusiveCatalogs";

interface PageProps {
  params: { slug: string };
}

function prettify(slug: string) {
  return slug.replace(/[-_]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export function generateStaticParams() {
  return exclusiveCatalogs.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const catalog = exclusiveCatalogs.find((c) => c.slug === params.slug);
  if (!catalog) return { title: "Catalogue not found" };

  const name = (catalog.catalogName ?? prettify(catalog.slug)).trim();
  const count = new Set(
    [catalog.coverImage, ...(catalog.images ?? [])].filter(Boolean),
  ).size;

  return {
    title: `${name} — Exclusive Catalogue`,
    description:
      count > 0
        ? `Browse ${count} designs from the ${name} exclusive catalogue by Moda Italia TDC.`
        : `Browse the ${name} exclusive catalogue by Moda Italia TDC.`,
    alternates: { canonical: `/collections/exclusive/${catalog.slug}` },
  };
}

export default function ExclusiveCatalogPage({ params }: PageProps) {
  const catalog = exclusiveCatalogs.find((c) => c.slug === params.slug);

  if (!catalog) return notFound();

  // Set عشان صورة الغلاف ما تتكررش لو كانت موجودة كمان في images
  const allImages = Array.from(
    new Set([catalog.coverImage, ...(catalog.images ?? [])]),
  );

  return (
    <CatalogGallery
      categoryLabel="Exclusive"
      categorySlug="exclusive"
      catalogName={catalog.catalogName ?? prettify(catalog.slug)}
      images={allImages}
    />
  );
}