"use client";

import * as React from "react";
import { services } from "./servicesListData";
import { ServiceListCard } from "./ServiceListCard";

export function ServicesList() {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-[#f4f4f4]">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="tracking-tight text-[#0b2677] leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[22pt]">
              Our Core Services
            </h2>
            <p className="text-[#0b2677]/70 text-base sm:text-lg leading-relaxed font-medium">
              Comprehensive recruitment solutions designed to meet your unique
              business needs across all industries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((s) => (
              <ServiceListCard key={s.id} service={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
