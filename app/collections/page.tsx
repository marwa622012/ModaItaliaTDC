import type { Metadata } from "next";
import CollectionsBrowser from "./CollectionsBrowser";

export const metadata: Metadata = {
  title: "All Collections",
  description:
    "Browse Moda Italia TDC's textile and fashion collections: shirts, knitwear, womenswear, menswear, kidswear, prints and exclusive designs.",
  alternates: { canonical: "/collections" },
};

export default function CollectionsPage() {
  return <CollectionsBrowser 
  />;

}