"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/badge";

export function ServiceListCard({ service }) {
  const scrollToRequest = () =>
    document
      .getElementById("request-talent")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#e5e5e5] hover:border-[#9a01cd]/20 group flex flex-col">
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-[#9a01cd]/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#9a01cd] transition-colors duration-300">
        <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#9a01cd] group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-xl sm:text-2xl font-bold text-[#0b2677] group-hover:text-[#9a01cd] transition-colors duration-300 mb-3">
        {service.title}
      </h3>
      <p className="text-sm sm:text-base text-[#0b2677]/70 leading-relaxed mb-4 sm:mb-6 grow font-medium">
        {service.description}
      </p>
      <div className="mb-4 sm:mb-6 space-y-2">
        <p className="text-xs sm:text-sm font-semibold text-[#0b2677]/60 uppercase tracking-wider">
          Suitable Industries:
        </p>
        <div className="flex flex-wrap gap-2">
          {service.industries.slice(0, 3).map((ind, idx) => (
            <Badge
              key={idx}
              variant="outline"
              className="text-xs bg-[#f4f4f4] text-[#0b2677] border-[#0b2677]/20 font-medium"
            >
              {ind}
            </Badge>
          ))}
          {service.industries.length > 3 && (
            <Badge
              variant="outline"
              className="text-xs bg-[#f4f4f4] text-[#0b2677]/60 border-[#0b2677]/20 font-medium"
            >
              +{service.industries.length - 3} more
            </Badge>
          )}
        </div>
      </div>
      {service.region && (
        <div className="mb-4">
          <Badge
            variant="outline"
            className="text-xs bg-[#9a01cd]/10 text-[#9a01cd] border-[#9a01cd]/30 font-bold uppercase tracking-wider"
          >
            Available in {service.region}
          </Badge>
        </div>
      )}
      <div className="flex flex-col gap-3 pt-4 border-t border-[#e5e5e5]">
        <Button
          variant="outline"
          size="sm"
          className="rounded-lg border-2 border-[#0b2677]/20 text-[#0b2677] hover:bg-[#0b2677] hover:text-white transition-all duration-300 font-bold text-xs uppercase tracking-widest w-full"
          asChild
        >
          <Link href={service.link}>
            Learn More <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
        <Button
          size="sm"
          className="rounded-lg bg-[#9a01cd] hover:bg-[#9a01cd]/90 text-white font-bold text-xs uppercase tracking-widest w-full"
          onClick={scrollToRequest}
        >
          Request Talent
        </Button>
      </div>
    </div>
  );
}
