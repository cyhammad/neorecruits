"use client";

import * as React from "react";
import { motion } from "framer-motion";

export function IndustriesHero() {
  return (
    <section className="relative pt-24 sm:pt-28 h-[65vh] min-h-[550px] w-full flex flex-col overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{ backgroundImage: 'url("/hero-2-v2.png")' }}
      >
        <div className="absolute inset-0 bg-[#0b2677]/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b2677]/40 via-transparent to-[#0b2677]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-10 relative z-10 flex-1 flex flex-col pt-24 pb-12">
        <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center">
          <div className="max-w-4xl space-y-4 sm:space-y-6 mb-12">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white uppercase leading-none"
            >
              Industries
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl font-medium"
            >
              Specialized recruitment solutions across diverse industries,
              connecting elite talent with sector-leading organizations.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
