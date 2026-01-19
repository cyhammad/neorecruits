"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function CarouselPagination({ testimonials, selectedIndex, emblaApi }) {
  return (
    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10 items-center">
      {testimonials.map((_, idx) => (
        <motion.button
          key={idx}
          onClick={() => emblaApi && emblaApi.scrollTo(idx)}
          animate={{
            width: selectedIndex === idx ? "40px" : "8px",
            opacity: selectedIndex === idx ? 1 : 0.4,
            scale: selectedIndex === idx ? 1 : 0.9,
          }}
          className={cn(
            "h-2.5 rounded-full transition-all duration-300 cursor-pointer shadow-lg",
            selectedIndex === idx
              ? "bg-linear-to-r from-[#9a01cd] via-[#539ce0] to-[#9a01cd]"
              : "bg-gray-300",
          )}
        />
      ))}
    </div>
  );
}
