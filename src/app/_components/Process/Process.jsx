"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { steps, smoothTransition, staggerDelay } from "./processData";

export function Process() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section
      ref={ref}
      id="how-we-work"
      className="py-20 sm:py-28 md:py-36 bg-[#0b2677] overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-10 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-28">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={smoothTransition}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight"
          >
            How We Work
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "80px" } : { width: 0 }}
            transition={{ ...smoothTransition, delay: 0.3 }}
            className="h-1.5 bg-[#9a01cd] mx-auto mt-6 rounded-full"
          />
        </div>

        {/* Steps Flow */}
        <div className="relative">
          {/* Horizontal Connector Line */}
          <div className="absolute top-10 left-[12%] right-[12%] h-[1px] bg-sky-200/20 hidden lg:block" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{
                  ...smoothTransition,
                  delay: staggerDelay * index,
                }}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon Circle */}
                <div className="relative mb-8">
                  <div
                    className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-lg shadow-[#9a01cd]/20 group-hover:shadow-[#9a01cd]/40`}
                  >
                    <step.icon className="w-8 h-8 text-white stroke-[2.5px]" />
                  </div>
                </div>

                {/* Content */}
                <div className="max-w-[240px] px-2 min-h-[60px] flex items-start justify-center">
                  <p className="text-white/90 text-sm sm:text-base font-bold leading-relaxed">
                    {step.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
