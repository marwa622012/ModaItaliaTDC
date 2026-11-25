import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

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
  metadataBase: new URL("https://modaitaliatdc.vercel.app"),
  title: {
    default: "Moda Italia TDC | Fashion & Textile Agency in Egypt",
    template: "%s | Moda Italia TDC",
  },
  description:
    "Moda Italia TDC connects fashion brands and manufacturers with Italian and German textile designs, Egyptian mills and garment factories, and an international trade fair network.",
  icons: {
    icon: "/images/moda-italia-logos/logo.jpeg",
  },
  openGraph: {
    title: "Moda Italia TDC | Fashion & Textile Agency in Egypt",
    description:
      "Inspiring fashion, connecting manufacturers worldwide. Discover Moda Italia's latest collections and services.",
    siteName: "Moda Italia TDC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "pV8iXR099PjWw1Ph7bB7pBn48EzJhsdJ4OVYQoTF0-k",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
