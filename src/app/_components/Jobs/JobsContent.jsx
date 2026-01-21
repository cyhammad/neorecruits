"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { smoothTransition, staggerDelay } from "./jobsData";

const glideTransition = {
  duration: 1.2,
  ease: [0.22, 1, 0.36, 1],
};

const staggerConfig = {
  staggerChildren: 0.2,
  delayChildren: 0.1,
};

const viewportConfig = {
  once: false,
  amount: 0.1,
};

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

const arrowBaseClasses =
  "w-4 h-4 absolute transition-all duration-400 ease-[0.2,1,0.3,1]";
const transformGpu = "transform-gpu";

export function JobsContent() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={containerVariants}
      className="space-y-4 sm:space-y-6 will-change-transform"
    >
      <motion.h2
        variants={itemVariants}
        className={`tracking-tight text-[#0b2677] leading-tight text-xl sm:text-2xl md:text-3xl lg:text-[22pt] ${transformGpu}`}
      >
        Ready for your next <br className="hidden sm:block" /> opportunity?
      </motion.h2>

      <motion.div
        variants={itemVariants}
        className={`space-y-3 sm:space-y-4 text-[#0b2677]/70 leading-relaxed text-sm sm:text-base ${transformGpu}`}
      >
        <p>
          NeoRecruits connects talented professionals with top employers across
          the GCC and beyond. Whether you're seeking permanent roles, contract
          work, or project-based assignments — we're here to help you succeed.
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className={`pt-2 ${transformGpu}`}>
        <Button
          className="h-11 sm:h-12 px-8 rounded-lg bg-[#9A01CD] border-none text-[10px] sm:text-xs font-bold tracking-[0.15em] uppercase w-full sm:w-auto group overflow-hidden relative transition-all duration-200 active:scale-[0.96] shadow-2xl shadow-[#9a01cd]/30 hover:shadow-white/20"
          asChild
        >
          <Link
            href="/jobs"
            className="flex items-center justify-center gap-3 relative z-10"
          >
            {/* High-Speed Radial Layer */}
            <span className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none">
              <span className="w-0 h-0 bg-[#0b2677] rounded-full transition-all duration-500 ease-[0.16,1,0.3,1] group-hover:w-[400%] group-hover:pb-[400%]" />
            </span>

            {/* Text */}
            <span className="relative z-20 transition-colors duration-300 group-hover:text-white">
              View All Job Openings
            </span>

            <div className="relative z-20 w-5 h-5 overflow-hidden flex items-center justify-center">
              <ArrowRight
                className={`${arrowBaseClasses} group-hover:translate-x-10 group-hover:opacity-0 text-white transition-all duration-500 ease-[0.2,1,0.3,1]`}
              />
              <ArrowRight
                className={`${arrowBaseClasses} -translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 text-white transition-all duration-500 ease-[0.2,1,0.3,1]`}
              />
            </div>
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );
}
