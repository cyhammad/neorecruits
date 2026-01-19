"use client";

import { motion, AnimatePresence } from "framer-motion";
import { loadingWords } from "./loaderData";

export function LoaderProgress({ progress, wordIndex }) {
  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="flex items-end space-x-4 overflow-hidden h-12">
        <AnimatePresence mode="wait">
          <motion.span
            key={loadingWords[wordIndex]}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/40 text-sm font-bold tracking-[0.3em] uppercase pb-2"
          >
            {loadingWords[wordIndex]}
          </motion.span>
        </AnimatePresence>

        <span className="text-white font-mono text-4xl font-light w-24 tabular-nums">
          {Math.round(progress)}%
        </span>
      </div>

      <div className="w-72 h-[1.5px] bg-white/10 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-linear-to-r from-transparent via-[#9a01cd] to-transparent"
          animate={{ width: `${progress}%` }}
          style={{ left: "50%", x: "-50%" }}
        />
        <motion.div
          className="absolute inset-0 bg-white/50"
          animate={{ width: `${progress}%` }}
          style={{ left: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
        />
      </div>
    </div>
  );
}
