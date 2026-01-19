"use client";

import * as React from "react";
import { Shield } from "lucide-react";
import { certifications } from "./complianceData";
import { CertCard } from "./CertCard";

export function AboutCompliance() {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-[#f4f4f4]">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="tracking-tight text-[#0b2677] leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[22pt]">
              Compliance & Certifications
            </h2>
            <p className="text-[#0b2677]/70 text-base sm:text-lg leading-relaxed font-medium">
              We maintain the highest standards of compliance and hold
              certifications that demonstrate our commitment to quality,
              security, and ethical business practices.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {certifications.map((cert, idx) => (
              <CertCard key={idx} cert={cert} />
            ))}
          </div>
          <div className="bg-[#0b2677] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 text-center">
            <div className="max-w-3xl mx-auto space-y-4">
              <Shield className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-[#9a01cd]" />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                Committed to Excellence & Compliance
              </h3>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed font-medium">
                NeoRecruits is fully committed to maintaining the highest
                standards of compliance, data protection, and ethical business
                practices. All our operations adhere to local and international
                regulations, ensuring the security and privacy of both client
                and candidate information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
