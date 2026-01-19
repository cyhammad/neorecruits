"use client";

import * as React from "react";
import { useInView } from "framer-motion";
import { ServiceAccordion } from "./ServiceAccordion";
import { ServiceContent } from "./ServiceContent";

export function Services() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="relative py-12 sm:py-16 md:py-24 bg-[#0b2677]"
    >
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[50%] h-[120%] pointer-events-none -skew-x-12 origin-top-right z-0 rounded-l-[100px] blur-3xl"
        style={{
          backgroundImage:
            "linear-gradient(to bottom left, rgba(255, 255, 255, 0.05), transparent)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 items-center max-w-7xl mx-auto">
          <ServiceAccordion isInView={isInView} />
          <ServiceContent isInView={isInView} />
        </div>
      </div>
    </section>
  );
}
