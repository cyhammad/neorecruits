"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Upload, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function JobsCTA() {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-[#0b2677] overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[50%] h-[120%] bg-linear-to-bl from-white/5 to-transparent pointer-events-none -skew-x-12 origin-top-right z-0 rounded-l-[100px] blur-3xl" />
      <div className="container mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8 sm:space-y-10">
              <div className="space-y-4">
                <h2 className="tracking-tight text-white leading-tight text-3xl sm:text-4xl md:text-5xl font-black">
                  Can't Find the Perfect Role?
                </h2>
                <p className="text-white/70 text-base sm:text-lg leading-relaxed font-medium max-w-lg">
                  Join our talent network and get matched with exclusive
                  opportunities. Submit your resume and let our recruiters find
                  the right role for you.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button
                  className="rounded-lg bg-[#9a01cd] hover:bg-[#9a01cd]/90 text-white h-12 sm:h-14 px-8 text-xs sm:text-sm font-bold tracking-widest uppercase w-full sm:w-auto shadow-lg shadow-[#9a01cd]/20"
                  asChild
                >
                  <Link href="/jobs/upload-resume">
                    <Upload className="mr-2 w-5 h-5" />
                    Upload Your Resume
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="rounded-lg border-2 border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/40 text-white h-12 sm:h-14 px-8 text-xs sm:text-sm font-bold tracking-widest uppercase transition-all w-full sm:w-auto text-center"
                  asChild
                >
                  <Link
                    href="/contact"
                    className="flex items-center justify-center"
                  >
                    <Mail className="mr-2 w-5 h-5" />
                    Contact Recruiter
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 order-first lg:order-last">
              <Image
                src="/job-man.png"
                alt="Professional with resume"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b2677]/80 to-transparent mix-blend-multiply" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
