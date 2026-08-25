import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company Profile | Moda Italia TDC",
  description:
    "Moda Italia TDC — connecting fashion, design and manufacturing between Europe and Egypt since 2015.",
};

const services = [
  {
    letter: "A",
    title: "Fashion trend & design solutions",
    detail: "Professional European design resources for market-relevant collections.",
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
    letter: "B",
    title: "Fabric & garment sourcing",
    detail: "Connecting buyers with trusted Egyptian mills and manufacturers.",
    items: [
      "Woven & Knitted Fabrics",
      "Shirting Fabrics",
      "Cotton & Linen Fabrics",
      "Denim & Fashion Fabrics",
      "Finished Garments",
      "Private Label Production",
    ],
  },
  {
    letter: "C",
    title: "Product development & collection creation",
    detail: "Supporting clients from concept to final production.",
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
    letter: "D",
    title: "International business development & market expansion",
    detail: "Identifying opportunities in the Middle East, Poland, Saudi Arabia, Gulf countries and beyond.",
    items: [
      "Strategic Market Studies",
      "Fashion Brand Positioning",
      "Importers & Distributors",
      "Retail Chains",
      "Sourcing Offices",
      "Market Entry Support",
    ],
  },
  {
    letter: "E",
    title: "International textile & fashion exhibition representation",
    detail: "Promoting trade fairs and facilitating exhibitor-buyer connections.",
    items: [
      "Exhibition Representation",
      "Exhibitor Recruitment",
      "Visitor Promotion",
      "Business Matching",
      "Market Introduction",
      "Lead Generation",
    ],
  },
];

const marketGroups = [
  {
    title: "Product & fashion categories",
    priority: false,
    items: [
      "Womenswear",
      "Menswear",
      "Kidswear",
      "Shirts",
      "T-Shirts",
      "Pants",
      "Jackets",
      "Knitwear",
      "Sportswear",
      "Home Textiles",
    ],
  },
  {
    title: "Sourcing & production categories",
    priority: false,
    items: [
      "Cotton Fabrics",
      "Linen Fabrics",
      "Denim",
      "Knitted Fabrics",
      "Shirting Fabrics",
      "Printed / Fashion Fabrics",
      "Sustainable Materials",
      "Finished Garments",
      "Workwear",
      "Private Label Collections",
    ],
  },
  {
    title: "Industries we serve",
    priority: false,
    items: [
      "Fashion Brands",
      "Garment Manufacturers",
      "Fabric Mills",
      "Textile Converters",
      "Retail Chains",
      "Private Label Companies",
      "Importers & Distributors",
      "Home Textile Producers",
    ],
  },
  {
    title: "Priority markets",
    priority: true,
    items: [
      "Italy",
      "Germany",
      "Spain",
      "Poland",
      "Saudi Arabia",
      "Gulf Countries",
      "Europe, the Middle East and North Africa",
    ],
  },
];

