"use client";

export function PartnershipCard({ partnership }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
      <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 rounded-full bg-[#9a01cd]/20 flex items-center justify-center">
        <partnership.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#9a01cd]" />
      </div>
      <h4 className="text-lg sm:text-xl font-bold text-white mb-3">
        {partnership.type}
      </h4>
      <p className="text-sm sm:text-base text-white/70 leading-relaxed font-medium">
        {partnership.description}
      </p>
    </div>
  );
}
