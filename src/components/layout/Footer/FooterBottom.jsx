"use client";

import Link from "next/link";

export function FooterBottom() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="pt-6 sm:pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left max-w-7xl mx-auto">
      <p className="text-white/40 text-xs">
        &copy; {currentYear} NeoRecruits. All rights reserved.
      </p>
      <div className="flex gap-6">
        <FooterBottomLink href="/privacy" label="Privacy Policy" />
        <FooterBottomLink href="/terms" label="Terms of Service" />
        <FooterBottomLink href="/cookies" label="Cookie Policy" />
      </div>
    </div>
  );
}

function FooterBottomLink({ href, label }) {
  return (
    <Link
      href={href}
      className="text-white/40 hover:text-white text-xs transition-colors"
    >
      {label}
    </Link>
  );
}
