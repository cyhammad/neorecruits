"use client";

import { motion } from "framer-motion";
import { projectToPercent } from "./mapUtils";

export function MapMarkers({
  locations,
  hoveredLocation,
  onHover,
  onLeave,
  lineColor,
}) {
  return (
    <div className="absolute inset-0">
      {locations.map((location) => {
        const pos = projectToPercent(location.lat, location.lng);
        const isHovered = hoveredLocation?.id === location.id;

        return (
          <div
            key={location.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20"
            style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
            onMouseEnter={() => onHover(location)}
            onMouseLeave={onLeave}
          >
            <motion.div
              className="absolute rounded-full"
              style={{ backgroundColor: lineColor }}
              initial={{ width: 12, height: 12, opacity: 0.6 }}
              animate={
                isHovered
                  ? { width: 40, height: 40, opacity: 0, x: -14, y: -14 }
                  : {
                      width: [12, 30, 12],
                      height: [12, 30, 12],
                      opacity: [0.6, 0, 0.6],
                      x: [0, -9, 0],
                      y: [0, -9, 0],
                    }
              }
              transition={
                isHovered
                  ? { duration: 0.3 }
                  : { duration: 2, repeat: Infinity, ease: "easeOut" }
              }
            />
            <motion.div
              className="relative rounded-full shadow-lg"
              style={{
                backgroundColor: lineColor,
                boxShadow: `0 0 20px ${lineColor}`,
              }}
              animate={{
                width: isHovered ? 20 : 12,
                height: isHovered ? 20 : 12,
                x: isHovered ? -4 : 0,
                y: isHovered ? -4 : 0,
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            />
          </div>
        );
      })}
    </div>
  );
}
