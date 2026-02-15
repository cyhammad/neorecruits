"use client";

import Link from "next/link";
import { ArrowRight, MapPin, Briefcase, Building2 } from "lucide-react";

export function JobCard({ job }) {
  const displaySalary = job.salary
    .replace(/USD/g, "")
    .replace(/To/gi, "-")
    .replace(/Negotiable/gi, "Neg.")
    .trim();

  return (
    <Link
      href={`/jobs/${job.id}`}
      className="group relative flex flex-col h-full rounded-2xl transition-all duration-500 hover:-translate-y-1"
    >
      {/* Card Body */}
      <div className="relative flex flex-col h-full bg-white rounded-2xl border border-gray-100 group-hover:border-[#0b2677]/10 group-hover:shadow-[0_20px_50px_-12px_rgba(11,38,119,0.15)] overflow-hidden transition-all duration-500">
        <div className="relative z-10 p-3 sm:p-6 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between mb-3 sm:mb-5">
            <div className="flex items-center gap-1 sm:gap-2 px-1.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#0b2677]/5 group-hover:bg-[#9a01cd] transition-colors duration-500">
              <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#9a01cd] group-hover:bg-white" />
              <span className="text-[7px] sm:text-[10px] font-bold uppercase tracking-widest text-[#0b2677]/70 group-hover:text-white transition-colors duration-500">
                {job.employmentType}
              </span>
            </div>
            <span className="hidden sm:block text-[9px] font-mono text-gray-300  transition-colors duration-500">
              #{job.id.toString().padStart(4, "0")}
            </span>
          </div>

          {/* Title & Company */}
          <div className="mb-3 sm:mb-6">
            <h3 className="text-xs sm:text-[17px] font-extrabold text-[#0b2677] leading-tight mb-1 sm:mb-2.5 group-hover:text-[#0b2677] transition-colors duration-300 line-clamp-2">
              {job.title}
            </h3>
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="hidden sm:flex w-5 h-5 rounded-full bg-[#0b2677]/5 group-hover:bg-[#9a01cd]/20 items-center justify-center transition-colors duration-500">
                <Building2 size={11} className="text-[#9a01cd]" />
              </div>
              <p className="text-[8px] sm:text-xs font-semibold text-gray-400  transition-colors duration-500 line-clamp-1">
                {job.company}
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 sm:gap-2 mb-auto">
            <div className="flex items-center gap-1 px-1.5 py-0.5 sm:px-3 sm:py-1.5 rounded-full bg-gray-50 group-hover:bg-[#0b2677]/5 text-[7px] sm:text-[10px] font-bold uppercase tracking-wide text-gray-400 group-hover:text-[#0b2677] transition-all duration-500 border border-transparent group-hover:border-[#0b2677]/10">
              <MapPin
                size={8}
                className="text-[#9a01cd]/50  sm:w-[11px] sm:h-[11px]"
              />
              {job.city}
            </div>
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-50 group-hover:bg-[#0b2677]/5 text-[10px] font-bold uppercase tracking-wide text-gray-400 group-hover:text-[#0b2677] transition-all duration-500 border border-transparent group-hover:border-[#0b2677]/10">
              <Briefcase
                size={11}
                className="text-[#9a01cd]/50 "
              />
              {job.type}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-3 sm:mt-6 pt-2 sm:pt-5 border-t border-gray-50 group-hover:border-[#9a01cd]/10 transition-colors duration-500">
            <div className="flex items-end justify-between">
              <div className="min-w-0 flex-1">
                <span className="hidden sm:block text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-gray-300 mb-0.5 sm:mb-1 /50 transition-colors duration-500">
                  Salary Range
                </span>
                <span className="text-[9px] sm:text-sm font-extrabold text-[#0b2677] transition-colors duration-300 block truncate">
                  {displaySalary}
                </span>
              </div>

              {/* CTA Orb */}
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-[#9a01cd] blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500 scale-125" />
                <div className="relative size-6 sm:w-10 sm:h-10 rounded-full bg-gray-50 group-hover:bg-[#9a01cd] flex items-center justify-center transition-all duration-500">
                  <ArrowRight
                    size={11}
                    className="text-gray-400 group-hover:text-white -rotate-45 group-hover:rotate-0 transition-all duration-500 sm:w-4 sm:h-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
