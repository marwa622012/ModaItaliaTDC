"use client";

import { useState } from "react";
import Link from "next/link";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="bg-brand-orange text-white text-xs md:text-sm">
      <div className="max-w-content mx-auto flex items-center justify-between px-4 md:px-8 py-2">
        <p className="flex items-center gap-2 truncate">
          <span aria-hidden>📣</span>
          Find Moda Italia TDC at SAUDI FASHION&amp;TEX EXPO · Stand F11A
        </p>
        <div className="flex items-center gap-4 shrink-0">
          <Link
            href="#"
            className="hidden sm:flex items-center gap-1 bg-brand-black text-white px-3 py-1.5 rounded-sm font-medium hover:bg-black/80 transition-colors"
          >
            View details <span aria-hidden>→</span>
          </Link>
          <button
            type="button"
            onClick={() => setVisible(false)}
            aria-label="Dismiss announcement"
            className="text-white/80 hover:text-white"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
