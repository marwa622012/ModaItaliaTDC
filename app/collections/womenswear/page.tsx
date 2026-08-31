import CategoryCatalogGrid, { Catalog } from "@/components/CategoryCatalogGrid";
import { womenswearCatalogs } from "@/lib/womenswearCatalogs";



export default function womensweaPage() {
  return (
    <CategoryCatalogGrid
      categorySlug="womenswear"
      categoryLabel="womenswear"
      // season=""
      // description="53 designs across seven catalogues, from classic tailoring to printed statement pieces."
      catalogs={womenswearCatalogs}
    />
  );
}
