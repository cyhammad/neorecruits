"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const glideTransition = {
  duration: 1.2,
  ease: [0.22, 1, 0.36, 1],
};

const viewportConfig = {
  once: false,
  amount: 0.3,
  margin: "-10% 0px",
};

export function ServiceSection({ service, index }) {
  const isEven = index % 2 === 0;

  return (
    <section className="relative py-12 sm:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
              isEven ? "" : "lg:flex-row-reverse"
            }`}
          >
            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: isEven ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportConfig}
              transition={glideTransition}
              className={`space-y-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}
            >
              {/* Number */}
              <span className="text-[#0b2677]/30 text-lg sm:text-xl font-bold tracking-widest">
                {service.number}
              </span>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0b2677] uppercase tracking-tight leading-tight">
                {service.title}
              </h2>

              {/* Description */}
              <p className="text-[#0b2677]/70 text-sm sm:text-[15px] leading-relaxed font-medium max-w-xl">
                {service.description}
              </p>

              {/* CTA Button */}
              <div className="pt-2">
                <Button
                  className="group relative h-10 sm:h-12 w-fit px-8 rounded-lg bg-[#9a01cd] text-white border-none flex items-center gap-2 transition-all text-[11px] font-black tracking-widest uppercase active:scale-95 shadow-xl shadow-[#9a01cd]/20 hover:bg-[#8a00bd]"
                  asChild
                >
                  <Link href={service.link}>
                    <span className="relative z-20">Read More</span>
                    <div className="relative w-4 h-4 overflow-hidden flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 absolute transition-all duration-300 group-hover:translate-x-5" />
                      <ArrowRight className="w-4 h-4 absolute -translate-x-5 transition-all duration-300 group-hover:translate-x-0" />
                    </div>
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: isEven ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportConfig}
              transition={{ ...glideTransition, delay: 0.1 }}
              className={`relative ${isEven ? "lg:order-2" : "lg:order-1"}`}
            >
              <div className="relative w-full aspect-[4/3] lg:aspect-square max-w-lg mx-auto lg:mx-0">
                {/* Hexagonal/Diamond Mask Effect */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{
                    clipPath:
                      "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                  }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover grayscale opacity-80"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Secondary smaller hexagon */}
                <div
                  className="absolute -bottom-4 -right-4 w-[50%] h-[50%] overflow-hidden"
                  style={{
                    clipPath:
                      "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                  }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover grayscale opacity-60"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
