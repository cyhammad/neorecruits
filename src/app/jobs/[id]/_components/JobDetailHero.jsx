"use client";

import * as React from "react";
import { MapPin, Briefcase, Clock, DollarSign, Building2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function JobDetailHero({ job }) {
  // Helper to format salary
  const displaySalary = job.salary
    ? job.salary.replace(/USD/g, "").replace(/To/gi, "-")
    : "Competitive";

  return (
    <section className="relative pt-44 sm:pt-52 pb-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto space-y-10">
          {/* Header Content */}
          <div className="space-y-6 max-w-4xl">
            <div className="flex items-center gap-3 flex-wrap">
              <Badge className="bg-[#9a01cd] hover:bg-[#8a01b8] text-white px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide border-none">
                {job.type}
              </Badge>
              <Badge
                variant="outline"
                className="bg-white/10 text-white border-white/20 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide backdrop-blur-sm"
              >
                {job.industry}
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              {job.title}
            </h1>

            <div className="flex items-center gap-3 text-white/80">
              <Building2 className="w-6 h-6 text-[#9a01cd]" />
              <p className="text-xl sm:text-2xl font-bold">{job.company}</p>
            </div>
          </div>

          {/* Stats Glass Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#9a01cd]/20 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-[#9a01cd]" />
              </div>
              <div>
                <p className="text-xs font-bold text-white/50 uppercase tracking-wider mb-1">
                  Location
                </p>
                <p className="text-base sm:text-lg font-bold text-white leading-tight">
                  {job.location}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#9a01cd]/20 flex items-center justify-center shrink-0">
                <DollarSign className="w-6 h-6 text-[#9a01cd]" />
              </div>
              <div>
                <p className="text-xs font-bold text-white/50 uppercase tracking-wider mb-1">
                  Salary Range
                </p>
                <p className="text-base sm:text-lg font-bold text-white leading-tight">
                  {displaySalary}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#9a01cd]/20 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-[#9a01cd]" />
              </div>
              <div>
                <p className="text-xs font-bold text-white/50 uppercase tracking-wider mb-1">
                  Posted
                </p>
                <p className="text-base sm:text-lg font-bold text-white leading-tight">
                  {job.posted}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#9a01cd]/20 flex items-center justify-center shrink-0">
                <Briefcase className="w-6 h-6 text-[#9a01cd]" />
              </div>
              <div>
                <p className="text-xs font-bold text-white/50 uppercase tracking-wider mb-1">
                  Experience
                </p>
                <p className="text-base sm:text-lg font-bold text-white leading-tight">
                  {job.experience}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
