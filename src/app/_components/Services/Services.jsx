"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView, motion, AnimatePresence } from "framer-motion";
import { ArrowRight, UserPlus } from "lucide-react";
import { servicesData, smoothTransition, staggerDelay } from "./servicesData";
import { Button } from "@/components/ui/Button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Services() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const [activeItem, setActiveItem] = React.useState("item-1");

  const activeService =
    servicesData.find((s) => s.id === activeItem) || servicesData[0];

  return (
    <section
      ref={ref}
      id="services"
      className="relative py-20 sm:py-24 md:py-32 bg-[#0b2677] overflow-hidden"
    >
      {/* Background patterns */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ ...smoothTransition, delay: 0 }}
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Global Recruitment Solutions <br className="hidden sm:block" />
              for Every Industry.
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl font-medium">
              NeoRecruits' recruitment and management services are operational
              across 6 continents. We offer a flexible and trusted partnership
              for both candidates and employers.
            </p>
          </motion.div>
        </div>

        {/* Services Accordion Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Left Column: Accordion */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ ...smoothTransition, delay: 0.2 }}
          >
            <Accordion
              type="single"
              value={activeItem}
              onValueChange={(value) => value && setActiveItem(value)}
              className="w-full space-y-3 sm:space-y-4"
            >
              {servicesData.map((service) => (
                <AccordionItem
                  key={service.id}
                  value={service.id}
                  className="border-none group/item transition-all duration-500 rounded-2xl overflow-hidden hover:bg-white/5 data-[state=open]:bg-white data-[state=open]:shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
                >
                  <AccordionTrigger className="hover:no-underline py-4 px-4 sm:py-6 sm:px-8 text-lg sm:text-2xl font-bold text-white/40 transition-all duration-300 group-data-[state=open]/item:text-[#0b2677]">
                    <div className="flex items-center gap-4 sm:gap-6">
                      <div
                        className={`p-2.5 sm:p-3 rounded-xl transition-all duration-500 scale-90 group-data-[state=open]/item:scale-100 group-data-[state=open]/item:bg-[#0b2677] group-data-[state=open]/item:text-white ${activeItem === service.id ? "bg-[#0b2677] text-white" : "bg-white/5 text-white/40"}`}
                      >
                        <service.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className="text-left text-base sm:text-2xl">
                        {service.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#0b2677]/80 text-sm sm:text-lg leading-relaxed pt-0 pb-6 sm:pb-8 px-4 sm:px-8">
                    <div className="pl-0 sm:pl-16 space-y-6 sm:space-y-8">
                      <p className="font-medium group-data-[state=open]/item:text-[#0b2677]">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Button
                          size="sm"
                          className="h-10 px-6 rounded-lg bg-[#0b2677] border-none text-xs font-bold tracking-[0.1em] uppercase group/btn overflow-hidden relative transition-all duration-200 active:scale-[0.96] shadow-xl shadow-[#0b2677]/10 hover:shadow-[#0b2677]/20"
                          asChild
                        >
                          <Link
                            href={service.link}
                            className="flex items-center justify-center gap-2 relative z-10"
                          >
                            <span className="relative z-20 text-white transition-colors duration-300">
                              Learn More
                            </span>
                            <div className="relative z-20 w-4 h-4 overflow-hidden flex items-center justify-center">
                              <ArrowRight className="w-4 h-4 absolute text-white transition-all duration-500 ease-[0.2,1,0.3,1] group-hover/btn:translate-x-10 group-hover/btn:opacity-0" />
                              <ArrowRight className="w-4 h-4 absolute -translate-x-10 opacity-0 text-white transition-all duration-500 ease-[0.2,1,0.3,1] group-hover/btn:translate-x-0 group-hover/btn:opacity-100" />
                            </div>
                          </Link>
                        </Button>

                        <Link
                          href="/services#request-talent"
                          className="inline-flex items-center text-sm font-bold text-[#0b2677]/60 hover:text-[#0b2677] transition-colors group/link pb-1"
                        >
                          Request Talent
                          <UserPlus className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Right Column: Active Image Display */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ ...smoothTransition, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="relative aspect-square w-full max-w-[500px] mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 1.1, rotate: 2 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                    <Image
                      src={activeService.image}
                      alt={activeService.title}
                      fill
                      className="object-cover"
                      sizes="500px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b2677]/60 via-transparent to-transparent" />
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#2165b8]/20 blur-2xl rounded-full -z-10" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full -z-10" />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Bottom Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ ...smoothTransition, delay: staggerDelay * 4 }}
          className="mt-16 sm:mt-20 flex justify-center"
        >
          <Button
            variant="link"
            className="group p-0 h-auto text-lg font-bold text-white hover:text-white transition-colors hover:no-underline"
            asChild
          >
            <Link href="/services">
              Explore All Services
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
