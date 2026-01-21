"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

export function DesktopNav({ navLinks }) {
  return (
    <div className="flex items-center gap-7">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="group flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest text-white/90 hover:text-white transition-colors"
        >
          <span>{link.name}</span>
        </Link>
      ))}
    </div>
  );
}
