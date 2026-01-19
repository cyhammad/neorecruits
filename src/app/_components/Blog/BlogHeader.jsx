"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { smoothTransition, staggerDelay } from "./blogData";

export function BlogHeader({ isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
      transition={{ ...smoothTransition, delay: staggerDelay * 0 }}
      className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 sm:gap-8 mb-10 sm:mb-16 max-w-7xl mx-auto"
    >
      <div className="space-y-3 sm:space-y-4">
        <h2 className="tracking-tight text-white leading-tight text-xl sm:text-2xl md:text-3xl lg:text-[22pt]">
          Latest Insights
        </h2>
        <p className="text-white/70 leading-relaxed max-w-xl text-sm sm:text-base">
          Stay ahead of the curve with our expert analysis on recruitment
          trends, leadership strategies, and market shifts.
        </p>
      </div>
      <Button
        className="rounded-lg bg-[#9a01cd] hover:bg-[#9a01cd]/90 text-white h-11 sm:h-12 px-5 sm:px-6 text-xs sm:text-xs md:text-sm font-bold tracking-widest uppercase w-full sm:w-auto"
        asChild
      >
        <Link href="/insights">
          View All News
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </Button>
    </motion.div>
  );
}
