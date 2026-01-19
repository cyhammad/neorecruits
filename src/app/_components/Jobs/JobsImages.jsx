"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { smoothTransition, staggerDelay } from "./jobsData";

export function JobsImages({ isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
      transition={{ ...smoothTransition, delay: staggerDelay * 0 }}
      className="relative h-[320px] sm:h-[380px] md:h-[450px] w-full order-2 lg:order-1"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
        }
        transition={{ ...smoothTransition, delay: staggerDelay * 0.5 }}
        className="absolute top-0 left-0 w-[75%] sm:w-[80%] h-[220px] sm:h-[270px] md:h-[320px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl z-0"
      >
        <Image
          src="/job-man.png"
          alt="Professional walking"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0b2677]/10" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={
          isInView
            ? { opacity: 1, scale: 1, y: 0 }
            : { opacity: 0, scale: 0.9, y: 40 }
        }
        transition={{ ...smoothTransition, delay: staggerDelay * 1 }}
        className="absolute bottom-0 right-0 w-[70%] sm:w-[75%] h-[180px] sm:h-[230px] md:h-[280px] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border-4 sm:border-8 border-white z-10"
      >
        <Image
          src="/job-office.png"
          alt="Office team"
          fill
          className="object-cover"
        />
      </motion.div>
    </motion.div>
  );
}
