"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { offices } from "./locationsData";
import { cn } from "@/lib/utils";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export function LocationTabs({ activeId, onActiveIdChange }) {
  const activeOffice = offices.find((o) => o.id === activeId) || offices[0];

  return (
    <div className="lg:hidden w-full px-4 pb-20 -mt-10 relative z-30">
      {/* Tabs list */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4 mask-fade-edges">
        {offices.map((office) => (
          <button
            key={office.id}
            onClick={() => onActiveIdChange(office.id)}
            className={cn(
              "whitespace-nowrap px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 border",
              activeId === office.id
                ? "bg-[#9a01cd] text-white border-[#9a01cd] shadow-[0_10px_25px_rgba(154,1,205,0.4)] scale-105"
                : "bg-white/5 text-white/40 border-white/10 hover:bg-white/10",
            )}
          >
            {office.city}
          </button>
        ))}
      </div>

      {/* Active Location Info Card */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeOffice.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 shadow-2xl relative overflow-hidden"
          >
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#9a01cd]/10 blur-3xl rounded-full translate-x-10 -translate-y-10" />

            <div className="flex items-center gap-4 mb-8">
              <span className="text-3xl filter drop-shadow-lg">
                {activeOffice.flag}
              </span>
              <div>
                <h4 className="text-white font-black text-xl leading-none uppercase tracking-tight">
                  {activeOffice.city}
                </h4>
                <p className="text-[#9a01cd] text-[10px] font-black uppercase tracking-[0.3em] mt-2">
                  {activeOffice.country}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-white/5 shrink-0 border border-white/5">
                  <MapPin size={16} className="text-[#9a01cd]" />
                </div>
                <p className="text-white/70 text-sm font-medium leading-relaxed pt-1">
                  {activeOffice.address}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <a
                  href={`tel:${activeOffice.phone}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="p-2.5 rounded-xl bg-[#9a01cd]/10 shrink-0 group-active:bg-[#9a01cd] transition-colors border border-[#9a01cd]/20">
                    <Phone
                      size={16}
                      className="text-[#9a01cd] group-active:text-white"
                    />
                  </div>
                  <span className="text-white font-bold text-sm tracking-wide">
                    {activeOffice.phone}
                  </span>
                </a>

                <a
                  href={`mailto:${activeOffice.email}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="p-2.5 rounded-xl bg-[#9a01cd]/10 shrink-0 group-active:bg-[#9a01cd] transition-colors border border-[#9a01cd]/20">
                    <Mail
                      size={16}
                      className="text-[#9a01cd] group-active:text-white"
                    />
                  </div>
                  <span className="text-white font-bold text-sm tracking-wide">
                    {activeOffice.email}
                  </span>
                </a>
              </div>

              <div className="flex items-center gap-4 pt-6 mt-2 border-t border-white/5">
                <Clock size={16} className="text-[#9a01cd]" />
                <span className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em]">
                  {activeOffice.hours}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
