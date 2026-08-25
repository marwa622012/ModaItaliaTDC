import CategoryCatalogGrid, { Catalog } from "@/components/CategoryCatalogGrid";

export const  sportswearCatalogs: Catalog[] = [
  {
    slug: "Styleright-graphic",
    coverImage: "/images/sport wear/1/srs2627.jpg",
  
  },
  {
    slug: "Styleright-Sports-trend",
    coverImage: "/images/sport wear/2/srst2627.jpg",
    
  },
  {
    slug: "StyleRight-Sport",
    coverImage: "/images/sport wear/3/srs2526.jpg",
  
  },
  {
    slug: "SPORTS-AND-STREET",
    coverImage: "/images/sport wear/4/tte2022_mode_modeinformation_modeinfo.jpg",

    
  },
  {
    slug: "sports-and-street",
    coverImage: "/images/sport wear/5/tte2122_mode_modeinformation_modeinfo.jpg",
    images:["/images/sport wear/5/tte2122_mode_modeinformation_modeinfo_1.jpg",
        "/images/sport wear/5/tte2122_mode_modeinformation_modeinfo_2.jpg",
        "/images/sport wear/5/tte2122_mode_modeinformation_modeinfo_3.jpg",
        "/images/sport wear/5/tte2122_mode_modeinformation_modeinfo_4.jpg",
    ],
  },
  
];

export default function sportswearPage() {
  return (
    <CategoryCatalogGrid
      categorySlug="sportswear"
      categoryLabel="Sportswear"
      // season="Autumn / Winter "
      // description="10 designs across ten catalogues, from classic tailoring to printed statement pieces."
      catalogs={sportswearCatalogs}
    />
  );
}