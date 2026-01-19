"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";

export function HeroSlide({ slide, index, current }) {
  return (
    <CarouselItem
      key={slide.id}
      className={cn(
        "pl-0 relative w-full",
        slide.showSearch
          ? "h-screen sm:h-[750px] md:h-[800px] lg:h-screen"
          : "h-screen sm:h-[600px] md:h-[700px] lg:h-screen",
      )}
    >
      <HeroBackground image={slide.image} title={slide.title} index={index} />

      <div className="relative z-10 container mx-auto px-4 h-full grid grid-cols-2 place-items-center pt-20 sm:pt-24 md:pt-16 max-w-7xl">
        <AnimatePresence mode="wait">
          {current === index && <HeroContent slide={slide} />}
        </AnimatePresence>
        <Image
          src="/spinner-nobg.png"
          alt="logo"
          width={500}
          height={500}
          className="size-100 animate-[spin_20s_linear_infinite]"
        />
      </div>
    </CarouselItem>
  );
}
