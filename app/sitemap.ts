import type { MetadataRoute } from "next";
import { newsItems } from "./news/data";
import { shirtsCatalogs } from "@/lib/shirtsCatalogs";
//  باقي الأقسام
// import { kidswearCatalogs } from "@/lib/kidswearCatalogs";

// غيّريه لما العميلة تشتري دومين
const BASE_URL = "https://modaitaliatdc.vercel.app";

const staticPaths = [
  "",
  "/about",
  "/company-profile",
  "/contact",
  "/collections",
  "/news",
  "/trade-fairs",
  "/privacy",
];

const collectionSlugs = [
  "shirts",
  "trousers",
  "suits",
  "knitting",
  "womenswear",
  "menswear",
  "kidswear",
  "sportswear",
  "prints",
  "exclusive",
];

const serviceSlugs = [
  "fashion-trend-design",
  "sourcing-profile",
  "product-development",
  "business-development",
  "exhibition-partners",
];

const fairCountries: string[] = [];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const entry = (
    path: string,
    priority: number,
    changeFrequency: "weekly" | "monthly" = "monthly",
  ) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });

  return [
    ...staticPaths.map((p) => entry(p, p === "" ? 1 : 0.8)),
    ...collectionSlugs.map((s) => entry(`/collections/${s}`, 0.7)),
    ...shirtsCatalogs.map((c) => entry(`/collections/shirts/${c.slug}`, 0.6)),
    // ...kidswearCatalogs.map((c) => entry(`/collections/kidswear/${c.slug}`, 0.6)),
    ...serviceSlugs.map((s) => entry(`/services/${s}`, 0.7)),
    ...fairCountries.map((c) => entry(`/trade-fairs/${c}`, 0.6)),
    ...newsItems.map((n) => entry(`/news/${n.slug}`, 0.6, "weekly")),
  ];
}
