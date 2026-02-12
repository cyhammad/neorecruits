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
    <section className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-sm space-y-8 group transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center gap-4 border-b border-gray-50 pb-6">
        <div className="size-10 rounded-full bg-[#9a01cd]/10 flex items-center justify-center group-hover:bg-[#9a01cd] transition-colors duration-300">
          <Building2 className="size-5 text-[#9a01cd] group-hover:text-white transition-colors duration-300" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#0b2677] tracking-tight uppercase">
          About the Company
        </h2>
      </div>

      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-2xl font-black text-[#0b2677] tracking-tight">
            {job.companyInfo.name}
          </h3>
          <p className="text-base text-[#0b2677]/70 leading-relaxed font-medium">
            {job.companyInfo.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 flex items-center gap-4 group/item hover:bg-[#0b2677] transition-all duration-300">
            <div className="size-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-gray-200 group-hover/item:border-white/20 group-hover/item:bg-white/10">
              <Users className="size-5 text-[#0b2677] group-hover/item:text-white" />
            </div>
            <div>
              <p className="text-xs text-[#0b2677]/40 group-hover/item:text-white/40 font-bold uppercase tracking-wider mb-0.5 transition-colors">
                Size
              </p>
              <p className="text-sm font-bold text-[#0b2677] group-hover/item:text-white transition-colors">
                {job.companyInfo.size || "Confidential"}
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 flex items-center gap-4 group/item hover:bg-[#0b2677] transition-all duration-300">
            <div className="size-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-gray-200 group-hover/item:border-white/20 group-hover/item:bg-white/10">
              <Briefcase className="size-5 text-[#0b2677] group-hover/item:text-white" />
            </div>
            <div>
              <p className="text-xs text-[#0b2677]/40 group-hover/item:text-white/40 font-bold uppercase tracking-wider mb-0.5 transition-colors">
                Industry
              </p>
              <p className="text-sm font-bold text-[#0b2677] group-hover/item:text-white transition-colors">
                {job.companyInfo.industry}
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 flex items-center gap-4 group/item hover:bg-[#0b2677] transition-all duration-300">
            <div className="size-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-gray-200 group-hover/item:border-white/20 group-hover/item:bg-white/10">
              <Calendar className="size-5 text-[#0b2677] group-hover/item:text-white" />
            </div>
            <div>
              <p className="text-xs text-[#0b2677]/40 group-hover/item:text-white/40 font-bold uppercase tracking-wider mb-0.5 transition-colors">
                Founded
              </p>
              <p className="text-sm font-bold text-[#0b2677] group-hover/item:text-white transition-colors">
                {job.companyInfo.founded || "Not Listed"}
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-gray-50 border border-gray-100 flex items-center gap-4 group/item hover:bg-[#0b2677] transition-all duration-300">
            <div className="size-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-gray-200 group-hover/item:border-white/20 group-hover/item:bg-white/10">
              <MapPin className="size-5 text-[#0b2677] group-hover/item:text-white" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-[#0b2677]/40 group-hover/item:text-white/40 font-bold uppercase tracking-wider mb-0.5 transition-colors">
                Headquarters
              </p>
              <p className="text-sm font-bold text-[#0b2677] group-hover/item:text-white truncate transition-colors">
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
