"use client";

import { SortAsc } from "lucide-react";
import { sortOptions } from "./jobsData";

export function JobsListingsHeader({ count, sortBy, setSortBy }) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div>
        <h2 className="tracking-tight text-[#0b2677] leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[22pt] mb-2">
          Current Job Openings
        </h2>
        <p className="text-[#0b2677]/70 text-base sm:text-lg">
          {count} {count === 1 ? "job" : "jobs"} found
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <SortAsc className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0b2677]/40 pointer-events-none" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="pl-10 pr-4 py-2 bg-white border border-[#e5e5e5] rounded-lg text-[#0b2677] text-sm font-medium focus:border-[#9a01cd] focus:ring-2 focus:ring-[#9a01cd]/20 cursor-pointer appearance-none"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
