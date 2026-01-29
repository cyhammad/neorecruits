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
      className="py-8 sm:py-12 md:py-16 bg-[#fafafa] overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ ...smoothTransition, delay: staggerDelay * 0 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-[#0b2677] tracking-tighter leading-none text-2xl sm:text-3xl md:text-4xl font-black uppercase">
            What Our Clients Say
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
