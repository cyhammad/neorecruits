"use client";

import { motion } from "framer-motion";

export function SmokeLayer() {
  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-10"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 20%, black 100%), radial-gradient(ellipse 90% 80% at 60% 45%, black 40%, transparent 75%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 20%, black 100%), radial-gradient(ellipse 90% 80% at 60% 45%, black 40%, transparent 75%)",
        maskComposite: "intersect",
        WebkitMaskComposite: "source-in",
      }}
    >
      <motion.img
        src="/smoke.png"
        alt="smoke layer 1"
        initial={{ opacity: 0, x: "-15%" }}
        animate={{ opacity: 0.35, x: "15%" }}
        transition={{
          duration: 22,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          inset: 0,
          width: "110%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <motion.img
        src="/smoke.png"
        alt="smoke layer 2"
        initial={{ opacity: 0, x: "20%", y: "-10%", scale: 1.15 }}
        animate={{ opacity: 0.28, x: "-10%", y: "8%", scale: 1.35 }}
        transition={{
          duration: 28,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          delay: 2,
        }}
        style={{
          position: "absolute",
          inset: 0,
          width: "120%",
          height: "110%",
          objectFit: "cover",
          transformOrigin: "center right",
        }}
      />
      <motion.img
        src="/smoke.png"
        alt="smoke layer 3"
        initial={{ opacity: 0, scale: 1.05, y: "12%", rotate: -2 }}
        animate={{ opacity: 0.2, scale: 1.3, y: "-8%", rotate: 2 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 5,
        }}
        style={{
          position: "absolute",
          inset: 0,
          width: "115%",
          height: "120%",
          objectFit: "cover",
          transformOrigin: "top center",
        }}
      />
    </div>
  );
}
