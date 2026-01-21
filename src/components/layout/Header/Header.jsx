"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { DesktopNav } from "./DesktopNav";
import { navLinks } from "./navLinks";
import { TopBar } from "./TopBar";
import { MobileMenu } from "./MobileMenu";

/**
 * Header component optimized for reduced latency.
 * - Snap-to-scroll response (duration-150 transform)
 * - Removed intentional delays
 * - Early scroll detection (sentinel at 48px)
 */
export function Header() {
  const headerRef = React.useRef(null);
  const sentinelRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isScrolled = !entry.isIntersecting;
        if (headerRef.current) {
          headerRef.current.dataset.scrolled = isScrolled.toString();
        }
      },
      {
        threshold: 0,
      },
    );

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* 
          Sentinel moved lower (to 48px) to trigger state change earlier.
          This makes the UI react as soon as the user starts a meaningful scroll.
      */}
      <div
        ref={sentinelRef}
        className="absolute top-[48px] left-0 w-full h-[1px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <header
        ref={headerRef}
        data-scrolled="false"
        className="fixed top-0 left-0 right-0 z-50 pointer-events-none group/header"
      >
        {/*
          Animation Container:
          Aggressive duration-150 and ease-out for snappy, non-theatrical motion.
        */}
        <div className="pointer-events-auto transition-transform duration-150 ease-out will-change-transform group-data-[scrolled=true]/header:-translate-y-12">
          <TopBar />

          {/* Main Navigation Row */}
          <div className="relative group-data-[scrolled=true]/header:py-3 py-3 transition-[padding] duration-150 ease-out">
            {/* 
              Background/Blur Layer:
              Delays removed. Duration reduced for near-instant appearance after motion.
            */}
            <div
              className={cn(
                "absolute inset-0 -z-10 pointer-events-none",
                "bg-primary/70 backdrop-blur-xl shadow-lg border-b border-white/10",
                "opacity-0 transition-opacity duration-100 ease-out",
                "group-data-[scrolled=true]/header:opacity-100",
              )}
            />

            <div className="container mx-auto px-4 sm:px-6 md:px-10">
              <nav className="flex items-center justify-between max-w-7xl mx-auto">
                <Logo />
                <div className="hidden md:flex items-center gap-6">
                  <DesktopNav navLinks={navLinks} />
                </div>
                <MobileMenu navLinks={navLinks} />
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
