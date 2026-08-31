import CategoryCatalogGrid, { Catalog } from "@/components/CategoryCatalogGrid";
import { exclusiveCatalogs } from "@/lib/exclusiveCatalogs";
export default function exclusivePage() {
  return (
    <CategoryCatalogGrid
      categorySlug="exclusive"
      categoryLabel="exclusive"
      catalogs={exclusiveCatalogs}
    />
  );
}