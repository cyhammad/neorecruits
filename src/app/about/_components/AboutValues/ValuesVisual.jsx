"use client";

import Image from "next/image";

export function ValuesVisual() {
  return (
    <div className="relative h-[600px] w-full hidden lg:block">
      <div className="absolute top-0 right-0 w-[80%] h-[350px] rounded-2xl overflow-hidden shadow-xl z-0">
        <Image
          src="/about-values-1.png"
          alt="Value Creation"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-[80%] h-[350px] rounded-2xl overflow-hidden shadow-2xl border-8 border-white z-10">
        <Image
          src="/about-values-2.png"
          alt="Teamwork"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-lg w-64 text-center">
        <h4 className="text-3xl font-black text-[#0f1d2d] leading-none mb-1">
          IMPACT
        </h4>
        <p className="text-xs font-bold text-[#00b8b0] tracking-widest uppercase mb-1">
          STARTS WITH
        </p>
        <h4 className="text-2xl font-black text-[#0f1d2d] leading-none mb-1">
          EXCEPTIONAL
        </h4>
        <h4 className="text-3xl font-black text-[#00b8b0] leading-none">
          TALENT
        </h4>
      </div>
    </div>
  );
}
