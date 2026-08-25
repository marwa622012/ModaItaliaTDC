const reasons = [
  {
    icon: "🏛️",
    title: "Italian Excellence",
    description: "Authentic Italian design and quality.",
  },
  {
    icon: "🌐",
    title: "Global Network",
    description: "Trusted partners worldwide.",
  },
  {
    icon: "💡",
    title: "Innovation",
    description: "Continuous research and trend forecasting.",
  },
  {
    icon: "🏭",
    title: "Manufacturing Focus",
    description: "Solutions tailored for manufacturers.",
  },
  {
    icon: "♻️",
    title: "Sustainability",
    description: "Committed to a more sustainable future.",
  },
];

export default function WhyModaItalia() {
  return (
    <section className="bg-brand-cream/60">
      <div className="max-w-content mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-black mb-2">
            Why
            <br />
            Moda Italia?
          </h2>
          <span className="block w-10 h-0.5 bg-brand-orange" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {reasons.map((r) => (
            <div key={r.title}>
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-orange text-lg mb-4">
                <span aria-hidden>{r.icon}</span>
              </div>
              <h3 className="font-medium text-brand-black mb-1 text-sm">
                {r.title}
              </h3>
              <p className="text-sm text-black/60 leading-relaxed">
                {r.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
