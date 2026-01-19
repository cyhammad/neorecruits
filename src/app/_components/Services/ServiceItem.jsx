"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/Button";
import { smoothTransition, staggerDelay } from "./servicesData";

export function ServiceItem({ service, index, isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        ...smoothTransition,
        delay: staggerDelay * (1.5 + index * 0.3),
      }}
    >
      <AccordionItem
        value={service.id}
        className="border-none bg-[#2165b8]/20 rounded-xl px-4 sm:px-6 transition-all duration-300 data-[state=open]:bg-white data-[state=open]:text-[#0b2677] group hover:bg-[#2165b8]/40"
      >
        <AccordionTrigger className="hover:no-underline py-4 sm:py-6 [&[data-state=open]>svg]:rotate-45">
          <div className="flex items-center gap-3 sm:gap-4 text-left">
            <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white/50 group-data-[state=open]:text-[#0b2677] transition-colors shrink-0" />
            <span className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-white group-data-[state=open]:text-[#0b2677]">
              {service.title}
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="pb-4 sm:pb-6">
          <div className="space-y-4 sm:space-y-6 pt-2">
            <p className="text-sm sm:text-base text-white/70 group-data-[state=open]:text-[#0b2677]/80 leading-relaxed font-medium">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Button
                size="sm"
                className="rounded-full font-bold bg-[#0b2677] text-white hover:bg-[#0b2677]/90"
                asChild
              >
                <Link href={service.link}>Read More</Link>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full font-bold border-[#0b2677]/20 text-[#0b2677] hover:bg-[#0b2677]/5"
                asChild
              >
                <Link href="/contact">Request Talent</Link>
              </Button>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </motion.div>
  );
}
