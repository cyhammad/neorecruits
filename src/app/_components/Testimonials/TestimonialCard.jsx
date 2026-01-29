"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { Avatar } from "./Avatar";
import { QuoteText } from "./QuoteText";
import { AuthorInfo } from "./AuthorInfo";
import { smoothTransition } from "./testimonialsData";

export function TestimonialCard({ item, index, selectedIndex }) {
  const isActive = selectedIndex === index;

  return (
    <motion.div
      key={`card-${item.id}-${selectedIndex}`}
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={
        isActive
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0.3, y: 30, scale: 0.95 }
      }
      transition={{
        ...smoothTransition,
        delay: isActive ? 0.2 : 0,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      className="relative pt-4"
    >
      <div className="relative group">
        <div className="relative bg-white border border-gray-100 rounded-[2rem] p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_70px_rgba(11,38,119,0.08)] transition-all duration-500 flex flex-col group/card">
          <div className="absolute top-6 right-8 opacity-5 group-hover/card:opacity-10 transition-opacity duration-500">
            <Quote className="w-12 h-12 text-[#9a01cd]" />
          </div>

          <div className="flex items-center gap-4">
            <Avatar item={item} isActive={isActive} />
            <AuthorInfo
              author={item.author}
              company={item.company}
              isActive={isActive}
            />
          </div>

          <div className="flex-grow flex flex-col justify-center mt-6 space-y-3">
            <QuoteText content={item.content} isActive={isActive} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
