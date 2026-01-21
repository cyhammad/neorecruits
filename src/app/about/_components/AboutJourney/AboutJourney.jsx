"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function AboutJourney() {
  return (
    <section className="relative w-full bg-white overflow-hidden pb-16 sm:pb-24 md:pb-32">
      {/* 1. FULL WIDTH BLUE BAR */}
      <div className="absolute top-0 inset-x-0 h-[320px] sm:h-[420px] lg:h-[480px] bg-[#0b2677] z-0">
        <div
          className="absolute inset-0 opacity-10 bg-repeat mix-blend-overlay"
          style={{
            backgroundImage: 'url("/journey-pattern.png")',
            backgroundSize: "400px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        {/* 2. MISSION GRID (TOP) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="hidden lg:block h-[320px] sm:h-[420px] lg:h-[480px]" />
          <div className="h-[320px] sm:h-[420px] lg:h-[480px] flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#9a01cd]" />
                <span className="text-white/60 font-bold tracking-[0.3em] uppercase text-xs">
                  Leadership Vision
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase">
                Our Mission
              </h2>
              <div className="w-full max-w-xl">
                <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-semibold">
                  Our mission is to empower clients to enhance productivity with
                  their talent acquisition strategies. We are dedicated to
                  delivering efficient, cost-effective, and adaptable solutions
                  that adhere to industry best practices.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 3. JOURNEY & OVERLAP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 relative">
          {/* Left: Overlapping Image */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="lg:absolute lg:top-0 lg:left-0 lg:w-full lg:-translate-y-1/2 aspect-square sm:aspect-[4/3] lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.3)] z-20"
            >
              <Image
                src="/journey-main.png"
                alt="Our Journey"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Right: Journey Content */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="pt-10"
          >
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-5"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-[2px] bg-[#9a01cd]" />
                  <span className="text-[#9a01cd] font-bold tracking-[0.2em] uppercase text-xs sm:text-sm">
                    The Story
                  </span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-black text-[#0b2677] uppercase">
                  Our Journey
                </h2>
              </motion.div>

              <div className="space-y-8 text-[#0b2677]/80 text-base sm:text-lg lg:text-xl leading-relaxed font-medium max-w-2xl">
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="first-letter:text-4xl first-letter:font-black first-letter:text-[#9a01cd] first-letter:mr-1 first-letter:float-left first-line:uppercase first-line:tracking-tight first-line:text-[#0b2677]"
                >
                  NeoRecruits strives to be the partner of choice today to
                  enhance the business performance of tomorrow through elite
                  talent acquisition and strategic leadership solutions.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="border-l-4 border-[#0b2677]/5 pl-6 italic text-[#0b2677]/70"
                >
                  Since our inception, we have evolved from a specialized
                  boutique firm into a global recruitment powerhouse, serving
                  Fortune 500 companies and government entities across 40+
                  countries.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  Our journey is defined by our unwavering commitment to
                  excellence and our passion for human potential, ensuring we
                  bridge the gap between vision and reality.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
