"use client";

import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Design & Trends",
    description: "Trend forecasting for upcoming seasons, tailored to your brand's identity.",
    href: "/services/fashion-trend-design",
  },
  {
    number: "02",
    title: "Sourcing",
    description: "Fabrics and garments sourced from trusted Egyptian manufacturers.",
    href: "/services/sourcing",
  },
  {
    number: "03",
    title: "Exhibitions",
    description: "Representation and access to international trade fairs across the network.",
    href: "/services/exhibition-representation",
  },
  {
    number: "04",
    title: "Business Growth",
    description: "Partnership development connecting factories with European brands.",
    href: "/services/business-development",
  },
  {
    number: "05",
    title: "Product Development",
    description: "From concept to finished collection, managed end to end.",
    href: "/services/product-development",
  },
];

export default function ServicesNumberedList() {
  return (
    <section className="bg-brand-cream text-brand-black">
      <div className="max-w-content mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="text-xs tracking-widest uppercase text-brand-orange font-medium mb-3">
              What We Do
            </p>
            <h2 className="font-serif text-3xl md:text-5xl">Our Services</h2>
            <p className="text-brand-black/60 mt-3 max-w-md">
              End-to-end support connecting Egyptian factories with European brands.
            </p>
          </div>
          <Link
            href="/services"
            className="text-brand-orange font-medium inline-flex items-center gap-2 hover:underline shrink-0"
          >
            All services <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="flex flex-col">
          {services.map((service) => (
            <Link
              key={service.number}
              href={service.href}
              className="group flex items-center gap-6 md:gap-10 py-7 md:py-9 border-t border-brand-black/10 last:border-b transition-colors hover:bg-brand-black/[0.02]"
            >
              <span className="font-serif text-4xl md:text-6xl text-brand-black/15 group-hover:text-brand-orange/40 transition-colors leading-none shrink-0 w-16 md:w-24">
                {service.number}
              </span>

              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-xl md:text-3xl mb-1 md:mb-2 group-hover:text-brand-orange transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-brand-black/55 max-w-xl">
                  {service.description}
                </p>
              </div>

              <span
                aria-hidden
                className="hidden md:flex w-10 h-10 rounded-full border border-brand-black/15 items-center justify-center shrink-0 group-hover:border-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all"
              >
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}