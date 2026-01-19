"use client";

import * as React from "react";
import { values, mission } from "./missionData";
import { ValueCard } from "./ValueCard";

export function AboutMissionValues() {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-[#f4f4f4]">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="tracking-tight text-[#0b2677] leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[22pt]">
              {mission.title}
            </h2>
            <p className="text-[#0b2677]/70 text-base sm:text-lg leading-relaxed font-medium">
              {mission.description}
            </p>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0b2677] text-center mb-8 sm:mb-12">
              Our Core Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {values.map((v, idx) => (
                <ValueCard key={idx} value={v} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
