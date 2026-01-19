"use client";

import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function RegionCard({ region }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#9a01cd]" />
        <h3 className="text-lg sm:text-xl font-bold text-white">
          {region.name}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {region.countries.map((country, idx) => (
          <Badge
            key={idx}
            variant="outline"
            className="bg-white/10 text-white border-white/30 text-xs font-medium"
          >
            {country}
          </Badge>
        ))}
      </div>
    </div>
  );
}
