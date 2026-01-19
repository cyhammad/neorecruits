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
      className="space-y-1 group text-center sm:text-left"
    >
      <div className="flex items-center gap-2 mb-1 justify-center sm:justify-start">
        <stat.icon
          className={cn(
            "w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity",
            stat.color,
          )}
        />
        <span className="text-xl sm:text-2xl font-bold tracking-tighter text-white">
          {stat.value}
        </span>
      </div>
      <div className="text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-[0.15em] group-hover:text-white/60 transition-colors">
        {stat.label}
      </div>
    </motion.div>
  );
}
