"use client";

import Image from "next/image";

export function CEOPhoto() {
  return (
    <div className="md:col-span-1 flex justify-center md:justify-start">
      <div className="relative group">
        <div className="absolute -inset-4 bg-gradient-to-tr from-[#9a01cd]/20 to-[#0b2677]/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="relative w-48 h-64 sm:w-64 sm:h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/job-man.png"
            alt="CEO"
            fill
            sizes="(max-width: 768px) 256px, 384px"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            priority
          />
        </div>
      </div>
    </div>
  );
}
