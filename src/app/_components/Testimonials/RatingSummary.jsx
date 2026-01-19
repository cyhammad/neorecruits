"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { smoothTransition, staggerDelay } from "./testimonialsData";

export function RatingSummary({ isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ ...smoothTransition, delay: staggerDelay * 5.5 }}
      className="flex items-center gap-3 p-3 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-100/50 shadow-sm w-fit"
    >
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-yellow-400 text-yellow-400 drop-shadow-sm"
          />
        ))}
      </div>
      <div className="h-4 w-px bg-gray-300" />
      <div className="flex items-baseline gap-1">
        <span className="font-bold text-[#0b2677] text-base">5.0</span>
        <span className="text-[#0b2677]/60 text-xs font-medium">
          (4 reviews)
        </span>
      </div>
    </motion.div>
  );
}
