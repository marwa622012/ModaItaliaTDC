import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Moda Italia TDC for sourcing requests, trade fair participation, trend books, exclusive collections and brand development.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <ContactContent />
      </main>
      <Footer />
    </>
  );
}