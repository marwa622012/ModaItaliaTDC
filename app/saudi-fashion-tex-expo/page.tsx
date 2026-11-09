import type { Metadata } from "next";
import SaudiFashionTexBanner from "@/components/SaudiFashionTexBanner";

export const metadata: Metadata = {
  title: "Saudi Fashion & Tex Expo 2026 | Moda Italia TDC",
  description:
    "Visit Moda Italia TDC at stand F11A, Saudi Fashion & Tex Expo, Jeddah, 24–27 September 2026.",
};

export default function SaudiFashionTexExpoPage() {
  return (
    <main className="bg-brand-cream px-4 py-10 md:py-16">
      <SaudiFashionTexBanner />
    </main>
  );
}