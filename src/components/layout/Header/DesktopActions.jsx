"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function DesktopActions({ isScrolled }) {
  return (
    <div className="hidden md:flex items-center gap-3 min-w-[200px] justify-end">
      <AnimatePresence mode="wait">
        {!isScrolled ? (
          <motion.div
            key="auth-buttons"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-3"
          >
            <Button
              variant="ghost"
              className="font-semibold transition-all duration-300 text-white hover:bg-white/10"
            >
              Log in
            </Button>
            <Button className="bg-[#9a01cd] hover:bg-[#9a01cd]/90 text-white font-bold uppercase tracking-wider text-xs">
              Sign up
            </Button>
          </motion.div>
        ) : (
          <motion.div
            key="contact-button"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              variant="outline"
              className="border-2 border-white/30 text-primary hover:bg-white/20 hover:text-white font-bold uppercase tracking-wider text-xs px-4 py-2 transition-all duration-300"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
