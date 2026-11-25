import type { Metadata } from "next";
import CategoryCatalogGrid from "@/components/CategoryCatalogGrid";
import { sportswearCatalogs } from "@/lib/sportswearCatalogs";

export const metadata: Metadata = {
  title: "Sportswear Collections",
  description:
    "Browse sportswear fabric and trend catalogues curated by Moda Italia TDC.",
  alternates: { canonical: "/collections/sportswear" },
};

export default function SportswearPage() {
  return (
    <CategoryCatalogGrid
      categorySlug="sportswear"
      categoryLabel="Sportswear"
      catalogs={sportswearCatalogs}
    />
  );
}