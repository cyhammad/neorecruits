"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ServiceCard({ service }) {
  return (
    <div className="flex-[0_0_85%] sm:flex-[0_0_70%] md:flex-[0_0_48%] lg:flex-[0_0_38%] min-w-0 pl-4 sm:pl-6">
      <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-[#e5e5e5] hover:border-[#9a01cd]/20 group">
        <div className="relative h-[200px] sm:h-[240px] md:h-[280px] w-full overflow-hidden bg-gray-100">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0b2677]/60 via-transparent to-transparent" />
        </div>
        <div className="p-6 sm:p-8 flex flex-col grow space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#9a01cd]/10 flex items-center justify-center group-hover:bg-[#9a01cd] transition-colors duration-300">
              <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#9a01cd] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0b2677] group-hover:text-[#9a01cd] transition-colors duration-300">
              {service.title}
            </h3>
          </div>
          <p className="text-sm sm:text-base text-[#0b2677]/70 leading-relaxed grow font-medium">
            {service.description}
          </p>
          <Button
            variant="outline"
            size="sm"
            className="rounded-lg border-2 border-[#0b2677]/20 text-[#0b2677] hover:bg-[#9a01cd] hover:border-[#9a01cd] hover:text-white transition-all duration-300 font-bold text-xs uppercase tracking-widest self-start"
            asChild
          >
            <Link href={service.link}>
              Learn More <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
