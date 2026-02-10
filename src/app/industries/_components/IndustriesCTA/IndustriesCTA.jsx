"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Briefcase, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function IndustriesCTA() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#fafafa] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_rgba(154,1,205,0.03),_transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-[#0b2677] rounded-[2.5rem] p-8 sm:p-12 md:p-16 overflow-hidden shadow-2xl shadow-[#0b2677]/20 group">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0b2677] via-[#081b53] to-[#05133b]" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#9a01cd]/20 blur-[100px] rounded-full group-hover:bg-[#9a01cd]/30 transition-colors duration-700" />

            {/* Grid Overlay */}
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative z-10 text-center space-y-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-lg mb-4 group-hover:scale-110 transition-transform duration-500">
                <Sparkles className="w-8 h-8 text-[#9a01cd]" />
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                Ready to Build Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-white">
                  Dream Team?
                </span>
              </h2>

              <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
                Whether you're in banking, technology, healthcare, or any other
                sector, we have the expertise to find the right talent for you.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-6">
                <Button
                  className="h-14 sm:h-16 px-8 sm:px-10 rounded-2xl bg-[#9a01cd] hover:bg-[#9a01cd] hover:scale-105 text-white text-sm font-black tracking-widest uppercase shadow-lg shadow-[#9a01cd]/30 transition-all duration-300"
                  asChild
                >
                  <Link href="/contact">Discuss Your Needs</Link>
                </Button>
                <Button
                  variant="outline"
                  className="h-14 sm:h-16 px-8 sm:px-10 rounded-2xl border-2 border-white/20 bg-transparent hover:bg-white text-white hover:text-[#0b2677] text-sm font-black tracking-widest uppercase transition-all duration-300"
                  asChild
                >
                  <Link href="/jobs">View Job Openings</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
