import type { Metadata } from "next";
import { Suspense } from "react";
import TradeFairsTabs from "@/components/TradeFairsTabs";

export const metadata: Metadata = {
  title: "International Exhibition Network",
  description:
    "Textile and fashion trade fairs represented by Moda Italia TDC in Poland, Italy, Spain, Algeria, Saudi Arabia, Morocco and Syria, connecting manufacturers with international buyers.",
  alternates: { canonical: "/trade-fairs" },
};

export default function TradeFairsPage() {
  return (
    <Suspense fallback={null}>
      <TradeFairsTabs />
    </Suspense>
  );
}