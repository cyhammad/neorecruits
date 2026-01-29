"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { smoothTransition, staggerDelay } from "./industriesData";

export function IndustryCard({ industry, index, isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{
        ...smoothTransition,
        delay: staggerDelay * (index + 2),
      }}
      className="flex-[0_0_80%] sm:flex-[0_0_45%] lg:flex-[0_0_40%] pl-4 sm:pl-6"
    >
      <div className="group relative aspect-square sm:aspect-[4/5] overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl transition-all duration-700 hover:shadow-black/20">
        <Image
          src={industry.image}
          alt={industry.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 80vw, (max-width: 1024px) 45vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b2677]/90 via-[#0b2677]/20 to-transparent transition-opacity duration-300 group-hover:opacity-80" />
        <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8">
          <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight leading-tight group-hover:translate-y-[-4px] transition-transform duration-500">
            {industry.title}
          </h3>
          <div className="w-8 sm:w-12 h-1 bg-[#9a01cd] mt-2 sm:mt-4 rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        </div>
      </div>
    </motion.div>
  );
}
