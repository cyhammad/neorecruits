"use client";

import { motion } from "framer-motion";

export function HoverEffects({ isActive }) {
  return (
    <>
      <motion.div
        initial={false}
        animate={
          isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
        }
        transition={{ duration: 0.5 }}
        className="absolute inset-0 rounded-2xl sm:rounded-3xl transition-all duration-500 pointer-events-none"
      />
      <motion.div
        initial={false}
        animate={
          isActive ? { opacity: 0.3, scale: 1.02 } : { opacity: 0, scale: 1 }
        }
        transition={{ duration: 0.5 }}
        className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-transparent -z-10 blur-sm pointer-events-none bg-linear-to-br from-[#9a01cd]/20 via-[#539ce0]/20 to-[#9a01cd]/20"
      />
    </>
  );
}
