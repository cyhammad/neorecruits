"use client";

import * as React from "react";
import { Heart, Check } from "lucide-react";

export function JobDetailBenefits({ job }) {
  if (!job.benefits || job.benefits.length === 0) return null;

  return (
    <section className="bg-white/5 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-white/10 shadow-xl space-y-8">
      <div className="flex items-center gap-4 border-b border-white/5 pb-6">
        <div className="w-10 h-10 rounded-full bg-[#9a01cd]/20 flex items-center justify-center">
          <Heart className="w-5 h-5 text-[#9a01cd]" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Benefits & Perks
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {job.benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-[#9a01cd]/20 hover:border-[#9a01cd]/30 transition-all duration-300"
          >
            <div className="w-6 h-6 rounded-full bg-[#9a01cd]/20 flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-3.5 h-3.5 text-[#9a01cd]" />
            </div>
            <span className="text-base font-medium text-white/80 group-hover:text-white transition-colors duration-300">
              {benefit}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
