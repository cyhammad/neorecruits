"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { WorldMap } from "@/components/ui/world-map";

const smoothTransition = {
  duration: 1,
  ease: [0.25, 0.1, 0.25, 1],
};

const offices = [
  {
    id: 1,
    city: "Dubai",
    country: "United Arab Emirates",
    address: "Level 14, Emirates Towers, Sheikh Zayed Road, Dubai",
    phone: "+971 4 123 4567",
    hours: "Sun - Thu: 9:00 AM - 6:00 PM",
    lat: 25.2048,
    lng: 55.2708,
  },
  {
    id: 2,
    city: "Riyadh",
    country: "Saudi Arabia",
    address: "KAFD, Building 5.04, Al Aqiq, Riyadh 13519",
    phone: "+966 11 987 6543",
    hours: "Sun - Thu: 9:00 AM - 6:00 PM",
    lat: 24.7136,
    lng: 46.6753,
  },
  {
    id: 3,
    city: "Abu Dhabi",
    country: "United Arab Emirates",
    address: "ADGM Square, Al Maryah Island, Abu Dhabi",
    phone: "+971 2 444 5566",
    hours: "Sun - Thu: 9:00 AM - 6:00 PM",
    lat: 24.4539,
    lng: 54.3773,
  },
  {
    id: 4,
    city: "London",
    country: "United Kingdom",
    address: "30 St Mary Axe (The Gherkin), London EC3A 8BF",
    phone: "+44 20 7765 4321",
    hours: "Mon - Fri: 9:00 AM - 5:30 PM",
    lat: 51.5074,
    lng: -0.1278,
  },
];

// Create connection arcs from Dubai (headquarters) to other offices
const mapConnections = [
  {
    start: { lat: offices[0].lat, lng: offices[0].lng }, // Dubai
    end: { lat: offices[1].lat, lng: offices[1].lng }, // Riyadh
  },
  {
    start: { lat: offices[0].lat, lng: offices[0].lng }, // Dubai
    end: { lat: offices[2].lat, lng: offices[2].lng }, // Abu Dhabi
  },
  {
    start: { lat: offices[0].lat, lng: offices[0].lng }, // Dubai
    end: { lat: offices[3].lat, lng: offices[3].lng }, // London
  },
];

export function Locations() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section ref={ref} className="relative bg-[#0b2677] overflow-hidden">
      {/* Subtle Geometric Background Pattern Backdrop */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Header Overlay */}
      <div className="absolute top-0 left-0 right-0 z-20 pt-8 sm:pt-12 md:pt-16 px-4 sm:px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={smoothTransition}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center sm:text-left">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ ...smoothTransition, delay: 0.1 }}
              className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-[#9a01cd] mb-2"
            >
              Our Locations
            </motion.p>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ ...smoothTransition, delay: 0.2 }}
              className="tracking-tight text-white leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3"
            >
              Where to find us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ ...smoothTransition, delay: 0.3 }}
              className="text-white/60 leading-relaxed text-sm sm:text-base max-w-xl"
            >
              Hover over the glowing markers to explore our global offices
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Full-Width World Map */}
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

        {/* Gradient Overlays for Smooth Edges */}
        <div className="absolute inset-x-0 top-0 h-32 sm:h-40 md:h-48 bg-gradient-to-b from-[#0b2677] to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t from-[#0b2677] to-transparent pointer-events-none" />
      </motion.div>

      {/* Footer Label */}
      <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 z-10 px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ ...smoothTransition, delay: 0.5 }}
            className="text-white/30 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em]"
          >
            NeoRecruits Global Footprint
          </motion.h3>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ ...smoothTransition, delay: 0.6 }}
            className="flex items-center gap-2 text-white/30 text-[10px] sm:text-xs"
          >
            <span className="w-2 h-2 rounded-full bg-[#9a01cd] animate-pulse" />
            <span>{offices.length} Offices Worldwide</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
