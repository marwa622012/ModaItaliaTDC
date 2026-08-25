"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ImageOff, ZoomIn } from "lucide-react";

interface CatalogGalleryProps {
  categoryLabel: string;
  categorySlug: string;
  catalogName: string;
  season: string;
  images: string[];
}

// تخطيط الـ Bento: كل عنصر بياخد مساحة مختلفة حسب مكانه
// الصورة الأولى = القطعة الكبيرة المميزة، الباقي أصغر
const BENTO_SPANS = [
  "col-span-2 row-span-2", // 0: الصورة المميزة الكبيرة
  "col-span-1 row-span-1", // 1
  "col-span-1 row-span-1", // 2
  "col-span-1 row-span-2", // 3: طولية
  "col-span-1 row-span-1", // 4
  "col-span-2 row-span-1", // 5: عريضة
  "col-span-1 row-span-1", // 6
  "col-span-1 row-span-1", // 7
];

function getSpan(index: number) {
  return BENTO_SPANS[index % BENTO_SPANS.length];
}

export default function CatalogGalleryBento({
  categoryLabel,
  categorySlug,
  catalogName,
  season,
  images,
}: CatalogGalleryProps) {
  const [brokenImages, setBrokenImages] = useState<Set<number>>(new Set());
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const isOpen = activeIndex !== null;

  const handleImageError = useCallback((index: number) => {
    setBrokenImages((prev) => {
      const next = new Set(prev);
      next.add(index);
      return next;
    });
  }, []);

  const openLightbox = useCallback(
    (index: number) => {
      if (brokenImages.has(index)) return;
      setActiveIndex(index);
    },
    [brokenImages]
  );

  const closeLightbox = useCallback(() => setActiveIndex(null), []);

  const showPrev = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return current;
      const total = images.length;
      let next = (current - 1 + total) % total;
      let guard = 0;
      while (brokenImages.has(next) && guard < total) {
        next = (next - 1 + total) % total;
        guard++;
      }
      return next;
    });
  }, [images.length, brokenImages]);

  const showNext = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return current;
      const total = images.length;
      let next = (current + 1) % total;
      let guard = 0;
      while (brokenImages.has(next) && guard < total) {
        next = (next + 1) % total;
        guard++;
      }
      return next;
    });
  }, [images.length, brokenImages]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeLightbox, showPrev, showNext]);

  const validCount = images.length - brokenImages.size;

  return (
    <section className="bg-[#F6F3EE] py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
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
          <div
            className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[140px] sm:auto-rows-[180px] gap-3 sm:gap-4"
          >
            {images.map((src, index) => {
              if (brokenImages.has(index)) return null;
              return (
                <button
                  key={src}
                  type="button"
                  onClick={() => openLightbox(index)}
                  className={`group relative overflow-hidden rounded-xl bg-white border border-[#111111]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E6531F] ${getSpan(
                    index
                  )}`}
                  aria-label={`تكبير صورة ${index + 1} من كتالوج ${catalogName}`}
                >
                  <Image
                    src={src}
                    alt={`${catalogName} - ${categoryLabel} ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={() => handleImageError(index)}
                  />
                  <div className="absolute inset-0 bg-[#111111]/0 group-hover:bg-[#111111]/30 transition-colors duration-300 flex items-center justify-center">
                    <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* الـ Lightbox */}
      {isOpen && activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 sm:p-8"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`عرض صورة ${categorySlug}`}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/80 hover:text-white transition-colors z-10"
            aria-label="إغلاق"
          >
            <X className="w-7 h-7" />
          </button>

          <span className="absolute top-5 left-5 sm:top-6 sm:left-6 text-white/60 text-sm">
            {activeIndex + 1} / {images.length}
          </span>

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
            className="relative w-full h-full max-w-4xl max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[activeIndex]}
              alt={`${catalogName} - ${categoryLabel} ${activeIndex + 1}`}
              fill
              sizes="90vw"
              className="object-contain"
              priority
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
