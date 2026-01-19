"use client";

export function MilestoneCard({ milestone }) {
  return (
    <div className="relative bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#e5e5e5]">
      <div className="absolute top-4 right-4 text-4xl sm:text-5xl font-bold text-[#0b2677]/10">
        {milestone.year}
      </div>
      <div className="space-y-3 pt-4 font-medium">
        <h4 className="text-lg sm:text-xl font-bold text-[#0b2677]">
          {milestone.title}
        </h4>
        <p className="text-sm sm:text-base text-[#0b2677]/70 leading-relaxed font-medium">
          {milestone.description}
        </p>
      </div>
    </div>
  );
}
