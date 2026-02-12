"use client";

import * as React from "react";
import { Heart, Check } from "lucide-react";

export function JobDetailBenefits({ job }) {
  if (!job.benefits || job.benefits.length === 0) return null;

  return (
    <section className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-sm space-y-8 group transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center gap-4 border-b border-gray-50 pb-6">
        <div className="size-10 rounded-full bg-[#9a01cd]/10 flex items-center justify-center group-hover:bg-[#9a01cd] transition-colors duration-300">
          <Heart className="size-5 text-[#9a01cd] group-hover:text-white transition-colors duration-300" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#0b2677] tracking-tight uppercase">
          Benefits & Perks
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {job.benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50 border border-transparent hover:bg-[#0b2677] transition-all duration-300 group/item"
          >
            <div className="size-6 rounded-full bg-[#9a01cd]/20 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-white/20">
              <Check className="size-3.5 text-[#9a01cd] group-hover/item:text-white" />
            </div>
            <span className="text-base font-medium text-[#0b2677]/70 group-hover/item:text-white transition-colors duration-300">
              {benefit}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
