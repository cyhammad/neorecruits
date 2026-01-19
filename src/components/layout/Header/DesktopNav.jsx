"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

export function DesktopNav({ navLinks }) {
  return (
    <div className="hidden md:flex items-center gap-8">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={cn(
            "text-sm font-medium transition-colors duration-300",
            "text-white hover:text-white/80",
          )}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
