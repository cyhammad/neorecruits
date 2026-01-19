"use client";

import { Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";

export function FooterNewsletter() {
  return (
    <div className="space-y-6">
      <h4 className="text-lg font-bold uppercase tracking-wider">
        Stay Updated
      </h4>
      <p className="text-white/60 text-sm leading-relaxed">
        Subscribe to our newsletter for the latest job market trends and career
        advice.
      </p>
      <form className="space-y-3">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
          <Input
            type="email"
            placeholder="Enter your email"
            className="bg-white/5 border-white/10 text-white pl-10 focus:border-[#9a01cd] focus:ring-[#9a01cd]/20 h-10"
          />
        </div>
        <Button className="w-full bg-[#9a01cd] hover:bg-[#9a01cd]/90 text-white font-bold uppercase tracking-wider h-10 text-xs">
          Subscribe Now
        </Button>
      </form>
    </div>
  );
}
