"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";

export function OfficeCard({ office, isActive, onSelect }) {
  return (
    <div
      className={`group relative h-[500px] w-full rounded-[2.5rem] overflow-hidden transition-all duration-700 cursor-pointer ${
        isActive
          ? "shadow-[0_30px_60px_-12px_rgba(11,38,119,0.5)] scale-[1.02] ring-4 ring-[#9a01cd]/20 z-10"
          : "hover:shadow-[0_20px_50px_-12px_rgba(11,38,119,0.3)] hover:scale-[1.01] z-0"
      }`}
      onMouseEnter={onSelect}
    >
      {/* Background Image with Parallax-like Zoom */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={office.image || "/hero-1.png"}
          alt={`${office.city} Office`}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050f2e] via-[#0b2677]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700" />
        <div className="absolute inset-0 bg-black/10 transition-colors duration-700 group-hover:bg-transparent" />
      </div>

      {/* Top Floating Elements */}
      <div className="absolute top-6 left-6 right-6 flex items-start justify-between z-20">
        <div className="px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center gap-3 shadow-lg group-hover:bg-white/20 transition-all duration-300">
          <span className="text-xl filter drop-shadow-md">{office.flag}</span>
          <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">
            {office.city}
          </span>
        </div>

        <Link
          href="/contact"
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group/btn hover:bg-[#9a01cd] hover:border-[#9a01cd] hover:scale-110 transition-all duration-300 shadow-lg"
        >
          <ArrowUpRight className="text-white w-5 h-5 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
        </Link>
      </div>

      {/* Main Content Area */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 z-20 pointer-events-none">
        {/* Country Title - Scales and moves slightly */}
        <div className="mb-6 transform transition-all duration-500 group-hover:-translate-y-2">
          <h3 className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/60 uppercase tracking-tighter leading-[0.85] drop-shadow-lg">
            {office.country}
          </h3>
        </div>

        {/* Glass Info Card - Slides up and glows */}
        <div className="pointer-events-auto transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-6 shadow-2xl overflow-hidden relative group/card">
            {/* Animated Glow Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/card:animate-[shimmer_2s_infinite] pointer-events-none" />

            <div className="flex flex-col gap-3">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#9a01cd]/20 flex items-center justify-center shrink-0 border border-[#9a01cd]/30 group-hover:bg-[#9a01cd] transition-colors duration-300">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <p className="text-xs font-medium text-white/90 leading-relaxed pt-0.5 line-clamp-2">
                  {office.address}
                </p>
              </div>

              {/* Quick Contacts Grid */}
              <div className="grid grid-cols-1 gap-2 pt-3 border-t border-white/10">
                <div className="grid grid-cols-2 gap-2">
                  <ContactPill
                    icon={Phone}
                    text={office.phone}
                    href={`tel:${office.phone.replace(/\s/g, "")}`}
                  />
                  <ContactPill
                    icon={Mail}
                    text="Email"
                    href={`mailto:${office.email}`}
                  />
                </div>
                <ContactPill icon={Clock} text={office.hours} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactPill({ icon: Icon, text, href }) {
  const content = (
    <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 transition-colors duration-300 group/pill">
      <Icon
        size={12}
        className="text-[#9a01cd] group-hover/pill:text-white transition-colors shrink-0"
      />
      <span className="text-[9px] font-bold text-white/70 uppercase tracking-wider group-hover/pill:text-white transition-colors truncate">
        {text}
      </span>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block w-full min-w-0">
        {content}
      </a>
    );
  }

  return content;
}
