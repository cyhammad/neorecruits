"use client";

export function CertCard({ cert }) {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#e5e5e5] hover:border-[#9a01cd]/20 text-center group">
      <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-lg bg-[#9a01cd]/10 flex items-center justify-center group-hover:bg-[#9a01cd] transition-colors duration-300">
        <cert.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#9a01cd] group-hover:text-white transition-colors duration-300" />
      </div>
      <h4 className="text-sm sm:text-base font-bold text-[#0b2677] mb-1 sm:mb-2 group-hover:text-[#9a01cd] transition-colors duration-300">
        {cert.name}
      </h4>
      <p className="text-xs sm:text-sm text-[#0b2677]/60 leading-tight font-medium">
        {cert.description}
      </p>
    </div>
  );
}