const network = [
  {
    country: "Poland",
    name: "Trends Expo",
    tag: "B2B Apparel & Sourcing",
    detail:
      "A sourcing-focused B2B event connecting garment manufacturers and fashion suppliers with clothing brands, buyers, retailers and wholesalers across Central and Eastern Europe.",
    advantages: [
      "Strong access to apparel buyers and brand owners",
      "Designed for wholesale and sourcing relationships",
      "Approx. 3,000 visitors daily with a professionally profiled trade audience",
    ],
    stat: { value: "3,000", label: "visitors daily" },
  },
  {
    country: "Poland · November",
    name: "Fast Textile",
    tag: "Textiles • Accessories • Machinery",
    detail:
      "A dedicated B2B textile event covering fabrics, textile and garment accessories, machinery and solutions across the textile value chain.",
    advantages: [
      "Broad textile sourcing scope in one event",
      "B2B environment focused on professional industry connections",
      "Ideal for fabric, accessory and textile machinery suppliers",
    ],
    stat: null,
  },
  {
    country: "Poland · March",
    name: "Fast Textile Fabrics",
    tag: "Woven • Knitted Fabrics • Yarns",
    detail:
      "A specialized textile sourcing event focused on woven and knitted fabrics, yarns and related textile products.",
    advantages: [
      "Focused platform for fabric and yarn sourcing",
      "Strong fit for mills, fabric suppliers and textile producers",
      "3,500+ visitors daily, with a visitor profile strongly focused on fabric importers",
    ],
    stat: { value: "3,500+", label: "visitors daily" },
  },
  {
    country: "Italy",
    name: "Intertex Milano",
    tag: "Fabrics • Yarns • Accessories • Sourcing",
    detail:
      "An international B2B textile platform connecting manufacturers, fabric suppliers, brands, buyers, designers and sourcing professionals across apparel fabrics, knitted and woven materials, yarns, trims and accessories.",
    advantages: [
      "Targeted business-contact list based on company profile and product category, including CEOs, buyers, brand managers and production managers",
      "Build a focused B2B outreach strategy before and after the exhibition",
      "Dedicated VIP Buyer Program for qualified buyers and category managers",
    ],
    stat: null,
  },
  {
    country: "Italy · Fiera Milano Rho",
    name: "Ready to Show",
    tag: "Apparel • Knitwear • Textiles • Sourcing",
    detail:
      "A professional contract clothing and sourcing exhibition connecting international manufacturers with Italian and European buyers, importers, private-label companies and retailers. The 2026 edition runs September 12–14 at Fiera Milano Rho.",
    advantages: [
      "Direct access to Italian and European buyers",
      "Strong fit for garment manufacturers, knitwear producers and textile suppliers",
      "2026 edition launches a VIP European Buyers' Hosting Program",
    ],
    stat: { value: "Sep 12–14", label: "2026 edition" },
  },
  {
    country: "Morocco",
    name: "Fashion Style & Tex",
    tag: "Fashion • Textiles • Machinery",
    detail:
      "A major professional platform connecting textile, fashion, apparel and machinery companies with buyers, distributors and industry professionals across Morocco and the wider African and Mediterranean markets.",
    advantages: [
      "Gateway to African and Mediterranean textile markets",
      "Dedicated B2B area for targeted buyer meetings",
      "Strong international participation and sourcing opportunities",
    ],
    stat: null,
  },
  {
    country: "Spain",
    name: "Barcelona Textile Expo",
    tag: "Fabrics • Knitwear • Home Textiles • Yarn • Accessories",
    detail:
      "A professional sourcing platform connecting textile producers with clothing, ready-to-wear and home-textile manufacturers in Spain and international markets.",
    advantages: [
      "Direct sourcing from manufacturers",
      "Strong access to the Spanish textile and apparel market",
      "4,200 professional visitors and 300+ exhibitors from 12 countries in the published fact sheet",
    ],
    stat: { value: "4,200", label: "visitors · 300+ exhibitors" },
  },
  {
    country: "Algeria",
    name: "Alger Textile",
    tag: "Fabrics • Apparel • Home Textiles • Yarn • Machinery",
    detail:
      "A professional textile meeting point creating trade relationships between textile producers and clothing, ready-to-wear and home-textile manufacturers.",
    advantages: [
      "Direct access to Algerian textile and apparel manufacturers",
      "Professional buyer environment focused on sourcing",
      "6,800 professional visitors and 100+ exhibitors in published 2025 statistics",
    ],
    stat: { value: "6,800", label: "visitors · 100+ exhibitors" },
  },
  {
    country: "Syria",
    name: "Textile Expo Syria",
    tag: "Fabrics • Home Textiles • Knitwear • Yarn • Accessories",
    detail:
      "A specialized textile platform covering woven and knitted fabrics, home textiles, yarns, accessories and textile machinery.",
    advantages: [
      "Relevant sourcing platform for Syrian textile and apparel manufacturers",
      "Broad product coverage across fabrics, yarns and accessories",
      "Opportunity to build direct regional business relationships",
    ],
    stat: null,
  },
  {
    country: "Saudi Arabia",
    name: "Saudi Fashion & Tex Expo",
    tag: "Fashion • Textiles • International Market Entry",
    detail:
      "Supporting international companies interested in entering and developing business in the Saudi fashion and textile market.",
    advantages: [
      "Dedicated access to the Saudi fashion and textile market",
      "Exhibition participation packages combined with market-entry guidance",
      "Buyer connections and local business opportunities",
      "Brand visibility and business-matching support",
    ],
    stat: null,
  },
];

const whyUs = [
  {
    numeral: "I",
    title: "European fashion expertise",
    detail: "Direct access to European design, trend resources, and market knowledge.",
  },
  {
    numeral: "II",
    title: "Strong Egyptian manufacturing network",
    detail: "Established relationships with reliable Egyptian fabric mills and garment factories.",
  },
  {
    numeral: "III",
    title: "End-to-end support",
    detail:
      "Support spanning trend forecasting, product development, sourcing, production coordination, and market expansion.",
  },
  {
    numeral: "IV",
    title: "International business connections",
    detail: "A network built through years of collaboration with European and Middle Eastern textile and apparel companies.",
  },
  {
    numeral: "V",
    title: "Customized solutions",
    detail: "Projects are tailored to the client's objectives, budget, and target market.",
  },
  {
    numeral: "VI",
    title: "International exhibition expertise",
    detail: "Experience supporting exhibition participation, representation, business matching, and lead generation.",
  },
];

