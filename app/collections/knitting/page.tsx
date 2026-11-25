import type { Metadata } from "next";
import CategoryCatalogGrid from "@/components/CategoryCatalogGrid";
import { knittingCatalogs } from "@/lib/knittingCatalogs";

export const metadata: Metadata = {
  title: "Knitwear Collections",
  description:
    "Browse knitwear catalogues and trend books curated by Moda Italia TDC.",
  alternates: { canonical: "/collections/knitting" },
};

export default function KnittingPage() {
  return (
    <CategoryCatalogGrid
      categorySlug="knitting"
      categoryLabel="Knitting"
      catalogs={knittingCatalogs}
    />
  );
}