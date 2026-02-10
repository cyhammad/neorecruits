"use client";

import Link from "next/link";

export function FooterBottom() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="pt-8 mt-4 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center gap-6 text-center lg:text-left max-w-7xl mx-auto">
      <p className="text-white/30 text-[10px] sm:text-xs">
        &copy; {currentYear} NeoRecruits. All rights reserved.
      </p>
      <div className="flex flex-wrap justify-center gap-y-2 gap-x-6 sm:gap-x-8">
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
