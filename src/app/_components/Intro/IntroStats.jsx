"use client";

import { motion } from "framer-motion";
import { stats, smoothTransition, staggerDelay } from "./introData";
import { StatItem } from "./StatItem";

export function IntroStats({ isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ ...smoothTransition, delay: staggerDelay * 4 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 sm:pt-12 border-t border-white/5 mt-8 sm:mt-12 max-w-7xl mx-auto place-items-center"
    >
      {stats.map((stat, index) => (
        <StatItem
          key={stat.label}
          stat={stat}
          index={index}
          isInView={isInView}
        />
      ))}
    </motion.div>
  );
}
