// // import Image from "next/image";
// // import { notFound } from "next/navigation";
// // import { menswearCatalogs } from "../page";

// // interface PageProps {
// //   params: { slug: string };
// // }

// // export default function CatalogGalleryPage({ params }: PageProps) {
// //   const catalog = menswearCatalogs.find((c) => c.slug === params.slug);

// //   if (!catalog) return notFound();

// //   const allImages = [catalog.coverImage, ...(catalog.images ?? [])];

// //   return (
// //     <section className="max-w-content mx-auto px-4 py-16 md:px-8">
// //       <h1 className="mb-8 font-serif text-3xl font-semibold capitalize text-brand-black">
// //         {catalog.slug.replace(/-/g, " ")}
// //       </h1>

// //       <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
// //         {allImages.map((img, i) => (
// //           <div key={i} className="relative overflow-hidden rounded-xl pt-[130%]">
// //             <Image
// //               src={img}
// //               alt={`${catalog.slug} ${i + 1}`}
// //               fill
// //               className="object-cover border"
// //               sizes="(max-width: 640px) 100vw, 50vw"
// //             />
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }
// import Image from "next/image";
// import { notFound } from "next/navigation";
// import { menswearCatalogs } from "../page";

// interface PageProps {
//   params: { slug: string };
// }

// export default function CatalogGalleryPage({ params }: PageProps) {
//   const catalog = menswearCatalogs.find((c) => c.slug === params.slug);

//   if (!catalog) return notFound();

//   const allImages = [catalog.coverImage, ...(catalog.images ?? [])];

//   return (
//     <section className="max-w-content mx-auto px-4 py-16 md:px-8">
//       <h1 className="mb-8 font-serif text-3xl font-semibold capitalize text-brand-black">
//         {catalog.slug.replace(/-/g, " ")}
//       </h1>

//       <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
//         {allImages.map((img, i) => (
//           <div
//             key={i}
//             className="relative overflow-hidden rounded-xl pt-[130%]"
//           >
//             <Image
//               src={img}
//               alt={`${catalog.slug} ${i + 1}`}
//               fill
//               className="object-cover border"
//               sizes="(max-width: 640px) 100vw, 50vw"
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
import { notFound } from "next/navigation";
import CatalogGallery from "@/components/CatalogGallery";
import { menswearCatalogs } from "../page";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return menswearCatalogs.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: PageProps) {
  const catalog = menswearCatalogs.find((c) => c.slug === params.slug);
  if (!catalog) return {};

  return {
    // title: `${catalog.slug.replace(/-/g, " ")} — Autumn/Winter | Moda Italia`,
    // description: `Browse the ${catalog.slug.replace(/-/g, " ")} menswear catalogue from Moda Italia's Autumn/Winter range.`,
  };
}

export default function MenswearCatalogPage({ params }: PageProps) {
  const catalog = menswearCatalogs.find((c) => c.slug === params.slug);

  if (!catalog) return notFound();

  const allImages = [catalog.coverImage, ...(catalog.images ?? [])];

  return (
    <CatalogGallery
      categoryLabel="Menswear"
      categorySlug="menswear"
      catalogName={catalog.slug.replace(/-/g, " ")}
      // season="Autumn / Winter"
      images={allImages}
    />
  );
}
