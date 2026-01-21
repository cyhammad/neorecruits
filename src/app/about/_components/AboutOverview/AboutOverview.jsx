"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Globe, Users, TrendingUp, Award, CheckCircle2 } from "lucide-react";
import { milestones, impactStats, regions, partnerships } from "./overviewData";
import { ImpactStat } from "./ImpactStat";

const glideTransition = {
  duration: 1.2,
  ease: [0.22, 1, 0.36, 1],
};

const staggerConfig = {
  staggerChildren: 0.1,
  delayChildren: 0.2,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: staggerConfig,
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: glideTransition,
  },
};

export function AboutOverview() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <section
      ref={ref}
      className="relative py-16 sm:py-24 md:py-32 bg-white overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f8fafc] -skew-x-12 translate-x-1/4 z-0" />

      <div className="container mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={containerVariants}
          className="max-w-7xl mx-auto space-y-24 sm:space-y-32"
        >
          {/* Intro Section: Header + Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <motion.div variants={itemVariants} className="space-y-4">
                <span className="text-[#9a01cd] font-bold tracking-widest uppercase text-xs sm:text-sm">
                  The NeoRecruits Story
                </span>
                <h2 className="tracking-tight text-[#0b2677] leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-[40px] font-black uppercase">
                  Pioneering Excellence in <br className="hidden sm:block" />{" "}
                  Global Talent Acquisition
                </h2>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="space-y-6 text-[#0b2677]/70 text-base sm:text-lg leading-relaxed"
              >
                <p>
                  NeoRecruits enables clients to improve their performance
                  through better talent acquisition. We deliver world-class
                  talent acquisition solutions, from Board and Executive moves,
                  through to training, strategic hiring projects and complex
                  recruitment programmes across geographies.
                </p>
                <p>
                  NeoRecruits has the expertise to provide best practice, cost
                  effective and agile solutions. Bringing together Recruitment
                  Process Outsourcing (RPO), Permanent Placement, Contract
                  Staffing and Assessment Centres, NeoRecruits has the
                  capability to create a unique solution to meet your needs.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <div className="space-y-3">
                  <h4 className="font-bold text-[#0b2677] uppercase text-sm tracking-wider">
                    Regions Served
                  </h4>
                  <ul className="space-y-2">
                    {regions.map((region, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-[#0b2677]/80"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#9a01cd]" />
                        {region}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold text-[#0b2677] uppercase text-sm tracking-wider">
                    Strategic Partnerships
                  </h4>
                  <ul className="space-y-2">
                    {partnerships.map((partner, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-[#0b2677]/80"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#9a01cd]" />
                        {partner}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group"
            >
              <Image
                src="/about_overview_banner.png"
                alt="Corporate Excellence"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b2677]/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-3xl font-black uppercase">Excellence</p>
                <p className="text-sm tracking-widest uppercase opacity-80">
                  Through Innovation
                </p>
              </div>
            </motion.div>
          </div>

          {/* Measurable Impact Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
            {impactStats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="space-y-4 text-center sm:text-left"
              >
                <div className="flex items-center justify-center sm:justify-start gap-3">
                  <div className="p-3 rounded-xl bg-[#9a01cd]/10 text-[#9a01cd]">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl sm:text-4xl font-black text-[#0b2677]">
                    {stat.value}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-[#0b2677]/60 font-bold uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
