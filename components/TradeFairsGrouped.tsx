import Image from "next/image";

type Organizer = "PTAK" | "Intertex" | "Meridian" | "Pyramids";

const organizerStyle: Record<Organizer, { bg: string; label: string }> = {
  PTAK: { bg: "#0B1F3A", label: "PTAK Warsaw Expo" },
  Intertex: { bg: "#B8202C", label: "Intertex Milano" },
  Meridian: { bg: "#C81E2C", label: "Meridian International Fairs" },
  Pyramids: { bg: "#8A5A2E", label: "Pyramids Group" },
};

type Fair = {
  country: string;
  organizer: Organizer;
  image: string;
  exhibitions: string[];
};

const fairs: Fair[] = [
  {
    country: "Poland",
    organizer: "PTAK",
    image: "/images/trade fairs/gallery-1.jpg",
    exhibitions: ["Fast Textile", "Textile Trends Expo", "Fabric Expo"],
  },
  {
    country: "Italy",
    organizer: "Intertex",
    image: "/images/trade fairs/2.webp",
    exhibitions: ["Intertex Milano — Twice per Year", "Ready to Show — Rho Fiera Milano"],
  },
  {
    country: "Spain",
    organizer: "Meridian",
    image: "/images/trade fairs/tekstilfuari-4-960x636-1.jpg",
    exhibitions: ["Barcelona Textile Expo"],
  },
  {
    country: "Algeria",
    organizer: "Meridian",
    image: "/images/trade fairs/safex-1.jpg",
    exhibitions: ["Alger Textile"],
  },
  {
    country: "Syria",
    organizer: "Meridian",
    image: "/images/trade fairs/Adsiz-tasarim-17.jpg",
    exhibitions: ["Textile Expo Syria"],
  },
  {
    country: "Saudi Arabia",
    organizer: "Pyramids",
    image:
      "/images/trade fairs/43fa2e3a-42ca-480a-bf91-6d674bedcac9-logo_saudifashiontexjpg.jpg",
    exhibitions: ["Saudi Fashion & Tex Expo"],
  },
  {
    country: "Morocco",
    organizer: "Pyramids",
    image: "/images/trade fairs/3cc539b9-ef27-4513-be68-08064655495c.jpg",
    exhibitions: ["Morocco Fashion Style & Tex"],
},
];

export default function TradeFairsGrouped() {
return (
    <section className="bg-brand-cream text-brand-black">
        <div className="max-w-content mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="mb-14 md:mb-20">
          <p className="text-xs tracking-widest uppercase text-brand-orange font-medium mb-3">
            Global Reach
          </p>
          <h1 className="font-serif text-3xl md:text-5xl mb-3">
            International Exhibition Network
          </h1>
          <p className="text-brand-black/60 max-w-xl">
            Moda Italia collaborates with international exhibition organizers and
            trade-event partners to help companies identify suitable markets, participate
            in relevant exhibitions, and generate commercial opportunities.
          </p>
        </div>

    <div className="flex flex-wrap gap-x-6 gap-y-2 mb-16 pb-8 border-b border-brand-black/10">
  {fairs.map((f) => (
    <a
      key={f.country}
      href={"#" + f.country.toLowerCase().replace(/\s+/g, "-")}
      className="text-sm text-brand-black/50 hover:text-brand-orange transition-colors"
    >
      {f.country}
    </a>
  ))}
</div>

        <div className="flex flex-col">
          {fairs.map((item, i) => {
            const style = organizerStyle[item.organizer];
            const isEven = i % 2 === 0;
            const sectionId = item.country.toLowerCase().replace(/\s+/g, "-");

            return (
              <div
                key={item.country}
                id={sectionId}
                className="grid md:grid-cols-2 gap-8 md:gap-16 py-14 md:py-20 border-t border-brand-black/10 last:border-b items-center scroll-mt-24"
              >
                <div
                  className={
                    "relative aspect-[4/3] rounded-sm overflow-hidden " +
                    (isEven ? "md:order-1" : "md:order-2")
                  }
                >
                  <Image
                    src={item.image}
                    alt={item.country + " textile exhibitions"}
                    fill
                    sizes="480px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span
                    className="absolute top-4 left-4 text-[10px] font-semibold tracking-wide px-2 py-1 rounded-sm text-white"
                    style={{ backgroundColor: style.bg }}
                  >
                    {style.label}
                  </span>
                </div>

                <div className={isEven ? "md:order-2" : "md:order-1"}>
                  <p className="text-xs tracking-widest uppercase text-brand-orange font-medium mb-2">
                    {String(i + 1).padStart(2, "0")} — Market Partner
                  </p>
                  <h2 className="font-serif text-3xl md:text-4xl mb-4">{item.country}</h2>
                  <p className="text-sm text-brand-black/50 mb-6">
                    In collaboration with {style.label}
                  </p>
                  <ul className="space-y-2">
                    {item.exhibitions.map((ex) => (
                      <li key={ex} className="text-brand-black/70 flex items-start gap-2">
                        <span className="text-brand-orange mt-1">•</span>
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
        </div>
    </section>
);
}