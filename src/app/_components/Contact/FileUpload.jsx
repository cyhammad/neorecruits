"use client";

import { Upload } from "lucide-react";

export function FileUpload({ label, value, onChange }) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-bold text-[#0b2677] uppercase tracking-wider">
        {label}
      </label>
      <div className="relative">
        <input type="file" id="file" className="hidden" onChange={onChange} />
        <label
          htmlFor="file"
          className="flex items-center justify-center w-full h-12 bg-white border border-dashed border-gray-300 rounded-md cursor-pointer hover:border-[#539ce0] hover:text-[#539ce0] transition-colors group"
        >
          <Upload className="w-4 h-4 mr-2 text-gray-400 group-hover:text-[#539ce0]" />
          <span className="text-sm text-gray-500 group-hover:text-[#539ce0]">
            {value ? value.name : "Upload Job Description or File"}
          </span>
        </label>
      </div>
    </div>
  );
}
