"use client";

import * as React from "react";
import { useInView, motion } from "framer-motion";
import { TestimonialStatic } from "./TestimonialStatic";
import { TestimonialCarousel } from "./TestimonialCarousel";
import { smoothTransition, staggerDelay } from "./testimonialsData";

export function Testimonials() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="py-12 sm:py-16 md:py-24 bg-[#f4f4f4] overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
          transition={{ ...smoothTransition, delay: staggerDelay * 0 }}
          className="text-center mb-10 sm:mb-16 md:mb-20"
        >
          <h2 className="text-[#0b2677] tracking-tight leading-tight text-xl sm:text-2xl md:text-3xl lg:text-[22pt]">
            What Our Clients Say About Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start lg:items-center">
          <TestimonialStatic isInView={isInView} />
          <TestimonialCarousel isInView={isInView} />
        </div>
      </div>
    </section>
  );
}
