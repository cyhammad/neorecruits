"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function NavButton({ direction, onClick, isStatic = false }) {
  const isPrev = direction === "prev";
  const Icon = isPrev ? ChevronLeft : ChevronRight;

  return (
    <div
      className={cn(
        !isStatic && "absolute top-1/2 -translate-y-1/2 z-20",
        !isStatic && (isPrev ? "left-4" : "right-4"),
      )}
    >
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
          isPrev
            ? "bg-white border border-gray-100 text-[#0b2677] hover:bg-[#0b2677] hover:text-white"
            : "bg-[#0b2677] text-white hover:bg-[#0b2677]/90",
        )}
      >
        <Icon className="w-5 h-5" />
      </motion.button>
    </div>
  );
}
