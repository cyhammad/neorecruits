"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }) {
  return (
    <Link href="/">
      <Image
        src="/mainLogo.png"
        alt="NeoRecruits"
        width={160}
        height={48}
        className={cn(
          "w-32 md:w-40 h-auto object-contain object-left transition-all duration-300",
          "brightness-0 invert",
          className,
        )}
        priority
      />
    </Link>
  );
}
