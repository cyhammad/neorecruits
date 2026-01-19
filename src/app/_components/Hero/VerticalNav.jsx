"use client";

import { cn } from "@/lib/utils";

export function VerticalNav({ slides, current, api }) {
  return (
    <div className="absolute right-6 sm:right-10 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-4">
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => api?.scrollTo(index)}
          className={cn(
            "w-2.5 h-2.5 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(154,1,205,0.6)]",
            current === index
              ? "bg-white h-8"
              : "bg-white/30 hover:bg-white/60",
          )}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}
