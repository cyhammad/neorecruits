"use client";

import * as React from "react";
import { milestones, impactStats } from "./overviewData";
import { ImpactStat } from "./ImpactStat";
import { MilestoneCard } from "./MilestoneCard";

export function AboutOverview() {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-[#f4f4f4]">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h2 className="tracking-tight text-[#0b2677] leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[22pt]">
              Company Overview
            </h2>
            <div className="space-y-4 text-[#0b2677]/70 text-base sm:text-lg leading-relaxed font-medium">
              <p>
                NeoRecruits enables clients to improve their performance through
                better talent acquisition. We deliver world-class talent
                acquisition solutions, from Board and Executive moves, through
                to training, strategic hiring projects and complex recruitment
                programmes across geographies.
              </p>
              <p>
                NeoRecruits has the expertise to provide best practice, cost
                effective and agile solutions. Bringing together Recruitment
                Process Outsourcing (RPO), Permanent Placement, Contract
                Staffing and Assessment Centres, NeoRecruits has the capability
                to create a unique solution to meet your needs.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {impactStats.map((stat, idx) => (
              <ImpactStat key={idx} stat={stat} />
            ))}
          </div>
          <div className="space-y-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0b2677] text-center">
              Key Milestones
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {milestones.map((milestone, idx) => (
                <MilestoneCard key={idx} milestone={milestone} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
