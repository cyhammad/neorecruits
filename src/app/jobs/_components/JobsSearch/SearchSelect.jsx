"use client";

import { ChevronDown } from "lucide-react";

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
      <div className="relative group/select">
        <div className="absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-300 group-hover/select:scale-110">
          <Icon className="w-5 h-5 text-[#9a01cd]" />
        </div>

        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className={`
            w-full pl-14 pr-10 h-14 sm:h-16 bg-gray-50/50 border-none rounded-2xl 
            focus:ring-2 focus:ring-[#9a01cd]/20 
            text-[#0b2677] appearance-none cursor-pointer 
            disabled:opacity-50 disabled:cursor-not-allowed 
            font-bold text-sm transition-all duration-300
            hover:bg-gray-100/50
          `}
        >
          {options.map((opt) => (
            <option key={opt} value={opt} className="bg-white text-[#0b2677]">
              {opt}
            </option>
          ))}
        </select>

        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#0b2677]/40 group-hover/select:text-[#9a01cd] transition-colors duration-300">
          <ChevronDown className="w-4 h-4 stroke-[3px]" />
        </div>
      </div>
    </div>
  );
}
