"use client";

import * as React from "react";
import { Info } from "lucide-react";

export function JobDetailOverview({ job }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  return (
    <section className="bg-white/5 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-white/10 shadow-xl space-y-8">
      <div className="flex items-center gap-4 border-b border-white/5 pb-6">
        <div className="w-10 h-10 rounded-full bg-[#9a01cd]/20 flex items-center justify-center">
          <Info className="w-5 h-5 text-[#9a01cd]" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Job Overview
        </h2>
      </div>

      {mounted ? (
        <div
          className="prose prose-sm sm:prose-base max-w-none prose-invert text-white/80 font-medium leading-relaxed prose-headings:text-white prose-headings:font-bold prose-headings:text-xl prose-strong:text-white prose-strong:font-bold prose-li:marker:text-[#9a01cd] prose-ul:list-disc"
          dangerouslySetInnerHTML={{ __html: job.overview }}
        />
      ) : (
        <div className="animate-pulse space-y-3">
          <div className="h-4 bg-white/10 rounded w-full" />
          <div className="h-4 bg-white/10 rounded w-5/6" />
          <div className="h-4 bg-white/10 rounded w-4/6" />
        </div>
      )}
    </section>
  );
}
