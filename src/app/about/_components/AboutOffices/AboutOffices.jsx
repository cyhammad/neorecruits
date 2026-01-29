"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { offices } from "./officesData";
import { OfficeCard } from "./OfficeCard";

export function AboutOffices() {
  const [activeLocationId, setActiveLocationId] = React.useState(1);

  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230b2677' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="tracking-tight text-[#0b2677] leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-[40px] font-black uppercase">
              Global Presence & Offices
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-medium">
              Our global reach ensures we are exactly where you need us to be.
              Connect with our regional experts today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {offices.map((office, index) => (
              <OfficeCard
                key={index}
                office={office}
                isActive={office.id === activeLocationId}
                onSelect={() => {
                  setActiveLocationId(office.id);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
