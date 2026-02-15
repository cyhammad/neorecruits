"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function ServiceCard({ service, isGrid }) {
  return (
    <div
      className={cn(
        "min-w-0 transform-gpu transition-all duration-300",
        isGrid
          ? "w-full"
          : "flex-[0_0_85%] sm:flex-[0_0_70%] md:flex-[0_0_48%] lg:flex-[0_0_31%] pl-4 sm:pl-6",
      )}
    >
      <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 h-full flex flex-col group border border-gray-100">
        <div
          className={cn(
            "relative overflow-hidden bg-gray-100",
            isGrid ? "h-[120px]" : "h-[180px] sm:h-[260px]",
          )}
        >
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b2677]/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

          <div
            className={cn(
              "absolute top-3 left-3 rounded-lg sm:rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20",
              isGrid ? "size-7" : "size-10 sm:w-12 sm:h-12",
            )}
          >
            <service.icon
              className={cn(
                "text-white",
                isGrid ? "size-4" : "size-5 sm:w-6 sm:h-6",
              )}
            />
          </div>
        </div>

        <div
          className={cn(
            "flex flex-col grow",
            isGrid ? "p-3 space-y-2" : "p-6 sm:p-10 space-y-4 sm:space-y-6",
          )}
        >
          <div className="space-y-1">
            <h3
              className={cn(
                "font-black text-[#0b2677] uppercase tracking-tight  transition-colors duration-300 leading-tight",
                isGrid ? "text-xs" : "text-lg sm:text-2xl",
              )}
            >
              {service.title}
            </h3>
            <div
              className={cn(
                "h-1 bg-[#9a01cd] group-hover:w-20 transition-all duration-500 rounded-full",
                isGrid ? "w-6" : "w-10",
              )}
            />
          </div>

          <p
            className={cn(
              "text-[#0b2677]/60 leading-relaxed grow font-medium",
              isGrid ? "text-[9px] line-clamp-2" : "text-xs sm:text-base",
            )}
          >
            {service.description}
          </p>

          <Button
            className={cn(
              "rounded-lg bg-[#0b2677] border-none font-bold tracking-[0.15em] uppercase group/btn overflow-hidden relative transition-all duration-300 active:scale-[0.96] shadow-xl shadow-[#0b2677]/10",
              isGrid
                ? "h-8 px-4 text-[8px]"
                : "h-11 sm:h-12 px-8 text-[10px] sm:text-xs",
            )}
            asChild
          >
            <Link
              href={service.link}
              className="flex items-center justify-center gap-2 relative z-10"
            >
              <span className="relative z-20 transition-colors duration-300 group-hover/btn:text-white">
                {isGrid ? "Details" : "Learn More"}
              </span>
              {!isGrid && (
                <div className="relative z-20 w-5 h-5 overflow-hidden flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 absolute transition-all duration-500 ease-[0.2,1,0.3,1] group-hover/btn:translate-x-10 group-hover/btn:opacity-0 text-white" />
                  <ArrowRight className="w-4 h-4 absolute -translate-x-10 opacity-0 group-hover/btn:translate-x-0 group-hover/btn:opacity-100 text-white transition-all duration-500 ease-[0.2,1,0.3,1]" />
                </div>
              )}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
