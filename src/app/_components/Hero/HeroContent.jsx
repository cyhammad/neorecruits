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
          className="h-11 sm:h-12 px-5 sm:px-6 rounded-lg shadow-2xl shadow-[#9a01cd]/30 bg-white hover:bg-gray-50 text-primary border-none text-xs font-bold tracking-widest uppercase w-full sm:w-auto"
          asChild
        >
          <Link href={slide.cta.href}>
            {slide.cta.text}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );
}
