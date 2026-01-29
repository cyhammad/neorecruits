"use client";

import Link from "next/link";
import { ArrowRight as ArrowIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const glideTransition = {
  duration: 1.2,
  ease: [0.22, 1, 0.36, 1],
};

const staggerConfig = {
  staggerChildren: 0.2,
  delayChildren: 0.1,
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
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: glideTransition,
  },
};

export function IndustriesContent({ isInView }) {
  return (
    <motion.div
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="lg:col-span-4 flex flex-col justify-center space-y-4 sm:space-y-6 md:space-y-8 will-change-transform"
    >
      <motion.h2
        variants={itemVariants}
        className="tracking-tight text-[#0b2677] leading-tight text-xl sm:text-2xl md:text-3xl lg:text-[22pt] font-black uppercase transform-gpu"
      >
        Industry Expertise
      </motion.h2>

      <motion.div
        variants={itemVariants}
        className="space-y-4 sm:space-y-6 text-[#0b2677]/70 leading-relaxed text-sm sm:text-[13px] md:text-[14px] transform-gpu"
      >
        <p>
          NeoRecruits believes in employing the best. We are the best
          recruitment agency in the region, consisting of a team of dedicated
          professionals, each with their own skillset and extensive experience.
        </p>
        <p>
          Using a unique balance of tradition and technology, we blend personal,
          face-to-face interaction with the latest technology tools and trends
          to ensure the happiness and well-being of our stakeholders.
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="pt-2 transform-gpu">
        <Button
          className="h-11 sm:h-12 px-8 rounded-lg bg-[#9a01cd] border-none text-[11px] font-bold tracking-[0.15em] uppercase w-full sm:w-auto group overflow-hidden relative transition-all duration-200 active:scale-[0.96] shadow-xl shadow-[#9a01cd]/20 hover:shadow-[#9a01cd]/10"
          asChild
        >
          <Link
            href="/services"
            className="flex items-center justify-center gap-2 relative z-10"
          >
            {/* High-Speed Radial Layer */}
            <span className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none">
              <span className="w-0 h-0 bg-[#0b2677] rounded-full transition-all duration-500 ease-[0.16,1,0.3,1] group-hover:w-[400%] group-hover:pb-[400%]" />
            </span>

            {/* Text */}
            <span className="relative text-white group-hover:text-white transition-colors duration-300 ease-out">
              Explore
            </span>

            <div className="relative w-5 h-5 overflow-hidden flex items-center justify-center">
              <ArrowIcon className="w-4 h-4 absolute text-white group-hover:text-white transition-all duration-500 ease-[0.2,1,0.3,1] group-hover:translate-x-10 group-hover:opacity-0" />
              <ArrowIcon className="w-4 h-4 absolute -translate-x-10 opacity-0 text-white transition-all duration-500 ease-[0.2,1,0.3,1] group-hover:translate-x-0 group-hover:opacity-100" />
            </div>
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );
}
