"use client";

import { motion } from "framer-motion";

export function ExpertiseCard({ feature }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative h-full bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-[#9a01cd]/50 hover:bg-white/10 transition-all duration-500 overflow-hidden"
    >
      {/* Hover Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#9a01cd]/0 to-[#0b2677]/0 group-hover:from-[#9a01cd]/10 group-hover:to-[#0b2677]/10 transition-all duration-500 opacity-0 group-hover:opacity-100" />

      <div className="relative z-10 space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#9a01cd] to-[#0b2677] p-[1px] shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-shadow duration-500">
          <div className="w-full h-full rounded-2xl bg-[#0b2677]/80 backdrop-blur-xl flex items-center justify-center group-hover:bg-transparent transition-colors duration-500">
            <feature.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-500" />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-black text-white mb-3 group-hover:text-[#9a01cd] transition-colors duration-300 uppercase tracking-wide">
            {feature.title}
          </h3>
          <p className="text-sm text-white/60 leading-relaxed font-medium group-hover:text-white/80 transition-colors">
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
