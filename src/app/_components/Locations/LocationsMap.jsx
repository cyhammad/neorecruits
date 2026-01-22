"use client";

import { motion } from "framer-motion";
import { WorldMap } from "@/components/ui/world-map";
import { mapConnections, offices, smoothTransition } from "./locationsData";

export function LocationsMap({
  isInView,
  theme = "dark",
  fullWidth = false,
  activeId,
  onActiveIdChange,
}) {
  const isDark = theme === "dark";
  const gradientColor = isDark ? "from-[#0b2677]" : "from-white";
  const dotColor = isDark ? "#ffffff" : "#0b2677";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={
        isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }
      }
      transition={{ ...smoothTransition, delay: 0.2 }}
      className={`relative ${fullWidth ? "w-screen relative left-1/2 -ml-[50vw]" : "w-full"}`}
    >
      <WorldMap
        dots={mapConnections}
        locations={offices}
        lineColor="#9a01cd"
        dotColor={dotColor}
        backgroundColor="transparent"
        activeLocationId={activeId}
        onLocationSelect={onActiveIdChange}
      />
      <div
        className={`absolute inset-x-0 top-0 h-10 sm:h-14 bg-gradient-to-b ${gradientColor} to-transparent pointer-events-none`}
      />
      <div
        className={`absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t ${gradientColor} to-transparent pointer-events-none`}
      />
    </motion.div>
  );
}
