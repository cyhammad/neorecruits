"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { SmokeLayer } from "../../_components/Hero/SmokeLayer";
import Image from "next/image";

export function ContactHero() {
  return (
    <section className="relative pt-24 sm:pt-28 h-[60vh] min-h-[500px] w-full flex flex-col overflow-hidden bg-[#0b2677]">
      {/* Background with Image and Smoke */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-3.png"
          alt="Contact Background"
          fill
          className="object-cover object-center opacity-40 transition-transform duration-10000 hover:scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0b2677]/90" />
        <SmokeLayer />
      </div>

      {/* Animated Glows */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#9a01cd]/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#2165b8]/20 rounded-full blur-[100px] -z-10 animate-bounce transition-all duration-1000" />

      <div className="container mx-auto px-4 sm:px-6 md:px-10 relative z-10 flex-1 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-4xl space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
            >
              <div className="w-2 h-2 rounded-full bg-[#9a01cd] animate-ping" />
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-white/90">
                Contact Our Team
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase leading-[1.1] tracking-tight"
            >
              Get In <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#9a01cd] to-[#539ce0]">
                Touch.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl font-medium"
            >
              We're here to help you navigate the future of talent. Whether
              you're looking for elite candidates or your next career move.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
