"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { smoothTransition, staggerDelay } from "./blogData";

export function BlogHeader({ isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ ...smoothTransition, delay: staggerDelay * 0 }}
      className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 md:mb-20"
    >
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-[#9a01cd] animate-pulse" />
          <span className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em]">
            Company News & Updates
          </span>
        </div>
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
          Latest <span className="text-[#9a01cd]">Insights</span>
        </h2>
      </div>

      <Button
        variant="outline"
        className="rounded-full border-white/10 text-white hover:bg-white hover:text-[#0b2677] transition-all duration-500 h-14 px-10 text-xs font-black uppercase tracking-[0.2em] bg-white/5 backdrop-blur-sm w-full sm:w-auto"
        asChild
      >
        <Link href="/insights">
          Explore All News
          <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </Button>
    </motion.div>
  );
}
