import Link from "next/link";
import { UserPlus, Search } from "lucide-react";
import { Button } from "@/components/ui/Button";

/**
 * DesktopActions component handles secondary actions in the header.
 */
export function DesktopActions() {
  return (
    <div className="flex items-center gap-3">
      <Button
        variant="outline"
        className="h-9 px-5 border-white/30 text-white hover:bg-white/10 text-[11px] font-bold uppercase tracking-wider rounded-full transition-all duration-300"
        asChild
      >
        <Link href="/services">
          <UserPlus className="size-3.5 mr-2" />
          Hire Talent
        </Link>
      </Button>
      <Button
        className="h-9 px-5 bg-white text-[#0b2677] hover:bg-white/90 text-[11px] font-bold uppercase tracking-wider rounded-full transition-all duration-300 shadow-lg shadow-black/10"
        asChild
      >
        <Link href="/jobs">
          <Search className="size-3.5 mr-2" />
          Search Jobs
        </Link>
      </Button>
    </div>
  );
}
