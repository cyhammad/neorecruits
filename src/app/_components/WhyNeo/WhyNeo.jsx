"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Globe, Target, CheckCircle, Zap } from "lucide-react";

const reasons = [
  {
    icon: Globe,
    title: "Global Network, Regional Precision",
    description:
      "Access to elite talent across 40+ countries with deep localized market intelligence and compliance expertise.",
  },
  {
    icon: Target,
    title: "Industry-Specific Expertise",
    description:
      "Specialized recruitment teams who understand the technical nuances of your specific industrial or corporate sector.",
  },
  {
    icon: CheckCircle,
    title: "95% Talent Retention Rate",
    description:
      "Our rigorous, data-driven vetting process ensures long-term cultural and professional alignment for every placement.",
  },
  {
    icon: Zap,
    title: "Scalable & Agile Solutions",
    description:
      "Flexible models ranging from single executive searches to high-volume RPO and manpower supply deployments.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function WhyNeo() {
  return (
    <section className="py-20 sm:py-24 bg-[#f8f9fc] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#9a01cd] font-bold text-xs sm:text-sm uppercase tracking-[0.3em] block"
            >
              The NeoRecruits Advantage
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0b2677] uppercase tracking-tight"
            >
              Why Choose Us?
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="h-1 w-20 bg-[#9a01cd] mx-auto rounded-full"
            />
          </div>

          {/* Grid Layout */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-5 sm:p-8 rounded-2xl bg-white border border-[#0b2677]/5 hover:border-[#9a01cd]/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                <div className="size-10 sm:size-14 rounded-xl bg-[#0b2677]/5 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#9a01cd] transition-colors duration-300">
                  <reason.icon className="size-5 sm:size-7 text-[#0b2677] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-[13px] sm:text-lg font-bold text-[#0b2677] mb-2 sm:mb-3 group-hover:text-[#9a01cd] transition-colors duration-300 line-clamp-2">
                  {reason.title}
                </h3>
                <p className="text-[#0b2677]/60 text-[11px] sm:text-sm leading-relaxed font-medium line-clamp-3 sm:line-clamp-none">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
