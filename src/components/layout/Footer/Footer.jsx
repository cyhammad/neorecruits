"use client";

import * as React from "react";
import { FooterBrand } from "./FooterBrand";
import { FooterLinksColumn } from "./FooterLinksColumn";
import { FooterNewsletter } from "./FooterNewsletter";
import { FooterBottom } from "./FooterBottom";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Job Portal", href: "/jobs" },
  { label: "Insights & News", href: "/insights" },
  { label: "Contact Us", href: "/contact" },
];

const serviceLinks = [
  { label: "Executive Search", href: "/services/executive-search" },
  { label: "Contract Staffing", href: "/services/contract-recruitment" },
  { label: "RPO Solutions", href: "/services/outsource-rpo" },
  { label: "QA/QC Inspection Services", href: "/services/qa-qc-inspection" },
  { label: "Technical Training", href: "/services/technical-training" },
  { label: "Manpower Supply", href: "/services/manpower-supply" },
];

export function Footer() {
  return (
    <footer className="bg-[#0b2677] text-white pt-16 sm:pt-20 md:pt-28 pb-10 sm:pb-12 border-t border-white/5">
      <div className="container mx-auto px-6 sm:px-8 md:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 mb-16 sm:mb-20 max-w-7xl mx-auto">
          <div className="col-span-2 lg:col-span-1">
            <FooterBrand />
          </div>
          <div className="col-span-1 lg:col-span-1">
            <FooterLinksColumn title="Company" links={companyLinks} />
          </div>
          <div className="col-span-1 lg:col-span-1">
            <FooterLinksColumn title="Services" links={serviceLinks} />
          </div>
          <div className="col-span-2 lg:col-span-1">
            <FooterNewsletter />
          </div>
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
}
