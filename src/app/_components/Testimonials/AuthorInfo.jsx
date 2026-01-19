"use client";

import { motion } from "framer-motion";
import { smoothTransition } from "./testimonialsData";

export function AuthorInfo({ author, company, isActive }) {
  return (
    <motion.div
      initial={false}
      animate={
        isActive
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0.5, y: 15, scale: 0.95 }
      }
      transition={{ ...smoothTransition, delay: isActive ? 0.7 : 0 }}
      className="pt-4 sm:pt-6 border-t border-gray-100/50 mt-4 sm:mt-6 relative"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-px bg-linear-to-r from-transparent via-[#9a01cd]/30 to-transparent" />
      <div className="flex flex-col items-center gap-1.5 sm:gap-2 relative z-10">
        <h4 className="text-[#0b2677] font-bold text-base sm:text-lg tracking-tight group-hover:text-[#9a01cd] transition-colors duration-300">
          {author}
        </h4>
        <p className="text-[#0b2677]/60 text-xs sm:text-sm font-medium">
          {company}
        </p>
      </div>
    </motion.div>
  );
}
