"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";
import { jobListings } from "./jobsData";
import { JobsListingsHeader } from "./JobsListingsHeader";
import { JobCard } from "./JobCard";
import { NoJobsFound } from "./NoJobsFound";

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
    <section className="relative py-12 sm:py-16 md:py-24 bg-[#f4f4f4]">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
          <JobsListingsHeader
            count={filteredJobs.length}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
          {filteredJobs.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <NoJobsFound />
          )}
          {filteredJobs.length >= 8 && (
            <div className="text-center pt-8">
              <Button
                variant="outline"
                className="rounded-lg border-2 border-[#0b2677]/20 text-[#0b2677] hover:bg-[#0b2677] hover:text-white transition-all duration-300 font-bold text-xs uppercase tracking-widest px-8 h-12"
              >
                Load More Jobs
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
