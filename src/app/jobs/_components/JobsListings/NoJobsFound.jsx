"use client";

export function NoJobsFound() {
  return (
    <div className="text-center py-12">
      <p className="text-lg text-[#0b2677]/70 font-medium">
        No jobs found matching your criteria.
      </p>
      <p className="text-sm text-[#0b2677]/50 mt-2 font-medium">
        Try adjusting your filters.
      </p>
    </div>
  );
}
