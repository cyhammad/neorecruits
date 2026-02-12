"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { industries } from "./industriesData";
import { IndustryShowcaseCard } from "./IndustryShowcaseCard";

export function IndustriesShowcase() {
  return (
    <section className="py-20 sm:py-28 bg-[#fafafa] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#0b2677]/5 to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#9a01cd]/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0b2677] uppercase tracking-tighter leading-none">
              Strategic{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0b2677] to-[#9a01cd]">
                Sectors
              </span>
            </h2>
            <p className="text-[#0b2677]/60 text-lg sm:text-xl leading-relaxed font-medium">
              We operate at the intersection of industry expertise and
              recruitment innovation, delivering precision in every placement.
            </p>
          </div>

          {/* Desktop/Tablet Grid View */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 auto-rows-[minmax(400px,auto)]">
            {industries.map((ind, idx) => (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`${
                  idx === 0 || idx === 3 ? "lg:col-span-2" : "lg:col-span-1"
                }`}
              >
                <div className="h-full">
                  <IndustryShowcaseCard industry={ind} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Carousel View (Automatic Slider) */}
          <div className="md:hidden w-screen -mx-4 relative overflow-hidden group/marquee">
            <div className="flex w-max animate-marquee pause-on-active cursor-grab active:cursor-grabbing">
              {[...industries, ...industries].map((ind, idx) => (
                <div
                  key={`${ind.id}-${idx}`}
                  className="w-[320px] h-[450px] px-3 flex-none"
                >
                  <IndustryShowcaseCard industry={ind} />
                </div>
              ))}
            </div>

            {/* Hold to Pause Indicator */}
            <div className="flex justify-center mt-6">
              <span className="text-[10px] text-[#0b2677]/40 font-black uppercase tracking-[0.2em] animate-pulse">
                Hold to Pause
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
