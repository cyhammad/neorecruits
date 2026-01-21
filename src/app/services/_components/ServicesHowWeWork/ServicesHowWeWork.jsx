"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

// Animation Transitions
const glideTransition = {
  duration: 1.2,
  ease: [0.22, 1, 0.36, 1],
};

const staggerConfig = {
  staggerChildren: 0.1,
  delayChildren: 0.1,
};

const viewportConfig = {
  once: false,
  amount: 0.3,
  margin: "-10% 0px",
};

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: staggerConfig,
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: glideTransition,
  },
};

export function ServicesHowWeWork() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="relative py-12 sm:py-16 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Column: Overlapping Images */}
          <div className="relative h-[320px] sm:h-[380px] md:h-[450px] w-full">
            {/* Background Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportConfig}
              transition={glideTransition}
              className="absolute top-0 left-0 w-[82%] h-[78%] rounded-xl overflow-hidden shadow-lg z-0"
            >
              <Image
                src="/how_we_work_1.png"
                alt="Professional Collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 80vw, 40vw"
              />
            </motion.div>

            {/* Foreground Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ ...glideTransition, delay: 0.2 }}
              className="absolute bottom-0 right-0 w-[82%] h-[68%] rounded-xl overflow-hidden shadow-2xl z-10"
            >
              <Image
                src="/how_we_work_2.png"
                alt="Team Meeting"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 80vw, 40vw"
              />
            </motion.div>
          </div>

          {/* Right Column: Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={containerVariants}
            className="space-y-5"
          >
            <motion.h2
              variants={itemVariants}
              className="tracking-tight text-[#0b2677] leading-tight text-3xl sm:text-4xl lg:text-[40px] font-black uppercase"
            >
              How We Work
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="space-y-4 text-[#0b2677]/80 text-sm sm:text-[15px] leading-relaxed font-semibold max-w-xl"
            >
              <p>
                NeoRecruits believes in employing the best, so we can deliver
                our best. With a team of over 50 dedicated professionals, each
                with their own skillset and extensive experience, we work as one
                team, with same goals, to deliver personal, tailormade solutions
                every step of the way.
              </p>
              <p>
                Using a unique balance of tradition and technology, we blend
                personal, face to face interaction with the latest technology
                tools and trends to ensure the happiness and wellbeing of our
                stakeholders – be they customers, candidates or our own team
                members. From ethical recruitment to ESG practices, NeoRecruits
                is here to help.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-2">
              <Button
                className="group relative h-10 sm:h-12 w-fit px-8 rounded-lg bg-[#9a01cd] text-white border-none flex items-center gap-2 transition-all text-[11px] font-black tracking-widest uppercase active:scale-95 shadow-xl shadow-[#9a01cd]/20 hover:bg-[#8a00bd]"
                onClick={() => {}}
              >
                <span className="relative z-20">Download Brochure</span>
                <div className="relative w-4 h-4 overflow-hidden flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 absolute transition-all duration-300 group-hover:translate-x-10" />
                  <ArrowRight className="w-4 h-4 absolute -translate-x-10 transition-all duration-300 group-hover:translate-x-0" />
                </div>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
