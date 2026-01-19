"use client";

import * as React from "react";
import { JobsHero } from "./_components/JobsHero/JobsHero";
import { JobsSearch } from "./_components/JobsSearch/JobsSearch";
import { JobsListings } from "./_components/JobsListings/JobsListings";
import { JobsCTA } from "./_components/JobsCTA/JobsCTA";

export default function JobsPage() {
  const [filters, setFilters] = React.useState(null);

  return (
    <main className="flex flex-col w-full">
      <JobsHero />
      <JobsSearch onFilterChange={setFilters} />
      <JobsListings filters={filters} />
      <JobsCTA />
    </main>
  );
}
