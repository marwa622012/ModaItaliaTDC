export type NewsItem = {
  slug: string;
  title: string;
  image: string;
  date: string;
  location: string;
  organizer?: string;
  brochurePdf?: string;
  externalLink?: string;
  summary: string;
};

export const newsItems: NewsItem[] = [
  {
    slug: "saudi-fashion-tex-2026",
    title: "Saudi Fashion Trends for Autumn / Winter 2026–2027",
    image: "/images/saudi-trade-fair/WhatsApp Image 2026-08-12 at 7.16.52 PM.jpeg",
    date: "24–27 September 2026",
    location: "Jeddah Center for Exhibitions & Events",
    organizer: "Pyramids Group",
    brochurePdf: "/brochure/saudi-fashion-tex.pdf",
    summary:
      "The 4th Saudi Arabia International Fashion and Textile Exhibition, with global participation from 25+ countries.",
  },
  {
    slug: "morocco-fashion-tex",
    title: "Morocco Fashion Style & Tex",
    image: "/images/morocco/6a5b8781-72f6-46af-800e-0036e1e4ab0f.jpg",
    date: "1–4 April 2027",
    location: "OFEC Casablanca International Fairground",
    organizer: "Pyramids Group",
    externalLink: "https://www.moroccofashiontex.net",
    // لما تضيفي كتيّب Morocco: حطيه في public/assets باسم نضيف، والمسار يبدأ بـ /assets/ (من غير /public)
    // brochurePdf: "/assets/morocco-fashion-tex.pdf",
    summary:
      "Join the heart of Africa's fashion & textile industry in Casablanca.",
  },
  {
    slug: "barcelona-textile-expo-highlights",
    title: "Barcelona Textile Expo — Spain",
    image: "/images/spain/WhatsApp Image 2026-08-13 at 3.29.59 PM (1).jpeg",
    date: "21–23 October 2026",
    location: "Fira de Barcelona, Spain",
    organizer: "Meridyen",
    // الاسم فيه نقطتين (..pdf)، غيّريه لاسم نضيف زي /assets/barcelona-textile-expo.pdf
    brochurePdf: "/assets/DOC-20260314-WA0000..pdf",
    summary:
      "300+ exhibitors from 12 countries. Top buyers included Inditex, Zara, Mango, Bershka, and more.",
  },
  {
    slug: "algeria-textile-expo-highlights",
    title: "Alger Textile — Algeria",
    image: "/images/algeria/6506b8b5-7214-42c3-b685-ed9b439815fe.jpg",
    date: "08–10 October 2026",
    location: "Algeria",
    organizer: "Meridyen",
    summary:
      "A professional textile meeting point connecting textile producers with clothing, ready-to-wear and home-textile manufacturers. The published 2025 statistics list 6,800 professional visitors and 100+ exhibitors.",
  },
  {
    slug: "poland-textile-expo-highlights",
    title: "Fast Textile — Poland",
    image: "/images/trade fairs/WhatsApp Image 2026-08-16 at 4.27.18 PM.jpeg",
    date: "08–10 October 2026", // VERIFY: على موقعك Fast Textile في نوفمبر ومارس
    location: "Poland",
    organizer: "PTAK",
    summary:
      "A dedicated B2B textile event covering fabrics, textile and garment accessories, machinery and solutions across the textile value chain.",
  },
  {
    slug: "syria-textile-expo-highlights",
    title: "Textile Expo Syria",
    image: "/images/syria/2-2.jpg",
    date: "08–10 October 2026",
    location: "Syria",
    organizer: "Meridyen",
    summary:
      "A specialized textile platform covering woven and knitted fabrics, home textiles, yarns, accessories and textile machinery.",
  },
];