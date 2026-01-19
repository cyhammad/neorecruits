"use client";

export function ValueCard({ value }) {
  return (
    <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#e5e5e5] hover:border-[#9a01cd]/20 group">
      <div className="flex items-start gap-4 sm:gap-6">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-[#9a01cd]/10 flex items-center justify-center group-hover:bg-[#9a01cd] transition-colors duration-300 shrink-0">
          <value.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#9a01cd] group-hover:text-white transition-colors duration-300" />
        </div>
        <div className="grow space-y-3 font-medium">
          <h4 className="text-lg sm:text-xl font-bold text-[#0b2677] group-hover:text-[#9a01cd] transition-colors duration-300">
            {value.title}
          </h4>
          <p className="text-sm sm:text-base text-[#0b2677]/70 leading-relaxed font-medium">
            {value.description}
          </p>
        </div>
      </div>
    </div>
  );
}
