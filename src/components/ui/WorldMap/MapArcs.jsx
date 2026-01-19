"use client";

import { motion } from "framer-motion";
import { projectPoint, createCurvedPath } from "./mapUtils";

export function MapArcs({ dots, lineColor }) {
  return (
    <svg
      viewBox="0 0 800 400"
      className="w-full h-full absolute inset-0 pointer-events-none select-none"
    >
      {dots.map((dot, i) => {
        const startPoint = projectPoint(dot.start.lat, dot.start.lng);
        const endPoint = projectPoint(dot.end.lat, dot.end.lng);
        return (
          <g key={`path-group-${i}`}>
            <motion.path
              d={createCurvedPath(startPoint, endPoint)}
              fill="none"
              stroke="url(#path-gradient)"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.5 * i, ease: "easeOut" }}
            />
          </g>
        );
      })}
      <defs>
        <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
          <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
