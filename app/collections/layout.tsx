

// import CollectionsSidebar from "@/components/CollectionsSidebar";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function CollectionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
    <div className="max-w-content mx-auto flex flex-col gap-8 px-4 py-10 md:flex-row md:px-8 md:py-14">
      <div className="min-w-0 flex-1">
        {children}
      </div>
    </div>
      <Footer />
    </>
  );
}
