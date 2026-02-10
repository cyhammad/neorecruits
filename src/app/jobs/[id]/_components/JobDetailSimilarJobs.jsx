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
          .slice(0, 3)
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-12">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="animate-pulse h-80 bg-white/5 border border-white/10 rounded-3xl"
          />
        ))}
      </div>
    );

  if (similarJobs.length === 0) return null;

  return (
    <section className="space-y-12">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Similar Opportunities
        </h2>
        <Link
          href="/jobs"
          className="hidden sm:flex items-center gap-2 text-[#9a01cd] font-bold hover:text-white transition-colors"
        >
          View All Jobs <ArrowRight size={18} />
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {similarJobs.map((job) => (
          <Link
            key={job.id}
            href={`/jobs/${job.id}`}
            className="group relative flex flex-col bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-[#9a01cd]/10 hover:border-[#9a01cd]/50 transition-all duration-300 h-full min-h-[340px]"
          >
            {/* Header: ID & Badge */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 group-hover:bg-[#9a01cd] group-hover:border-[#9a01cd] transition-all duration-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9a01cd] group-hover:bg-white animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/70 group-hover:text-white">
                  {job.type}
                </span>
              </div>
              <span className="text-[10px] font-mono text-white/30 group-hover:text-white/60 transition-colors">
                #{job.id.toString().padStart(4, "0")}
              </span>
            </div>

            {/* Content */}
            <div className="mb-auto space-y-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-white transition-colors">
                  {job.title}
                </h3>
                <div className="flex items-center gap-2 text-white/60 text-sm font-medium">
                  <Building2 size={14} className="text-[#9a01cd]" />
                  {job.company}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <div className="px-3 py-1.5 rounded-lg bg-white/5 text-[10px] font-bold uppercase tracking-wide text-white/50 border border-white/5">
                  {job.experience}
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-white/5 text-[10px] font-bold uppercase tracking-wide text-white/50 border border-white/5">
                  {job.location}
                </div>
              </div>
            </div>

            {/* Footer: Salary & CTA */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between group-hover:border-white/20 transition-colors">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-widest text-white/40 mb-1">
                  Scale / Year
                </p>
                <p className="text-sm font-bold text-white group-hover:text-[#9a01cd] transition-colors">
                  {job.salary}
                </p>
              </div>

              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-[#9a01cd] group-hover:scale-110 transition-all duration-300">
                <ArrowRight
                  size={18}
                  className="-rotate-45 group-hover:rotate-0 transition-transform duration-300"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
