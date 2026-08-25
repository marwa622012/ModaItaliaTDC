const services = [
  {
    icon: "🔍",
    title: "Fashion Trend & Design Solutions",
    description: "Providing brands and manufacturers with professional European design resources to support competitive,market-relevant collections",
  },
  {
    icon: "✏️",
    title: "Fabric & Garment Sourcing",
    description: "Connecting international buyers with trusted Egyptian mills and garment manufacturers, with a focus on quality,competitive pricing, and efficient production solutions.",
  },
  {
    icon: "📦",
    title: "Product Development & Collection Creation",
    description: "Supporting clients from concept to final production and helping transform ideas into commercially successfulproducts",
  },
  {
    icon: "🤝",
    title: "International Business Development & Market Expansion",
    description: "Helping manufacturers and suppliers identify and develop opportunities in Italy, Germany, Spain, Poland, Saudi Arabia, Gulf countries, and other international markets.",
  },
  {
    icon: "🤝",
    title: "International Textile & Fashion Exhibition Representation",
    description: "Working with international exhibition organizers to promote trade fairs and facilitate valuable connectionsbetween exhibitors and buyers.",
  },
];

export default function OurServices() {
  return (
    // <section className="max-w-content mx-auto px-4 md:px-8 py-16 md:py-20">
    //   <div className="grid lg:grid-cols-[280px_1fr] gap-10">
    //     <div>
    //       <h2 className="font-serif text-3xl md:text-4xl text-brand-black mb-2">
    //         Our
    //         <br />
    //         Services
    //       </h2>
    //       <span className="block w-10 h-0.5 bg-brand-orange" />
    //     </div>
    //     <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
    //       {services.map((s) => (
    //         <div key={s.title}>
    //           <div className="w-12 h-12 rounded-full border border-brand-orange/30 flex items-center justify-center text-brand-orange text-xl mb-4">
    //             <span aria-hidden>{s.icon}</span>
    //           </div>
    //           <h3 className="font-medium text-brand-black mb-2">{s.title}</h3>
    //           <p className="text-sm text-black/60 leading-relaxed">
    //             {s.description}
    //           </p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <section className="max-w-content mx-auto px-4 md:px-8 py-16 md:py-20">
  <div className="flex flex-col gap-10 md:gap-14">
    <div>
      <h2 className="font-serif text-3xl md:text-5xl text-brand-black mb-3">
        Our Services
      </h2>
      <span className="block w-10 h-0.5 bg-brand-orange" />
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
      {services.map((s) => (
        <div key={s.title}>
          <div className="w-12 h-12 rounded-full border border-brand-orange/30 flex items-center justify-center text-brand-orange text-xl mb-4">
            <span aria-hidden>{s.icon}</span>
          </div>
          <h3 className="font-medium text-brand-black mb-2">{s.title}</h3>
          <p className="text-sm text-black/60 leading-relaxed">
            {s.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
  );
}
