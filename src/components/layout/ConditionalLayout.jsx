"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingSupport } from "@/components/FloatingSupport/FloatingSupport";

export function ConditionalLayout({ children }) {
  const pathname = usePathname();

  // Define routes where header and footer should be hidden
  const isAuthPage =
    pathname.startsWith("/signin") || pathname.startsWith("/signup");

  if (isAuthPage) {
    return <main>{children}</main>;
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingSupport />
    </>
  );
}
