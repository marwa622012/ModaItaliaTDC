
import CategoryCatalogGrid, { Catalog } from "@/components/CategoryCatalogGrid";
import { shirtsCatalogs } from "@/lib/shirtsCatalogs";



export default function ShirtsPage() {
  return (
    <CategoryCatalogGrid
      categorySlug="shirts"
      categoryLabel="Shirts"
            catalogs={shirtsCatalogs}
    />
  );
}
