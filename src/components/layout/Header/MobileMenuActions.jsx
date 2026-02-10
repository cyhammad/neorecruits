"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  LogIn,
  UserPlus,
  Phone,
  Mail,
  MessageSquare,
  Globe,
  ChevronRight,
} from "lucide-react";
import { triggerArabicTranslation } from "@/components/GoogleTranslate/GoogleTranslate";
import { SheetClose } from "@/components/ui/sheet";

export function MobileMenuActions() {
  return (
    <div className="flex flex-col gap-8">
      {/* Primary CTAs */}
      <div className="space-y-3">
        <p className="px-4 text-[#0b2677]/40 text-[10px] uppercase tracking-[0.2em] font-bold">
          Quick Actions
        </p>
        <div className="grid grid-cols-1 gap-3 px-2">
          <SheetClose asChild>
            <Button
              variant="outline"
              className="w-full h-auto justify-between gap-3 text-[12px] py-4 px-5 border-[#0b2677]/10 text-[#0b2677] hover:bg-[#0b2677]/5 font-bold uppercase tracking-wider rounded-2xl transition-all duration-300 shadow-sm"
              asChild
            >
              <Link href="/services#request-talent">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-full bg-[#0b2677] flex items-center justify-center text-white">
                    <UserPlus className="w-4 h-4" />
                  </div>
                  Hire Talent
                </div>
                <ChevronRight className="w-4 h-4 opacity-40" />
              </Link>
            </Button>
          </SheetClose>

          <div className="grid grid-cols-2 gap-3">
            <SheetClose asChild>
              <Button
                variant="ghost"
                className="justify-center gap-2 text-[11px] py-6 border border-[#0b2677]/5 text-[#0b2677] hover:bg-[#0b2677]/5 font-bold uppercase tracking-wider rounded-xl shadow-xs"
                asChild
              >
                <Link href="/signin">
                  <LogIn className="w-4 h-4" />
                  Log in
                </Link>
              </Button>
            </SheetClose>

            <SheetClose asChild>
              <Button
                variant="ghost"
                className="justify-center gap-2 text-[11px] py-6 border border-[#0b2677]/5 text-[#0b2677] hover:bg-[#0b2677]/5 font-bold uppercase tracking-wider rounded-xl shadow-xs"
                onClick={triggerArabicTranslation}
              >
                <Globe className="w-4 h-4" />
                عربي
              </Button>
            </SheetClose>
          </div>
        </div>
      </div>

      {/* Quick Contact Info */}
      <div className="space-y-4">
        <p className="px-4 text-[#0b2677]/40 text-[10px] uppercase tracking-[0.2em] font-bold">
          Get in Touch
        </p>
        <div className="mx-2 bg-[#0b2677]/5 rounded-3xl p-2 space-y-1">
          <a
            href="tel:800385726"
            className="flex items-center gap-4 p-4 rounded-2xl text-[#0b2677] hover:bg-white transition-all group shadow-none hover:shadow-xs"
          >
            <div className="size-10 rounded-full bg-white flex items-center justify-center group-hover:bg-[#0b2677] group-hover:text-white transition-all">
              <Phone className="size-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-[#0b2677]/40 font-bold uppercase tracking-wider">
                Call Us
              </span>
              <span className="text-base font-bold text-[#0b2677]">
                800 385 726
              </span>
            </div>
          </a>

          <a
            href="mailto:info@neorecruits.com"
            className="flex items-center gap-4 p-4 rounded-2xl text-[#0b2677] hover:bg-white transition-all group shadow-none hover:shadow-xs"
          >
            <div className="size-10 rounded-full bg-white flex items-center justify-center group-hover:bg-[#0b2677] group-hover:text-white transition-all">
              <Mail className="size-5" />
            </div>
            <div className="flex flex-col overflow-hidden text-wrap">
              <span className="text-[10px] text-[#0b2677]/40 font-bold uppercase tracking-wider">
                Email Us
              </span>
              <span className="text-sm font-bold truncate text-[#0b2677]">
                info@neorecruits.com
              </span>
            </div>
          </a>

          <a
            href="https://wa.me/971500000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-2xl text-[#0b2677] hover:bg-white transition-all group shadow-none hover:shadow-xs"
          >
            <div className="size-10 rounded-full bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-all">
              <MessageSquare className="size-5 text-[#25D366] group-hover:text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-[#0b2677]/40 font-bold uppercase tracking-wider">
                WhatsApp
              </span>
              <span className="text-base font-bold text-[#0b2677]">
                Chat with us
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
