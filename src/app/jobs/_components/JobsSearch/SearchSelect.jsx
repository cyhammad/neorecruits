"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export function SearchSelect({
  icon: Icon,
  value,
  onChange,
  options,
  disabled,
  label,
  className = "",
}) {
  return (
    <div className={`relative flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label className="text-[10px] font-black uppercase tracking-[0.15em] text-[#0b2677]/40 px-4">
          {label}
        </label>
      )}
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger
          disabled={disabled}
          className={`
            relative w-full h-14 sm:h-16 pl-14 pr-10 bg-gray-50/50 border-none rounded-2xl 
            text-[#0b2677] cursor-pointer 
            disabled:opacity-50 disabled:cursor-not-allowed 
            font-bold text-sm transition-all duration-300
            hover:bg-gray-100/50 outline-none
            flex items-center text-left
            group/select
          `}
        >
          <div className="absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-300 group-hover/select:scale-110">
            <Icon className="w-5 h-5 text-[#9a01cd]" />
          </div>

          <span className="truncate">{value}</span>

          <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#0b2677]/40 group-hover/select:text-[#9a01cd] transition-colors duration-300">
            <ChevronDown className="w-4 h-4 stroke-[3px]" />
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className="bg-white rounded-2xl border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.1)] p-2 min-w-[220px] z-[100]"
          align="start"
          sideOffset={8}
        >
          {label && (
            <>
              <DropdownMenuLabel className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0b2677]/30 px-3 py-2">
                {label}
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-gray-100" />
            </>
          )}
          <DropdownMenuRadioGroup value={value} onValueChange={onChange}>
            {options.map((opt) => (
              <DropdownMenuRadioItem
                key={opt}
                value={opt}
                className="rounded-xl pl-8 pr-4 py-2.5 text-sm font-semibold text-[#0b2677] cursor-pointer focus:bg-[#9a01cd]/10 focus:text-[#9a01cd] transition-colors data-[state=checked]:text-[#9a01cd] data-[state=checked]:font-bold"
              >
                {opt}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
