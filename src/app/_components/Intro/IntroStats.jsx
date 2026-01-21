"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { stats, smoothTransition, staggerDelay } from "./introData";
import { StatItem } from "./StatItem";

export function IntroStats({ isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ ...smoothTransition, delay: staggerDelay * 4 }}
      className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-y-10 gap-x-10 lg:gap-x-14 pt-10 sm:pt-16 mt-12 sm:mt-20 max-w-7xl mx-auto w-full"
    >
      {stats.map((stat, index) => (
        <React.Fragment key={stat.label}>
          <div className="lg:flex-none flex justify-center lg:justify-start">
            <StatItem stat={stat} index={index} isInView={isInView} />
          </div>
          {index < stats.length - 1 && (
            <div className="hidden lg:block w-[2.5px] h-24 bg-gradient-to-b from-transparent via-white/30 to-transparent flex-shrink-0" />
          )}
        </React.Fragment>
      ))}
    </motion.div>
  );
}
