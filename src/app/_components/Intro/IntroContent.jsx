"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Memoized transition configurations with const assertions
const glideTransition = {
  duration: 1.2,
  ease: [0.22, 1, 0.36, 1],
};

const staggerConfig = {
  staggerChildren: 0.2,
  delayChildren: 0.1,
};

// Memoized viewport configuration
const viewportConfig = {
  once: false,
  amount: 0.3,
  margin: "-10% 0px",
};

// Optimized animation variants with const assertions
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: staggerConfig,
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: glideTransition,
  },
};

// Extracted class strings for better minification
const arrowBaseClasses =
  "w-4 h-4 absolute transition-all duration-400 ease-[0.2,1,0.3,1]";
const transformGpu = "transform-gpu";

export function IntroContent() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={containerVariants}
      className="space-y-4 sm:space-y-6 will-change-transform"
    >
      {/* STEP 1: Heading */}
      <motion.h2
        variants={itemVariants}
        className={`tracking-tight text-white leading-tight text-xl sm:text-2xl md:text-3xl lg:text-[22pt] ${transformGpu}`}
      >
        We build leading edge infrastructure within your organisation
      </motion.h2>

      {/* STEP 2: Text Body */}
      <motion.div
        variants={itemVariants}
        className={`space-y-3 sm:space-y-4 text-white/70 leading-relaxed text-sm sm:text-base ${transformGpu}`}
      >
        <p>
          NeoRecruits is considered the best recruitment agency in the region
          that provides a comprehensive range of solutions to deliver optimum
          business performance.
        </p>
        <p>
          Trusted by global brands and industry giants, NeoRecruits operates
          across 40 countries, bringing local expertise on a global scale.
        </p>
      </motion.div>

      {/* STEP 3: Button */}
      <motion.div variants={itemVariants} className={`pt-2 ${transformGpu}`}>
        <Link
          href="/about"
          className="group relative h-11 sm:h-12 w-fit px-8 rounded-lg bg-white text-black border-none flex items-center gap-3 overflow-hidden transition-all text-[10px] sm:text-xs font-bold tracking-[0.15em] uppercase shadow-2xl shadow-[#9a01cd]/20 active:scale-95"
        >
          {/* Fast Radial Expansion */}
          <span className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
            <span className="w-0 h-0 bg-[#9A01CD] rounded-full transition-all duration-400 ease-[0.16,1,0.3,1] group-hover:w-[400%] group-hover:pb-[400%]" />
          </span>

          <span className="relative z-20 transition-colors duration-300 group-hover:text-white">
            Learn More
          </span>

          <div className="relative w-5 h-5 overflow-hidden flex items-center justify-center z-20">
            <ArrowRight
              className={`${arrowBaseClasses} group-hover:translate-x-10 group-hover:opacity-0 group-hover:text-white`}
            />
            <ArrowRight
              className={`${arrowBaseClasses} -translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 text-white`}
            />
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
}
