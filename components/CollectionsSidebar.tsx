
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Shirt,
  Footprints,
  Briefcase,
  Scissors,
  User,
  PersonStanding,
  Baby,
  Dumbbell,
  Palette,
  Gem,
  X,
  Menu,
} from "lucide-react";
const categories = [
  { slug: "shirts", name: "Shirts", icon: Shirt },
  { slug: "trousers", name: "Trousers", icon: Footprints },
  { slug: "suits", name: "Suits", icon: Briefcase },
  { slug: "knitting", name: "Knitting", icon: Scissors },
  { slug: "womenswear", name: "Womenswear", icon: User },
  { slug: "menswear", name: "Menswear", icon: PersonStanding },
  { slug: "kidswear", name: "Kidswear", icon: Baby },
  { slug: "sportswear", name: "Sportswear", icon: Dumbbell },
  { slug: "prints", name: "Prints", icon: Palette },
  { slug: "exclusive", name: "Exclusive", icon: Gem },
];

export default function CollectionsSidebar() {
  const pathname = usePathname();
  const [mobileExpanded, setMobileExpanded] = useState(true);

  return (
    <>
      {/* ===== نسخة الديسكتوب - ثابتة دايمًا، مفيهاش زرار قفل ===== */}
      <aside className="hidden w-56 flex-shrink-0 md:block">
        <nav className="flex flex-col gap-0.5 rounded-2xl bg-[#FAF9F7] p-1.5">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = pathname === `/collections/${category.slug}`;
            return (
              <Link
                key={category.slug}
                href={`/collections/${category.slug}`}
                className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm transition-all ${
                  isActive
                    ? "bg-white font-medium text-brand-black shadow-sm"
                    : "text-black/55 hover:text-brand-black"
                }`}
              >
                <Icon
                  size={17}
                  className={isActive ? "text-brand-orange" : ""}
                />
                {category.name}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* ===== نسخة الموبايل - قابلة للطي بزرار X ===== */}
      <div className="mb-6 md:hidden">
        {mobileExpanded ? (
          // الحالة الموسّعة: أيقونة + اسم لكل قسم، وزرار X في الآخر يقفل
          <div className="flex items-center gap-1 rounded-2xl bg-[#FAF9F7] p-1.5">
            <div className="flex flex-1 gap-1 overflow-x-auto">
              {categories.map((category) => {
                const Icon = category.icon;
                const isActive =
                  pathname === `/collections/${category.slug}`;
                return (
                  <Link
                    key={category.slug}
                    href={`/collections/${category.slug}`}
                    className={`flex flex-shrink-0 items-center gap-1.5 rounded-xl px-3 py-2 text-xs transition-all ${
                      isActive
                        ? "bg-white font-medium text-brand-black shadow-sm"
                        : "text-black/55"
                    }`}
                  >
                    <Icon
                      size={15}
                      className={isActive ? "text-brand-orange" : ""}
                    />
                    {category.name}
                  </Link>
                );
              })}
            </div>
            <button
              onClick={() => setMobileExpanded(false)}
              aria-label="اقفال الأسماء - عرض الأيقونات بس"
              className="flex-shrink-0 rounded-lg p-2 text-black/40 hover:text-brand-black"
            >
              <X size={16} />
            </button>
          </div>
        ) : (
          // الحالة المقفولة: أيقونات بس، وزرار Menu في الآخر يفتح تاني
          <div className="flex items-center gap-1 rounded-2xl bg-[#FAF9F7] p-1.5">
            <div className="flex flex-1 gap-1 overflow-x-auto">
              {categories.map((category) => {
                const Icon = category.icon;
                const isActive =
                  pathname === `/collections/${category.slug}`;
                return (
                  <Link
                    key={category.slug}
                    href={`/collections/${category.slug}`}
                    aria-label={category.name}
                    className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl transition-all ${
                      isActive
                        ? "bg-white shadow-sm"
                        : "text-black/55"
                    }`}
                  >
                    <Icon
                      size={16}
                      className={isActive ? "text-brand-orange" : ""}
                    />
                  </Link>
                );
              })}
            </div>
            <button
              onClick={() => setMobileExpanded(true)}
              aria-label="عرض الأسماء تاني"
              className="flex-shrink-0 rounded-lg p-2 text-black/40 hover:text-brand-black"
            >
              <Menu size={16} />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
