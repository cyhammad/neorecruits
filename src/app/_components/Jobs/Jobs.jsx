"use client";

import * as React from "react";
import { useInView } from "framer-motion";
import { JobsImages } from "./JobsImages";
import { JobsContent } from "./JobsContent";
import { JobCard } from "../../jobs/_components/JobsListings/JobCard";
import { jobListings } from "../../jobs/_components/JobsListings/jobsData";

export function Jobs() {
  const ref = React.useRef(null);
  const featuredJobs = jobListings.slice(0, 3);

  return (
    <section
      ref={ref}
      className="relative py-12 sm:py-16 md:py-24 bg-[#f4f4f4] overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto mb-16">
          <JobsImages />
          <JobsContent />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-black text-[#0b2677] tracking-tight">
              Featured Opportunities
            </h3>
            <a
              href="/jobs"
              className="hidden sm:flex items-center gap-2 text-[#9a01cd] font-bold text-sm tracking-widest uppercase hover:text-[#0b2677] transition-colors"
            >
              View All
              <svg
                className="w-4 h-4"
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
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <a
              href="/jobs"
              className="inline-flex items-center gap-2 text-[#9a01cd] font-bold text-sm tracking-widest uppercase hover:text-[#0b2677] transition-colors"
            >
              View All Jobs
              <svg
                className="w-4 h-4"
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
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
