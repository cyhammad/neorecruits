"use client";
import Image from "next/image";
import { motion } from "framer-motion";

// Memoized transition configurations with const assertions
const straightSlowTransition = {
  duration: 1.2,
  ease: [0.22, 1, 0.36, 1],
}

const foregroundTransition = {
  duration: 1.2,
  ease: [0.22, 1, 0.36, 1],
  delay: 0.2,
}

// Shared viewport configuration
const viewportConfig = {
  once: false,
  amount: 0.3,
  margin: "-10% 0px",
}

// Initial animation states with const assertions
const backgroundInitial = {
  opacity: 0,
  x: -50,
}

const backgroundAnimate = {
  opacity: 1,
  x: 0,
}

const foregroundInitial = {
  opacity: 0,
  y: 50,
}

const foregroundAnimate = {
  opacity: 1,
  y: 0,
}

// Extracted class strings for better minification
const baseImageClasses = "rounded-xl overflow-hidden transform-gpu will-change-transform"
const overlayClasses = "absolute inset-0 bg-[#0b2677]/20 pointer-events-none"
const imageCoverClasses = "object-cover"

// Image sizing constants
const bgSizes = "(max-width: 768px) 70vw, 50vw"
const fgSizes = "(max-width: 768px) 75vw, 60vw"

export function IntroImages() {
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
          src="/hero-3.png"
          alt="Infrastructure"
          fill
          sizes={bgSizes}
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
          src="/intro-experience.png"
          alt="Teamwork"
          fill
          sizes={fgSizes}
          className={imageCoverClasses}
        />
      </motion.div>
    </div>
  );
}