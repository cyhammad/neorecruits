"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { smoothTransition, staggerDelay } from "./servicesData";

export function ServiceContent({ isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
      transition={{ ...smoothTransition, delay: staggerDelay * 0 }}
      className="order-1 lg:order-2 space-y-4 sm:space-y-6 md:space-y-8"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ ...smoothTransition, delay: staggerDelay * 1 }}
        className="tracking-tight text-white leading-tight text-xl sm:text-2xl md:text-3xl lg:text-[22pt]"
      >
        Global Recruitment Solutions <br className="hidden lg:block" /> for
        Every Industry.
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ ...smoothTransition, delay: staggerDelay * 2 }}
        className="space-y-4 sm:space-y-6 text-white/70 leading-relaxed text-sm sm:text-base"
      >
        <p>
          NeoRecruits' recruitment and management services are operational
          across 6 continents. So whether you are a candidate exploring work
          overseas or want to work in your location; NeoRecruits offers a
          flexible and trusted partnership.
        </p>
        <p>
          Our comprehensive suite of services ensures that every aspect of your
          talent acquisition strategy is covered, from initial identification to
          successful onboarding.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ ...smoothTransition, delay: staggerDelay * 3 }}
          className="pt-4"
        >
          <Button
            variant="link"
            className="p-0 h-auto text-base sm:text-lg font-bold text-white hover:text-white/80 transition-colors border-b-2 border-white/20 hover:border-white rounded-none hover:no-underline"
            asChild
          >
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
