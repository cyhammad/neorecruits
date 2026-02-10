"use client";

import * as React from "react";
import { expertiseFeatures } from "./expertiseData";
import { ExpertiseCard } from "./ExpertiseCard";
import { motion } from "framer-motion";

export function IndustriesExpertise() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#0b2677] overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b2677] via-[#081b53] to-[#0b2677]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(154,1,205,0.15),_transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(59,130,246,0.15),_transparent_40%)]" />

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-6 max-w-4xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
              Why Partner With{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#9a01cd]">
                NeoRecruits?
              </span>
            </h2>
            <p className="text-white/60 text-lg sm:text-xl leading-relaxed font-medium">
              We blend traditional recruitment expertise with cutting-edge
              technology to deliver unparalleled service in candidate selection
              and placement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {expertiseFeatures.map((feature, idx) => (
              <ExpertiseCard key={idx} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
