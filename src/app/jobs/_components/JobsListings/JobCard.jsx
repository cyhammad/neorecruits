"use client";

import Link from "next/link";
import {
  MapPin,
  Briefcase,
  Clock,
  ArrowRight,
  Building2,
  User,
} from "lucide-react";

export function JobCard({ job }) {
  return (
    <Link
      href={`/jobs/${job.id}`}
      className="group relative flex flex-col bg-white rounded-2xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-100/50 transition-all duration-300 hover:shadow-[0_30px_70px_rgba(11,38,119,0.12)] hover:-translate-y-1 hover:border-[#9a01cd]/20 h-full"
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-5">
        <div className="space-y-1.5">
          <h3 className="text-lg sm:text-xl font-black text-[#0b2677] leading-tight group-hover:text-[#9a01cd] transition-colors duration-300">
            {job.title}
          </h3>
          <div className="flex items-center gap-2 text-sm font-bold text-gray-500">
            <Building2 size={14} className="text-[#9a01cd]/60" />
            <span>{job.company}</span>
          </div>
        </div>
        <div className="w-10 h-10 rounded-xl bg-[#0b2677]/5 flex items-center justify-center text-[#0b2677] text-lg font-black group-hover:bg-[#9a01cd] group-hover:text-white transition-all duration-300">
          {job.company.charAt(0)}
        </div>
      </div>

      {/* Metadata Grid */}
      <div className="grid grid-cols-2 gap-y-3 gap-x-2 mb-6">
        <div className="flex items-center gap-2 text-[11px] font-bold text-[#0b2677]/70 uppercase tracking-wide">
          <MapPin size={14} className="text-[#9a01cd]/50 shrink-0" />
          <span className="truncate">
            {job.city} ({job.type})
          </span>
        </div>
        <div className="flex items-center gap-2 text-[11px] font-bold text-[#0b2677]/70 uppercase tracking-wide">
          <Briefcase size={14} className="text-[#9a01cd]/50 shrink-0" />
          <span className="truncate">{job.employmentType}</span>
        </div>
        <div className="flex items-center gap-2 text-[11px] font-bold text-[#0b2677]/70 uppercase tracking-wide">
          <User size={14} className="text-[#9a01cd]/50 shrink-0" />
          <span className="truncate">{job.experience}</span>
        </div>
        <div className="flex items-center gap-2 text-[11px] font-bold text-[#0b2677]/70 uppercase tracking-wide">
          <Clock size={14} className="text-[#9a01cd]/50 shrink-0" />
          <span className="truncate">{job.posted}</span>
        </div>
      </div>

      {/* Skills Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {job.skills?.slice(0, 3).map((skill, index) => (
          <span
            key={index}
            className="px-2.5 py-1 rounded-md bg-gray-50 text-[10px] font-bold text-gray-500 uppercase tracking-wider group-hover:bg-[#9a01cd]/5 group-hover:text-[#9a01cd] transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-auto pt-4 border-t border-gray-100 flex items-end justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-1">
            Salary Range
          </p>
          <p className="text-[#0b2677] font-black text-sm sm:text-base">
            {job.salary}
          </p>
        </div>

        <div className="flex items-center gap-2 text-[#9a01cd] text-xs font-black uppercase tracking-widest group-hover:translate-x-1 transition-transform duration-300">
          Apply Now
          <ArrowRight size={14} />
        </div>
      </div>
    </Link>
  );
}
