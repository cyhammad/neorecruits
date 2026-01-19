"use client";

import * as React from "react";
import { expertiseFeatures } from "./expertiseData";
import { ExpertiseCard } from "./ExpertiseCard";

export function IndustriesExpertise() {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-[#0b2677]">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[50%] h-[120%] bg-linear-to-bl from-white/5 to-transparent pointer-events-none -skew-x-12 origin-top-right z-0 rounded-l-[100px] blur-3xl" />
      <div className="container mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="tracking-tight text-white leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[22pt]">
              Why Choose NeoRecruits for Industry Recruitment?
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed font-medium">
              Using a unique balance of tradition and technology, we blend
              personal, face-to-face interaction with the latest technology
              tools and trends to ensure the happiness and well-being of our
              stakeholders.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {expertiseFeatures.map((feature, idx) => (
              <ExpertiseCard key={idx} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
