"use client";

import * as React from "react";
import { regions, partnerships } from "./regionsData";
import { RegionCard } from "./RegionCard";
import { PartnershipCard } from "./PartnershipCard";

export function AboutRegions() {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-[#0b2677]">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="tracking-tight text-white leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[22pt]">
              Global Reach & Strategic Partnerships
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed font-medium">
              Operating across multiple continents with trusted partnerships
              that enable us to deliver exceptional talent solutions worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {regions.map((region, index) => (
              <RegionCard key={index} region={region} />
            ))}
          </div>
          <div className="space-y-8 pt-8 border-t border-white/20">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center">
              Key Partnerships
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {partnerships.map((partnership, index) => (
                <PartnershipCard key={index} partnership={partnership} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
