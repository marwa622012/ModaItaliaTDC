import type { Metadata } from "next";
import CategoryCatalogGrid from "@/components/CategoryCatalogGrid";
import { suitsCatalogs } from "@/lib/suitsCatalogs";

export const metadata: Metadata = {
  title: "Suits Collections",
  description:
    "Browse suiting fabric and design catalogues curated by Moda Italia TDC.",
  alternates: { canonical: "/collections/suits" },
};

export default function SuitsPage() {
  return (
    <CategoryCatalogGrid
      categorySlug="suits"
      categoryLabel="Suits"
      catalogs={suitsCatalogs}
    />
  );
}