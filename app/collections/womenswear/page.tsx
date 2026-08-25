import CategoryCatalogGrid, { Catalog } from "@/components/CategoryCatalogGrid";

export const womenswearCatalogs: Catalog[] = [
  {
    slug: "Womens-wear-summer",
    coverImage: "/images/Women Wear/1/copertwomensSS26_720x.webp",
    images: [
      "/images/Women Wear/1/womenswear_1-14SS26_720x.webp",
      "/images/Women Wear/1/womenswear_1-15SS26_720x.webp",
      "/images/Women Wear/1/womenswear_1-17SS26_2048x2048.webp",
      "/images/Women Wear/1/womenswear_1-18SS26_720x.webp",
      "/images/Women Wear/1/womenswear_1-19SS26_720x.webp",
      "/images/Women Wear/1/womenswear_1-20SS26_720x.webp",
      "/images/Women Wear/1/womenswear_1-21SS26_720x.webp",
      "/images/Women Wear/1/womenswear_1-22SS26_720x.webp",
      "/images/Women Wear/1/womenswear_1-23SS26_720x.jpg",
    ],
  },
  {
    slug: "JACQUARDS",
    coverImage: "/images/Women Wear/2/jacquard_720x.webp",
    images: [
      "/images/Women Wear/2/jacquard2627-10_720x.webp",
      "/images/Women Wear/2/jacquard2627-1_720x.webp",
      "/images/Women Wear/2/jacquard2627-2_720x.webp",
      "/images/Women Wear/2/jacquard2627-3_720x.webp",
      "/images/Women Wear/2/jacquard2627-4_720x.webp",
      "/images/Women Wear/2/jacquard2627-5_720x.webp",
      "/images/Women Wear/2/jacquard2627-6_720x.webp",
      "/images/Women Wear/2/jacquard2627-7_720x.webp",
      "/images/Women Wear/2/jacquard2627-8_720x.webp",
      "/images/Women Wear/2/jacquard2627-9_720x.webp",
    ],
  },
  {
    slug: "Women-Wear-Winter",
    coverImage: "/images/Women Wear/3/copertwomenswear_720x.webp",
    images: [
      "/images/Women Wear/3/womenswear2627-10_720x.webp",
      "/images/Women Wear/3/womenswear2627-13_720x.webp",
      "/images/Women Wear/3/womenswear2627-2_720x.jpg",
      "/images/Women Wear/3/womenswear2627-3_39010ed6-1fc9-4b5f-aa85-bedcb5517df8_720x.webp",
      "/images/Women Wear/3/womenswear2627-4_720x.webp",
      "/images/Women Wear/3/womenswear2627-5_720x.webp",
      "/images/Women Wear/3/womenswear2627-6_720x.webp",
      "/images/Women Wear/3/womenswear2627-7_720x.webp",
      "/images/Women Wear/3/womenswear2627-8_720x.jpg",
    ],
  },
  {
    slug: "Style-Right",
    coverImage:
      "/images/Women Wear/4/styleright-women-ss-2026-tendenze-moda-donna-cover.png",

    images: [
      "/images/Women Wear/4/srw2021_mede_1.jpg",
      "/images/Women Wear/4/srw2021_mede_2.jpg",
      "/images/Women Wear/4/srw2021_mede_3.jpg",
      "/images/Women Wear/4/srw2021_mede_4.jpg",
      "/images/Women Wear/4/style-right-tendenze-abbigliamento-casual-donna-immagine-di-archivio-.jpg",
      "/images/Women Wear/4/style-right-tendenze-donna-maglieria-casual-immagine-di-archivio-.jpg",
      "/images/Women Wear/4/style-right-tendenze-moda-donna-immagine-di-archivio-1jpg.png",
      "/images/Women Wear/4/style-right-trend-donna-casual-grafiche-e-stampe-stagione-ss-2025-immagini-di-archivio-.png",
    ],
  },
  {
    slug: "Next-look",
    coverImage:
      "/images/Women Wear/5/next-look-women-tendenze-moda-donna-aw-25-26_1.jpg",
    images: [
      "/images/Women Wear/5/next-look-women-trend-immagine-archivio.2_2.jpg",
      "/images/Women Wear/5/next-look-women-trend-immagine-archivio.3_2.jpg",
      "/images/Women Wear/5/next-look-women-trend-immagine-archivio.4_2.jpg",
      "/images/Women Wear/5/next-look-women-trend-immagine-archivio.5_2.jpg",
      "/images/Women Wear/5/next-look-women-trend-immagine-archivio.6_2.jpg",
      "/images/Women Wear/5/next-look-women-trend-immagine-archivio.7_2.jpg",
      "/images/Women Wear/5/next-look-women-trend-immagine-archivio.8_2.jpg",
      "/images/Women Wear/5/next-look-women-trend-immagine-archivio._2.jpg",
    ],
  },
  {
    slug: "Chiron",
    coverImage:
      "/images/Women Wear/6/26_2_caleidoscopio_coverpage_modeinfo(4).jpg",
  },
  {
    slug: "Color-ESSENCE",
    coverImage: "/images/Women Wear/7/cew2627.jpg",
  },
];

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
