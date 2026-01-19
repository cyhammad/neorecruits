"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/badge";

export function IndustryShowcaseCard({ industry }) {
  return (
    <div className="group cursor-pointer bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-[#e5e5e5] hover:border-[#9a01cd]/20">
      <div className="relative h-[200px] sm:h-[240px] w-full overflow-hidden bg-gray-100">
        <Image
          src={industry.image}
          alt={industry.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0b2677]/60 via-transparent to-transparent" />
        {industry.isCore && (
          <div className="absolute top-4 right-4">
            <Badge className="bg-[#9a01cd] text-white font-bold text-xs uppercase tracking-wider">
              Core Industry
            </Badge>
          </div>
        )}
        <div className="absolute bottom-4 left-4 w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#9a01cd] transition-colors duration-300">
          <industry.icon className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="p-6 sm:p-8 flex flex-col grow space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold text-[#0b2677] group-hover:text-[#9a01cd] transition-colors duration-300">
            {industry.title}
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-[#9a01cd] uppercase tracking-wider">
            {industry.stats}
          </p>
        </div>
        <p className="text-sm sm:text-base text-[#0b2677]/70 leading-relaxed grow font-medium">
          {industry.description}
        </p>
        <div className="space-y-2 pt-2 border-t border-[#e5e5e5]">
          <p className="text-xs font-semibold text-[#0b2677]/60 uppercase tracking-wider">
            Key Roles:
          </p>
          <div className="flex flex-wrap gap-2">
            {industry.keyRoles.slice(0, 2).map((role, idx) => (
              <Badge
                key={idx}
                variant="outline"
                className="text-xs bg-[#f4f4f4] text-[#0b2677] border-[#0b2677]/20 font-medium"
              >
                {role}
              </Badge>
            ))}
            {industry.keyRoles.length > 2 && (
              <Badge
                variant="outline"
                className="text-xs bg-[#f4f4f4] text-[#0b2677]/60 border-[#0b2677]/20 font-medium"
              >
                +{industry.keyRoles.length - 2} more
              </Badge>
            )}
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="rounded-lg border-2 border-[#0b2677]/20 text-[#0b2677] hover:bg-[#9a01cd] hover:border-[#9a01cd] hover:text-white transition-all duration-300 font-bold text-xs uppercase tracking-widest self-start"
          asChild
        >
          <Link href={industry.link}>
            Learn More <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
