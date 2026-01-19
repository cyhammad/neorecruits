"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { smoothTransition, staggerDelay } from "./introData";

export function IntroContent({ isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
      transition={{ ...smoothTransition, delay: staggerDelay * 0 }}
      className="space-y-4 sm:space-y-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ ...smoothTransition, delay: staggerDelay * 1 }}
        className="tracking-tight text-white leading-tight text-xl sm:text-2xl md:text-3xl lg:text-[22pt]"
      >
        We build leading edge infrastructure within your organisation
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ ...smoothTransition, delay: staggerDelay * 2 }}
        className="space-y-3 sm:space-y-4 text-white/70 leading-relaxed text-sm sm:text-base"
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ ...smoothTransition, delay: staggerDelay * 3 }}
        className="pt-2"
      >
        <Link
          href="/about"
          className="group h-11 sm:h-12 w-fit px-5 sm:px-6 rounded-lg bg-white text-black hover:bg-white/90 border-none flex items-center gap-3 transition-all text-xs font-bold tracking-widest uppercase shadow-lg"
        >
          Learn More
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </motion.div>
  );
}
