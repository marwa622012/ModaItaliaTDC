
export default function Newsletter() {
  return (
    <section className="bg-brand-orange text-white">
      <div className="max-w-content mx-auto px-4 md:px-8 py-8 flex items-center justify-center gap-4 text-center">
        <span className="hidden sm:flex w-10 h-10 rounded-full border border-white/50 items-center justify-center text-lg shrink-0">
          ✉️
        </span>
        <p className="text-sm md:text-base">
          Stay updated with the latest collections, trends and trade fair
          news.
        </p>
      </div>
    </section>
  );
}

