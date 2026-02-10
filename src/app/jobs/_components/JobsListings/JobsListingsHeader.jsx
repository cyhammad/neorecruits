"use client";

import { SortAsc, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { sortOptions } from "./jobsData";

export function JobsListingsHeader({ count, sortBy, setSortBy }) {
  // Find label for current selection
  const currentLabel =
    sortOptions.find((opt) => opt.value === sortBy)?.label || "Sort By";

  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 relative z-10 w-full">
      <div className="flex-1 min-w-0">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b2677] tracking-tight leading-none mb-3 break-words">
          Current Job Openings
        </h2>
        <p className="text-[#0b2677]/60 font-medium text-lg flex items-center gap-2">
          Found{" "}
          <span className="bg-[#9a01cd]/10 text-[#9a01cd] px-2 py-0.5 rounded-md font-bold text-base border border-[#9a01cd]/20">
            {count}
          </span>{" "}
          {count === 1 ? "role" : "active roles"}
        </p>
      </div>

      <div className="flex items-center gap-4 shrink-0">
        <span className="text-xs font-bold text-[#0b2677]/40 uppercase tracking-widest hidden sm:block">
          Sort Results:
        </span>
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger className="relative flex items-center gap-3 bg-white pl-4 pr-10 py-3.5 rounded-xl border border-gray-200 text-[#0b2677] text-sm font-bold shadow-sm hover:border-[#9a01cd] hover:shadow-md transition-all outline-none min-w-[180px]">
            <SortAsc className="w-4 h-4 text-[#9a01cd]" />
            <span className="truncate">{currentLabel}</span>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0b2677]/40 stroke-[3px]" />
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className="w-[200px] bg-white rounded-xl border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.1)] p-1.5 z-50"
          >
            <DropdownMenuRadioGroup value={sortBy} onValueChange={setSortBy}>
              {sortOptions.map((option) => (
                <DropdownMenuRadioItem
                  key={option.value}
                  value={option.value}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-[#0b2677] cursor-pointer focus:bg-[#9a01cd]/10 focus:text-[#9a01cd] data-[state=checked]:bg-[#0b2677] data-[state=checked]:text-white transition-all"
                >
                  {option.label}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
