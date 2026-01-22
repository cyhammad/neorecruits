"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { smoothTransition, staggerDelay } from "./introData";

export function StatItem({ stat, index, isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        ...smoothTransition,
        delay: staggerDelay * (4 + index * 0.5),
      }}
      className="flex items-center gap-4 sm:gap-6 group"
    >
      <div className="flex-shrink-0">
        <stat.icon
          className={cn(
            "w-8 h-8 sm:w-10 sm:h-10 opacity-80 group-hover:opacity-100 transition-opacity stroke-[1.2]",
            stat.color,
          )}
        />
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0b2677] leading-none mb-1">
          {stat.value}
        </span>
        <span className="text-[10px] sm:text-[12px] font-bold text-gray-500 uppercase tracking-[0.18em] whitespace-nowrap group-hover:text-gray-700 transition-colors">
          {stat.label}
        </span>
      </div>
    </motion.div>
  );
}
