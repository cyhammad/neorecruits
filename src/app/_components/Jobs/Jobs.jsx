"use client";

import * as React from "react";
import { useInView } from "framer-motion";
import { JobsImages } from "./JobsImages";
import { JobsContent } from "./JobsContent";

export function Jobs() {
  const ref = React.useRef(null);

  return (
    <section
      ref={ref}
      className="relative py-12 sm:py-16 md:py-24 bg-[#f4f4f4] overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <JobsImages />
          <JobsContent />
        </div>
      </div>
    </section>
  );
}
