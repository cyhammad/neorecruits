"use client";

export function ExpertiseCard({ feature }) {
  return (
    <div className="group bg-[#2165b8]/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 border border-[#2165b8]/30 hover:border-white/20">
      <div className="space-y-4">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-[#9a01cd]/20 flex items-center justify-center group-hover:bg-[#9a01cd] transition-colors duration-300">
          <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#9a01cd] group-hover:text-white transition-colors duration-300" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#9a01cd] transition-colors duration-300">
          {feature.title}
        </h3>
        <p className="text-sm sm:text-base text-white/70 leading-relaxed font-medium">
          {feature.description}
        </p>
      </div>
    </div>
  );
}
