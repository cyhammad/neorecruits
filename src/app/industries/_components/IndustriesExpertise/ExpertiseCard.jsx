"use client";

import { motion } from "framer-motion";

export function ExpertiseCard({ feature }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative h-full bg-white/5 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-8 border border-white/10 hover:border-[#9a01cd]/50 hover:bg-white/10 transition-all duration-500 overflow-hidden"
    >
      {/* Hover Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#9a01cd]/0 to-[#0b2677]/0 group-hover:from-[#9a01cd]/10 group-hover:to-[#0b2677]/10 transition-all duration-500 opacity-0 group-hover:opacity-100" />

      <div className="relative z-10 flex flex-col items-center text-center sm:items-start sm:text-left space-y-3 sm:space-y-6">
        <div className="size-10 sm:w-16 sm:h-16 rounded-lg sm:rounded-2xl bg-gradient-to-br from-[#9a01cd] to-[#0b2677] p-[1px] shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-shadow duration-500">
          <div className="w-full h-full rounded-lg sm:rounded-2xl bg-[#0b2677]/80 backdrop-blur-xl flex items-center justify-center group-hover:bg-transparent transition-colors duration-500">
            <feature.icon className="size-5 sm:w-8 sm:h-8 text-white group-hover:scale-110 transition-transform duration-500" />
          </div>
        </div>

        <div>
          <h3 className="text-[10px] sm:text-xl font-black text-white mb-1 sm:mb-3  transition-colors duration-300 uppercase tracking-tight sm:tracking-wide leading-tight">
            {feature.title}
          </h3>
          <p className="hidden sm:block text-sm text-white/60 leading-relaxed font-medium group-hover:text-white/80 transition-colors">
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
