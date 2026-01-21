"use client";

export function ImpactStat({ stat }) {
  return (
    <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-[#0b2677]/5 hover:border-[#9a01cd]/20 text-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-[#9a01cd]/5 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-700" />

      <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-6 rounded-2xl bg-[#9a01cd]/10 flex items-center justify-center group-hover:bg-[#9a01cd] group-hover:rotate-12 transition-all duration-500">
        <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#9a01cd] group-hover:text-white transition-colors duration-500" />
      </div>

      <div className="relative z-10 text-3xl sm:text-4xl font-black text-[#0b2677] mb-2 tabular-nums">
        {stat.value}
      </div>

      <div className="relative z-10 text-xs sm:text-sm text-[#0b2677]/50 font-bold uppercase tracking-widest">
        {stat.label}
      </div>
    </div>
  );
}
