"use client";

export function RequestFormSelect({
  id,
  name,
  label,
  icon: Icon,
  value,
  onChange,
  options,
  required = true,
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="text-sm font-bold text-[#0b2677] flex items-center gap-2"
      >
        {Icon && <Icon className="w-4 h-4" />}
        {label} {required && "*"}
      </label>
      <select
        id={id}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full h-12 px-4 bg-[#f4f4f4] border border-[#e5e5e5] rounded-md focus:border-[#9a01cd] focus:ring-2 focus:ring-[#9a01cd]/20 text-[#0b2677] cursor-pointer font-medium text-sm"
      >
        <option value="">Select a service...</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
