import CategoryCatalogGrid, { Catalog } from "@/components/CategoryCatalogGrid";

export const  kidsCatalogs: Catalog[] = [
  {
    slug: "kids-youth",
    coverImage: "/images/Kidswear/1/converted_image.webp",
  },
  {
    slug: "kids-trend",
    coverImage: "/images/Kidswear/2/srkt2627.webp",
  },
  {
    slug: "NEWBORN-BABY",
    coverImage: "/images/Kidswear/3/bcnb2627.webp",
  },
  {
    slug: "baby-trend",
    coverImage: "/images/Kidswear/4/srbt2627.webp",
  },
  {
    slug: "baby-graphics",
    coverImage: "/images/Kidswear/5/srb2627.webp",
  },
  {
    slug: "kids-graphics",
    coverImage: "/images/Kidswear/6/srkg2627-1.webp",
  },
  {
    slug: "kids-spring",
    coverImage: "/images/Kidswear/7/bcky2026.webp",
    images :  ["/images/Kidswear/7/bcky2026_1.webp",
                "/images/Kidswear/7/bcky2026_2.webp"
    ],
  },
  {
    slug: "mini-cool",
    coverImage: "/images/Kidswear/8/bcnb2026.webp",
  },
  {
    slug: "style-right",
    coverImage: "/images/Kidswear/9/srb2026.webp",
  },
  {
    slug: "kids",
    coverImage: "/images/Kidswear/10/srk2026.webp",
  },
];

export default function kidsPage() {
  return (
    <CategoryCatalogGrid
      categorySlug="kidswear"
      categoryLabel="Kids Wear"
      // season="Autumn / Winter "
      // description="10 designs across ten catalogues, from classic tailoring to printed statement pieces."
      catalogs={kidsCatalogs}
    />
  );
}