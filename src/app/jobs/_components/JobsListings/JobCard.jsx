"use client";

import Link from "next/link";
import { MapPin, Briefcase, Clock, Banknote } from "lucide-react";

export function JobCard({ job }) {
  return (
    <Link
      href={`/jobs/${job.id}`}
      className="group relative flex flex-col bg-white rounded-[2.5rem] p-4 sm:p-5 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100/50 transition-all duration-500 hover:shadow-[0_30px_70px_rgba(11,38,119,0.12)] hover:-translate-y-2 hover:border-[#9a01cd]/20 h-full min-h-[180px]"
    >
      {/* Top Content */}
      <div className="flex-grow space-y-1.5 mb-3">
        <p className="text-[#9a01cd] text-[10px] font-black uppercase tracking-[0.2em] opacity-70">
          {job.industry}
        </p>
        <div className="space-y-1">
          <h3 className="text-lg font-black text-[#0b2677] leading-tight group-hover:text-[#9a01cd] transition-colors duration-300">
            {job.title}
          </h3>
          <p className="text-[#0b2677]/60 text-xs leading-relaxed line-clamp-2 font-medium">
            {job.description}
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="space-y-3">
        {/* Metadata Grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 pt-3 border-t border-gray-50/50">
          <div className="flex items-center gap-2 text-[#0b2677]/60 font-bold text-[10px] uppercase tracking-wider">
            <MapPin size={12} className="text-[#9a01cd]/40 shrink-0" />
            <span className="truncate">
              {job.city || job.location.split(",")[0]}
            </span>
          </div>
          <div className="flex items-center gap-2 text-[#0b2677]/60 font-bold text-[10px] uppercase tracking-wider">
            <Briefcase size={12} className="text-[#9a01cd]/40 shrink-0" />
            <span className="truncate">{job.type}</span>
          </div>
          <div className="flex items-center gap-2 text-[#0b2677]/60 font-bold text-[10px] uppercase tracking-wider">
            <Clock size={12} className="text-[#9a01cd]/40 shrink-0" />
            <span className="truncate">{job.posted}</span>
          </div>
          <div className="flex items-center gap-2 text-[#9a01cd] font-black text-[10px] uppercase tracking-widest">
            <Banknote size={12} className="text-[#9a01cd]/70 shrink-0" />
            <span className="truncate">{job.salary}</span>
          </div>
        </div>

        {/* Footer / CTA */}
        <div className="pt-3 border-t border-gray-50 flex items-center justify-between group-hover:border-gray-100 transition-colors">
          <span className="text-[11px] font-black text-[#0b2677] uppercase tracking-[0.15em] opacity-40 group-hover:opacity-100 transition-opacity">
            View Details
          </span>
          <div className="w-8 h-8 rounded-full bg-[#0b2677]/5 flex items-center justify-center text-[#0b2677] group-hover:bg-[#9a01cd] group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-[#9a01cd]/20">
            <svg
              className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
