"use client";

import Link from "next/link";

export function JobCard({ job }) {
  return (
    <Link
      href={`/jobs/${job.id}`}
      className="group relative flex flex-col bg-white rounded-[2.5rem] p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100/50 transition-all duration-500 hover:shadow-[0_30px_70px_rgba(11,38,119,0.12)] hover:-translate-y-2 hover:border-[#9a01cd]/20 h-full min-h-[260px]"
    >
      {/* Content */}
      <div className="flex-grow space-y-4">
        <div className="space-y-2">
          <p className="text-[#9a01cd] text-[10px] font-black uppercase tracking-[0.2em] opacity-70">
            {job.industry}
          </p>
          <h3 className="text-lg sm:text-xl font-black text-[#0b2677] leading-tight group-hover:text-[#9a01cd] transition-colors duration-300">
            {job.title}
          </h3>
        </div>

        <div className="flex flex-col gap-2 pt-3">
          <div className="text-[#0b2677]/50 font-bold uppercase tracking-widest text-[10px]">
            {job.city || job.location.split(",")[0]}
          </div>
          <div className="text-[#0b2677]/50 font-bold uppercase tracking-widest text-[10px]">
            {job.posted}
          </div>
        </div>
      </div>

      {/* Footer / CTA */}
      <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between group-hover:border-gray-100 transition-colors">
        <span className="text-[11px] font-black text-[#0b2677] uppercase tracking-[0.15em] opacity-40 group-hover:opacity-100 transition-opacity">
          View Details
        </span>
        <div className="w-11 h-11 rounded-full bg-[#0b2677]/5 flex items-center justify-center text-[#0b2677] group-hover:bg-[#9a01cd] group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-[#9a01cd]/20">
          <svg
            className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1"
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
    </Link>
  );
}
