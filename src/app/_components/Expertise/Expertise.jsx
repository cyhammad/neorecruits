"use client";

import * as React from "react";
import { useInView } from "framer-motion";
import { ExpertiseContent } from "./ExpertiseContent";
import { ExpertiseCarousel } from "./ExpertiseCarousel";

export function Expertise() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="py-16 sm:py-20 md:py-28 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-20 max-w-7xl mx-auto">
          <ExpertiseContent isInView={isInView} />
          <ExpertiseCarousel isInView={isInView} />
        </div>
      </div>
    </section>
  );
}
