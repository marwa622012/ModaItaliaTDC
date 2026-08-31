import CategoryCatalogGrid, { Catalog } from "@/components/CategoryCatalogGrid";
import { pantsCatalogs } from "@/lib/pantsCatalogs";



export default function pantsPage() {
  return (
    <CategoryCatalogGrid
      categorySlug="trousers"
      categoryLabel="Trousers"
      // season="Autumn / Winter"
      // description="17 designs across four catalogues, from classic tailoring to printed statement pieces."
      catalogs={pantsCatalogs}
    />
  );
}