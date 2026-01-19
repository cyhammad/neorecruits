"use client";

import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { MobileNavLinks } from "./MobileNavLinks";
import { MobileMenuActions } from "./MobileMenuActions";

export function MobileMenu({ navLinks }) {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "transition-all duration-300",
              "text-white hover:bg-white/10",
            )}
          >
            <Menu className="w-6 h-6" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-[320px] sm:w-[400px] bg-white/95 backdrop-blur-xl border-l border-white/20 p-0 overflow-y-auto"
        >
          <SheetHeader className="px-6 pt-6 pb-4 border-b border-[#e5e5e5]/50">
            <SheetTitle className="text-left">
              <div className="relative h-10 w-40">
                <Image
                  src="/mainLogo.png"
                  alt="NeoRecruits"
                  fill
                  sizes="160px"
                  className="object-contain object-left brightness-0"
                />
              </div>
            </SheetTitle>
          </SheetHeader>

          <div className="flex flex-col px-6 pt-6 pb-6">
            <MobileNavLinks navLinks={navLinks} />
            <div className="h-px bg-linear-to-r from-transparent via-[#e5e5e5] to-transparent my-4"></div>
            <MobileMenuActions />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
