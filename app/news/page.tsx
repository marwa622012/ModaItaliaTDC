import Link from "next/link";
import Image from "next/image";
import { newsItems } from "./data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NewsPage() {
  return (
    <>
    <Header />
    <section className="max-w-content mx-auto px-4 md:px-8 py-14">
      <h1 className="font-serif text-4xl text-brand-black mb-10">Latest News & Insights</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {newsItems.map((item) => (
          <div key={item.slug}>
            <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden mb-4">
              <Image src={item.image} alt={item.title} fill className="object-cover" />
            </div>
            <h3 className="font-medium text-lg mb-2">{item.title}</h3>
            <Link href={`/news/${item.slug}`} className="text-brand-orange text-sm hover:underline">
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </section>
    <Footer />
    </>
  );
}