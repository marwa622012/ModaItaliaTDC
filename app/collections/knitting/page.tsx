import CategoryCatalogGrid, { Catalog } from "@/components/CategoryCatalogGrid";
import { knittingCatalogs } from "@/lib/knittingcatalogs";


export default function kidsPage() {
  return (
    <CategoryCatalogGrid
      categorySlug="knitting"
      categoryLabel="knitting"
      // season="Autumn / Winter "
      // description="10 designs across ten catalogues, from classic tailoring to printed statement pieces."
      catalogs={knittingCatalogs}
    />
  );
}