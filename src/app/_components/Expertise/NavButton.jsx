"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export function NavButton({ direction, onClick }) {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight;
  return (
    <button
      className="h-10 w-10 flex items-center justify-center rounded-md border border-gray-200 text-gray-300 hover:text-[#0b2677] hover:border-gray-400 transition-all bg-white"
      onClick={onClick}
    >
      <Icon className="w-5 h-5" />
    </button>
  );
}
