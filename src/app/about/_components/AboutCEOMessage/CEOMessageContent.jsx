"use client";

import Image from "next/image";

export function CEOMessageContent() {
  return (
    <div className="md:col-span-2 space-y-8 flex flex-col justify-center">
      <div className="space-y-2">
        <span className="text-[#9a01cd] font-bold text-xs sm:text-sm uppercase tracking-[0.2em]">
          Leadership Vision
        </span>
        <h2 className="tracking-tight text-[#0b2677] leading-tight text-3xl sm:text-4xl md:text-5xl font-black uppercase">
          A Message from <br /> Our CEO
        </h2>
      </div>

      <div className="space-y-6 text-[#0b2677]/70 text-base sm:text-lg leading-relaxed italic border-l-4 border-[#9a01cd]/30 pl-6 sm:pl-8 py-2">
        <p>
          "At NeoRecruits, we believe that exceptional talent drives exceptional
          business outcomes. Our commitment is to connect the right people with
          the right opportunities, creating lasting value for both our clients
          and candidates."
        </p>
        <p className="not-italic">
          With operations spanning 40+ countries and deep expertise across
          multiple industries, we're not just recruiters—we're your strategic
          talent partners, dedicated to helping you build the teams that will
          shape tomorrow.
        </p>
      </div>

      <div className="pt-4 flex items-center gap-6">
        <div className="relative w-32 h-12 flex items-center justify-center opacity-80 brightness-0 text-[#0b2677]">
          <span className="font-serif text-3xl -rotate-3 select-none whitespace-nowrap">
            Sajid Shabbir
          </span>
        </div>
        <div className="w-px h-12 bg-[#0b2677]/10" />
        <div className="space-y-0.5">
          <p className="text-[#0b2677] font-black uppercase text-base tracking-wide">
            Sajid Shabbir
          </p>
          <p className="text-[#9a01cd] text-xs sm:text-sm font-bold uppercase tracking-wider">
            Chief Executive Officer
          </p>
        </div>
      </div>
    </div>
  );
}
