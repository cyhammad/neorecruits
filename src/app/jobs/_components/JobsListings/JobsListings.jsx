"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";
import { JobsListingsHeader } from "./JobsListingsHeader";
import { JobCard } from "./JobCard";
import { NoJobsFound } from "./NoJobsFound";
import { JobBanner } from "./JobBanner";
import { motion, AnimatePresence } from "framer-motion";

export function JobsListings({ filters = null }) {
  const [sortBy, setSortBy] = React.useState("latest");
  const [fetchedJobs, setFetchedJobs] = React.useState([]);
  const [filteredJobs, setFilteredJobs] = React.useState([]);
  const [visibleCount, setVisibleCount] = React.useState(12);
  const [animationKey, setAnimationKey] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchJobs = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://jobify-backend-rsyx5.sevalla.app/api/sitemap/jobs",
        );
        if (!response.ok) throw new Error("Failed to fetch jobs");
        const result = await response.json();

        const mappedJobs = result.data.data.map((job) => {
          let salaryMin = 0;
          let salaryMax = 0;
          if (job.salary_range) {
            const numbers = job.salary_range.match(/(\d[\d,]*)/g);
            if (numbers && numbers.length > 0) {
              salaryMin = parseInt(numbers[0].replace(/,/g, ""), 10);
              salaryMax =
                numbers.length > 1
                  ? parseInt(numbers[1].replace(/,/g, ""), 10)
                  : salaryMin;
            }
          }

          const locationParts = job.location
            ? job.location.split(",")
            : ["Unknown"];
          const country = locationParts[0].trim();
          const city =
            locationParts.length > 1 ? locationParts[1].trim() : country;

          return {
            id: job.id,
            title: job.title,
            company: job.company_name || "Unknown Company",
            location: job.location || "Remote",
            country: country,
            city: city,
            type: job.work_mode || "Remote",
            employmentType: job.job_type || "Full-time",
            salary: job.salary_range || "Competitive",
            salaryMin,
            salaryMax,
            posted: "Recently",
            industry: "Technology",
            experience: job.experience_level || "Not Specified",
            description: job.description,
            requirements: [],
            skills: [],
            logo: job.company_logo || null,
          };
        });

        setFetchedJobs(mappedJobs);
        setFilteredJobs(mappedJobs);
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  React.useEffect(() => {
    if (isLoading) return;

    let jobs = [...fetchedJobs];
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
      case "salary-high":
        jobs.sort((a, b) => (b.salaryMax || 0) - (a.salaryMax || 0));
        break;
      case "salary-low":
        jobs.sort((a, b) => (a.salaryMin || 0) - (b.salaryMin || 0));
        break;
      default:
        break;
    }
    setFilteredJobs(jobs);
    setVisibleCount(12);
    setAnimationKey((prev) => prev + 1);
  }, [filters, sortBy, fetchedJobs, isLoading]);

  const displayJobs = filteredJobs.slice(0, visibleCount);
  const handleLoadMore = () => setVisibleCount((prev) => prev + 12);

  return (
    <section className="relative pt-2 pb-20 sm:pb-28 bg-[#fafafa]">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          <JobsListingsHeader
            count={filteredJobs.length}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />

          {isLoading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0b2677]"></div>
            </div>
          ) : error ? (
            <div className="text-center py-20 text-red-500">
              <p>Error loading jobs: {error}</p>
              <Button onClick={() => window.location.reload()} className="mt-4">
                Retry
              </Button>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start mt-2">
              {/* Jobs Column */}
              <div className="flex-1 w-full">
                {displayJobs.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${animationKey}-${visibleCount}`}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={{
                          hidden: {},
                          visible: {
                            transition: {
                              staggerChildren: 0.04,
                              delayChildren: 0.05,
                            },
                          },
                          exit: {
                            transition: {
                              staggerChildren: 0.02,
                              staggerDirection: -1,
                            },
                          },
                        }}
                        className="contents"
                      >
                        {displayJobs.map((job) => (
                          <motion.div
                            key={job.id}
                            initial="hidden"
                            animate="visible"
                            variants={{
                              hidden: { opacity: 0, y: 40, scale: 0.95 },
                              visible: {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                transition: {
                                  type: "spring",
                                  stiffness: 260,
                                  damping: 20,
                                },
                              },
                              exit: {
                                opacity: 0,
                                y: -20,
                                scale: 0.97,
                                transition: { duration: 0.15 },
                              },
                            }}
                          >
                            <JobCard job={job} />
                          </motion.div>
                        ))}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                ) : (
                  <NoJobsFound />
                )}

                {!isLoading && !error && filteredJobs.length > visibleCount && (
                  <div className="flex justify-center mt-8 pb-4">
                    <Button
                      onClick={handleLoadMore}
                      className="group relative pl-8 pr-6 py-6 bg-[#0b2677] text-white hover:bg-[#061852] rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/20 hover:-translate-y-0.5"
                    >
                      <div className="flex items-center gap-3">
                        <span>Load More Jobs</span>
                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                          <svg
                            className="w-3 h-3 text-white group-hover:translate-y-0.5 transition-transform duration-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                    </Button>
                  </div>
                )}
              </div>

              {/* Sidebar Column */}
              <div className="hidden lg:block lg:w-[320px] xl:w-[380px] shrink-0 sticky top-24 space-y-6">
                <JobBanner />
                <div className="p-6 bg-[#0b2677] rounded-[2rem] text-white space-y-4">
                  <h4 className="text-lg font-black uppercase tracking-tight">
                    Need Help?
                  </h4>
                  <p className="text-xs text-white/60 leading-relaxed font-medium">
                    Can&apos;t find the right role? Send us your CV and our
                    consultants will reach out when a fit occurs.
                  </p>
                  <Button className="w-full bg-[#9a01cd] hover:bg-[#9a01cd]/90 text-white font-black uppercase tracking-widest h-11 rounded-xl border-none text-[10px]">
                    Upload CV
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
