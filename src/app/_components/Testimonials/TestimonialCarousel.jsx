"use client";

import * as React from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { TestimonialCard } from "./TestimonialCard";
import { NavButton } from "./NavButton";
import { CarouselPagination } from "./CarouselPagination";
import {
  testimonials,
  smoothTransition,
  staggerDelay,
} from "./testimonialsData";

export function TestimonialCarousel({ isInView }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const scrollPrev = React.useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = React.useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  React.useEffect(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", () =>
      setSelectedIndex(emblaApi.selectedScrollSnap()),
    );
  }, [emblaApi]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
      transition={{ ...smoothTransition, delay: staggerDelay * 1.5 }}
      className="lg:col-span-7 relative group"
    >
      <div className="overflow-hidden -m-4 p-4 sm:-m-10 sm:p-10" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((item, index) => (
            <div key={item.id} className="flex-[0_0_100%] min-w-0 px-2 sm:px-4">
              <TestimonialCard
                item={item}
                index={index}
                selectedIndex={selectedIndex}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center lg:justify-between mt-6">
        <div className="hidden lg:flex gap-2">
          <NavButton direction="prev" onClick={scrollPrev} isStatic />
          <NavButton direction="next" onClick={scrollNext} isStatic />
        </div>
        <CarouselPagination
          testimonials={testimonials}
          selectedIndex={selectedIndex}
          emblaApi={emblaApi}
        />
      </div>
    </motion.div>
  );
}
