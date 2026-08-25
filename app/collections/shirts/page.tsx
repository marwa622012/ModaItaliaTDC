
import CategoryCatalogGrid, { Catalog } from "@/components/CategoryCatalogGrid";

export const shirtsCatalogs: Catalog[] = [
  {
    slug: "TEXTILEWORKSHOP",
        catalogName: " TEXTILE WORK SHOP", 
    coverImage:
      "/images/shirts/shirt 6/12d9de_7215c24d775d4815bf542b6c07a04682~mv2.webp",
    images: [
      "/images/shirts/shirt 6/12d9de_7215c24d775d4815bf542b6c07a04682~mv2.webp",
      "/images/shirts/shirt 6/12d9de_bd6647046aab43adb806d2df02d815b9~mv2.webp",
    ],
  },
  {
    slug: "printidea",
        catalogName: "PRINTIDEA", 

    coverImage:
      "/images/shirts/shirt 7/12d9de_64844673133547baa4990e77f886af39~mv2.webp",
    images: [
      "/images/shirts/shirt 7/12d9de_64844673133547baa4990e77f886af39~mv2.webp",
      "/images/shirts/shirt 7/12d9de_e7e2d397fdd44fa59a40f520c4a98c86~mv2.webp",
    ],
  },
  {
    slug: "dobby-shirt",
        catalogName: "DOBBY SHIRT",

    coverImage:
      "/images/shirts/shirt 2/copert_dobby_shirt_26_27_2048x2048.webp",
    images: [
      "/images/shirts/shirt 2/Dobby_1_2048x2048.webp",
      "/images/shirts/shirt 2/Dobby_2_2048x2048.webp",
      "/images/shirts/shirt 2/Dobby_3_2048x2048.webp",
      "/images/shirts/shirt 2/Dobby_4_2048x2048.webp",
      "/images/shirts/shirt 2/Dobby_5_2048x2048.webp",
      "/images/shirts/shirt 2/Dobby_6_2048x2048.webp",
      "/images/shirts/shirt 2/Dobby_7_2048x2048.webp",
    ],
  },
  {
    slug: "over-shirt",
        catalogName: "OVER SHIRT",

    coverImage:
      "/images/shirts/shirt 3/copert_overcheck_f214431f-fe63-4186-8461-a3691b811b8c_2048x2048.webp",
    images: [
      "/images/shirts/shirt 3/overchecks_10_2048x2048.webp",
      "/images/shirts/shirt 3/overchecks_1_2048x2048.webp",
      "/images/shirts/shirt 3/overchecks_6_2048x2048.webp",
      "/images/shirts/shirt 3/overchecks_8_2048x2048.webp",
      "/images/shirts/shirt 3/overchecks_9_2048x2048.jpg",
    ],
  },
  {
    slug: "dress-shirts",
        catalogName: "DRESS SHIRT",

    coverImage: "/images/shirts/shirt 4/1.webp",
    images: [
      "/images/shirts/shirt 4/dressshirtss26_1_2048x2048.webp",
      "/images/shirts/shirt 4/dressshirtss26_2_2048x2048.webp",
      "/images/shirts/shirt 4/dressshirtss26_3_2048x2048.webp",
      "/images/shirts/shirt 4/dressshirtss26_4_2048x2048.webp",
      "/images/shirts/shirt 4/dressshirtss26_5_2048x2048.webp",
      "/images/shirts/shirt 4/dressshirtss26_6_2048x2048.webp",
    ],
  },
  {
    slug: "shirt",
        catalogName: "SHIRT",

    coverImage: "/images/shirts/shirt 1/copertshirt26_27_720x.webp",
    images: [
      "/images/shirts/shirt 1/Shirt_1_2048x2048.webp",
      "/images/shirts/shirt 1/Shirt_2_2048x2048.webp",
      "/images/shirts/shirt 1/Shirt_3_2048x2048.webp",
      "/images/shirts/shirt 1/Shirt_4_aa491528-279a-4148-9000-4609f8093acc_2048x2048.webp",
      "/images/shirts/shirt 1/Shirt_5_2048x2048.webp",
      "/images/shirts/shirt 1/Shirt_6_2048x2048.webp",
      "/images/shirts/shirt 1/Shirt_7_2048x2048.webp",
    ],
  },
  {
    slug: "shirting-collection",
        catalogName: "SHIRTING COLLECTION",

    coverImage:
      "/images/shirts/shirt 5/12d9de_a3dd3a95883949b4ab649e7eb92714cc~mv2.webp",
    images: [
      "/images/shirts/shirt 5/12d9de_040c425204dd46b99ded9954a885ca34~mv2.webp",
      "/images/shirts/shirt 5/12d9de_240e72deefc14758bc63bc51b68e476e~mv2.webp",
      "/images/shirts/shirt 5/12d9de_edbca5c92c4643d7bbe435ab1ff943ea~mv2.webp",
    ],
  },
];

export default function ShirtsPage() {
  return (
    <CategoryCatalogGrid
      categorySlug="shirts"
      categoryLabel="Shirts"
      
      // season="Autumn / Winter"
      catalogs={shirtsCatalogs}
    />
  );
}
