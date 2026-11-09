import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

/* ------------------------------------------------------------------ */
/*  Edit the content here                                              */
/* ------------------------------------------------------------------ */
const EXPO = {
  edition: "4",
  editionSuffix: "th",
  titleLines: ["SAUDI", "FASHION", "TEX", "EXPO"], // "&" is rendered between FASHION and TEX
  subtitle: "SAUDI ARABIA INTERNATIONAL FASHION & TEXTILE EXHIBITION",
  days: "24-25-26-27",
  month: "SEPTEMBER 2026",
  venue: "Jeddah Center for Exhibitions & Events",
  banner: "JOIN THE SAUDI ARABIA'S BIGGEST TEXTILE & FASHION SHOW",
  logo: "/images/moda-italia-logos/logo.jpeg", // <-- put the logo in /public/images/
  stand: "F11A",
  intro: "Discover our exclusive",
  headline: "TEXTILE TREND BOOKS",
  tags: ["Fashion & Textile Sourcing", "Design Development", "Trend Forecasting"],
  website: "www.saudifashiontexexpo.com",
  social: "/saudifashiontex",
  organizer: "Pyramids Group",
  venueShort: "JCEE",
  exhibitor: "MODA ITALIA TDC",
};

/* All sizes use container-query units (cqw) so the poster scales
   perfectly from mobile to desktop, exactly like the original artwork. */
