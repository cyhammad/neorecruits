"use client";

import * as React from "react";
import { Award } from "lucide-react";

export function JobDetailRequirements({ job }) {
  if (!job.requirements || job.requirements.length === 0) return null;

  return (
    <section className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-sm space-y-8 group transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center gap-4 border-b border-gray-50 pb-6">
        <div className="size-10 rounded-full bg-[#9a01cd]/10 flex items-center justify-center group-hover:bg-[#9a01cd] transition-colors duration-300">
          <Award className="size-5 text-[#9a01cd] group-hover:text-white transition-colors duration-300" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#0b2677] tracking-tight uppercase">
          Candidate Requirements
        </h2>
      </div>

      <ul className="grid grid-cols-1 gap-4">
        {job.requirements.map((requirement, index) => (
          <li
            key={index}
            className="flex items-start gap-4 group/item p-4 bg-gray-50 hover:bg-[#0b2677] rounded-2xl transition-all duration-300"
          >
            <div className="size-6 flex items-center justify-center rounded-full bg-[#9a01cd]/20 shrink-0 mt-0.5 group-hover/item:bg-white/20">
              <div className="size-2 rounded-full bg-[#9a01cd] group-hover/item:bg-white" />
            </div>
            <span className="text-base text-[#0b2677]/70 font-medium leading-relaxed group-hover/item:text-white transition-colors duration-300">
              {requirement}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
