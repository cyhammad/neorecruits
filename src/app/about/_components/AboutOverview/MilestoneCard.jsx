"use client";

export function MilestoneCard({ milestone }) {
  return (
    <div className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#9a01cd]/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700" />

      <div className="relative z-10 flex flex-col items-start space-y-4">
        <div className="text-4xl sm:text-5xl font-black text-[#0b2677]/5 /10 transition-colors duration-500">
          {milestone.year}
        </div>

        <div className="space-y-2">
          <h4 className="text-lg sm:text-xl font-black text-[#0b2677] uppercase tracking-tight">
            {milestone.title}
          </h4>
          <p className="text-sm sm:text-base text-[#0b2677]/60 leading-relaxed font-medium">
            {milestone.description}
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#9a01cd]/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </div>
  );
}
