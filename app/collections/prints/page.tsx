import type { Metadata } from "next";
import CategoryCatalogGrid from "@/components/CategoryCatalogGrid";
import { printsCatalogs } from "@/lib/printsCatalogs";

export const metadata: Metadata = {
  title: "Prints Collections",
  description:
    "Browse print and graphic design catalogues curated by Moda Italia TDC.",
  alternates: { canonical: "/collections/prints" },
};

export default function PrintsPage() {
  return (
    <CategoryCatalogGrid
      categorySlug="prints"
      categoryLabel="Prints"
      catalogs={printsCatalogs}
    />
  );
}