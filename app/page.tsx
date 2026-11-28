import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LatestCollections from "@/components/LatestCollections";
import BrowseByCategory from "@/components/BrowseByCategory";
import OurServices from "@/components/OurServices";
import InternationalTradeFairs from "@/components/InternationalTradeFairs";
import WhyModaItalia from "@/components/WhyModaItalia";
import LatestNews from "@/components/LatestNews";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function HomePage() {
  const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Moda Italia TDC",
  url: "https://modaitaliatdc.vercel.app",
  logo: "https://modaitaliatdc.vercel.app/images/logo-removebg-preview.png",
  description:
    "Fashion and textile agency connecting Egyptian manufacturers with Italian and German textile designers, sourcing, product development and an international trade fair network.",
  foundingDate: "2015",
  address: {
    "@type": "PostalAddress",
    // streetAddress: "6 El Sheikh Mohamed Salama St, El Hejaz St",
    addressLocality: "Obour City, Cairo",
    addressCountry: "EG",
  },
  telephone: "+201286693375",
  email: "heba.modaitalia@yahoo.com",
};

  return (

    <>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}

      />

      <main>
        {/* <AnnouncementBar /> */}
        <Header />
        <Hero />
        <BrowseByCategory />
        <OurServices />
        <InternationalTradeFairs />
        <WhyModaItalia />
        <LatestNews />
        </main>
        <Newsletter />
        <Footer />
    </>
  );
}
