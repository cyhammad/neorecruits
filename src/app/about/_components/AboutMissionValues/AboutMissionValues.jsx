"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { values, alternatingSections } from "./missionData";

const glideTransition = {
  duration: 1.2,
  ease: [0.22, 1, 0.36, 1],
};

const staggerConfig = {
  staggerChildren: 0.2,
  delayChildren: 0.1,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: staggerConfig,
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: glideTransition,
  },
};

const textFadeVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: glideTransition,
  },
};

export function AboutMissionValues() {
  return (
    <div className="bg-white">
      {/* Core Values Section */}
      <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left Column: Content */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
                className="space-y-8 sm:space-y-12"
              >
                <div className="space-y-4">
                  <motion.h2
                    variants={itemVariants}
                    className="text-3xl sm:text-4xl md:text-[40px] font-black text-[#0b2677] uppercase tracking-tight"
                  >
                    Core Values
                  </motion.h2>
                  {/* Purple Wavy Line */}
                  <motion.div
                    variants={itemVariants}
                    className="relative h-6 w-48 sm:w-64"
                  >
                    <svg
                      width="256"
                      height="24"
                      viewBox="0 0 256 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                    >
                      <path
                        d="M0 12C30 12 45 4 75 4C105 4 120 20 150 20C180 20 195 12 225 12C235 12 245 9 252 4"
                        stroke="#9a01cd"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                  <motion.p
                    variants={itemVariants}
                    className="text-[#0b2677] font-medium text-sm sm:text-base opacity-80"
                  >
                    The Spirit of NeoRecruits
                  </motion.p>
                </div>

                <div className="space-y-6 sm:space-y-8">
                  {values.map((v, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      className="flex items-start gap-4 sm:gap-6 group"
                    >
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white shadow-md flex items-center justify-center group-hover:bg-[#9a01cd]/10 transition-colors duration-300">
                        <v.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#9a01cd]" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-base sm:text-lg font-black text-[#0b2677] uppercase tracking-tight">
                          {v.title}
                        </h4>
                        <p className="text-sm sm:text-base text-[#0b2677]/60 font-medium">
                          {v.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right Column: Overlapping Images */}
              <div className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="absolute top-0 right-0 w-[85%] h-[80%] rounded-[2rem] overflow-hidden shadow-2xl z-0"
                >
                  <Image
                    src="/mission-bg.png"
                    alt="Our Environment"
                    fill
                    sizes="(max-width: 1024px) 85vw, 600px"
                    className="object-cover"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.2,
                    delay: 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="absolute bottom-0 left-0 w-[85%] h-[65%] rounded-[2rem] overflow-hidden shadow-2xl z-10"
                >
                  <Image
                    src="/mission-fg.png"
                    alt="Our Culture"
                    fill
                    sizes="(max-width: 1024px) 85vw, 600px"
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternating Mission, Vision, Goals Sections */}
      {alternatingSections.map((section, index) => (
        <section
          key={index}
          className={`relative py-16 sm:py-24 overflow-hidden ${
            index % 2 === 1 ? "bg-gray-50" : "bg-white"
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6 md:px-10">
            <div className="max-w-7xl mx-auto">
              <div
                className={`flex flex-col ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center gap-12 lg:gap-20`}
              >
                {/* Content */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.4 }}
                  variants={textFadeVariants}
                  className="lg:w-1/2 space-y-6"
                >
                  <h3 className="text-3xl sm:text-4xl font-black text-[#0b2677] uppercase tracking-tight">
                    {section.title}
                  </h3>
                  <div className="w-16 h-1.5 bg-[#9a01cd] rounded-full" />
                  <p className="text-base sm:text-lg text-[#0b2677]/70 leading-relaxed font-medium">
                    {section.description}
                  </p>
                </motion.div>

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true, amount: 0.4 }}
                  className="lg:w-1/2 w-full"
                >
                  <div className="relative h-[300px] sm:h-[400px] md:h-[450px] w-full rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-100">
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 600px"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
