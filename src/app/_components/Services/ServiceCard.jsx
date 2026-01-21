"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { smoothTransition, staggerDelay } from "./servicesData";

export function ServiceCard({ service, index, isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        ...smoothTransition,
        delay: staggerDelay * index,
      }}
      className="group relative flex flex-col h-full bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
    >
      {/* Icon */}
      <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#2165b8]/20 text-white group-hover:scale-110 transition-transform duration-300">
        <service.icon className="w-6 h-6" />
      </div>

      {/* Content */}
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors">
        {service.title}
      </h3>
      <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-8 flex-grow">
        {service.description}
      </p>

      {/* Actions */}
      <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10">
        <Button
          size="sm"
          className="h-10 px-6 rounded-lg bg-[#2165b8] border-none text-xs font-bold tracking-[0.1em] uppercase group/btn overflow-hidden relative transition-all duration-200 active:scale-[0.96] shadow-xl shadow-[#2165b8]/20 hover:shadow-white/10"
          asChild
        >
          <Link
            href={service.link}
            className="flex items-center justify-center gap-2 relative z-10"
          >
            {/* High-Speed Radial Layer */}
            <span className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none">
              <span className="w-0 h-0 bg-white rounded-full transition-all duration-500 ease-[0.16,1,0.3,1] group-hover/btn:w-[350%] group-hover/btn:pb-[350%]" />
            </span>

            {/* Text */}
            <span className="relative z-20 text-white group-hover/btn:text-[#0b2677] transition-colors duration-300 ease-out">
              Learn More
            </span>

            <div className="relative z-20 w-4 h-4 overflow-hidden flex items-center justify-center">
              <ArrowRight className="w-4 h-4 absolute text-white group-hover/btn:text-[#0b2677] transition-all duration-500 ease-[0.2,1,0.3,1] group-hover/btn:translate-x-10 group-hover/btn:opacity-0" />
              <ArrowRight className="w-4 h-4 absolute -translate-x-10 opacity-0 text-[#0b2677] transition-all duration-500 ease-[0.2,1,0.3,1] group-hover/btn:translate-x-0 group-hover/btn:opacity-100" />
            </div>
          </Link>
        </Button>

        <Link
          href="/services#request-talent"
          className="inline-flex items-center text-sm font-semibold text-[#2165b8] hover:text-[#2165b8]/80 transition-colors group/link"
        >
          Request Talent
          <UserPlus className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}
