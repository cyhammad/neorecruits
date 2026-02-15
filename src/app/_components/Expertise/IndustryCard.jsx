"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { smoothTransition, staggerDelay } from "./expertiseData";

export function IndustryCard({ industry, index, isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 40 }}
      animate={
        isInView
          ? { opacity: 1, scale: 1, y: 0 }
          : { opacity: 0, scale: 0.9, y: 40 }
      }
      transition={{
        ...smoothTransition,
        delay: staggerDelay * (2.5 + index * 0.2),
      }}
      className="flex-[0_0_85%] sm:flex-[0_0_70%] md:flex-[0_0_48%] min-w-0 pl-4 sm:pl-6"
    >
      <div className="group cursor-pointer">
        <div className="relative h-[180px] sm:h-[220px] md:h-[260px] w-full overflow-hidden rounded-xl bg-gray-100">
          <Image
            src={industry.image}
            alt={industry.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <h3 className="mt-4 sm:mt-5 text-[#0b2677]  transition-colors text-sm sm:text-base md:text-[17px] font-bold leading-tight">
          {industry.title}
        </h3>
      </div>
    </motion.div>
  );
}
