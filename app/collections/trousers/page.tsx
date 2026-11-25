import type { Metadata } from "next";
import CategoryCatalogGrid from "@/components/CategoryCatalogGrid";
import { pantsCatalogs } from "@/lib/pantsCatalogs";

export const metadata: Metadata = {
  title: "Trousers Collections",
  description:
    "Browse trouser fabric and design catalogues curated by Moda Italia TDC.",
  alternates: { canonical: "/collections/trousers" },
};

export default function TrousersPage() {
  return (
    <CategoryCatalogGrid
      categorySlug="trousers"
      categoryLabel="Trousers"
      catalogs={pantsCatalogs}
    />
  );
}