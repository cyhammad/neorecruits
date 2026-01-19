"use client";

export function SearchSelect({
  icon: Icon,
  value,
  onChange,
  options,
  disabled,
  placeholder,
}) {
  return (
    <div className="relative">
      <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0b2677]/40" />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className="w-full pl-10 pr-4 h-12 bg-[#f4f4f4] border border-[#e5e5e5] rounded-md focus:border-[#9a01cd] focus:ring-2 focus:ring-[#9a01cd]/20 text-[#0b2677] appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed font-medium text-sm"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
