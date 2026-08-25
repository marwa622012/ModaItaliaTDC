"use client";

import { useEffect, useRef, useState } from "react";

interface MarqueeBarProps {
  items: string[];
  loopsBeforeStop?: number; // كام دورة يعمل قبل ما يوقف - افتراضي 3
}

export default function MarqueeBar({
  items,
  loopsBeforeStop = 3,
}: MarqueeBarProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const loopCount = useRef(0);
  const doubledItems = [...items, ...items];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    function handleIteration() {
      loopCount.current += 1;
      if (loopCount.current >= loopsBeforeStop) {
        setIsPaused(true);
      }
    }

    track.addEventListener("animationiteration", handleIteration);
    return () => track.removeEventListener("animationiteration", handleIteration);
  }, [loopsBeforeStop]);

  return (
    <div className="overflow-hidden border-y border-black/10 py-3">
      <div
        ref={trackRef}
        className="flex w-max"
        style={{
          animation: "marquee 22s linear infinite",
          animationPlayState: isPaused ? "paused" : "running",
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          // ماترجعش تتحرك تاني لو خلصت اللفات المطلوبة أصلاً
          if (loopCount.current < loopsBeforeStop) setIsPaused(false);
        }}
      >
        {doubledItems.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center">
            <span className="whitespace-nowrap px-5 font-serif text-2xl text-brand-black transition-colors hover:text-brand-orange md:text-[34px]">
              {item}
            </span>
            <span className="text-sm text-brand-orange" aria-hidden>
              ✦
            </span>
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