export default function CompanyProfilePage() {
  return (
    <main className="bg-brand-cream text-brand-black">
      {/* NAVBAR */}
      <Header />

      {/* RUNNING MASTHEAD */}
      <div className="max-w-5xl mx-auto px-6 pt-10 flex items-center justify-between running">
        <span>Company profile · Est. 2015</span>
        <span>Obour City, Cairo, Egypt</span>
      </div>

      {/* TITLE BLOCK */}
      <section className="max-w-5xl mx-auto px-6 pt-6 pb-16 rule mt-4">
        <p className="eyebrow mt-8 mb-4">
          Fashion · Textiles · Apparel · International business development
        </p>
        <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] mb-8">
          Connecting fashion,
          <br />
          design &amp; manufacturing
        </h1>
        <p className="font-serif italic text-2xl text-brand-orange mb-10">
          Between Europe and Egypt.
        </p>
        <div className="max-w-2xl text-brand-black/70 leading-relaxed space-y-4">
          <p>
            Moda Italia TDC is a specialized fashion business development,
            sourcing, and design agency founded in 2015 and based in Obour
            City, Cairo, Egypt. The company operates at the intersection of
            fashion trends, textile sourcing, garment production,
            international textile exhibitions and international business
            development.
          </p>
          <p>
            We act as a strategic bridge between international fashion
            brands, fabric suppliers, garment manufacturers, trend
            forecasting companies, designers, and exhibition organizers
            across Europe, the Middle East, and North Africa.
          </p>
          <p>
            Through an established network of Egyptian textile mills and
            garment factories, together with long-standing relationships with
            European fashion and design organizations, MODA ITALIA TDC
            supports clients in developing products, sourcing materials,
            accessing professional trend resources, entering new markets,
            and creating international business opportunities.
          </p>
        </div>
      </section>

      {/* FACT STRIP */}
      <section className="max-w-5xl mx-auto px-6 py-10 rule grid grid-cols-3 gap-6">
        <div>
          <p className="eyebrow mb-2">Established</p>
          <p className="font-serif text-2xl">2015</p>
        </div>
        <div>
          <p className="eyebrow mb-2">Base</p>
          <p className="font-serif text-2xl">Obour City</p>
        </div>
        <div>
          <p className="eyebrow mb-2">Focus</p>
          <p className="font-serif text-2xl">Fashion &amp; textiles</p>
        </div>
      </section>

      {/* 01 OVERVIEW / POSITIONING */}
      <section className="max-w-5xl mx-auto px-6 py-16 rule grid md:grid-cols-12 gap-8 relative overflow-hidden">
        <p className="md:col-span-2 eyebrow">01 — Positioning</p>
        <div className="md:col-span-10">
          <p className="font-serif italic text-xl text-brand-orange mb-6 leading-snug">
            From Trends to Production. From Europe to Egypt. From Ideas to
            Business Opportunities.
          </p>
          <p className="text-sm text-brand-black/70 leading-relaxed max-w-2xl mb-10">
            MODA ITALIA TDC combines European fashion and trend expertise
            with Egyptian sourcing and manufacturing capabilities, offering
            tailored support from concept and product development through
            sourcing, production coordination, market expansion, and
            international exhibition participation.
          </p>
          <div className="grid sm:grid-cols-2 gap-10">
            <div>
              <h2 className="font-serif text-xl mb-3">Vision</h2>
              <p className="text-sm text-brand-black/70 leading-relaxed">
                To be a trusted international bridge connecting fashion
                creativity, reliable manufacturing and commercial
                opportunities between Europe, Egypt, the Middle East and
                North Africa.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-xl mb-3">Core values</h2>
              <ul className="text-sm text-brand-black/70 leading-relaxed space-y-1">
                <li>Trust and professionalism</li>
                <li>Long-term cooperation</li>
                <li>Customized and flexible solutions</li>
                <li>International connectivity</li>
                <li>Commercially focused support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 02 SERVICES — EDITORIAL INDEX */}
      <section className="max-w-5xl mx-auto px-6 py-16 rule grid md:grid-cols-12 gap-8">
        <p className="md:col-span-2 eyebrow">02 — Services</p>
        <div className="md:col-span-10 divide-y divide-brand-black/10">
          {services.map((service) => (
            <div key={service.title} className="py-8 flex gap-6">
              <span
                aria-hidden
                className="hidden sm:block font-serif text-5xl leading-none text-brand-orange/20 select-none w-10 shrink-0"
              >
                {service.letter}
              </span>
              <div className="min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                  <h3 className="font-serif text-lg">{service.title}</h3>
                  <p className="text-xs text-brand-black/50 sm:max-w-xs sm:text-right">
                    {service.detail}
                  </p>
                </div>
                <p className="text-sm text-brand-black/70 leading-relaxed">
                  {service.items.map((item, i) => (
                    <span key={item}>
                      {item}
                      {i < service.items.length - 1 && (
                        <span className="text-brand-orange mx-2">·</span>
                      )}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 03 MARKETS, CATEGORIES & INDUSTRIES */}
      <section className="max-w-5xl mx-auto px-6 py-16 rule grid md:grid-cols-12 gap-8">
        <p className="md:col-span-2 eyebrow">03 — Markets &amp; categories</p>
        <div className="md:col-span-10 grid sm:grid-cols-2 gap-x-10 gap-y-12">
          {marketGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-serif text-lg mb-4">{group.title}</h3>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-snug text-brand-black/70">
                    <span className="text-brand-orange/50 shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 04 NETWORK — FULL EXHIBITION DETAIL */}
      <section className="max-w-5xl mx-auto px-6 py-16 rule grid md:grid-cols-12 gap-8">
        <p className="md:col-span-2 eyebrow">04 — Network</p>
        <div className="md:col-span-10 divide-y divide-brand-black/10">
          {network.map((exhibition) => (
            <div
              key={`${exhibition.country}-${exhibition.name}`}
              className="py-8 grid sm:grid-cols-[1fr_auto] gap-6 items-start"
            >
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                  <h3 className="font-serif text-lg">
                    {exhibition.name}
                    <span className="text-brand-black/40 text-sm font-sans font-normal">
                      {" "}
                      — {exhibition.country}
                    </span>
                  </h3>
                </div>
                <p className="eyebrow mb-3">{exhibition.tag}</p>
                <p className="text-sm text-brand-black/70 leading-relaxed mb-3 max-w-3xl">
                  {exhibition.detail}
                </p>
                <ul className="text-xs text-brand-black/50 space-y-1">
                  {exhibition.advantages.map((advantage) => (
                    <li key={advantage} className="flex gap-2">
                      <span className="text-brand-orange">—</span>
                      {advantage}
                    </li>
                  ))}
                </ul>
              </div>
              {exhibition.stat && (
                <div className="sm:text-right shrink-0">
                  <p className="font-serif text-3xl leading-none text-brand-orange">
                    {exhibition.stat.value}
                  </p>
                  <p className="text-[11px] uppercase tracking-wide text-brand-black mt-1">
                    {exhibition.stat.label}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 05 WHY US — DOSSIER INDEX */}
      <section className="max-w-5xl mx-auto px-6 py-16 rule grid md:grid-cols-12 gap-8">
        <p className="md:col-span-2 eyebrow">05 — Why us</p>
        <div className="md:col-span-10">
          <p className="font-serif italic text-2xl leading-snug mb-10 max-w-2xl">
            &ldquo;We believe successful partnerships are built on trust,
            professionalism and long-term cooperation.&rdquo;
          </p>
          <div className="divide-y divide-brand-black/10">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="group py-5 flex items-start gap-6 border-l-2 border-transparent hover:border-brand-orange transition-colors pl-4 -ml-4"
              >
                <span
                  aria-hidden
                  className="font-serif text-xl text-brand-orange/40 w-8 shrink-0 group-hover:text-brand-orange transition-colors"
                >
                  {item.numeral}
                </span>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 min-w-0">
                  <p className="text-sm font-medium sm:w-64 shrink-0">{item.title}</p>
                  <p className="text-xs text-brand-black/60 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-brand-black/70 leading-relaxed max-w-2xl mt-10">
            We believe successful partnerships are built on trust,
            professionalism, and long-term cooperation. Whether a client is
            seeking design inspiration, sourcing solutions, manufacturing
            support, market-entry assistance, or international business
            opportunities, MODA ITALIA TDC is positioned to provide
            practical, personalized support.
          </p>
        </div>
      </section>

      {/* 06 CONTACT */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-12 gap-8">
        <p className="md:col-span-2 eyebrow">06 — Contact</p>
        <div className="md:col-span-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-8">
            <div>
              <h2 className="font-serif text-3xl mb-2">Heba Ahmed</h2>
              <p className="text-sm text-brand-black/50 mb-4">
                Founder &amp; Business Development Consultant
              </p>
              <p className="text-sm text-brand-black/70">
                heba.modaitalia@yahoo.com · +20 128 669 3375 · Obour City,
                Cairo, Egypt
              </p>
            </div>
            <a
              href="mailto:heba.modaitalia@yahoo.com"
              className="eyebrow border border-brand-black px-6 py-3 hover:bg-brand-black hover:text-white transition shrink-0 text-center"
            >
              Start a conversation
            </a>
          </div>
          <p className="font-serif italic text-brand-black/60 max-w-xl">
            We would be pleased to discuss potential areas of cooperation and
            explore how MODA ITALIA TDC can contribute to your business
            objectives.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
