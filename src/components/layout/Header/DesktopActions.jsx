import Link from "next/link";
import { UserPlus } from "lucide-react";
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
        <Link href="/services#request-talent">
          <UserPlus className="size-3.5 mr-2" />
          Hire Talent
        </Link>
      </Button>
    </div>
  );
}
