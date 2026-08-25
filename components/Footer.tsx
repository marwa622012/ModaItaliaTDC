
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const socials = [
  { name: "Instagram", icon: FaInstagram, href: "#" },
  { name: "LinkedIn", icon: FaLinkedinIn, href: "https://www.linkedin.com/in/heba-ahmed-811773381/" },
  { name: "Facebook", icon: FaFacebookF, href: "https://www.facebook.com/profile.php?id=61590466752033" },
];

const columns = [
  {
    title: "Collections",
    links: [
      { name: "Shirts", href: "/collections/shirts" },
      { name: "Trousers", href: "/collections/trousers" },
      { name: "Suits", href: "/collections/suits" },
      { name: "Knitwear", href: "/collections/knitting" },
      { name: "Womenswear", href: "/collections/womenswear" },
      { name: "Menswear", href: "/collections/menswear" },
      { name: "Kidswear", href: "/collections/kidswear" },
      { name: "Prints", href: "/collections/prints" },
      { name: "Exclusive", href: "/collections/exclusive" },
    ],
  },
    {
    title: "Services",
    links: [
      { name: "Fashion Trend & Design Solutions", href: "/services/fashion-trend-design" },
      { name: "Fabric & Garment Sourcing", href: "/services/sourcing-profile" },
      { name: "Product Development & Collection Creation", href: "/services/product-development" },
      { name: "International Business Development & Market Expansion", href: "/services/business-development" },
      { name: "International Textile & Fashion Exhibition Representation", href: "/services/exhibition-partners" },
    ],
  },
];

const partners = [
  {
    name: "Mede Bookstore",
    tagline: "Libreria della moda e del tessuto",
    href: "https://www.medesrl.it/en/meta-trend-milano-collections-spring-summer.html",
    logo: "/images/meda.png",
    size: 68,
  },
  {
    name: "Italtex",
    tagline: "Tessuti Italiani dal 1946",
    href: "https://italtextrends.com/",
    logo: "/images/Logo-b_180x (1).avif",
    size: 48,
  },
  {
    name: "Progetto Stile",
    tagline: "Textile Design & Collections",
    href: "https://www.progettostile.net/",
    logo: "/images/LOGO PROGETTO STILE CARTA PAVONE.avif",
    size: 50,
  },
  {
    name: "moda information",
    tagline: "Textile Design & Collections",
    href: "https://modeinfo.com/By-manufacturer/View/",
    logo: "/images/modainformation.png",
    size: 50,
  },
  {
    name: "biellatextiletrend",
    tagline: "Textile Design & Collections",
    href: "https://www.biellatextiletrend.com/",
    logo: "/images/1.avif",
    size: 44,
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      <div className="max-w-content mx-auto px-4 md:px-8 py-16 grid sm:grid-cols-2 lg:grid-cols-[1.4fr_1.2fr_1.3fr_0.9fr_0.9fr_1.1fr] gap-10">
        <div>
          <Image
            src="/images/logo-removebg-preview.png"
            alt="Moda Italia Logo"
            width={70}
            height={70}
            className="brightness-0 invert"
          />
          <p className="text-sm text-white/60 leading-relaxed max-w-xs">
            Moda Italia connects fashion designers, brands and manufacturers
            with the finest textile collections from Italy and around the
            world.
          </p>
          <div className="flex items-center gap-3 mt-6">
            {socials.map(({ name, icon: Icon, href }) => (
              <a
                key={name}
                href={href}
                aria-label={name}
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-xs hover:bg-white hover:text-brand-black transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <p className="font-medium mb-4">{col.title}</p>
            <ul className="space-y-2">
                          {col.links.map((l) => (
                <li key={l.name}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <p className="font-medium mb-4">Contact Us</p>
          <ul className="space-y-3 text-sm text-white/60">
            <li className="flex items-center gap-2">
              <span aria-hidden>📞</span> +20 12 86693375
            </li>
            <li className="flex items-center gap-2">
              <span aria-hidden>✉️</span>heba.modaitalia@yahoo.com
            </li>
            <li className="flex items-start gap-2">
              <span aria-hidden>📍</span>
              <span>
                6 El sheiekh Mohamed Salama St, <br />
                El Hejaz St, Heliopolis, Cairo
              </span>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <p className="font-medium mb-4">Our Partners</p>
          <div className="flex flex-wrap gap-4">
            {partners.map((p, i) => (
              <a
                key={`${p.name}-${i}`}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                title={p.name}
                aria-label={p.name}
                className="group w-14 h-14 rounded-full bg-white border border-white/10 flex items-center justify-center overflow-hidden shrink-0 transition-transform hover:scale-105 hover:border-brand-orange"
              >
                <Image
  src={p.logo}
  alt={p.name}
  width={p.size ?? 56}
  height={p.size ?? 56}
  style={{ width: p.size ?? 56, height: p.size ?? 56 }}
  className="object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
/>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-content mx-auto px-4 md:px-8 py-5 text-xs text-white/40 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Moda Italia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

