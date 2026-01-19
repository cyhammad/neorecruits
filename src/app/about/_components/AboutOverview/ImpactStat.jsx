"use client";

export function ImpactStat({ stat }) {
  return (
    <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300 border border-[#e5e5e5]">
      <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 rounded-full bg-[#9a01cd]/10 flex items-center justify-center">
        <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#9a01cd]" />
      </div>
      <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0b2677] mb-2">
        {stat.value}
      </div>
      <div className="text-sm sm:text-base text-[#0b2677]/70 font-medium">
        {stat.label}
      </div>
    </div>
  );
}
