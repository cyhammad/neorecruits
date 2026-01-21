"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { smoothTransition, staggerDelay } from "./heroData";

export function HeroContent({ slide }) {
  return (
    <motion.div
      key={slide.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl space-y-4 sm:space-y-5 md:space-y-6"
    >
      <motion.h1
        initial={slide.animation.title.initial}
        animate={slide.animation.title.animate}
        transition={{ ...smoothTransition, delay: staggerDelay * 1 }}
        className="tracking-tight text-white leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[34pt]"
      >
        {slide.title}
      </motion.h1>

      <motion.p
        initial={slide.animation.subtitle.initial}
        animate={slide.animation.subtitle.animate}
        transition={{ ...smoothTransition, delay: staggerDelay * 2 }}
        className="text-white/70 max-w-2xl leading-relaxed text-sm sm:text-base md:text-lg"
      >
        {slide.subtitle}
      </motion.p>

      <motion.div
        initial={slide.animation.buttons.initial}
        animate={slide.animation.buttons.animate}
        transition={{ ...smoothTransition, delay: staggerDelay * 3 }}
        className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4"
      >
        <Button
          className="h-11 sm:h-12 px-6 sm:px-4 rounded-lg bg-[#9A01CD] border-none text-[10px] sm:text-xs font-bold tracking-[0.15em] uppercase w-full sm:w-auto group overflow-hidden relative transition-all duration-200 active:scale-[0.96] shadow-2xl shadow-[#9a01cd]/30 hover:shadow-white/20"
          asChild
        >
          <Link
            href={slide.cta.href}
            className="flex items-center justify-center gap-2 relative z-10"
          >
            {/* High-Speed Radial Layer - Now White */}
            <span className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none">
              <span className="w-0 h-0 bg-white rounded-full transition-all duration-500 ease-[0.16,1,0.3,1] group-hover:w-[350%] group-hover:pb-[350%]" />
            </span>

            {/* Text - Responsive color shift: White to Primary */}
            <span className="relative z-20 top-[0.5px] text-white group-hover:text-primary transition-colors duration-300 ease-out">
              {slide.cta.text}
            </span>

            <div className="relative z-20 w-5 h-5 overflow-hidden flex items-center justify-center">
              {/* High-Velocity Arrow Animation: White to Primary */}
              <ArrowRight className="w-4 h-4 absolute text-white group-hover:text-primary transition-all duration-500 ease-[0.2,1,0.3,1] group-hover:translate-x-10 group-hover:opacity-0" />
              <ArrowRight className="w-4 h-4 absolute -translate-x-10 opacity-0 text-primary transition-all duration-500 ease-[0.2,1,0.3,1] group-hover:translate-x-0 group-hover:opacity-100" />
            </div>
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );
}
