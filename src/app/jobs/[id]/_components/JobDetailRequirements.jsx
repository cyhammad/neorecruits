"use client";

import * as React from "react";
import { Award } from "lucide-react";

export function JobDetailRequirements({ job }) {
  if (!job.requirements || job.requirements.length === 0) return null;

  return (
    <section className="bg-white/5 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-white/10 shadow-xl space-y-8">
      <div className="flex items-center gap-4 border-b border-white/5 pb-6">
        <div className="w-10 h-10 rounded-full bg-[#9a01cd]/20 flex items-center justify-center">
          <Award className="w-5 h-5 text-[#9a01cd]" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Candidate Requirements
        </h2>
      </div>

      <ul className="grid grid-cols-1 gap-4">
        {job.requirements.map((requirement, index) => (
          <li
            key={index}
            className="flex items-start gap-4 group p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-colors duration-300"
          >
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#9a01cd]/20 shrink-0 mt-0.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#9a01cd]" />
            </div>
            <span className="text-base text-white/80 font-medium leading-relaxed group-hover:text-white transition-colors duration-300">
              {requirement}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
