"use client";

import Link from "next/link";

export function FooterLinksColumn({ title, links }) {
  return (
    <div className="space-y-6">
      <h4 className="text-lg font-bold uppercase tracking-wider">{title}</h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-white/60 hover:text-[#9a01cd] transition-colors text-sm"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
