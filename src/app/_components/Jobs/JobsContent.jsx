"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { smoothTransition, staggerDelay } from "./jobsData";

export function JobsContent({ isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
      transition={{ ...smoothTransition, delay: staggerDelay * 0 }}
      className="space-y-4 sm:space-y-6 md:space-y-8 order-1 lg:order-2"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ ...smoothTransition, delay: staggerDelay * 1 }}
        className="tracking-tight text-[#0b2677] leading-tight text-xl sm:text-2xl md:text-3xl lg:text-[22pt]"
      >
        Ready for your next <br className="hidden sm:block" /> opportunity?
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ ...smoothTransition, delay: staggerDelay * 2 }}
        className="space-y-4 sm:space-y-6 text-[#0b2677]/70 leading-relaxed text-sm sm:text-base"
      >
        <p>
          NeoRecruits connects talented professionals with top employers across
          the GCC and beyond. Whether you're seeking permanent roles, contract
          work, or project-based assignments — we're here to help you succeed.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ ...smoothTransition, delay: staggerDelay * 3 }}
        className="pt-2"
      >
        <Button
          className="rounded-lg bg-[#9a01cd] hover:bg-[#9a01cd]/90 text-white h-11 sm:h-12 px-5 sm:px-6 text-xs font-bold tracking-widest uppercase w-full sm:w-auto"
          asChild
        >
          <Link href="/jobs">
            View All Job Openings
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );
}
