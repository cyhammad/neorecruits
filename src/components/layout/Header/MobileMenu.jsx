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
              "text-white hover:bg-white/10 active:scale-95",
            )}
          >
            <Menu className="w-6 h-6" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-full sm:max-w-[400px] bg-white/98 backdrop-blur-md border-l border-[#e5e5e5]/50 p-0 flex flex-col h-[100dvh]"
        >
          <SheetHeader className="px-6 py-5 border-b border-[#e5e5e5]/50 shrink-0">
            <SheetTitle className="text-left">
              <div className="relative h-8 w-32">
                <Image
                  src="/mainLogo.png"
                  alt="NeoRecruits"
                  fill
                  sizes="128px"
                  className="object-contain object-left brightness-0"
                  priority
                />
              </div>
            </SheetTitle>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto custom-scrollbar pt-6 pb-10 px-4">
            <div className="flex flex-col gap-2">
              <MobileNavLinks navLinks={navLinks} />
              <div className="h-px bg-[#e5e5e5]/50 my-4 mx-2"></div>
              <MobileMenuActions />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
