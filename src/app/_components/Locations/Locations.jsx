"use client";

import * as React from "react";
import { useInView } from "framer-motion";
import { LocationsHeader } from "./LocationsHeader";
import { LocationsMap } from "./LocationsMap";
import { LocationsFooter } from "./LocationsFooter";
import { LocationTabs } from "./LocationTabs";
import { offices } from "./locationsData";

export function Locations() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [activeId, setActiveId] = React.useState(offices[0].id);

  return (
    <section
      ref={ref}
      className="relative bg-[#0b2677] overflow-hidden pb-10 sm:pb-0"
    >
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <LocationsHeader isInView={isInView} />
      <LocationsMap
        isInView={isInView}
        activeId={activeId}
        onActiveIdChange={setActiveId}
      />
      <LocationTabs activeId={activeId} onActiveIdChange={setActiveId} />
      <LocationsFooter isInView={isInView} />
    </section>
  );
}
