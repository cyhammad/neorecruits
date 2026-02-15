"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SheetClose } from "@/components/ui/sheet";

export function MobileNavLinks({ navLinks }) {
  return (
    <nav className="flex flex-col gap-1 mb-2">
      <p className="px-4 mb-2 text-[#0b2677]/40 text-[10px] uppercase tracking-[0.2em] font-bold">
        Navigation
      </p>
      {navLinks.map((link) => {
        const Icon = link.icon;
        return (
          <SheetClose asChild key={link.name}>
            <Link
              href={link.href}
              className="group flex items-center justify-between px-4 py-3 rounded-xl text-[13px] font-bold uppercase tracking-wider text-[#0b2677]  hover:bg-[#9a01cd]/5 transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <div className="size-8 rounded-lg bg-[#0b2677]/5 flex items-center justify-center group-hover:bg-[#9a01cd]/10 transition-colors">
                  <Icon className="w-4 h-4 text-[#0b2677]/60  transition-colors" />
                </div>
                <span>{link.name}</span>
              </div>
              <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#9a01cd]" />
            </Link>
          </SheetClose>
        );
      })}
    </nav>
  );
}
