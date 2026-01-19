"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { smoothTransition } from "./testimonialsData";

export function Rating({ rating, isActive }) {
  return (
    <motion.div
      initial={false}
      animate={
        isActive
          ? { opacity: 1, scale: 1, y: 0 }
          : { opacity: 0.4, scale: 0.85, y: 5 }
      }
      transition={{ ...smoothTransition, delay: isActive ? 0.5 : 0 }}
      className="flex gap-1.5 sm:gap-2 justify-center items-center pt-3 sm:pt-4"
    >
      {[...Array(rating)].map((_, i) => (
        <Star
          key={i}
          className="w-5 h-5 sm:w-6 sm:h-6 fill-[#9a01cd] text-[#9a01cd]"
        />
      ))}
    </motion.div>
  );
}
