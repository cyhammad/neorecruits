"use client";

import { motion } from "framer-motion";

export function LoaderShimmer() {
  return (
    <motion.div
      className="absolute inset-0 z-15 pointer-events-none overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="absolute inset-0 w-[300%] h-[300%] bg-[linear-gradient(135deg,transparent_45%,rgba(255,255,255,0.08)_50%,transparent_55%)]"
        animate={{
          x: ["-50%", "50%"],
          y: ["-50%", "50%"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ left: "-100%", top: "-100%" }}
      />
    </motion.div>
  );
}
