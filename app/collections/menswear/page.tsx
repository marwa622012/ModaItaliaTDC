import type { Metadata } from "next";
import CategoryCatalogGrid from "@/components/CategoryCatalogGrid";
import { menswearCatalogs } from "@/lib/menswearCatalogs";

export const metadata: Metadata = {
  title: "Menswear Collections",
  description:
    "Browse menswear fabric and trend catalogues curated by Moda Italia TDC.",
  alternates: { canonical: "/collections/menswear" },
};

export default function MenswearPage() {
  return (
    <CategoryCatalogGrid
      categorySlug="menswear"
      categoryLabel="Menswear"
      catalogs={menswearCatalogs}
    />
  );
}