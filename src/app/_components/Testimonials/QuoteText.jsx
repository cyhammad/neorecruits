"use client";

import { motion } from "framer-motion";
import { smoothTransition } from "./testimonialsData";

export function QuoteText({ content, isActive }) {
  return (
    <motion.p
      initial={false}
      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0.5, y: 10 }}
      transition={{ ...smoothTransition, delay: isActive ? 0.4 : 0 }}
      className="text-[#0b2677]/90 leading-relaxed font-medium text-base sm:text-lg md:text-xl italic text-center relative z-10 px-4"
    >
      <span className="text-2xl sm:text-3xl text-[#9a01cd]/30 font-serif mr-2 leading-none inline-block">
        "
      </span>
      {content}
      <span className="text-2xl sm:text-3xl text-[#9a01cd]/30 font-serif ml-2 leading-none inline-block">
        "
      </span>
    </motion.p>
  );
}
