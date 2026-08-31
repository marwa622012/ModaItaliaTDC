import CategoryCatalogGrid, { Catalog } from "@/components/CategoryCatalogGrid";
import { printsCatalogs } from "@/lib/printsCatalogs";



export default function ShirtsPage() {
  return (
    <CategoryCatalogGrid
      categorySlug="prints"
      categoryLabel="prints"
      // season="Autumn / Winter"
      catalogs={printsCatalogs}
    />
  );
}