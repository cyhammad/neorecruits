"use client";

import * as React from "react";
import { CEOPhoto } from "./CEOPhoto";
import { CEOMessageContent } from "./CEOMessageContent";

export function AboutCEOMessage() {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#f4f4f4] rounded-2xl sm:rounded-[2rem] p-8 sm:p-12 md:p-16 shadow-xl border border-[#e5e5e5]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
              <CEOPhoto />
              <CEOMessageContent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
