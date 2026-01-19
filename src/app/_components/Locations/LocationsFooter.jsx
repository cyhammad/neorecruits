"use client";

import { motion } from "framer-motion";
import { smoothTransition, offices } from "./locationsData";

export function LocationsFooter({ isInView }) {
  return (
    <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 z-10 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ ...smoothTransition, delay: 0.5 }}
          className="text-white/30 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em]"
        >
          NeoRecruits Global Footprint
        </motion.h3>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ ...smoothTransition, delay: 0.6 }}
          className="flex items-center gap-2 text-white/30 text-[10px] sm:text-xs"
        >
          <span className="w-2 h-2 rounded-full bg-[#9a01cd] animate-pulse" />
          <span>{offices.length} Offices Worldwide</span>
        </motion.div>
      </div>
    </div>
  );
}
