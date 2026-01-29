"use client";

import { motion } from "framer-motion";
import { AvatarsRow } from "./AvatarsRow";
import { RatingSummary } from "./RatingSummary";
import { smoothTransition, staggerDelay } from "./testimonialsData";

export function TestimonialStatic({ isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ ...smoothTransition, delay: staggerDelay * 1 }}
      className="lg:col-span-5 space-y-4"
    >
      <div className="space-y-1">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ ...smoothTransition, delay: staggerDelay * 2 }}
          className="text-[#9a01cd] text-[10px] font-black uppercase tracking-[0.2em]"
        >
          Social Proof
        </motion.p>
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ ...smoothTransition, delay: staggerDelay * 3 }}
          className="text-[#0b2677] text-2xl sm:text-3xl font-black uppercase tracking-tight leading-none"
        >
          What They <span className="text-gray-300">Say.</span>
        </motion.h3>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ ...smoothTransition, delay: staggerDelay * 4 }}
        className="text-[#0b2677]/60 leading-relaxed max-w-sm text-sm font-medium"
      >
        NeoRecruits is the preferred partner for global brands seeking top tier
        talent solutions. Here's why our clients trust us.
      </motion.p>

      <div className="pt-2 space-y-6">
        <RatingSummary isInView={isInView} />
        <AvatarsRow isInView={isInView} />
      </div>
    </motion.div>
  );
}
