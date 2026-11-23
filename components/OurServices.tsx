import { Palette, Factory, Shirt, TrendingUp, Store } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Fashion Trend & Design Solutions",
    description:
      "Providing brands and manufacturers with professional European design resources to support competitive, market-relevant collections.",
  },
  {
    icon: Factory,
    title: "Fabric & Garment Sourcing",
    description:
      "Connecting international buyers with trusted Egyptian mills and garment manufacturers, with a focus on quality, competitive pricing, and efficient production solutions.",
  },
  {
    icon: Shirt,
    title: "Product Development & Collection Creation",
    description:
      "Supporting clients from concept to final production and helping transform ideas into commercially successful products.",
  },
  {
    icon: TrendingUp,
    title: "International Business Development & Market Expansion",
    description:
      "Helping manufacturers and suppliers identify and develop opportunities in Italy, Germany, Spain, Poland, Saudi Arabia, Gulf countries, and other international markets.",
  },
  {
    icon: Store,
    title: "International Textile & Fashion Exhibition Representation",
    description:
      "Working with international exhibition organizers to promote trade fairs and facilitate valuable connections between exhibitors and buyers.",
  },
];

export default function OurServices() {
  return (
    <section className="max-w-content mx-auto px-4 md:px-8 py-16 md:py-20">
      <div className="flex flex-col gap-10 md:gap-14">
        <div>
          <h2 className="font-serif text-3xl md:text-5xl text-brand-black mb-3">
            Our Services
          </h2>
          <span className="block w-10 h-0.5 bg-brand-orange" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {services.map(({ icon: Icon, title, description }) => (
            <div key={title}>
              <div className="w-12 h-12 rounded-full border border-brand-orange/30 flex items-center justify-center text-brand-orange mb-4">
                <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3 className="font-medium text-brand-black mb-2">{title}</h3>
              <p className="text-sm text-black/60 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}