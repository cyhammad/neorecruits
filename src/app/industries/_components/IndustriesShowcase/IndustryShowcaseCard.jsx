"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function IndustryShowcaseCard({ industry }) {
  return (
    <Link
      href={industry.link}
      className="group relative block h-full w-full overflow-hidden rounded-[2.5rem]"
    >
      {/* Background Image with Zoom Effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src={industry.image}
          alt={industry.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
        {/* Dynamic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b2677] via-[#0b2677]/60 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
        <div className="absolute inset-0 bg-[#9a01cd]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
      </div>

      {/* Floating Header (Top) */}
      <div className="absolute top-0 left-0 right-0 p-8 z-10 flex justify-between items-start">
        <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-[#9a01cd] group-hover:border-[#9a01cd] transition-all duration-500">
          <industry.icon className="w-6 h-6 text-white" />
        </div>

        {industry.isCore && (
          <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#9a01cd]/90 backdrop-blur-md border border-white/10 shadow-lg">
            <Sparkles className="w-3 h-3 text-white" />
            <span className="text-[10px] font-black uppercase tracking-widest text-white">
              Core
            </span>
          </div>
        )}
      </div>

      {/* Content Content (Bottom) */}
      <div className="absolute bottom-0 left-0 right-0 p-8 z-10 flex flex-col justify-end h-full">
        {/* Title & Stats (Always Visible) */}
        <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <p className="text-xs font-bold text-[#9a01cd] uppercase tracking-widest mb-2 opacity-80 group-hover:opacity-100 transition-opacity">
            {industry.stats}
          </p>
          <h3 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight leading-[0.9] mb-4">
            {industry.title}
          </h3>

          {/* Expanded Content (Reveals on Hover) */}
          <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 ease-out delay-75 overflow-hidden">
            <p className="text-white/80 text-sm leading-relaxed mb-6 font-medium line-clamp-3">
              {industry.description}
            </p>

            {/* Roles Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {industry.keyRoles.slice(0, 3).map((role, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[10px] font-bold text-white uppercase tracking-wide backdrop-blur-sm"
                >
                  {role}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 text-white font-black text-xs uppercase tracking-widest group/btn">
              <span className="border-b border-transparent group-hover/btn:border-[#9a01cd] transition-colors">
                Explore Opportunities
              </span>
              <ArrowUpRight className="w-4 h-4 text-[#9a01cd] group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
