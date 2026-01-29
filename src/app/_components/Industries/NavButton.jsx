"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export function NavButton({ direction, onClick }) {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight;

  return (
    <button
      onClick={onClick}
      className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-[#0b2677] hover:bg-[#0b2677] hover:text-white transition-all duration-300 active:scale-95"
    >
      <Icon className="w-5 h-5" />
    </button>
  );
}
