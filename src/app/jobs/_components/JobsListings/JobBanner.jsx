"use client";

import Image from "next/image";
import { MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function JobBanner() {
  return (
    <div className="relative w-full aspect-[4/5] sm:aspect-square md:aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_30px_100px_rgba(11,38,119,0.15)] group">
      {/* Background with stylized overlay or image */}
      <div className="absolute inset-0 bg-[#0b2677]">
        <Image
          src="/hero-2.png" // Using an existing one for now, or generate specialized
          alt="Featured Job"
          fill
          className="object-cover opacity-60 mix-blend-overlay transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b2677] via-[#0b2677]/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500 rounded-full text-white text-[10px] font-black uppercase tracking-widest animate-pulse">
            <Sparkles className="w-3 h-3" />
            Urgent Hiring
          </div>

          <h3 className="text-3xl sm:text-4xl font-black text-white leading-none tracking-tight">
            DIRECTOR OF <br />
            <span className="text-emerald-400">LEGAL SECTOR</span>
          </h3>

          <div className="flex items-center gap-2 text-white/80 font-bold uppercase tracking-widest text-xs">
            <MapPin className="w-4 h-4 text-emerald-400" />
            Skopje, Macedonia
          </div>

          <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-black uppercase tracking-widest h-14 rounded-2xl shadow-lg shadow-emerald-500/20 active:scale-95 transition-all">
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
}
