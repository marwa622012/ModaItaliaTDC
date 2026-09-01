import CategoryCatalogGrid, { Catalog } from "@/components/CategoryCatalogGrid";
import { sportswearCatalogs } from "@/lib/sportswearCatalogs";


export default function sportswearPage() {
  return (
    <CategoryCatalogGrid
      categorySlug="sportswear"
      categoryLabel="Sportswear"
      // season="Autumn / Winter "
      catalogs={sportswearCatalogs}
    />
  );
}