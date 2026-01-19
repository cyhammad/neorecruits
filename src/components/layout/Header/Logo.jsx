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
        height={160}
        className={cn(
          "object-contain object-left transition-all duration-300",
          "brightness-0 invert",
          className,
        )}
        priority
      />
    </Link>
  );
}
