"use client";

import Image from "next/image";

export function CEOPhoto() {
  return (
    <div className="md:col-span-1 flex justify-center md:justify-start">
      <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border-4 border-white">
        <Image
          src="/hero-1.png"
          alt="CEO"
          fill
          sizes="256px"
          className="object-cover"
        />
      </div>
    </div>
  );
}
