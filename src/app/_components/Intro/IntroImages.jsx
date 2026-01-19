"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { smoothTransition, staggerDelay } from "./introData";

export function IntroImages({ isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
      transition={{ ...smoothTransition, delay: staggerDelay * 0 }}
      className="relative h-[300px] sm:h-[350px] md:h-[400px] w-full"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
        }
        transition={{ ...smoothTransition, delay: staggerDelay * 0.5 }}
        className="absolute top-0 left-0 w-[65%] sm:w-[70%] h-[200px] sm:h-[240px] md:h-[280px] rounded-xl overflow-hidden shadow-lg z-0"
      >
        <Image
          src="/hero-3.png"
          alt="Infrastructure"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0b2677]/20" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={
          isInView
            ? { opacity: 1, scale: 1, y: 0 }
            : { opacity: 0, scale: 0.9, y: 40 }
        }
        transition={{ ...smoothTransition, delay: staggerDelay * 1 }}
        className="absolute bottom-0 right-0 w-[70%] sm:w-[75%] h-[180px] sm:h-[220px] md:h-[260px] rounded-xl overflow-hidden shadow-2xl border-4 border-[#0b2677] z-10"
      >
        <Image
          src="/intro-experience.png"
          alt="Teamwork"
          fill
          className="object-cover"
        />
      </motion.div>
    </motion.div>
  );
}
