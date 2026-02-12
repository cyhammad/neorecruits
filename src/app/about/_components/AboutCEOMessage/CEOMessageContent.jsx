"use client";

import Image from "next/image";

export function CEOMessageContent() {
  return (
    <div className="md:col-span-2 space-y-6 sm:space-y-8 flex flex-col justify-center text-center md:text-left">
      <div className="space-y-2">
        <span className="text-[#9a01cd] font-bold text-[10px] sm:text-sm uppercase tracking-[0.2em]">
          Leadership Vision
        </span>
        <h2 className="tracking-tight text-[#0b2677] leading-tight text-3xl sm:text-4xl md:text-5xl font-black uppercase">
          A Message from <br className="hidden sm:block" /> Our CEO
        </h2>
      </div>

      <div className="space-y-5 sm:space-y-6 text-[#0b2677]/70 text-sm sm:text-lg leading-relaxed italic border-l-0 md:border-l-4 border-[#9a01cd]/30 md:pl-8 py-1">
        <p className="px-2 md:px-0">
          "At NeoRecruits, we believe that exceptional talent drives exceptional
          business outcomes. Our commitment is to connect the right people with
          the right opportunities."
        </p>
        <p className="not-italic">
          With operations spanning 40+ countries and deep expertise across
          multiple industries, we're not just recruiters—we're your strategic
          talent partners, dedicated to helping you build the teams that will
          shape tomorrow.
        </p>
      </div>

      <div className="pt-4 flex items-center gap-6">
        <div className="space-y-0.5">
          <p className="text-[#9a01cd] text-xs sm:text-sm font-bold uppercase tracking-wider">
            Chief Executive Officer
          </p>
        </div>
      </div>
    </div>
  );
}
