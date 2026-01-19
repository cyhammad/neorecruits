"use client";

import { motion } from "framer-motion";
import { smoothTransition } from "./locationsData";

export function LocationsHeader({ isInView }) {
  return (
    <div className="absolute top-0 left-0 right-0 z-20 pt-8 sm:pt-12 md:pt-16 px-4 sm:px-6 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={smoothTransition}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center sm:text-left">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ ...smoothTransition, delay: 0.1 }}
            className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-[#9a01cd] mb-2"
          >
            Our Locations
          </motion.p>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ ...smoothTransition, delay: 0.2 }}
            className="tracking-tight text-white leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3"
          >
            Where to find us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ ...smoothTransition, delay: 0.3 }}
            className="text-white/60 leading-relaxed text-sm sm:text-base max-w-xl font-medium"
          >
            Hover over the glowing markers to explore our global offices
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
