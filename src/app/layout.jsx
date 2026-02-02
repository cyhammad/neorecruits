import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NEORECRUITS",
  description: "NEORECRUITS ",
};

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ClientLayout } from "@/components/layout/ClientLayout";
import { FloatingSupport } from "@/components/FloatingSupport/FloatingSupport";
import { GoogleTranslate } from "@/components/GoogleTranslate/GoogleTranslate";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head />
      <body
        className={`${plusJakartaSans.variable} ${geistMono.variable} antialiased font-sans overflow-x-hidden`}
      >
        <GoogleTranslate />
        <ClientLayout>
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingSupport />
        </ClientLayout>
      </body>
    </html>
  );
}
