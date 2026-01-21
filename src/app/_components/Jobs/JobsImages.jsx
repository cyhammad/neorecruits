"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { smoothTransition, staggerDelay } from "./jobsData";

const straightSlowTransition = {
  duration: 1.2,
  ease: [0.22, 1, 0.36, 1],
};

const foregroundTransition = {
  duration: 1.2,
  ease: [0.22, 1, 0.36, 1],
  delay: 0.2,
};

const viewportConfig = {
  once: false,
  amount: 0.1,
};

const backgroundInitial = {
  opacity: 0,
  x: -50,
};

const backgroundAnimate = {
  opacity: 1,
  x: 0,
};

const foregroundInitial = {
  opacity: 0,
  y: 50,
};

const foregroundAnimate = {
  opacity: 1,
  y: 0,
};

const baseImageClasses =
  "rounded-xl overflow-hidden transform-gpu will-change-transform";
const overlayClasses = "absolute inset-0 bg-[#0b2677]/20 pointer-events-none";
const imageCoverClasses = "object-cover";

export function JobsImages() {
  return (
    <div className="relative h-[300px] sm:h-[350px] md:h-[400px] w-full">
      {/* Background Image */}
      <motion.div
        initial={backgroundInitial}
        whileInView={backgroundAnimate}
        viewport={viewportConfig}
        transition={straightSlowTransition}
        className={`absolute top-0 left-0 w-[65%] sm:w-[70%] h-[200px] sm:h-[240px] md:h-[280px] ${baseImageClasses} shadow-lg z-0`}
      >
        <Image
          src="/job-man.png"
          alt="Professional walking"
          fill
          className={imageCoverClasses}
          priority
        />
        <div className={overlayClasses} />
      </motion.div>

      {/* Foreground Image */}
      <motion.div
        initial={foregroundInitial}
        whileInView={foregroundAnimate}
        viewport={viewportConfig}
        transition={foregroundTransition}
        className={`absolute bottom-0 right-0 w-[70%] sm:w-[75%] h-[180px] sm:h-[220px] md:h-[260px] ${baseImageClasses} shadow-2xl z-10`}
      >
        <Image
          src="/job-office.png"
          alt="Office team"
          fill
          className={imageCoverClasses}
        />
      </motion.div>
    </div>
  );
}
