
import CategoryCatalogGrid from "@/components/CategoryCatalogGrid";
import { exclusiveCatalogs } from "@/lib/exclusiveCatalogs";

export default function ExclusivePage() {
  return (
    <CategoryCatalogGrid
      categorySlug="exclusive"
      categoryLabel="exclusive"
      catalogs={exclusiveCatalogs}
    />
  );
}