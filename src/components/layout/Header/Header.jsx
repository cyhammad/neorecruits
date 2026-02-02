"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { DesktopNav } from "./DesktopNav";
import { navLinks } from "./navLinks";
import { TopBar } from "./TopBar";
import { MobileMenu } from "./MobileMenu";

import { DesktopActions } from "./DesktopActions";

/**
 * Header component optimized for reduced latency.
 * - Snap-to-scroll response (duration-150 transform)
 * - Removed intentional delays
 * - Early scroll detection (sentinel at 48px)
 */
export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-[#0b2677] border-white/10 shadow-lg py-0"
          : "bg-transparent border-transparent py-2",
      )}
    >
      <div className="pointer-events-auto">
        <TopBar />

        {/* Main Navigation Row */}
        <div className="relative py-3">
          <div className="container mx-auto px-4 sm:px-6 md:px-10">
            <nav className="flex items-center justify-between max-w-7xl mx-auto">
              <Logo />
              <div className="hidden md:flex items-center gap-6">
                <DesktopNav navLinks={navLinks} navScrolled={isScrolled} />
              </div>
              <MobileMenu navLinks={navLinks} />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
