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

      <div className="relative z-10 container mx-auto px-6 sm:px-10 h-full flex flex-col justify-center items-start md:grid md:grid-cols-2 md:items-center max-w-7xl">
        <div className="w-full">
          <AnimatePresence mode="wait">
            {current === index && <HeroContent slide={slide} />}
          </AnimatePresence>
        </div>
        <div className="hidden md:flex items-center justify-center">
          <Image
            src="/spinner-nobg.png"
            alt="logo"
            width={500}
            height={500}
            className="size-80 lg:size-100 animate-[spin_20s_linear_infinite] opacity-80"
          />
        </div>
      </div>
    </CarouselItem>
  );
}