export default function SaudiFashionTexBanner({
  className = "",
}: {
  className?: string;
}) {
  return (
    <section
      aria-label="Saudi Fashion & Tex Expo 2026 – Moda Italia TDC"
      className={`${poppins.className} mx-auto w-full max-w-[560px] ${className}`}
    >
      <div
        className="relative flex aspect-[4/5] w-full flex-col overflow-hidden text-white shadow-2xl"
        style={{
          containerType: "inline-size",
          background:
            "radial-gradient(120% 90% at 50% 0%, #1b5a41 0%, #14462f 45%, #0d3221 100%)",
        }}
      >
        {/* diagonal stripe texture */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(115deg, #fff 0, #fff 1px, transparent 1px, transparent 9px)",
          }}
        />

        {/* ---------------- Header ---------------- */}
        <header
          className="relative flex items-start justify-between"
          style={{ padding: "4.6cqw 5.6cqw 0" }}
        >
          <div>
            <span
              className="inline-block rounded-[0.5cqw] font-bold"
              style={{
                background: "#8a1b6b",
                fontSize: "1.95cqw",
                padding: "0.7cqw 1.4cqw",
                letterSpacing: "0.02em",
              }}
            >
              {EXPO.edition}
              <span style={{ fontSize: "1.3cqw" }} className="uppercase">
                {EXPO.editionSuffix}
              </span>
              EDITION
            </span>

            <h1
              className="font-bold"
              style={{
                fontSize: "4.1cqw",
                lineHeight: 1.03,
                marginTop: "1.1cqw",
                letterSpacing: "0.005em",
              }}
            >
              <span className="block">{EXPO.titleLines[0]}</span>
              <span className="block">
                {EXPO.titleLines[1]}
                <span style={{ color: "#d9c79a" }}>&amp;</span>
                {EXPO.titleLines[2]}
              </span>
              <span className="block">{EXPO.titleLines[3]}</span>
            </h1>
          </div>

          <div className="text-right" style={{ paddingTop: "1.2cqw" }}>
            <p
              className="font-bold"
              style={{ fontSize: "3.1cqw", letterSpacing: "0.06em" }}
            >
              {EXPO.days}
            </p>
            <p
              className="font-bold"
              style={{
                fontSize: "3.05cqw",
                letterSpacing: "0.04em",
                marginTop: "1.2cqw",
              }}
            >
              {EXPO.month}
            </p>
            <p
              className="font-medium text-white/85"
              style={{ fontSize: "1.28cqw", marginTop: "1.3cqw" }}
            >
              {EXPO.venue}
            </p>
          </div>
        </header>

        {/* subtitle */}
        <p
          className="relative font-medium text-white/85"
          style={{
            fontSize: "1.28cqw",
            letterSpacing: "0.12em",
            padding: "0 5.6cqw",
            marginTop: "1.2cqw",
          }}
        >
          {EXPO.subtitle}
        </p>

        {/* purple banner */}
        <div
          className="relative text-center font-bold"
          style={{
            background: "#8a1b6b",
            margin: "0.4cqw 5.6cqw 0",
            padding: "2.05cqw 1cqw",
            fontSize: "2cqw",
            letterSpacing: "0.01em",
          }}
        >
          {EXPO.banner}
        </div>

        {/* ---------------- Logo card ---------------- */}
        <div
          className="relative mx-auto"
          style={{ width: "70.3%", marginTop: "4.1cqw" }}
        >
          <div
            className="relative bg-white shadow-[0_1.2cqw_3cqw_rgba(0,0,0,0.35)]"
            style={{ height: "47.6cqw", borderRadius: "0.9cqw" }}
          >
            <Image
              src={EXPO.logo}
              alt="Moda Italia – for Textile Designers & Collections"
              fill
              sizes="(max-width: 560px) 70vw, 400px"
              className="object-contain"
              style={{ padding: "3.5cqw 3cqw 9cqw" }}
              priority
            />
          </div>

          {/* stand button, overlapping the bottom edge of the card */}
          <div
            className="absolute left-1/2 -translate-x-1/2 text-center font-extrabold shadow-[0_0.8cqw_2cqw_rgba(0,0,0,0.35)]"
            style={{
              bottom: "-0.7cqw",
              width: "44.7cqw",
              padding: "2.35cqw 0",
              borderRadius: "0.5cqw",
              fontSize: "2.7cqw",
              letterSpacing: "0.03em",
              color: "#241a08",
              background: "linear-gradient(180deg, #f3c34f 0%, #e8a33a 100%)",
            }}
          >
            VISIT US&nbsp;&nbsp;&nbsp;STAND NO: {EXPO.stand}
          </div>
        </div>

        {/* ---------------- Tagline ---------------- */}
        <div
          className="relative text-center"
          style={{ marginTop: "5.3cqw" }}
        >
          <p className="font-normal" style={{ fontSize: "2.6cqw" }}>
            {EXPO.intro}
          </p>
          <h2
            className="font-bold"
            style={{
              fontSize: "3.5cqw",
              color: "#f1c24b",
              marginTop: "1.7cqw",
              letterSpacing: "0.01em",
            }}
          >
            {EXPO.headline}
          </h2>

          <ul
            className="flex flex-wrap items-center justify-center"
            style={{ gap: "0.3cqw", marginTop: "2.6cqw", padding: "0 3cqw" }}
          >
            {EXPO.tags.map((tag) => (
              <li
                key={tag}
                className="whitespace-nowrap rounded-full border border-white/25 bg-white/[0.08] font-normal text-white/90"
                style={{ fontSize: "1.68cqw", padding: "1.55cqw 2.3cqw" }}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* ---------------- Footer ---------------- */}
        <footer
          className="relative mt-auto bg-black/30"
          style={{ padding: "2.8cqw 5.6cqw 2.6cqw" }}
        >
          <div className="flex items-center justify-between">
            <a
              href={`https://${EXPO.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f1c24b]"
              style={{ fontSize: "1.9cqw" }}
            >
              {EXPO.website}
            </a>
            <span className="font-medium" style={{ fontSize: "1.9cqw" }}>
              {EXPO.social}
            </span>
          </div>

          <dl
            className="grid grid-cols-3"
            style={{ marginTop: "1.5cqw", fontSize: "1.4cqw" }}
          >
            <div>
              <dt className="uppercase tracking-wider text-white/50" style={{ fontSize: "1cqw" }}>
                Organizer
              </dt>
              <dd className="text-white/90">{EXPO.organizer}</dd>
            </div>
            <div>
              <dt className="uppercase tracking-wider text-white/50" style={{ fontSize: "1cqw" }}>
                Fair venue
              </dt>
              <dd className="text-white/90">{EXPO.venueShort}</dd>
            </div>
            <div className="text-left" style={{ paddingLeft: "6cqw" }}>
              <dt className="uppercase tracking-wider text-white/50" style={{ fontSize: "1cqw" }}>
                Exhibitor
              </dt>
              <dd className="text-white/90">{EXPO.exhibitor}</dd>
            </div>
          </dl>
        </footer>
      </div>
    </section>
  );
}
