"use client";

import Image from "next/image";
import { SmokeLayer } from "./SmokeLayer";

export function HeroBackground({ image, title, index }) {
  return (
    <>
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={image}
          alt={title}
          fill
          priority={index === 0}
          className="object-cover object-center transition-transform duration-10000 hover:scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/90" />
      </div>
      <SmokeLayer />
    </>
  );
}
