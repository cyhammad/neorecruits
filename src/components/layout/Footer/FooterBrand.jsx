"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { SocialLink } from "./SocialLink";

export function FooterBrand() {
  return (
    <div className="space-y-6">
      <Link href="/" className="inline-block relative h-12 w-48">
        <Image
          src="/mainLogo.png"
          alt="NeoRecruits"
          width={160}
          height={48}
          style={{ width: "160px", height: "auto" }}
          className="object-contain object-left brightness-0 invert"
        />
      </Link>
      <p className="text-white/60 text-sm leading-relaxed">
        Reshaping the future of recruitment with AI-driven insights and a
        human-centric approach. Connecting elite talent with global visionaries.
      </p>
      <div className="flex gap-4">
        <SocialLink href="#" icon={Linkedin} />
        <SocialLink href="#" icon={Twitter} />
        <SocialLink href="#" icon={Instagram} />
        <SocialLink href="#" icon={Facebook} /> 
      </div>
    </div>
  );
}
