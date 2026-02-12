"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, MapPin, DollarSign, Clock, Building2 } from "lucide-react";

export function JobDetailSimilarJobs({ currentJobId }) {
  const [similarJobs, setSimilarJobs] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchSimilar = async () => {
      try {
        const res = await fetch(
          "https://jobify-backend-rsyx5.sevalla.app/api/sitemap/jobs",
        );
        if (!res.ok) return;
        const result = await res.json();
        const jobs = result.data.data;

        const filtered = jobs
          .filter((j) => j.id.toString() !== currentJobId.toString())
          .slice(0, 4)
          .map((j) => ({
            id: j.id,
            title: j.title,
            company: j.company_name || "Unknown Company",
            location: j.location || "Remote",
            salary: j.salary_range
              ? j.salary_range.replace(/USD/g, "").replace(/To/gi, "-")
              : "Competitive",
            posted: "Recently",
            type: j.job_type || "Full-time",
            experience: j.experience_level || "Mid-Level",
          }));

        setSimilarJobs(filtered);
      } catch (error) {
        console.error("Error fetching similar jobs:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSimilar();
  }, [currentJobId]);

  if (isLoading)
    return (
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8 pt-12">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="animate-pulse h-48 sm:h-80 bg-gray-100/50 border border-gray-100 rounded-3xl"
          />
        ))}
      </div>
    );

  if (similarJobs.length === 0) return null;

  return (
    <section className="space-y-12">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl sm:text-4xl font-black text-[#0b2677] tracking-tight uppercase">
          Similar Opportunities
        </h2>
        <Link
          href="/jobs"
          className="hidden sm:flex items-center gap-2 text-[#9a01cd] font-black uppercase text-xs tracking-widest hover:text-[#0b2677] transition-colors"
        >
          View All Jobs <ArrowRight size={18} />
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
        {similarJobs.map((job) => (
          <Link
            key={job.id}
            href={`/jobs/${job.id}`}
            className="group relative flex flex-col bg-white border border-gray-100 p-4 sm:p-8 rounded-2xl sm:rounded-3xl hover:bg-[#0b2677] transition-all duration-300 h-full min-h-[180px] sm:min-h-[340px] shadow-sm hover:shadow-xl group/card"
          >
            {/* Header: ID & Badge */}
            <div className="flex items-center justify-between mb-3 sm:mb-8">
              <div className="flex items-center gap-1.5 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-gray-50 border border-gray-100 group-hover:bg-[#9a01cd] group-hover:border-[#9a01cd] transition-all duration-300">
                <span className="size-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#9a01cd] group-hover:bg-white animate-pulse" />
                <span className="text-[7px] sm:text-[10px] font-bold uppercase tracking-widest text-[#0b2677]/70 group-hover:text-white">
                  {job.type}
                </span>
              </div>
              <span className="hidden sm:block text-[10px] font-mono text-[#0b2677]/20 group-hover:text-white/40 transition-colors">
                #{job.id.toString().padStart(4, "0")}
              </span>
            </div>

            {/* Content */}
            <div className="mb-auto space-y-2 sm:space-y-4">
              <div>
                <h3 className="text-[11px] sm:text-xl font-black text-[#0b2677] mb-1 sm:mb-2 leading-tight group-hover:text-white transition-colors line-clamp-2 uppercase">
                  {job.title}
                </h3>
                <div className="flex items-center gap-1 sm:gap-1.5 text-[#0b2677]/60 group-hover:text-white/60 text-[8px] sm:text-sm font-medium transition-colors">
                  <Building2
                    size={10}
                    className="text-[#9a01cd] group-hover:text-white sm:size-[14px]"
                  />
                  <span className="truncate">{job.company}</span>
                </div>
              </div>

              <div className="hidden sm:flex flex-wrap gap-2 pt-2">
                <div className="px-3 py-1.5 rounded-lg bg-gray-50 text-[10px] font-bold uppercase tracking-wide text-[#0b2677]/40 border border-gray-100 group-hover:bg-white/10 group-hover:text-white/60 group-hover:border-white/10 transition-all">
                  {job.experience}
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-gray-50 text-[10px] font-bold uppercase tracking-wide text-[#0b2677]/40 border border-gray-100 group-hover:bg-white/10 group-hover:text-white/60 group-hover:border-white/10 transition-all">
                  {job.location}
                </div>
              </div>
            </div>

            {/* Footer: Salary & CTA */}
            <div className="mt-4 sm:mt-8 pt-3 sm:pt-6 border-t border-gray-50 group-hover:border-white/10 transition-colors flex items-center justify-between">
              <div className="min-w-0">
                <p className="hidden sm:block text-[9px] font-bold uppercase tracking-widest text-[#0b2677]/30 group-hover:text-white/40 mb-1 transition-colors">
                  Scale / Year
                </p>
                <p className="text-[9px] sm:text-sm font-black text-[#0b2677] group-hover:text-white transition-colors truncate">
                  {job.salary}
                </p>
              </div>

              <div className="size-6 sm:w-10 sm:h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#0b2677] group-hover:bg-[#9a01cd] group-hover:text-white group-hover:scale-110 transition-all duration-300 shrink-0">
                <ArrowRight
                  size={12}
                  className="-rotate-45 group-hover:rotate-0 transition-transform duration-300 sm:size-[18px]"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
