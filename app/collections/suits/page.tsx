import CatalogGallery from "@/components/CatalogGallery";
import CategoryCatalogGrid, { Catalog } from "@/components/CategoryCatalogGrid";
import { suitsCatalogs } from "@/lib/suitsCatalogs";



export default function suitsPage() {
return (
    <CategoryCatalogGrid
        categorySlug="suits"
        categoryLabel="Suits"
        // season="Autumn / Winter "
        catalogs={suitsCatalogs}
        />
    
);
}