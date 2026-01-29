"use client";

import * as React from "react";
import {
  Search,
  Briefcase,
  MapPin,
  Filter,
  Building2,
  Clock,
  Award,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import {
  countries,
  cities,
  industries,
  jobTypes,
  experienceLevels,
} from "./searchData";
import { SearchSelect } from "./SearchSelect";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function JobsSearch({ onFilterChange }) {
  const [filters, setFilters] = React.useState({
    keyword: "",
    country: "All Countries",
    city: "All Cities",
    industry: "All Industries",
    jobType: "All Types",
    experience: "All Levels",
  });
  const [showAdvanced, setShowAdvanced] = React.useState(false);

  const citiesForCountry = cities[filters.country] || cities["All Countries"];

  const change = (key, val) => {
    const next = { ...filters, [key]: val };
    if (key === "country") next.city = "All Cities";
    setFilters(next);
    if (onFilterChange) onFilterChange(next);
  };

  return (
    <section className="relative pt-12 sm:pt-20 pb-8 sm:pb-10 bg-white overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-100/30 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100/30 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-8 sm:mb-12">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#9a01cd]">
                <Sparkles className="w-5 h-5 fill-current" />
                <span className="text-xs font-black uppercase tracking-[0.2em]">
                  Power Search
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0b2677] uppercase tracking-tighter">
                Find Your Next Career <br className="hidden sm:block" />
                <span className="text-[#9a01cd]">Path Today.</span>
              </h2>
            </div>
            <div className="hidden md:block text-right">
              <div className="text-3xl font-black text-[#0b2677]">1,200+</div>
              <div className="text-xs font-bold text-[#0b2677]/40 uppercase tracking-widest">
                Active Openings
              </div>
            </div>
          </div>

          {/* Main Search Bar Wrapper */}
          <div className="group relative">
            {/* Outer Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#9a01cd] to-[#0b2677] rounded-[2.5rem] opacity-10 blur-xl group-hover:opacity-20 transition-opacity duration-500" />

            <div className="relative bg-white rounded-[2rem] shadow-[0_30px_100px_rgba(0,0,0,0.05)] border border-gray-100 p-3 sm:p-4 overflow-hidden">
              <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3">
                {/* Search Input */}
                <div className="flex-grow relative">
                  <div className="absolute left-6 top-1/2 -translate-y-1/2">
                    <Briefcase className="w-5 h-5 text-[#9a01cd]" />
                  </div>
                  <Input
                    type="text"
                    placeholder="Search titles, skills, or companies..."
                    value={filters.keyword}
                    onChange={(e) => change("keyword", e.target.value)}
                    className="w-full h-14 sm:h-16 pl-14 pr-6 bg-gray-50/50 border-none rounded-2xl focus-visible:ring-2 focus-visible:ring-[#9a01cd]/20 text-[#0b2677] text-base font-medium placeholder:text-gray-400 placeholder:font-normal"
                  />
                </div>

                {/* Vertical Divider (Desktop) */}
                <div className="hidden lg:block w-[1px] h-10 bg-gray-200 mx-2" />

                {/* Country Select */}
                <div className="lg:w-60">
                  <SearchSelect
                    icon={MapPin}
                    value={filters.country}
                    onChange={(v) => change("country", v)}
                    options={countries}
                    className="h-14 sm:h-16"
                  />
                </div>

                {/* Search Button */}
                <Button
                  onClick={() => onFilterChange?.(filters)}
                  className="h-14 sm:h-16 px-8 rounded-2xl bg-[#0b2677] hover:bg-[#0b2677]/95 border-none text-white text-sm font-black tracking-widest uppercase transition-all duration-300 group/btn relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Search Jobs
                    <Search className="w-5 h-5 transition-transform duration-300 group-hover/btn:scale-110" />
                  </span>

                  {/* High-speed radial animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#9a01cd] to-[#0b2677] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 -z-0" />
                </Button>
              </div>

              {/* Toggle for Advanced Filters */}
              <button
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="w-full mt-4 flex items-center justify-center gap-2 text-xs font-bold text-[#0b2677]/40 hover:text-[#0b2677] transition-colors py-2 uppercase tracking-widest"
              >
                {showAdvanced ? "Basic Search" : "Advanced Filters"}
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-500 ${showAdvanced ? "rotate-180" : ""}`}
                />
              </button>

              {/* Advanced Filters Area */}
              <AnimatePresence>
                {showAdvanced && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 pb-4 border-t border-gray-100 mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      <SearchSelect
                        label="City"
                        icon={Building2}
                        value={filters.city}
                        onChange={(v) => change("city", v)}
                        options={citiesForCountry}
                        disabled={filters.country === "All Countries"}
                      />
                      <SearchSelect
                        label="Industry"
                        icon={Filter}
                        value={filters.industry}
                        onChange={(v) => change("industry", v)}
                        options={industries}
                      />
                      <SearchSelect
                        label="Job Type"
                        icon={Clock}
                        value={filters.jobType}
                        onChange={(v) => change("jobType", v)}
                        options={jobTypes}
                      />
                      <SearchSelect
                        label="Experience"
                        icon={Award}
                        value={filters.experience}
                        onChange={(v) => change("experience", v)}
                        options={experienceLevels}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Quick Filter Tags (Static Demo) */}
          <div className="mt-8 flex flex-wrap items-center gap-3 justify-center">
            <span className="text-xs font-black text-[#0b2677]/40 uppercase tracking-[0.2em] mr-2">
              Popular:
            </span>
            {["Finance", "IT", "Healthcare", "Engineering", "GCC"].map(
              (tag) => (
                <button
                  key={tag}
                  className="px-5 py-2 rounded-full border border-gray-200 text-[#0b2677] text-xs font-bold hover:border-[#9a01cd] hover:text-[#9a01cd] transition-all duration-300 bg-white"
                >
                  {tag}
                </button>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
