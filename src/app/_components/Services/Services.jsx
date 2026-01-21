"use client";

import * as React from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { servicesData, smoothTransition, staggerDelay } from "./servicesData";
import { ServiceCard } from "./ServiceCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Services() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

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
        <div className="max-w-3xl mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ ...smoothTransition, delay: 0 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Global Recruitment Solutions <br className="hidden sm:block" />
              for Every Industry.
            </h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
              NeoRecruits' recruitment and management services are operational
              across 6 continents. We offer a flexible and trusted partnership
              for both candidates and employers.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              isInView={isInView}
            />
          ))}
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
            className="group p-0 h-auto text-lg font-bold text-white hover:text-[#2165b8] transition-colors hover:no-underline"
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
