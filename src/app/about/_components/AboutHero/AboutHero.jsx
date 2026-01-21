"use client";

import * as React from "react";
import { motion } from "framer-motion";

export function AboutHero({ activeTab, setActiveTab, tabs }) {
  const activeTabLabel =
    tabs.find((t) => t.id === activeTab)?.label || "About Us";

  return (
    <section className="relative pt-24 sm:pt-28 h-[65vh] min-h-[550px] w-full flex flex-col overflow-hidden">
      {/* Background with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{ backgroundImage: 'url("/about-hero-bg.png")' }}
      >
        <div className="absolute inset-0 bg-[#0b2677]/80" />
        <div className="absolute inset-0 bg-linear-to-b from-[#0b2677]/40 via-transparent to-[#0b2677]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-10 relative z-10 flex-1 flex flex-col pt-24 pb-12">
        <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center">
          <div className="max-w-4xl space-y-4 sm:space-y-6 mb-12">
            <motion.h1
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white uppercase leading-none"
            >
              {activeTabLabel}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl font-medium"
            >
              Building the future of talent acquisition through innovation and
              excellence.
            </motion.p>
          </div>
        </div>

        {/* Tabs Section - Now in flow to avoid overlap */}
        <div className="max-w-7xl mx-auto w-full pt-8">
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  relative h-10 sm:h-12 px-4 sm:px-6 flex items-center justify-center text-[10px] sm:text-[11px] font-bold uppercase tracking-widest transition-all duration-200
                  ${
                    activeTab === tab.id
                      ? "text-white bg-[#9a01cd] border border-[#9a01cd] rounded-sm shadow-[0_0_15px_rgba(154,1,205,0.4)]"
                      : "text-white/80 border border-white/25 rounded-sm hover:bg-white/10"
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
