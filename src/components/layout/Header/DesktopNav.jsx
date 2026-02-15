"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

export function DesktopNav({ navLinks }) {
  return (
    <div className="flex items-center gap-5">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="group flex items-center gap-0.25 flex-col text-[11px] font-bold uppercase tracking-widest text-white/90 hover:text-white transition-all duration-300 ease-in-out"
        >
          <span>{link.name}</span>
          <div className="group-hover:w-full w-0 transition-all duration-300 ease-in-out h-0.25 bg-white/80"></div>
        </Link>
      ))}
    </div>
  );
}
