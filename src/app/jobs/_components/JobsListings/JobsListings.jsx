"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";
import { jobListings } from "./jobsData";
import { JobsListingsHeader } from "./JobsListingsHeader";
import { JobCard } from "./JobCard";
import { NoJobsFound } from "./NoJobsFound";
import { JobBanner } from "./JobBanner";
import { motion, AnimatePresence } from "framer-motion";

export function JobsListings({ filters = null }) {
  const [sortBy, setSortBy] = React.useState("latest");
  const [filteredJobs, setFilteredJobs] = React.useState(jobListings);

  React.useEffect(() => {
    let jobs = [...jobListings];
    if (filters) {
      if (filters.keyword) {
        const k = filters.keyword.toLowerCase();
        jobs = jobs.filter(
          (j) =>
            j.title.toLowerCase().includes(k) ||
            j.company.toLowerCase().includes(k) ||
            j.description.toLowerCase().includes(k),
        );
      }
      if (filters.country && filters.country !== "All Countries")
        jobs = jobs.filter((j) => j.country === filters.country);
      if (filters.city && filters.city !== "All Cities")
        jobs = jobs.filter((j) => j.city === filters.city);
      if (filters.industry && filters.industry !== "All Industries")
        jobs = jobs.filter((j) => j.industry === filters.industry);
      if (filters.jobType && filters.jobType !== "All Types")
        jobs = jobs.filter((j) => j.type === filters.jobType);
      if (filters.experience && filters.experience !== "All Levels")
        jobs = jobs.filter((j) => j.experience === filters.experience);
    }

    switch (sortBy) {
      case "latest":
        jobs.sort((a, b) => b.postedDate - a.postedDate);
        break;
      case "oldest":
        jobs.sort((a, b) => a.postedDate - b.postedDate);
        break;
      case "salary-high":
        jobs.sort((a, b) => (b.salaryMax || 0) - (a.salaryMax || 0));
        break;
      case "salary-low":
        jobs.sort((a, b) => (a.salaryMin || 0) - (b.salaryMin || 0));
        break;
    }
    setFilteredJobs(jobs);
  }, [filters, sortBy]);

  return (
    <section className="relative pt-4 sm:pt-6 pb-20 sm:pb-28 bg-[#fafafa]">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
          {/* Header with Sort & Count */}
          <JobsListingsHeader
            count={filteredJobs.length}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Side: Job Cards Grid */}
            <div className="lg:col-span-8">
              {filteredJobs.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  <AnimatePresence mode="popLayout">
                    {filteredJobs.map((job, idx) => (
                      <motion.div
                        key={job.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                      >
                        <JobCard job={job} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              ) : (
                <NoJobsFound />
              )}

              {filteredJobs.length >= 8 && (
                <div className="text-center pt-12">
                  <Button
                    variant="outline"
                    className="rounded-2xl border-none bg-white shadow-xl shadow-gray-200/50 text-[#0b2677] hover:bg-[#0b2677] hover:text-white transition-all duration-300 font-black text-[10px] uppercase tracking-[0.2em] px-10 h-14"
                  >
                    Load More Jobs
                  </Button>
                </div>
              )}
            </div>

            {/* Right Side: Featured Banner Sidebar */}
            <div className="lg:col-span-4 sticky top-10 h-fit hidden lg:block">
              <JobBanner />

              {/* Extra Sidebar Info */}
              <div className="mt-8 p-8 bg-[#0b2677] rounded-[2rem] text-white space-y-6">
                <h4 className="text-xl font-black uppercase tracking-tight">
                  Need Help?
                </h4>
                <p className="text-sm text-white/60 leading-relaxed font-medium">
                  Can't find the right role? Send us your CV and our consultants
                  will reach out when a fit occurs.
                </p>
                <Button className="w-full bg-[#9a01cd] hover:bg-[#9a01cd]/90 text-white font-black uppercase tracking-widest h-12 rounded-xl border-none">
                  Upload CV
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
