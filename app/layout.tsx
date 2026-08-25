import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://modaitalia.example.com"),
  title: {
    default: "Moda Italia | Italian Textile Design & Fashion Collections",
    template: "%s | Moda Italia",
  },
  description:
    "Moda Italia connects fashion designers, brands and manufacturers with the finest Italian textile collections. Explore seasonal catalogues, sourcing services and international trade fair representation.",
  keywords: [
    "Italian textile design",
    "fashion collections",
    "textile manufacturers",
    "garment sourcing",
    "trade fairs Italy",
    "Moda Italia",
  ],
  openGraph: {
    title: "Moda Italia | Italian Textile Design & Fashion Collections",
    description:
      "Inspiring fashion, connecting manufacturers worldwide. Discover Moda Italia's latest collections and services.",
    url: "https://modaitalia.example.com",
    siteName: "Moda Italia",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
