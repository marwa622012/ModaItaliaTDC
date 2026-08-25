import Link from "next/link";
import PartnersMenu from "@/components/Partners";
import ServicesMenu from "@/components/ServicesMenu";
import CollectionsMenu from "@/components/CollectionsMenu";
import Image from "next/image";
import MobileNav from "./MobileNav";

const navItems = [
  { label: "Home", href: "/", hasDropdown: false },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Designs & Trends", href: "/collections", hasDropdown: true },
  { label: "Partners", href: "/partners", hasDropdown: false },
  { label: "About Us", href: "/about", hasDropdown: false },
  { label: "Company Profile", href: "/company-profile", hasDropdown: false },
  { label: "Contact", href: "/contact", hasDropdown: false },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white">
      <div className="max-w-content mx-auto flex items-center justify-between px-4 py-4 md:px-8">
        <Link href="/" className="flex flex-col leading-none">
          <Image src="/images/logo.jpeg" alt="Logo" width={100} height={70} />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[#111111] lg:flex">
          {navItems.map((item) => {
            if (item.label === "Partners") {
              return <PartnersMenu key={item.label} />;
            }
            if (item.label === "Services") {
              return <ServicesMenu key={item.label} />;
            }
            if (item.label === "Designs & Trends") {
              return <CollectionsMenu key={item.label} />;
            }
            return (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-1 transition-colors hover:text-[#E6531F]"
              >
                {item.label}
                {item.hasDropdown && (
                  <span aria-hidden className="text-xs">
                    ▾
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 md:gap-4">
          {/* <button
            aria-label="Search"
            className="hidden text-[#111111] hover:text-[#E6531F] sm:block"
          >
            🔍
          </button> */}
          {/* <button className="hidden items-center gap-1 text-sm text-[#111111] md:flex">
            🌐 EN <span aria-hidden className="text-xs">▾</span>
          </button> */}
          <Link
            href="/contact"
            className="hidden rounded-sm bg-[#111111] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-black/80 lg:inline-block"
          >
            Get in touch
          </Link>

          <MobileNav />
        </div>
      </div>
    </header>
  );
}
