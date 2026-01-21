"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { ProcessStep } from "./ProcessStep";
import { steps, smoothTransition, staggerDelay } from "./processData";

export function Process() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="relative py-12 sm:py-16 md:py-24 bg-[#0b2677] overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10 text-center max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
          transition={{ ...smoothTransition, delay: staggerDelay * 0 }}
          className="space-y-3 sm:space-y-4 mb-10 sm:mb-16 md:mb-20"
        >
          <h2 className="tracking-tight text-white leading-tight text-xl sm:text-2xl md:text-3xl lg:text-[22pt]">
            Industry Expertise
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "100%" } : { width: 0 }}
            transition={{ ...smoothTransition, delay: staggerDelay * 1 }}
            className="w-16 sm:w-20 h-1 sm:h-1.5 bg-[#9a01cd] mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8">
          {steps.map((step, index) => (
            <ProcessStep
              key={step.id}
              step={step}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
