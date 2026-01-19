"use client";

import { motion } from "framer-motion";
import { smoothTransition, staggerDelay } from "./processData";

export function ProcessStep({ step, index, isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{
        ...smoothTransition,
        delay: staggerDelay * (1.5 + index * 0.3),
      }}
      className="group flex flex-col items-center space-y-5 sm:space-y-6 md:space-y-8"
    >
      <motion.div
        initial={{ scale: 0.8, rotate: -10 }}
        animate={
          isInView ? { scale: 1, rotate: 0 } : { scale: 0.8, rotate: -10 }
        }
        transition={{
          ...smoothTransition,
          delay: staggerDelay * (2 + index * 0.3),
        }}
        className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center"
      >
        <div
          className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors duration-500"
          style={{
            clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
          }}
        />
        <step.icon className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-[#539ce0] relative z-10 transition-transform duration-500 group-hover:scale-110" />
      </motion.div>

      <div className="space-y-3 sm:space-y-4">
        <h3 className="text-white tracking-widest text-sm sm:text-base font-bold">
          {step.title}
        </h3>
        <p className="text-white/60 leading-relaxed px-2 sm:px-4 text-sm sm:text-base">
          {step.description}
        </p>
        <div className="inline-block px-2 sm:px-3 py-1 rounded-full bg-[#539ce0]/10 border border-[#539ce0]/20 text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.15em] sm:tracking-[0.2em] text-[#539ce0]">
          Turnaround: {step.timeline}
        </div>
      </div>
    </motion.div>
  );
}
