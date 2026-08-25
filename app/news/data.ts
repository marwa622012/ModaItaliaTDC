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
    title: "Saudia Fashion Trends for Autumn / Winter 2026–2027",
    image: "/images/saudi-trade-fair/WhatsApp Image 2026-08-12 at 7.16.52 PM.jpeg",
    date: "24–27 September 2026",
    location: "Jeddah Center for Exhibitions & Events",
    organizer: "Pyramids Group",
    brochurePdf: "/brochure/saudi-fashion-tex.pdf",
    summary: "The 4th Saudi Arabia International Fashion and Textile Exhibition, with global participation from 25+ countries.",
  },
  {
    slug: "morocco-fashion-tex",
    title: "Morocco Fashion style & Tex",
    image: "/images/morocco/6a5b8781-72f6-46af-800e-0036e1e4ab0f.jpg",
    date: "1–4 April 2027",
    location: "OFEC Casablanca International Fairground",
    organizer: "Pyramids Group",
    externalLink: "https://www.moroccofashiontex.net",
        brochurePdf: "/brochure/saudi-fashion-tex.pdf",

    summary: "Join the heart of Africa's fashion & textile industry in Casablanca.",
  },
  {
    slug: "barcelona-textile-expo-highlights",
    title: "Barcelona Textile Expo from Spain",
    image: "/images/spain/WhatsApp Image 2026-08-13 at 3.29.59 PM (1).jpeg",
    date: "21–23 October 2026",
    location: "Fira de Barcelona, Spain",
    organizer: "Meridyen",
    brochurePdf: "/assets/DOC-20260314-WA0000..pdf",
    summary: "300+ exhibitors from 12 countries. Top buyers included Inditex, Zara, Mango, Bershka, and more.",
  },
   {
    slug: "algeria-textile-expo-highlights",
    title: "Alger Textile from Algeria",
    image: "/images/algeria/6506b8b5-7214-42c3-b685-ed9b439815fe.jfif",
    date: "08–10 October 2026",
    location: "algeria",
    organizer: "Meridyen",
    summary: "300+ exhibitors from 12 countries. Top buyers included Inditex, Zara, Mango, Bershka, and more.",
  },
  {
    slug: "Polanda-textile-expo-highlights",
    title: "Fast Textite",
    image: "/images/trade fairs/WhatsApp Image 2026-08-16 at 4.27.18 PM.jpeg",
    date: "08–10 October 2026",
    location: "Polanda",
    organizer: "PTAK",
    summary: "300+ exhibitors from 12 countries. Top buyers included Inditex, Zara, Mango, Bershka, and more.",
  },
  {
    slug: "syria-textile-expo-highlights",
    title: "Syria Textile Expo from Syria",
    image: "/images/syria/2-2.jpg",
    date: "08–10 October 2026",
    location: "syria",
    organizer: "Meridyen",
    summary: "300+ exhibitors from 12 countries. Top buyers included Inditex, Zara, Mango, Bershka, and more.",
  },
];