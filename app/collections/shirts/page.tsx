
import type { Metadata } from "next";
import CategoryCatalogGrid from "@/components/CategoryCatalogGrid";
import { shirtsCatalogs } from "@/lib/shirtsCatalogs";

export const metadata: Metadata = {
  title: "Shirts Collections",
  description:
    "Browse shirt fabric and design catalogues curated by Moda Italia TDC.",
  alternates: { canonical: "/collections/shirts" },
};

export default function ShirtsPage() {
  return (
    <CategoryCatalogGrid
      categorySlug="shirts"
      categoryLabel="Shirts"
      catalogs={shirtsCatalogs}
    />
  );
}
