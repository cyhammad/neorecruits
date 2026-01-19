"use client";

import { Input } from "@/components/ui/input";

export function FormField({
  id,
  label,
  name,
  type = "text",
  placeholder,
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
      <Input
        id={id}
        name={name}
        type={type}
        className="bg-white border-gray-200 h-12 focus:border-[#539ce0] focus:ring-[#539ce0]/20"
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
