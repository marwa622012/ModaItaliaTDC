export type ServicePage = {
  slug: string;
  title: string;
  intro: string;
  items: string[];
};

// الخدمات اللي ليها صفحة من القالب
export const services: ServicePage[] = [
  {
    slug: "fashion-trend-design",
    title: "Fashion Trend & Design Solutions",
    intro:
      "Providing brands and manufacturers with professional European design resources to support competitive, market-relevant collections.",
    items: [
      "Seasonal Trend Books",
      "Color Forecasts & Colorways",
      "Fabric & Fashion Trend Directions",
      "Print & Graphic Developments",
      "Fashion / Collection Development",
      "Market Intelligence & Fashion Insights",
    ],
  },
  {
    slug: "product-development",
    title: "Product Development & Collection Creation",
    intro:
      "Supporting clients from concept to final production and helping transform ideas into commercially successful products.",
    items: [
      "Collection Planning",
      "Product Development",
      "Sample Development & Coordination",
      "Fabric Selection",
      "Design Adaptation",
      "Cost Optimization",
      "Production Coordination & Manufacturing Follow-up",
    ],
  },
  {
    slug: "business-development",
    title: "International Business Development & Market Expansion",
    intro:
      "Helping manufacturers and suppliers identify and develop opportunities in the Middle East, Poland, Saudi Arabia, Gulf countries and other international markets.",
    items: [
      "Strategic Market Studies",
      "Fashion Brand Positioning",
      "Importers & Distributors",
      "Retail Chains",
      "Sourcing Offices",
      "Market Entry Support",
    ],
  },
];

// كل الخدمات الخمس (للروابط بين الصفحات)
export const allServiceLinks = [
  { href: "/services/fashion-trend-design", title: "Fashion Trend & Design Solutions" },
  { href: "/services/sourcing-profile", title: "Fabric & Garment Sourcing" },
  { href: "/services/product-development", title: "Product Development & Collection Creation" },
  { href: "/services/business-development", title: "International Business Development & Market Expansion" },
  { href: "/services/exhibition-partners", title: "International Textile & Fashion Exhibition Representation" },
];