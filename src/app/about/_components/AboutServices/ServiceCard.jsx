"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ServiceCard({ service }) {
  return (
    <div className="flex-[0_0_85%] sm:flex-[0_0_70%] md:flex-[0_0_48%] lg:flex-[0_0_31%] min-w-0 pl-4 sm:pl-6 transform-gpu">
      <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 h-full flex flex-col group">
        <div className="relative h-[220px] sm:h-[260px] w-full overflow-hidden bg-gray-100">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b2677]/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

          <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
            <service.icon className="w-6 h-6 text-white" />
          </div>
        </div>

        <div className="p-8 sm:p-10 flex flex-col grow space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-black text-[#0b2677] uppercase tracking-tight group-hover:text-[#9a01cd] transition-colors duration-300">
              {service.title}
            </h3>
            <div className="w-12 h-1 bg-[#9a01cd] group-hover:w-20 transition-all duration-500 rounded-full" />
          </div>

          <p className="text-sm sm:text-base text-[#0b2677]/60 leading-relaxed grow font-medium">
            {service.description}
          </p>

          <Button
            className="h-11 sm:h-12 px-8 rounded-lg bg-[#0b2677] border-none text-[10px] sm:text-xs font-bold tracking-[0.15em] uppercase group/btn overflow-hidden relative transition-all duration-300 active:scale-[0.96] shadow-xl shadow-[#0b2677]/10"
            asChild
          >
            <Link
              href={service.link}
              className="flex items-center justify-center gap-3 relative z-10"
            >
              {/* High-Speed Radial Layer */}
              <span className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none">
                <span className="w-0 h-0 bg-[#9a01cd] rounded-full transition-all duration-500 ease-[0.16,1,0.3,1] group-hover/btn:w-[400%] group-hover/btn:pb-[400%]" />
              </span>

              {/* Text */}
              <span className="relative z-20 transition-colors duration-300 group-hover/btn:text-white">
                Learn More
              </span>

              <div className="relative z-20 w-5 h-5 overflow-hidden flex items-center justify-center">
                <ArrowRight className="w-4 h-4 absolute transition-all duration-500 ease-[0.2,1,0.3,1] group-hover/btn:translate-x-10 group-hover/btn:opacity-0 text-white" />
                <ArrowRight className="w-4 h-4 absolute -translate-x-10 opacity-0 group-hover/btn:translate-x-0 group-hover/btn:opacity-100 text-white transition-all duration-500 ease-[0.2,1,0.3,1]" />
              </div>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
