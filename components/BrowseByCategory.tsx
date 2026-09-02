import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Menswear",
    slug: "menswear",
    image: "/images/trends&books/menswear.webp",
  },
  {
    name: "Womenswear",
    slug: "womenswear",
    image: "/images/trends&books/womenwear.jpeg",
  },
  {
    name: "Sportswear",
    slug: "sportswear",
    image: "/images/trends&books/sport.webp",
  },
  {
    name: "Kidswear",
    slug: "kidswear",
    image: "/images/trends&books/kids (2).webp",
  },
  {
    name: "Knitting",
    slug: "knitting",
    image: "/images/trends&books/knitting.jpeg",
  },
  {
    name: "Trousers",
    slug: "trousers",
    image: "/images/trends&books/trouser.jpeg",
  },
  {
    name: "Prints",
    slug: "prints",
    image: "/images/trends&books/print.webp",
  },
  {
    name: "Shirts",
    slug: "shirts",
    image: "/images/trends&books/shirts.jpeg",
  },
  {
    name: "Suits",
    slug: "suits",
    image: "/images/trends&books/suits.jpeg",
  },
  {
    name: "Exclusive",
    slug: "exclusive",
    image: "/images/trends&books/exclusive.jpeg",
  },
];

export default function BrowseByCategory() {
  return (
    <section className="bg-brand-cream/60">
      <div className="max-w-content mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-black mb-2">
            Designs & Trends
          </h2>
          <span className="block w-10 h-0.5 bg-brand-orange" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={`/collections/${cat.slug}`}
              className="group relative aspect-[4/3] overflow-hidden rounded-sm block"
            >
              <Image
                src={cat.image}
                alt={`${cat.name} textile category`}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                className="object-none transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-3">
                <span className="text-white text-sm font-medium">
                  {cat.name}
                </span>
                <span className="text-white text-sm">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
