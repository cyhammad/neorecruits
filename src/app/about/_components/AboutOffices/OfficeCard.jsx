"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/badge";

export function OfficeCard({ office }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
      <div className="space-y-4 sm:space-y-6">
        <div>
          <Badge
            variant="outline"
            className="bg-[#9a01cd]/20 text-white border-[#9a01cd]/50 text-xs mb-2"
          >
            {office.flag} {office.country}
          </Badge>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            {office.city} Office
          </h3>
        </div>
        <div className="space-y-3 text-sm sm:text-base font-medium">
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
          className="w-full border-2 border-white/30 text-white hover:bg-white hover:text-[#0b2677] transition-all duration-300 font-bold text-xs uppercase tracking-widest"
          asChild
        >
          <Link href="/contact">Contact Office</Link>
        </Button>
      </div>
    </div>
  );
}

function Detail({ icon: Icon, text, href }) {
  return (
    <div className="flex items-start gap-3 text-white/70">
      <Icon className="w-5 h-5 text-[#9a01cd] shrink-0 mt-0.5" />
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
