import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { LogIn, UserPlus, Phone, Mail, MessageSquare } from "lucide-react";

export function MobileMenuActions() {
  return (
    <div className="flex flex-col gap-6">
      {/* Primary CTAs */}
      <div className="flex flex-col gap-3">
        <Button
          variant="outline"
          className="w-full justify-center gap-3 text-base py-6 px-4 border-2 border-white/30 text-white hover:bg-white/10 font-bold uppercase tracking-wider rounded-xl transition-all duration-200"
          asChild
        >
          <Link href="/services#request-talent">
            <UserPlus className="w-5 h-5" />
            Hire Talent
          </Link>
        </Button>
      </div>

      {/* Secondary Actions */}
      <div className="grid grid-cols-2 gap-3">
        <Button
          variant="ghost"
          className="justify-center gap-2 text-sm py-4 border border-white/10 text-white hover:bg-white/5 font-semibold rounded-lg transition-all"
          asChild
        >
          <Link href="/signin">
            <LogIn className="w-4 h-4" />
            Log in
          </Link>
        </Button>
        <Button
          variant="ghost"
          className="justify-center gap-2 text-sm py-4 border border-white/10 text-white hover:bg-white/5 font-semibold rounded-lg transition-all"
          asChild
        >
          <Link href="/contact">
            <Mail className="w-4 h-4" />
            Contact
          </Link>
        </Button>
      </div>

      {/* Quick Contact Info */}
      <div className="pt-6 border-t border-white/10 space-y-4">
        <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold">
          Quick Connect
        </p>
        <div className="grid grid-cols-1 gap-4">
          <a
            href="tel:800385726"
            className="flex items-center gap-4 text-white hover:text-[#9a01cd] transition-colors group"
          >
            <div className="size-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#9a01cd]/20 transition-colors">
              <Phone className="size-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-white/40 font-bold uppercase tracking-wider">
                Call Us
              </span>
              <span className="text-lg font-bold">800 385 726</span>
            </div>
          </a>

          <a
            href="mailto:info@neorecruits.com"
            className="flex items-center gap-4 text-white hover:text-[#9a01cd] transition-colors group"
          >
            <div className="size-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#9a01cd]/20 transition-colors">
              <Mail className="size-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-white/40 font-bold uppercase tracking-wider">
                Email Us
              </span>
              <span className="text-base font-bold">info@neorecruits.com</span>
            </div>
          </a>

          <a
            href="https://wa.me/971000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-white hover:text-[#25D366] transition-colors group"
          >
            <div className="size-10 rounded-full bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
              <MessageSquare className="size-5 text-[#25D366]" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-white/40 font-bold uppercase tracking-wider">
                WhatsApp
              </span>
              <span className="text-base font-bold italic">Chat with us</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
