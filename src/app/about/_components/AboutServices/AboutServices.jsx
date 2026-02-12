"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import useEmblaCarousel from "embla-carousel-react";
import { services } from "./servicesData";
import { ServiceCard } from "./ServiceCard";
import { ServicesNav } from "./ServicesNav";

export function AboutServices() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const scrollPrev = React.useCallback(
    () => emblaApi?.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = React.useCallback(
    () => emblaApi?.scrollNext(),
    [emblaApi],
  );

  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
          <div className="space-y-4 max-w-4xl">
            <span className="text-[#9a01cd] font-bold tracking-widest uppercase text-xs sm:text-sm">
              Our Expertise
            </span>
            <h2 className="tracking-tight text-[#0b2677] leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-[40px] font-black uppercase">
              Specialized Recruitment <br className="hidden sm:block" />{" "}
              Solutions
            </h2>
            <p className="text-[#0b2677]/60 text-base sm:text-lg leading-relaxed max-w-2xl font-medium">
              Comprehensive recruitment solutions designed to meet your unique
              business needs and drive organizational success.
            </p>
          </div>
          {/* Mobile Grid View (2x2) */}
          <div className="grid grid-cols-2 gap-3 md:hidden">
            {services.slice(0, 4).map((s) => (
              <ServiceCard key={s.id} service={s} isGrid />
            ))}
          </div>

          {/* Desktop/Tablet Carousel View */}
          <div ref={emblaRef} className="hidden md:block overflow-hidden">
            <div className="flex -ml-4 sm:-ml-6">
              {services.map((s) => (
                <ServiceCard key={s.id} service={s} />
              ))}
            </div>
          </div>
          <div className="flex justify-center pt-8">
            <Button
              className="h-12 px-10 rounded-full bg-[#0b2677] border-none text-xs font-bold tracking-[0.2em] uppercase group/view overflow-hidden relative transition-all duration-300 active:scale-[0.96] shadow-2xl shadow-[#0b2677]/20"
              asChild
            >
              <Link
                href="/services"
                className="flex items-center justify-center gap-3 relative z-10"
              >
                {/* High-Speed Radial Layer */}
                <span className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none">
                  <span className="w-0 h-0 bg-[#9a01cd] rounded-full transition-all duration-500 ease-[0.16,1,0.3,1] group-hover/view:w-[400%] group-hover/view:pb-[400%]" />
                </span>

                {/* Text */}
                <span className="relative z-20 transition-colors duration-300 group-hover/view:text-white">
                  Discover All Solutions
                </span>

                <div className="relative z-20 w-5 h-5 overflow-hidden flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 absolute transition-all duration-500 ease-[0.2,1,0.3,1] group-hover/view:translate-x-10 group-hover/view:opacity-0 text-white" />
                  <ArrowRight className="w-4 h-4 absolute -translate-x-10 opacity-0 group-hover/view:translate-x-0 group-hover/view:opacity-100 text-white transition-all duration-500 ease-[0.2,1,0.3,1]" />
                </div>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
