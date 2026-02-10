"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { stats, smoothTransition, staggerDelay } from "./introData";
import { StatItem } from "./StatItem";

export function IntroStats({ isInView }) {
  // Duplicating stats for a seamless infinite loop in the marquee
  const doubleStats = [...stats, ...stats];

  return (
    <div className="w-full">
      {/* Desktop View: Fixed flex layout */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ ...smoothTransition, delay: staggerDelay * 4 }}
        className="hidden lg:flex flex-nowrap items-center justify-center gap-x-14 pt-16 mt-20 max-w-7xl mx-auto w-full"
      >
        {stats.map((stat, index) => (
          <React.Fragment key={stat.label}>
            <div className="flex-none flex justify-start">
              <StatItem stat={stat} index={index} isInView={isInView} />
            </div>
            {index < stats.length - 1 && (
              <div className="w-[2.5px] h-24 bg-gradient-to-b from-transparent via-gray-300 to-transparent flex-shrink-0" />
            )}
          </React.Fragment>
        ))}
      </motion.div>

      {/* Mobile View: Continuous Smooth Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        className="lg:hidden w-full pt-10 mt-12 overflow-hidden relative"
      >
        {/* Subtle Horizontal Gradients for smooth fade at edges */}
        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex w-[200%] gap-16">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              duration: 30, // Adjust for travel speed
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex items-center gap-16 pr-16"
          >
            {/* First Set of Stats */}
            {stats.map((stat, index) => (
              <div
                key={`set1-${index}`}
                className="flex-none min-w-[180px] flex justify-center"
              >
                <StatItem stat={stat} index={index} isInView={isInView} />
              </div>
            ))}
            {/* Second Set of Stats (Clone) */}
            {stats.map((stat, index) => (
              <div
                key={`set2-${index}`}
                className="flex-none min-w-[180px] flex justify-center"
              >
                <StatItem stat={stat} index={index} isInView={isInView} />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
