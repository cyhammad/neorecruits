"use client";

import * as React from "react";
import { Info } from "lucide-react";

export function JobDetailOverview({ job }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  return (
    <section className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-sm space-y-8 group transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center gap-4 border-b border-gray-50 pb-6">
        <div className="size-10 rounded-full bg-[#9a01cd]/10 flex items-center justify-center group-hover:bg-[#9a01cd] transition-colors duration-300">
          <Info className="size-5 text-[#9a01cd] group-hover:text-white transition-colors duration-300" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#0b2677] tracking-tight uppercase">
          Job Overview
        </h2>
      </div>

      {mounted ? (
        <div
          className="prose prose-sm sm:prose-base max-w-none text-[#0b2677]/70 font-medium leading-relaxed prose-headings:text-[#0b2677] prose-headings:font-bold prose-headings:text-xl prose-strong:text-[#0b2677] prose-strong:font-bold prose-li:marker:text-[#9a01cd] prose-ul:list-disc transition-colors duration-300"
          dangerouslySetInnerHTML={{ __html: job.overview }}
        />
      ) : (
        <div className="animate-pulse space-y-3">
          <div className="h-4 bg-gray-100 rounded w-full" />
          <div className="h-4 bg-gray-100 rounded w-5/6" />
          <div className="h-4 bg-gray-100 rounded w-4/6" />
        </div>
      )}
    </section>
  );
}
