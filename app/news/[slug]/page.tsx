import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Download } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { newsItems } from "../data";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return newsItems.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const item = newsItems.find((n) => n.slug === params.slug);
  if (!item) return { title: "News not found" };

  const description = `${item.summary} (${item.date}, ${item.location})`;

  return {
    title: item.title,
    description,
    alternates: { canonical: `/news/${item.slug}` },
    openGraph: {
      title: item.title,
      description,
      url: `/news/${item.slug}`,
      siteName: "Moda Italia TDC",
      type: "article",
      images: [{ url: encodeURI(item.image) }],
    },
  };
}

export default function NewsDetailPage({ params }: Props) {
  const item = newsItems.find((n) => n.slug === params.slug);
  if (!item) return notFound();

  return (
    <>
      <Header />
      <main>
        <section className="max-w-content mx-auto px-4 md:px-8 py-14">
          <Link
            href="/news"
            className="mb-6 inline-block text-sm text-black/50 hover:text-brand-orange"
          >
            ← All news
          </Link>

          <p className="text-brand-orange text-xs font-semibold tracking-widest uppercase mb-4">
            {item.date} — {item.location}
          </p>
          <h1 className="font-serif text-4xl text-brand-black mb-6">
            {item.title}
          </h1>

          <div className="relative w-full aspect-[16/9] rounded-sm overflow-hidden mb-8">
            <Image
              src={item.image}
              alt={item.title}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover"
            />
          </div>

          <p className="text-black/70 leading-relaxed max-w-2xl mb-8">
            {item.summary}
          </p>

          <div className="flex flex-wrap gap-4">
            {item.brochurePdf && (
              <a
                href={item.brochurePdf}
                download
                className="inline-flex items-center gap-2 bg-brand-orange text-white font-medium px-6 py-3.5 rounded-sm hover:bg-brand-orange/90 transition-colors"
              >
                Download Brochure <Download size={16} />
              </a>
            )}

            {item.externalLink && (
              <a
                href={item.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-brand-black text-brand-black font-medium px-6 py-3.5 rounded-sm hover:bg-brand-black hover:text-white transition-colors"
              >
                Visit Official Website <span aria-hidden>↗</span>
              </a>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}