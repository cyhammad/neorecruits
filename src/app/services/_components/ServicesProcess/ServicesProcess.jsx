"use client";

import * as React from "react";
import { processSteps } from "./processData";
import { ProcessStepCard } from "./ProcessStepCard";

export function ServicesProcess() {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-[#f4f4f4]">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="max-w-5xl mx-auto space-y-12 sm:space-y-16">
          <div className="text-center space-y-4">
            <h2 className="tracking-tight text-[#0b2677] leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[22pt]">
              Our Recruitment Process
            </h2>
            <p className="text-[#0b2677]/70 text-base sm:text-lg max-w-2xl mx-auto font-medium">
              A systematic approach ensuring the right talent, at the right
              time, for your organization.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {processSteps.map((step, index) => (
              <ProcessStepCard
                key={step.id}
                step={step}
                isLast={index === processSteps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
