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
    <footer className="bg-[#0b2677] text-white pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-16 max-w-7xl mx-auto">
          <FooterBrand />
          <FooterLinksColumn title="Company" links={companyLinks} />
          <FooterLinksColumn title="Services" links={serviceLinks} />
          <FooterNewsletter />
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
}
