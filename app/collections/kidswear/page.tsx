import type { Metadata } from "next";
import CategoryCatalogGrid from "@/components/CategoryCatalogGrid";
import { kidsCatalogs } from "@/lib/kidsCatalogs";

export const metadata: Metadata = {
  title: "Kidswear Collections",
  description:
    "Browse kidswear fabric and design catalogues curated by Moda Italia TDC.",
  alternates: { canonical: "/collections/kidswear" },
};

export default function KidswearPage() {
  return (
    <CategoryCatalogGrid
      categorySlug="kidswear"
      categoryLabel="Kidswear"
      catalogs={kidsCatalogs}
    />
  );
}