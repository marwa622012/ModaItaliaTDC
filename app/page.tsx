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
    name: "Moda Italia",
    url: "https://modaitalia.example.com",
    description:
      "Moda Italia connects fashion designers, brands and manufacturers with the finest Italian textile collections.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Tortona 37",
      postalCode: "20144",
      addressLocality: "Milano",
      addressCountry: "IT",
    },
    telephone: "+39 02 1234 5678",
    email: "info@modaitalia.com",
  };

  return (
    <>
    
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        
      />
      
      <main>
        <AnnouncementBar />
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
