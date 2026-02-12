"use client";

export function ProcessStepCard({ step, isLast }) {
  return (
    <div className="relative group">
      <div className="bg-white rounded-xl p-4 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col space-y-3 sm:space-y-4 border border-[#e5e5e5] hover:border-[#9a01cd]/20">
        <div className="flex items-center justify-between mb-2">
          <div className="size-10 sm:w-14 sm:h-14 rounded-full bg-[#9a01cd]/10 flex items-center justify-center group-hover:bg-[#9a01cd] transition-colors duration-300">
            <step.icon className="w-5 h-5 sm:w-7 sm:h-7 text-[#9a01cd] group-hover:text-white transition-colors duration-300" />
          </div>
          <span className="text-2xl sm:text-5xl font-black text-[#0b2677]/5 group-hover:text-[#9a01cd]/10 transition-colors duration-300">
            {String(step.id).padStart(2, "0")}
          </span>
        </div>
        <h3 className="text-sm sm:text-xl font-bold text-[#0b2677] group-hover:text-[#9a01cd] transition-colors duration-300 leading-tight">
          {step.title}
        </h3>
        <p className="text-[11px] sm:text-base text-[#0b2677]/70 leading-relaxed grow font-medium">
          {step.description}
        </p>
        {!isLast && (
          <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#e5e5e5] transform translate-x-0">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-8 border-l-[#e5e5e5] border-t-4 border-t-transparent border-b-4 border-b-transparent" />
          </div>
        )}
      </div>
    </div>
  );
}
