
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Moda Italia TDC is a fashion and textile agency founded in 2015, linking Egyptian mills and garment manufacturers with leading Italian and German textile designers.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen items-center justify-center bg-[#FAF9F7] px-4 py-16 md:py-16">
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}
