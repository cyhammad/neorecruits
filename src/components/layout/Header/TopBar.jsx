"use client";

import { Mail, Phone, Briefcase, User } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { triggerArabicTranslation } from "@/components/GoogleTranslate/GoogleTranslate";

/**
 * TopBar component.
 * Optimized for snappy response: shortened durations and aggressive easing.
 */
export function TopBar() {
  return (
    <div className="h-12 hidden md:block overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 h-full">
        <div className="flex items-center mt-1 justify-between h-full max-w-7xl mx-auto">
          {/* Contact Info & Language */}
          <div className="flex items-center gap-5 text-[11px] font-medium text-white/80">
            <a
              href="tel:800385726"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="size-3.5" />
              <span>800 385 726</span>
            </a>
            <a
              href="mailto:info@neorecruits.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="size-3.5" />
              <span>info@neorecruits.com</span>
            </a>
            <div className="w-[1px] h-3.5 bg-white/20" />
            <a
              href="https://wa.me/971500000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#25D366] transition-colors font-semibold"
            >
              <span>WhatsApp</span>
            </a>
            <div className="w-[1px] h-3.5 bg-white/20" />
            <button
              onClick={triggerArabicTranslation}
              className="hover:text-white transition-colors font-semibold cursor-pointer"
            >
              عربي
            </button>
          </div>

          {/* Top Bar Actions */}
          <div className="flex items-center gap-3">
            <Link href="/services#request-talent">
              <button className="h-8 px-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white border border-white/25 rounded hover:bg-white/10 transition-colors duration-200">
                <span>Hire Talent</span>
              </button>
            </Link>

            <Link href="/contact">
              <button className="h-8 px-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white border border-white/25 rounded hover:bg-white/10 transition-colors duration-200">
                <Phone className="size-3.5" />
                <span>Contact Us</span>
              </button>
            </Link>
            <Link href="/signin">
              <button className="h-8 px-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white border border-white/25 rounded hover:bg-white/10 transition-colors duration-200">
                <User className="size-3.5" />
                <span>Sign In</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
