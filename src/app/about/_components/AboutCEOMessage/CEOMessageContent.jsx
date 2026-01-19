"use client";

import Image from "next/image";

export function CEOMessageContent() {
  return (
    <div className="md:col-span-2 space-y-6">
      <div>
        <h2 className="tracking-tight text-[#0b2677] leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[22pt] mb-2">
          A Message from Our CEO
        </h2>
        <p className="text-[#9a01cd] font-semibold text-sm sm:text-base uppercase tracking-wider">
          Leadership Vision
        </p>
      </div>

      <div className="space-y-4 text-[#0b2677]/70 text-base sm:text-lg leading-relaxed font-medium">
        <p>
          At NeoRecruits, we believe that exceptional talent drives exceptional
          business outcomes. Our commitment is to connect the right people with
          the right opportunities, creating lasting value for both our clients
          and candidates.
        </p>
        <p>
          With operations spanning 40+ countries and deep expertise across
          multiple industries, we're not just recruiters—we're your strategic
          talent partners, dedicated to helping you build the teams that will
          shape tomorrow.
        </p>
      </div>

      <div className="pt-4 space-y-2">
        <div className="relative w-40 h-16 sm:w-48 sm:h-20">
          <Image
            src="/mainLogo.png"
            alt="CEO Signature"
            fill
            sizes="192px"
            className="object-contain object-left brightness-0 opacity-50"
          />
        </div>
        <div className="space-y-1">
          <p className="text-[#0b2677] font-bold text-lg">[CEO Name]</p>
          <p className="text-[#0b2677]/60 text-sm sm:text-base font-medium">
            Chief Executive Officer
          </p>
          <p className="text-[#0b2677]/60 text-sm sm:text-base font-medium">
            NeoRecruits
          </p>
        </div>
      </div>
    </div>
  );
}
