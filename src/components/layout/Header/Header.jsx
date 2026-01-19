"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { DesktopNav } from "./DesktopNav";
import { DesktopActions } from "./DesktopActions";
import { MobileMenu } from "./MobileMenu";
import { navLinks } from "./navLinks";

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      setIsScrolled(scrollY > 15);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ease-out",
        isScrolled ? "bg-primary/30 backdrop-blur-xs" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <nav className="flex items-center justify-between max-w-7xl mx-auto py-2">
          <Logo />
          <DesktopNav navLinks={navLinks} />
          <DesktopActions isScrolled={isScrolled} />
          <MobileMenu navLinks={navLinks} />
        </nav>
      </div>
    </header>
  );
}
