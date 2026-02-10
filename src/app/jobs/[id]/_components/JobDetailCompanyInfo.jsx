"use client";

import * as React from "react";
import {
  Building2,
  Globe,
  MapPin,
  Calendar,
  Users,
  Briefcase,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export function JobDetailCompanyInfo({ job }) {
  return (
    <section className="bg-white/5 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-white/10 shadow-xl space-y-8">
      <div className="flex items-center gap-4 border-b border-white/5 pb-6">
        <div className="w-10 h-10 rounded-full bg-[#9a01cd]/20 flex items-center justify-center">
          <Building2 className="w-5 h-5 text-[#9a01cd]" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          About the Company
        </h2>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white tracking-tight">
            {job.companyInfo.name}
          </h3>
          <p className="text-base text-white/70 leading-relaxed font-medium">
            {job.companyInfo.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 text-white/70" />
            </div>
            <div>
              <p className="text-xs text-white/40 font-bold uppercase tracking-wider mb-0.5">
                Size
              </p>
              <p className="text-sm font-bold text-white">
                {job.companyInfo.size || "Confidential"}
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <Briefcase className="w-5 h-5 text-white/70" />
            </div>
            <div>
              <p className="text-xs text-white/40 font-bold uppercase tracking-wider mb-0.5">
                Industry
              </p>
              <p className="text-sm font-bold text-white">
                {job.companyInfo.industry}
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5 text-white/70" />
            </div>
            <div>
              <p className="text-xs text-white/40 font-bold uppercase tracking-wider mb-0.5">
                Founded
              </p>
              <p className="text-sm font-bold text-white">
                {job.companyInfo.founded || "Not Listed"}
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-white/70" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-white/40 font-bold uppercase tracking-wider mb-0.5">
                Headquarters
              </p>
              <p className="text-sm font-bold text-white truncate">
                {job.companyInfo.address}
              </p>
            </div>
          </div>
        </div>

        {job.companyInfo.website && (
          <div className="pt-4">
            <Button
              className="w-full sm:w-auto h-12 rounded-full bg-[#9a01cd] hover:bg-[#8a01b8] text-white font-bold px-8 shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              asChild
            >
              <Link
                href={job.companyInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <span>Visit Company Website</span>
                <ExternalLink className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
