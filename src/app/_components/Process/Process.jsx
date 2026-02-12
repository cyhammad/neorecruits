"use client";

import * as React from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { steps, smoothTransition, staggerDelay } from "./processData";
import { cn } from "@/lib/utils";

// Separate component for each step to handle its own "light up" logic
function ProcessStep({ step, index, isInView, scrollProgress }) {
  // Calculate specific scroll points for this step to "light up"
  // Each step occupies roughly a 0.25 range of the total scroll (0-1)
  const stepThreshold = index * 0.33; // 0, 0.33, 0.66, 1.0 approx
  const isActivated = useTransform(
    scrollProgress,
    (val) => val >= stepThreshold,
  );
  const [active, setActive] = React.useState(index === 0);

  React.useEffect(() => {
    return isActivated.on("change", (latest) => setActive(latest));
  }, [isActivated]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        ...smoothTransition,
        delay: staggerDelay * index,
      }}
      className="flex flex-col items-center text-center group"
    >
      {/* Icon Circle */}
      <div className="relative mb-4 sm:mb-8">
        <div
          className={cn(
            "size-16 sm:size-20 rounded-full flex items-center justify-center transition-all duration-700 shadow-lg relative z-20",
            "bg-white/5 border border-white/10",
            "md:bg-[#0b2677] md:border-2",
            active
              ? "scale-110 shadow-[#9a01cd]/40 border-transparent bg-transparent"
              : "scale-100 shadow-none",
          )}
        >
          {/* Inner Gradient Circle that activates when line passes */}
          <div
            className={cn(
              "absolute inset-0 rounded-full transition-opacity duration-700 bg-gradient-to-br",
              step.color,
              active ? "opacity-100" : "opacity-0",
            )}
          />

          <step.icon
            className={cn(
              "w-6 h-6 sm:w-8 sm:h-8 stroke-[2.5px] relative z-10 transition-colors duration-700",
              active ? "text-white" : "text-white/40",
            )}
          />
        </div>

        {/* Step Number Badge */}
        <div
          className={cn(
            "absolute -top-1 -right-1 size-5 sm:size-7 rounded-full text-white text-[8px] sm:text-[10px] font-black flex items-center justify-center border-2 border-[#0b2677] z-30 transition-colors duration-700",
            active ? "bg-[#9a01cd]" : "bg-white/20",
          )}
        >
          {index + 1}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[120px] sm:max-w-[240px] px-1 sm:px-2 min-h-[40px] sm:min-h-[60px] flex items-start justify-center">
        <p
          className={cn(
            "text-[10px] sm:text-base font-black uppercase tracking-widest leading-tight transition-colors duration-700",
            active ? "text-white" : "text-white/40",
          )}
        >
          {step.title}
        </p>
      </div>
    </motion.div>
  );
}

export function Process() {
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });

  // Scroll progress for the vertical line on mobile
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Adjusted offset to make it "slower" to start and stop exactly at the end
    offset: ["start center", "end 70%"],
  });

  // Use a spring for smoother, "slower" feeling movement
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const pathLength = useTransform(smoothProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={containerRef}
      id="how-we-work"
      className="relative py-20 sm:py-28 md:py-36 bg-[#0b2677] overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-10 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-28">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={smoothTransition}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight"
          >
            How We Work
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "80px" } : { width: 0 }}
            transition={{ ...smoothTransition, delay: 0.3 }}
            className="h-1.5 bg-[#9a01cd] mx-auto mt-6 rounded-full"
          />
        </div>

        {/* Steps Flow */}
        <div className="relative">
          {/* DESKTOP/TABLET: Horizontal Connector Line */}
          <div className="absolute top-10 left-[12%] right-[12%] h-[1px] bg-sky-200/20 hidden md:block" />

          {/* MOBILE: Hidden for 2x2 grid */}
          <div className="absolute left-[50%] top-10 bottom-[140px] w-[2px] bg-white/10 hidden md:hidden -translate-x-1/2 overflow-hidden">
            <motion.div
              style={{ scaleY: pathLength, originY: 0 }}
              className="w-full h-full bg-gradient-to-b from-[#9a01cd] to-sky-400"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-10 sm:gap-16 md:gap-4 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <ProcessStep
                key={step.id}
                step={step}
                index={index}
                isInView={isInView}
                scrollProgress={smoothProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
