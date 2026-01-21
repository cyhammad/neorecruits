"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export function ServicesNav({ onPrev, onNext }) {
  const btnClass =
    "h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center rounded-lg border-2 border-[#0b2677]/20 text-[#0b2677]/40 hover:text-[#0b2677] hover:border-[#9a01cd] transition-all bg-white hover:bg-[#9a01cd]/5";

  return (
    <div className="flex justify-start sm:justify-end gap-3 mb-6">
      <button
        className="h-12 w-12 flex items-center justify-center rounded-full border border-[#0b2677]/10 text-[#0b2677] hover:bg-[#0b2677] hover:text-white transition-all duration-300"
        onClick={onPrev}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        className="h-12 w-12 flex items-center justify-center rounded-full border border-[#0b2677]/10 text-[#0b2677] hover:bg-[#0b2677] hover:text-white transition-all duration-300"
        onClick={onNext}
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}
