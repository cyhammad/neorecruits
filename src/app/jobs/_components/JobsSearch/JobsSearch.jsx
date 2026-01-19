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
} from "lucide-react";
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

export function JobsSearch({ onFilterChange }) {
  const [filters, setFilters] = React.useState({
    keyword: "",
    country: "All Countries",
    city: "All Cities",
    industry: "All Industries",
    jobType: "All Types",
    experience: "All Levels",
  });
  const citiesForCountry = cities[filters.country] || cities["All Countries"];

  const change = (key, val) => {
    const next = { ...filters, [key]: val };
    if (key === "country") next.city = "All Cities";
    setFilters(next);
    if (onFilterChange) onFilterChange(next);
  };

  return (
    <section className="relative py-8 sm:py-12 md:py-16 bg-[#f4f4f4] border-b border-[#e5e5e5]">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-[#e5e5e5] space-y-4">
          <div className="flex items-center gap-2 text-[#0b2677] mb-4">
            <Search className="w-5 h-5" />
            <h3 className="text-lg sm:text-xl font-bold">Search Jobs</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0b2677]/40" />
              <Input
                type="text"
                placeholder="Job title or keyword"
                value={filters.keyword}
                onChange={(e) => change("keyword", e.target.value)}
                className="pl-10 h-12 bg-[#f4f4f4] border-[#e5e5e5] text-[#0b2677]"
              />
            </div>
            <SearchSelect
              icon={MapPin}
              value={filters.country}
              onChange={(v) => change("country", v)}
              options={countries}
            />
            <SearchSelect
              icon={Building2}
              value={filters.city}
              onChange={(v) => change("city", v)}
              options={citiesForCountry}
              disabled={filters.country === "All Countries"}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <SearchSelect
              icon={Filter}
              value={filters.industry}
              onChange={(v) => change("industry", v)}
              options={industries}
            />
            <SearchSelect
              icon={Clock}
              value={filters.jobType}
              onChange={(v) => change("jobType", v)}
              options={jobTypes}
            />
            <SearchSelect
              icon={Award}
              value={filters.experience}
              onChange={(v) => change("experience", v)}
              options={experienceLevels}
            />
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
            <Button
              onClick={() => onFilterChange?.(filters)}
              className="rounded-lg bg-[#9a01cd] hover:bg-[#9a01cd]/90 text-white h-12 px-8 text-xs font-bold tracking-widest uppercase w-full sm:w-auto"
            >
              Search Jobs <Search className="ml-2 w-4 h-4" />
            </Button>
            <div className="text-sm text-[#0b2677]/60 text-center sm:text-right font-medium">
              <span className="font-bold text-[#0b2677]">1,200+</span> job
              openings available
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
