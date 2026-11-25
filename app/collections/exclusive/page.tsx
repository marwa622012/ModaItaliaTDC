
import type { Metadata } from "next";
import CategoryCatalogGrid from "@/components/CategoryCatalogGrid";
import { exclusiveCatalogs } from "@/lib/exclusiveCatalogs";

export const metadata: Metadata = {
  title: "Exclusive Collections",
  description:
    "Browse the exclusive textile and fashion catalogues curated by Moda Italia TDC.",
  alternates: { canonical: "/collections/exclusive" },
};

export default function ExclusivePage() {
  return (
    <CategoryCatalogGrid
      categorySlug="exclusive"
      categoryLabel="Exclusive"
      catalogs={exclusiveCatalogs}
    />
  );
}