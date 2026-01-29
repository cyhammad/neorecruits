"use client";

import * as React from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { industries, smoothTransition, staggerDelay } from "./industriesData";
import { NavButton } from "./NavButton";
import { IndustryCard } from "./IndustryCard";

export function IndustriesCarousel({ isInView }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = React.useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = React.useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
      transition={{ ...smoothTransition, delay: staggerDelay * 1 }}
      className="lg:col-span-8 flex flex-col gap-6 sm:gap-8"
    >
      <div className="flex justify-end gap-3 mb-2">
        <NavButton direction="prev" onClick={scrollPrev} />
        <NavButton direction="next" onClick={scrollNext} />
      </div>

      <div
        ref={emblaRef}
        className="overflow-hidden cursor-grab active:cursor-grabbing"
      >
        <div className="flex -ml-4 sm:-ml-6 touch-pan-y">
          {industries.map((industry, index) => (
            <IndustryCard
              key={industry.id}
              industry={industry}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
