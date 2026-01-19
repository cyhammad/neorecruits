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
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="tracking-tight text-[#0b2677] leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-[22pt]">
              Our Services
            </h2>
            <p className="text-[#0b2677]/70 text-base sm:text-lg leading-relaxed font-medium">
              Comprehensive recruitment solutions designed to meet your unique
              business needs and drive organizational success.
            </p>
          </div>
          <ServicesNav onPrev={scrollPrev} onNext={scrollNext} />
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex -ml-4 sm:-ml-6">
              {services.map((s) => (
                <ServiceCard key={s.id} service={s} />
              ))}
            </div>
          </div>
          <div className="text-center pt-4">
            <Button
              variant="link"
              className="text-[#0b2677] hover:text-[#9a01cd] font-bold text-base sm:text-lg border-b-2 border-[#0b2677]/20 hover:border-[#9a01cd] rounded-none hover:no-underline transition-colors"
              asChild
            >
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
