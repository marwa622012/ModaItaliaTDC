import CategoryCatalogGrid, { Catalog } from "@/components/CategoryCatalogGrid";
import { womenswearCatalogs } from "@/lib/womenswearCatalogs";



export default function womensweaPage() {
  return (
    <CategoryCatalogGrid
      categorySlug="womenswear"
      categoryLabel="womenswear"
      catalogs={womenswearCatalogs}
    />
  );
}
