import type { Metadata } from "next";
import CategoryCatalogGrid from "@/components/CategoryCatalogGrid";
import { womenswearCatalogs } from "@/lib/womenswearCatalogs";

export const metadata: Metadata = {
  title: "Womenswear Collections",
  description:
    "Browse womenswear fabric and trend catalogues curated by Moda Italia TDC.",
  alternates: { canonical: "/collections/womenswear" },
};

export default function WomenswearPage() {
  return (
    <CategoryCatalogGrid
      categorySlug="womenswear"
      categoryLabel="Womenswear"
      catalogs={womenswearCatalogs}
    />
  );
}