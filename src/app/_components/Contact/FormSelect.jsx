"use client";

import { ChevronDownIcon } from "./ChevronDownIcon";

export function FormSelect({
  id,
  label,
  name,
  options,
  required,
  value,
  onChange,
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="text-sm font-bold text-[#0b2677] uppercase tracking-wider"
      >
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          name={name}
          className="w-full h-12 bg-white border border-gray-200 rounded-md px-3 text-sm focus:outline-none focus:border-[#539ce0] focus:ring-4 focus:ring-[#539ce0]/10 transition-shadow appearance-none cursor-pointer"
          required={required}
          value={value}
          onChange={onChange}
        >
          <option value="" disabled>
            Select a service...
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none">
          <ChevronDownIcon />
        </div>
      </div>
    </div>
  );
}
