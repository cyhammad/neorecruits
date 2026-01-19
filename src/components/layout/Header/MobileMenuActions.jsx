"use client";

import Link from "next/link";
import { LogIn, UserPlus, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function MobileMenuActions() {
  return (
    <div className="flex flex-col gap-3">
      <Button
        variant="ghost"
        className="w-full justify-start gap-3 text-base py-6 px-4 text-[#0b2677] hover:bg-[#0b2677]/10 font-semibold rounded-lg transition-all duration-200"
      >
        <LogIn className="w-5 h-5" />
        Log in
      </Button>
      <Button className="w-full justify-center gap-3 text-base py-6 px-4 bg-[#9a01cd] hover:bg-[#9a01cd]/90 text-white font-bold uppercase tracking-wider rounded-lg transition-all duration-200 shadow-lg shadow-[#9a01cd]/20">
        <UserPlus className="w-5 h-5" />
        Sign up
      </Button>
      <Button
        variant="outline"
        className="w-full justify-center gap-3 text-base py-6 px-4 border-2 border-[#0b2677]/20 text-[#0b2677] hover:bg-[#0b2677] hover:text-white hover:border-[#0b2677] font-bold uppercase tracking-wider rounded-lg transition-all duration-200"
        asChild
      >
        <Link href="/contact">
          <Phone className="w-5 h-5" />
          Contact Us
        </Link>
      </Button>
    </div>
  );
}
