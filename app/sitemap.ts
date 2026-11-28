import type { MetadataRoute } from "next";
import { newsItems } from "./news/data";
import { shirtsCatalogs } from "@/lib/shirtsCatalogs";
import { kidsCatalogs } from "@/lib/kidsCatalogs";
import { knittingCatalogs } from "@/lib/knittingCatalogs";
import { menswearCatalogs } from "@/lib/menswearCatalogs";
import { pantsCatalogs } from "@/lib/pantsCatalogs";
import { printsCatalogs } from "@/lib/printsCatalogs";
import { sportswearCatalogs } from "@/lib/sportswearCatalogs";
import { suitsCatalogs } from "@/lib/suitsCatalogs";
import { womenswearCatalogs } from "@/lib/womenswearCatalogs";
import { exclusiveCatalogs } from "@/lib/exclusiveCatalogs";

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

const serviceSlugs = [
  "fashion-trend-design",
  "sourcing-profile",
  "product-development",
  "business-development",
  "exhibition-partners",
];

// كل قسم: اسمه في الرابط + كتالوجاته
const collections: { slug: string; catalogs: { slug: string }[] }[] = [
  { slug: "shirts", catalogs: shirtsCatalogs },
  { slug: "kidswear", catalogs: kidsCatalogs },
  { slug: "knitting", catalogs: knittingCatalogs },
  { slug: "menswear", catalogs: menswearCatalogs },
  { slug: "trousers", catalogs: pantsCatalogs },
  { slug: "prints", catalogs: printsCatalogs },
  { slug: "sportswear", catalogs: sportswearCatalogs },
  { slug: "suits", catalogs: suitsCatalogs },
  { slug: "womenswear", catalogs: womenswearCatalogs },
  { slug: "exclusive", catalogs: exclusiveCatalogs },
];

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
    ...collections.map((c) => entry(`/collections/${c.slug}`, 0.7)),
    ...collections.flatMap((c) =>
      c.catalogs.map((cat) => entry(`/collections/${c.slug}/${cat.slug}`, 0.6)),
    ),
    ...serviceSlugs.map((s) => entry(`/services/${s}`, 0.7)),
    ...newsItems.map((n) => entry(`/news/${n.slug}`, 0.6, "weekly")),
  ];
}