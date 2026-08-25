import { newsItems } from "../data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Download } from "lucide-react";

export function generateStaticParams() {
  return newsItems.map((item) => ({ slug: item.slug }));
}

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  const item = newsItems.find((n) => n.slug === params.slug);
  if (!item) return notFound();

  return (
    <section className="max-w-content mx-auto px-4 md:px-8 py-14">
      <p className="text-brand-orange text-xs font-semibold tracking-widest uppercase mb-4">
        {item.date} — {item.location}
      </p>
      <h1 className="font-serif text-4xl text-brand-black mb-6">{item.title}</h1>

      <div className="relative w-full aspect-[16/9] rounded-sm overflow-hidden mb-8">
        <Image src={item.image} alt={item.title} fill className="object-cover" />
      </div>

      <p className="text-black/70 leading-relaxed max-w-2xl mb-8">{item.summary}</p>

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
  );
}