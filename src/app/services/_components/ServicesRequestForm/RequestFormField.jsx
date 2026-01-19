"use client";

import { Input } from "@/components/ui/input";

export function RequestFormField({
  id,
  name,
  label,
  type = "text",
  icon: Icon,
  value,
  onChange,
  placeholder,
  required = true,
  isTextArea = false,
}) {
  const Component = isTextArea ? "textarea" : Input;
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="text-sm font-bold text-[#0b2677] flex items-center gap-2"
      >
        {Icon && <Icon className="w-4 h-4" />}
        {label} {required && "*"}
      </label>
      <Component
        id={id}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={isTextArea ? 4 : undefined}
        className={`${isTextArea ? "w-full px-4 py-3 resize-none" : "h-12"} bg-[#f4f4f4] border-[#e5e5e5] focus:border-[#9a01cd] focus:ring-[#9a01cd]/20 text-[#0b2677] placeholder:text-[#0b2677]/50 rounded-md font-medium text-sm`}
      />
    </div>
  );
}
