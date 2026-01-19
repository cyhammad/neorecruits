"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { Avatar } from "./Avatar";
import { QuoteText } from "./QuoteText";
import { Rating } from "./Rating";
import { AuthorInfo } from "./AuthorInfo";
import { HoverEffects } from "./HoverEffects";
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
      className="relative pt-12 sm:pt-16"
    >
      <div className="relative group">
        <div
          className="absolute inset-0 rounded-2xl sm:rounded-3xl transform group-hover:scale-[1.02] transition-transform duration-500"
          style={{
            backgroundImage:
              "linear-gradient(to bottom right, white, white, #f4f4f4)",
          }}
        />

        <div
          className="absolute top-0 left-0 w-20 h-20 rounded-2xl sm:rounded-3xl rounded-br-none rounded-tl-3xl"
          style={{
            backgroundImage:
              "linear-gradient(to bottom right, rgba(154, 1, 205, 0.05), transparent)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-24 h-24 rounded-2xl sm:rounded-3xl rounded-tl-none rounded-br-3xl"
          style={{
            backgroundImage:
              "linear-gradient(to top left, rgba(83, 156, 224, 0.05), transparent)",
          }}
        />

        <div className="relative bg-white/90 backdrop-blur-md border border-gray-100/60 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-500 min-h-[280px] sm:min-h-[320px] flex flex-col justify-between group/card">
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-5 group-hover/card:opacity-10 transition-opacity duration-500">
            <Quote className="w-20 h-20 sm:w-24 sm:h-24 text-[#9a01cd] transform rotate-12" />
          </div>

          <motion.div
            initial={false}
            animate={
              isActive
                ? { opacity: 0.08, scale: 1, rotate: 0 }
                : { opacity: 0.03, scale: 0.9, rotate: -5 }
            }
            transition={{ duration: 0.5 }}
            className="absolute top-6 left-6 sm:top-8 sm:left-8 group-hover/card:opacity-15 transition-opacity duration-300"
          >
            <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-[#0b2677] transform rotate-180" />
          </motion.div>

          <Avatar item={item} isActive={isActive} />

          <div className="flex-1 flex flex-col justify-center mt-8 sm:mt-10 space-y-4 sm:space-y-6">
            <QuoteText content={item.content} isActive={isActive} />
            <Rating rating={item.rating} isActive={isActive} />
          </div>

          <AuthorInfo
            author={item.author}
            company={item.company}
            isActive={isActive}
          />

          <HoverEffects isActive={isActive} />
        </div>
      </div>
    </motion.div>
  );
}
