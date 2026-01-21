"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export function NavButton({ direction, onClick }) {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight;
  return (
    <button
      className="h-11 w-11 flex items-center justify-center rounded-lg border border-gray-100 text-[#0b2677]/40 hover:text-[#0b2677] hover:border-gray-200 transition-all bg-white shadow-sm"
      onClick={onClick}
    >
      <Icon className="w-5 h-5 stroke-[2.5]" />
    </button>
  );
}
