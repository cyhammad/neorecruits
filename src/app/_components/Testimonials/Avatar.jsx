"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import { smoothTransition } from "./testimonialsData";

export function Avatar({ item, isActive }) {
  return (
    <motion.div
      initial={false}
      animate={
        isActive
          ? { scale: 1, rotate: 0, y: 0 }
          : { scale: 0.85, rotate: -15, y: -5 }
      }
      transition={{
        ...smoothTransition,
        delay: isActive ? 0.3 : 0,
        type: "spring",
        stiffness: 250,
        damping: 20,
      }}
      className="absolute -top-8 sm:-top-10 left-1/2 -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-xl shadow-[#9a01cd]/20 border-4 border-white flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300 z-20"
      style={{
        backgroundImage:
          item.avatarGradient ||
          "linear-gradient(to bottom right, #539ce0, #2165b8)",
      }}
    >
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />
      <User className="w-8 h-8 sm:w-10 sm:h-10 text-white relative z-10 fill-white" />
    </motion.div>
  );
}
