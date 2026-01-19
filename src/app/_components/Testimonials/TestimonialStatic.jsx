"use client";

import { motion } from "framer-motion";
import { AvatarsRow } from "./AvatarsRow";
import { RatingSummary } from "./RatingSummary";
import { smoothTransition, staggerDelay } from "./testimonialsData";

export function TestimonialStatic({ isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
      transition={{ ...smoothTransition, delay: staggerDelay * 1 }}
      className="lg:col-span-5 space-y-4 sm:space-y-6"
    >
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ ...smoothTransition, delay: staggerDelay * 2 }}
        className="text-[#0b2677] tracking-tight text-lg sm:text-xl md:text-2xl"
      >
        Their Words, Not Ours
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ ...smoothTransition, delay: staggerDelay * 3 }}
        className="text-[#0b2677]/70 leading-relaxed max-w-md text-sm sm:text-base"
      >
        NeoRecruits is trusted by government entities, global brands and local
        businesses to provide the best in talent solutions. But don't just take
        our word for it! Here's what some of our clients have to say.
      </motion.p>

      <div className="pt-2 space-y-4">
        <AvatarsRow isInView={isInView} />
        <RatingSummary isInView={isInView} />
      </div>
    </motion.div>
  );
}
