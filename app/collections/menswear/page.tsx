import CategoryCatalogGrid from "@/components/CategoryCatalogGrid";
import { menswearCatalogs } from "@/lib/menswearCatalogs";

export default function MenswearPage() {
  return (
    <CategoryCatalogGrid
      categorySlug="menswear"
      categoryLabel="Mens Wear"
      catalogs={menswearCatalogs}
    />
  );
}
