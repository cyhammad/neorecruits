"use client";

import { motion } from "framer-motion";
import { smoothTransition } from "./testimonialsData";

export function AuthorInfo({ author, company, isActive }) {
  return (
    <motion.div
      initial={false}
      animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0.5, x: -10 }}
      transition={{ ...smoothTransition, delay: isActive ? 0.3 : 0 }}
      className="relative"
    >
      <div className="flex flex-col items-start gap-1 relative z-10">
        <h4 className="text-[#0b2677] font-black text-sm sm:text-base tracking-tight  transition-colors duration-300">
          {author}
        </h4>
        <p className="text-[#9a01cd] text-[10px] font-black uppercase tracking-widest opacity-60">
          {company}
        </p>
      </div>
    </motion.div>
  );
}
