"use client";

import { motion } from "framer-motion";
import { WorldMap } from "@/components/ui/world-map";
import { mapConnections, offices, smoothTransition } from "./locationsData";

export function LocationsMap({ isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={
        isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }
      }
      transition={{ ...smoothTransition, delay: 0.2 }}
      className="relative w-full"
    >
      <WorldMap
        dots={mapConnections}
        locations={offices}
        lineColor="#9a01cd"
        dotColor="#ffffff"
        backgroundColor="transparent"
      />
      <div className="absolute inset-x-0 top-0 h-32 sm:h-40 md:h-48 bg-gradient-to-b from-[#0b2677] to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t from-[#0b2677] to-transparent pointer-events-none" />
    </motion.div>
  );
}
