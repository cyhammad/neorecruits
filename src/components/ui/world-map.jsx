"use client";
import { useRef, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DottedMap from "dotted-map";
import Image from "next/image";
import { MapPin, Phone, Clock } from "lucide-react";

export function WorldMap({
  dots = [],
  locations = [],
  lineColor = "#9a01cd",
  dotColor = "#22d3ee",
  backgroundColor = "transparent",
}) {
  const svgRef = useRef(null);
  const containerRef = useRef(null);
  const [hoveredLocation, setHoveredLocation] = useState(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

  // Memoize the map to prevent re-creation on every render
  const svgMap = useMemo(() => {
    const map = new DottedMap({ height: 100, grid: "diagonal" });
    return map.getSVG({
      radius: 0.22,
      color: dotColor + "60",
      shape: "circle",
      backgroundColor: backgroundColor,
    });
  }, [dotColor, backgroundColor]);

  const projectPoint = (lat, lng) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  // Convert SVG coordinates to percentage for HTML overlay
  const projectToPercent = (lat, lng) => {
    const x = ((lng + 180) / 360) * 100;
    const y = ((90 - lat) / 180) * 100;
    return { x, y };
  };

  const createCurvedPath = (start, end) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  const handleLocationHover = (location, event) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const pos = projectToPercent(location.lat, location.lng);
      setPopupPosition({ x: pos.x, y: pos.y });
    }
    setHoveredLocation(location);
  };

  const handleLocationLeave = () => {
    setHoveredLocation(null);
  };

  return (
    <div
      ref={containerRef}
      className="w-full aspect-[2/1] relative font-sans overflow-hidden"
      style={{ backgroundColor }}
    >
      {/* Dotted Map Background */}
      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
      />

      {/* SVG Overlay for Connection Arcs */}
      <svg
        ref={svgRef}
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
                transition={{
                  duration: 1.5,
                  delay: 0.5 * i,
                  ease: "easeOut",
                }}
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

      {/* Interactive Location Markers (HTML overlay for better hover detection) */}
      <div className="absolute inset-0">
        {locations.map((location) => {
          const pos = projectToPercent(location.lat, location.lng);
          const isHovered = hoveredLocation?.id === location.id;

          return (
            <div
              key={location.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20"
              style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
              onMouseEnter={(e) => handleLocationHover(location, e)}
              onMouseLeave={handleLocationLeave}
            >
              {/* Pulsing Ring */}
              <motion.div
                className="absolute rounded-full"
                style={{ backgroundColor: lineColor }}
                initial={{ width: 12, height: 12, opacity: 0.6 }}
                animate={
                  isHovered
                    ? {
                        width: 40,
                        height: 40,
                        opacity: 0,
                        x: -14,
                        y: -14,
                      }
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
                    : {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut",
                      }
                }
              />

              {/* Center Dot */}
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

      {/* Hover Popup Card */}
      <AnimatePresence>
        {hoveredLocation && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute z-30 pointer-events-none"
            style={{
              left: `${popupPosition.x}%`,
              top: `${popupPosition.y}%`,
              transform: `translate(${
                popupPosition.x > 70
                  ? "-100%"
                  : popupPosition.x < 30
                  ? "10px"
                  : "-50%"
              }, ${popupPosition.y > 50 ? "calc(-100% - 30px)" : "30px"})`,
            }}
          >
            <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-5 min-w-[280px] max-w-[320px]">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#9a01cd] mb-1">
                    {hoveredLocation.country}
                  </p>
                  <h4 className="text-lg font-bold text-[#0b2677] tracking-tight">
                    {hoveredLocation.city} Office
                  </h4>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#0b2677]/5 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#9a01cd]" />
                </div>
              </div>

              {/* Details */}
              <div className="space-y-3 pt-3 border-t border-gray-100">
                <div className="flex items-start gap-3 text-gray-600 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 text-[#9a01cd] shrink-0" />
                  <span className="leading-relaxed">
                    {hoveredLocation.address}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 text-sm">
                  <Phone className="w-4 h-4 text-[#9a01cd] shrink-0" />
                  <span>{hoveredLocation.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 text-sm">
                  <Clock className="w-4 h-4 text-[#9a01cd] shrink-0" />
                  <span>{hoveredLocation.hours}</span>
                </div>
              </div>

              {/* Decorative Arrow */}
              <div
                className="absolute w-3 h-3 bg-white border-gray-100 rotate-45"
                style={{
                  left: "50%",
                  marginLeft: "-6px",
                  ...(popupPosition.y > 50
                    ? {
                        bottom: "-6px",
                        borderRight: "1px solid",
                        borderBottom: "1px solid",
                      }
                    : {
                        top: "-6px",
                        borderLeft: "1px solid",
                        borderTop: "1px solid",
                      }),
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
