"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ImageOff } from "lucide-react";

interface CatalogGalleryProps {
  categoryLabel: string;
  categorySlug: string;
  catalogName: string;
  season: string;
  images: string[];
}

// عدد الأعمدة حسب حجم الشاشة
const COLUMN_COUNT = { base: 2, sm: 3, lg: 4 };

export default function CatalogGalleryMasonry({
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

  // توزيع الصور على الأعمدة (عمود بعمود) عشان يبقى شكل Masonry حقيقي
  const distributeToColumns = (colCount: number) => {
    const columns: { src: string; index: number }[][] = Array.from(
      { length: colCount },
      () => []
    );
    images.forEach((src, index) => {
      if (brokenImages.has(index)) return;
      columns[index % colCount].push({ src, index });
    });
    return columns;
  };

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
          <>
            {/* Masonry - موبايل: عمودين */}
            <div className="grid grid-cols-2 sm:hidden gap-3">
              {distributeToColumns(COLUMN_COUNT.base).map((col, colIdx) => (
                <div key={colIdx} className="flex flex-col gap-3">
                  {col.map(({ src, index }) => (
                    <MasonryTile
                      key={src}
                      src={src}
                      index={index}
                      catalogName={catalogName}
                      categoryLabel={categoryLabel}
                      onOpen={openLightbox}
                      onError={handleImageError}
                    />
                  ))}
                </div>
              ))}
            </div>

            {/* Masonry - تابلت: 3 أعمدة */}
            <div className="hidden sm:grid lg:hidden grid-cols-3 gap-4">
              {distributeToColumns(COLUMN_COUNT.sm).map((col, colIdx) => (
                <div key={colIdx} className="flex flex-col gap-4">
                  {col.map(({ src, index }) => (
                    <MasonryTile
                      key={src}
                      src={src}
                      index={index}
                      catalogName={catalogName}
                      categoryLabel={categoryLabel}
                      onOpen={openLightbox}
                      onError={handleImageError}
                    />
                  ))}
                </div>
              ))}
            </div>

            {/* Masonry - ديسكتوب: 4 أعمدة */}
            <div className="hidden lg:grid grid-cols-4 gap-4">
              {distributeToColumns(COLUMN_COUNT.lg).map((col, colIdx) => (
                <div key={colIdx} className="flex flex-col gap-4">
                  {col.map(({ src, index }) => (
                    <MasonryTile
                      key={src}
                      src={src}
                      index={index}
                      catalogName={catalogName}
                      categoryLabel={categoryLabel}
                      onOpen={openLightbox}
                      onError={handleImageError}
                    />
                  ))}
                </div>
              ))}
            </div>
          </>
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

// كارت الصورة الواحدة في الشبكة - كل صورة بارتفاعها الطبيعي (مش مربعة)
function MasonryTile({
  src,
  index,
  catalogName,
  categoryLabel,
  onOpen,
  onError,
}: {
  src: string;
  index: number;
  catalogName: string;
  categoryLabel: string;
  onOpen: (i: number) => void;
  onError: (i: number) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(index)}
      className="group relative block w-full overflow-hidden rounded-lg bg-white border border-[#111111]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E6531F]"
      aria-label={`تكبير صورة ${index + 1} من كتالوج ${catalogName}`}
    >
      {/* width/height تلقائي: الصورة بتاخد ارتفاعها الطبيعي حسب أبعادها */}
      <Image
        src={src}
        alt={`${catalogName} - ${categoryLabel} ${index + 1}`}
        width={600}
        height={800}
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        onError={() => onError(index)}
      />
      <div className="absolute inset-0 bg-[#111111]/0 group-hover:bg-[#111111]/20 transition-colors duration-300" />
    </button>
  );
}
