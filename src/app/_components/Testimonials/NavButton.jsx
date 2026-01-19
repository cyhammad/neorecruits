"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function NavButton({ direction, onClick }) {
  const isPrev = direction === "prev";
  const Icon = isPrev ? ChevronLeft : ChevronRight;

  return (
    <div
      className={cn(
        "absolute top-1/2 -translate-y-1/2 z-20",
        isPrev
          ? "left-0 sm:-left-2 lg:-left-4"
          : "right-0 sm:-right-2 lg:-right-4",
      )}
    >
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg backdrop-blur-sm",
          isPrev
            ? "bg-white border-2 border-gray-200 text-gray-600 hover:border-[#0b2677] hover:text-[#0b2677]"
            : "text-white shadow-[#0b2677]/30",
        )}
        style={
          !isPrev
            ? {
                backgroundImage:
                  "linear-gradient(to bottom right, #0b2677, #2165b8)",
              }
            : {}
        }
      >
        <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
      </motion.button>
    </div>
  );
}
