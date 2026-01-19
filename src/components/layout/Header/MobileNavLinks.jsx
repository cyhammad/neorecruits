"use client";

import Link from "next/link";

export function MobileNavLinks({ navLinks }) {
  return (
    <nav className="flex flex-col gap-2 mb-6">
      {navLinks.map((link) => {
        const Icon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className="group flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium text-[#0b2677] hover:text-[#9a01cd] hover:bg-[#9a01cd]/5 transition-all duration-200"
          >
            <Icon className="w-5 h-5 text-[#9a01cd]/60 group-hover:text-[#9a01cd] transition-colors" />
            <span>{link.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
