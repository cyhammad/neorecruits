"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/badge";

export function OfficeCard({ office, isActive, onSelect }) {
  return (
    <div
      className={`relative h-[400px] rounded-xl sm:rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 ${isActive ? "shadow-2xl shadow-black/20 scale-[1.02]" : "hover:scale-[1.01]"}`}
      onMouseEnter={onSelect}
    >
      {/* Background Image */}
      <Image
        src={office.image || "/hero-1.png"}
        alt={`${office.city} Office`}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b2677] via-[#0b2677]/60 to-transparent opacity-90" />

      {/* Content */}
      <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end text-white z-10">
        <div className="space-y-4 sm:space-y-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <div>
            <Badge
              variant="outline"
              className="bg-white/20 text-white border-white/30 text-xs mb-2 backdrop-blur-md"
            >
              {office.flag} {office.country}
            </Badge>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              {office.city} Office
            </h3>
          </div>

          <div className="space-y-3 text-sm font-medium text-white/90">
            <Detail icon={MapPin} text={office.address} />
            <Detail
              icon={Phone}
              text={office.phone}
              href={`tel:${office.phone.replace(/\s/g, "")}`}
            />
            <Detail
              icon={Mail}
              text={office.email}
              href={`mailto:${office.email}`}
            />
            <Detail icon={Clock} text={office.hours} />
          </div>

          <Button
            variant="outline"
            className="w-full border-2 border-white/30 text-white hover:bg-white hover:text-[#0b2677] transition-all duration-300 font-bold text-xs uppercase tracking-widest bg-transparent"
            asChild
          >
            <Link href="/contact">Contact Office</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

function Detail({ icon: Icon, text, href }) {
  return (
    <div className="flex items-start gap-3 group/item">
      <Icon className="w-5 h-5 text-[#9a01cd] shrink-0 mt-0.5 group-hover/item:text-white transition-colors" />
      {href ? (
        <a href={href} className="hover:text-white transition-colors break-all">
          {text}
        </a>
      ) : (
        <span className="leading-relaxed">{text}</span>
      )}
    </div>
  );
}
