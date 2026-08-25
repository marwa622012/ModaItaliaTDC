import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    // date: "May 28, 2026",
    title: "Saudia Fashion Trends for Autumn / Winter 2026–2027",
    slug: "saudi-fashion-tex-2026",
    image: "/images/WhatsApp Image 2026-08-12 at 7.16.52 PM.jpeg",
  },
  {
    // date: "May 12, 2026",
    title: "Morocco Fashion Tex",
    slug: "morocco-fashion-tex",
    image: "/images/WhatsApp Image 2026-08-12 at 7.17.34 PM.jpeg",
  },
  {
    // date: "Apr 30, 2026",
    title: "Highlights from Spain",
    slug: "barcelona-textile-expo-highlights",
    image: "/images/WhatsApp Image 2026-08-13 at 3.29.59 PM (1).jpeg",
  },
];

export default function LatestNews() {
  return (
    <section className="max-w-content mx-auto px-4 md:px-8 py-16 md:py-20">
      <div className="flex items-end justify-between mb-10">
        <h2 className="font-serif text-3xl md:text-4xl text-brand-black">
          Latest News &amp; Insights
        </h2>
        <Link
          href="/news"
          className="text-brand-orange font-medium inline-flex items-center gap-2 hover:underline whitespace-nowrap"
        >
          View all news <span aria-hidden>→</span>
        </Link>
      </div>

      <div className="grid sm:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article key={post.slug}>
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden mb-4">
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-top"
              />
            </div>
            <p className="text-brand-orange text-xs font-semibold tracking-wide mb-2">
              {/* {post.date} */}
            </p>
            <h3 className="font-medium text-brand-black mb-3 leading-snug">
              {post.title}
            </h3>
            <Link
              href={`/news/${post.slug}`}
              className="text-sm font-medium text-brand-black inline-flex items-center gap-1 hover:text-brand-orange transition-colors"
            >
              Read more <span aria-hidden>→</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
