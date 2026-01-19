"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { smoothTransition, staggerDelay } from "./contactData";

export function ContactContent({ isInView }) {
  const highlightItems = [
    { title: "Global Reach", desc: "Access talent across 40+ countries." },
    {
      title: "Industry Experts",
      desc: "Recruiters with specialized sector knowledge.",
    },
    {
      title: "Fast Turnaround",
      desc: "Shortlists delivered in days, not weeks.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
      transition={{ ...smoothTransition, delay: staggerDelay * 0 }}
      className="lg:w-1/2 space-y-4 sm:space-y-6 md:space-y-8"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ ...smoothTransition, delay: staggerDelay * 1 }}
        className="tracking-tight text-[#0b2677] leading-tight text-xl sm:text-2xl md:text-3xl lg:text-[22pt]"
      >
        Let's Build Your <br className="hidden sm:block" /> Dream Team.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ ...smoothTransition, delay: staggerDelay * 2 }}
        className="text-[#0b2677]/70 leading-relaxed text-sm sm:text-base"
      >
        Whether you're looking for executive leadership, a specialized technical
        team, or a complete RPO solution, NeoRecruits has the expertise to
        deliver.
      </motion.p>

      <div className="space-y-4 sm:space-y-6 pt-2 sm:pt-4">
        {highlightItems.map((item, index) => (
          <ContactHighlightItem
            key={item.title}
            item={item}
            index={index}
            isInView={isInView}
          />
        ))}
      </div>
    </motion.div>
  );
}

function ContactHighlightItem({ item, index, isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{
        ...smoothTransition,
        delay: staggerDelay * (3.5 + index * 0.3),
      }}
      className="flex items-center gap-3 sm:gap-4"
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#539ce0]/10 flex items-center justify-center text-[#539ce0]">
        <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
      </div>
      <div>
        <h4 className="font-bold text-[#0b2677] text-sm sm:text-base">
          {item.title}
        </h4>
        <p className="text-xs sm:text-sm text-[#0b2677]/60">{item.desc}</p>
      </div>
    </motion.div>
  );
}
