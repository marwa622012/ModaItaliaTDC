"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ImageOff, Expand, X } from "lucide-react";

interface CatalogGalleryProps {
  categoryLabel: string;
  categorySlug: string;
  catalogName: string;
  season: string;
  images: string[];
}

export default function CatalogGalleryCarousel({
  categoryLabel,
  categorySlug,
  catalogName,
  season,
  images,
}: CatalogGalleryProps) {
  const [brokenImages, setBrokenImages] = useState<Set<number>>(new Set());
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleImageError = useCallback((index: number) => {
    setBrokenImages((prev) => {
      const next = new Set(prev);
      next.add(index);
      return next;
    });
  }, []);

  const total = images.length;

  const goTo = useCallback(
    (index: number) => {
      const clamped = (index + total) % total;
      setActiveIndex(clamped);
      thumbRefs.current[clamped]?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    },
    [total]
  );

  const showPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);
  const showNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);

  // التحكم بلوحة المفاتيح
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isFullscreen && e.key === "Escape") {
        setIsFullscreen(false);
        return;
      }
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showPrev, showNext, isFullscreen]);

  useEffect(() => {
    document.body.style.overflow = isFullscreen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isFullscreen]);

  const validCount = total - brokenImages.size;
  const activeIsBroken = brokenImages.has(activeIndex);

  return (
    <section className="bg-[#F6F3EE] py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* رأس الكتالوج */}
        <div className="mb-10 text-center">
          <span className="inline-block text-xs tracking-[0.2em] uppercase text-[#E6531F] font-medium mb-2">
            {categoryLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#111111] mb-2">
            {catalogName}
          </h2>
          <p className="text-sm text-[#111111]/60">{season}</p>
        </div>

        {validCount === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-[#111111]/50">
            <ImageOff className="w-10 h-10 mb-3" />
            <p className="text-sm">لا توجد صور متاحة لهذا الكتالوج حالياً</p>
          </div>
        ) : (
          <>
            {/* الصورة الرئيسية */}
            <div className="relative w-full aspect-[4/5] sm:aspect-[16/10] rounded-xl overflow-hidden bg-white border border-[#111111]/10 mb-4 group">
              {!activeIsBroken ? (
                <Image
                  src={images[activeIndex]}
                  alt={`${catalogName} - ${categoryLabel} ${activeIndex + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover"
                  priority
                  onError={() => handleImageError(activeIndex)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-[#111111]/40">
                  <ImageOff className="w-10 h-10" />
                </div>
              )}

              {/* زرار تكبير */}
              {!activeIsBroken && (
                <button
                  type="button"
                  onClick={() => setIsFullscreen(true)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/90 hover:bg-white text-[#111111] p-2 rounded-full shadow-sm transition-colors"
                  aria-label="عرض بحجم كامل"
                >
                  <Expand className="w-4 h-4" />
                </button>
              )}

              {/* أسهم التنقل */}
              <button
                type="button"
                onClick={showPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#111111] p-2 rounded-full shadow-sm transition-colors"
                aria-label="الصورة السابقة"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={showNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#111111] p-2 rounded-full shadow-sm transition-colors"
                aria-label="الصورة التالية"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* عداد */}
              <span className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-[#111111]/70 text-white text-xs px-2.5 py-1 rounded-full">
                {activeIndex + 1} / {total}
              </span>
            </div>

            {/* شريط الـ thumbnails */}
            <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-thin">
              {images.map((src, index) => {
                if (brokenImages.has(index)) return null;
                const isActive = index === activeIndex;
                return (
                  <button
                    key={src}
                    ref={(el) => {
                      thumbRefs.current[index] = el;
                    }}
                    type="button"
                    onClick={() => goTo(index)}
                    className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      isActive
                        ? "border-[#E6531F]"
                        : "border-transparent hover:border-[#111111]/20"
                    }`}
                    aria-label={`عرض صورة ${index + 1}`}
                    aria-current={isActive}
                  >
                    <Image
                      src={src}
                      alt={`${catalogName} - مصغرة ${index + 1}`}
                      fill
                      sizes="80px"
                      className="object-cover"
                      onError={() => handleImageError(index)}
                    />
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>

      {/* عرض كامل الشاشة */}
      {isFullscreen && !activeIsBroken && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-8"
          onClick={() => setIsFullscreen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`عرض كامل ${categorySlug}`}
        >
          <button
            type="button"
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/80 hover:text-white transition-colors z-10"
            aria-label="إغلاق"
          >
            <X className="w-7 h-7" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-2 sm:left-6 text-white/70 hover:text-white transition-colors p-2"
            aria-label="الصورة السابقة"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div
            className="relative w-full h-full max-w-4xl max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[activeIndex]}
              alt={`${catalogName} - ${categoryLabel} ${activeIndex + 1}`}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-2 sm:right-6 text-white/70 hover:text-white transition-colors p-2"
            aria-label="الصورة التالية"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </section>
  );
}
