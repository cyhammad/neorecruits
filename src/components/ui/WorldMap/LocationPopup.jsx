"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

export function LocationPopup({ location, position }) {
  const isFarRight = position.x > 70;
  const isFarLeft = position.x < 30;
  const isBottomHalf = position.y > 50;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute z-30 pointer-events-none"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: `translate(${isFarRight ? "-100%" : isFarLeft ? "10px" : "-50%"}, ${isBottomHalf ? "calc(-100% - 30px)" : "30px"})`,
      }}
    >
      <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-5 min-w-[280px] max-w-[320px]">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#9a01cd] mb-1">
              {location.country}
            </p>
            <h4 className="text-lg font-bold text-[#0b2677] tracking-tight">
              {location.city} Office
            </h4>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#0b2677]/5 flex items-center justify-center">
            <MapPin className="w-5 h-5 text-[#9a01cd]" />
          </div>
        </div>
        <div className="space-y-3 pt-3 border-t border-gray-100 font-medium">
          <div className="flex items-start gap-3 text-gray-600 text-sm">
            <MapPin className="w-4 h-4 mt-0.5 text-[#9a01cd] shrink-0" />
            <span className="leading-relaxed">{location.address}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600 text-sm">
            <Phone className="w-4 h-4 text-[#9a01cd] shrink-0" />
            <span>{location.phone}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600 text-sm">
            <Clock className="w-4 h-4 text-[#9a01cd] shrink-0" />
            <span>{location.hours}</span>
          </div>
        </div>
        <div
          className="absolute w-3 h-3 bg-white border-gray-100 rotate-45"
          style={{
            left: "50%",
            marginLeft: "-6px",
            ...(isBottomHalf
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
  );
}
