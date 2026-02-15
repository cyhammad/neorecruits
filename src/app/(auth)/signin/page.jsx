"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, UserCheck, Shield, Globe } from "lucide-react";
import Link from "next/link";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focusedField, setFocusedField] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="min-h-screen bg-[#050b1d] flex flex-col items-center justify-center p-6 sm:p-10 overflow-hidden relative font-sans">
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0b2677]/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(154,1,205,0.08),transparent_50%)]" />

        {/* Animated Particles/Nodes */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute bg-white/20 rounded-full"
            style={{
              width: Math.random() * 4 + 1 + "px",
              height: Math.random() * 4 + 1 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10"
      >
        {/* Left Side: Visual Narrative */}
        <div className="hidden lg:block space-y-8 pr-12">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#9a01cd]/10 border border-[#9a01cd]/20 text-[#9a01cd] text-[10px] font-black uppercase tracking-[0.3em]"
          >
            <Globe size={14} />
            Global Talent Network
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-6xl xl:text-7xl font-black text-white leading-[0.9] tracking-tighter"
          >
            THE FUTURE <br /> OF <span className="text-[#9a01cd]">WORK</span> IS{" "}
            <br /> HERE.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-white/40 text-lg leading-relaxed max-w-md font-medium"
          >
            Access our exclusive portal to manage your recruitment pipeline,
            track applications, and connect with elite professionals worldwide.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-10 pt-4">
            <div>
              <div className="text-3xl font-black text-white">50k+</div>
              <div className="text-[10px] text-white/30 uppercase tracking-widest font-bold">
                Candidates
              </div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">12</div>
              <div className="text-[10px] text-white/30 uppercase tracking-widest font-bold">
                Countries
              </div>
            </div>
            <div>
              <div className="text-3xl font-black text-white">98%</div>
              <div className="text-[10px] text-white/30 uppercase tracking-widest font-bold">
                Match Rate
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Identity Interface */}
        <motion.div variants={itemVariants} className="relative">
          {/* Decorative Back-glow */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#9a01cd]/20 to-transparent blur-3xl opacity-50" />

          <div className="bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 sm:p-14 shadow-2xl relative overflow-hidden group">
            <div className="mb-12">
              <h1 className="text-5xl font-black text-white tracking-tighter uppercase mb-2">
                Sign <span className="text-[#9a01cd]">In</span>
              </h1>
              <div className="h-1 w-12 bg-[#9a01cd]" />
            </div>

            <form className="space-y-8">
              {/* Email Field */}
              <div className="space-y-4">
                <label className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] ml-2">
                  Email Address
                </label>
                <div
                  className={`relative transition-all duration-500 ${focusedField === "email" ? "scale-[1.02]" : ""}`}
                >
                  <Mail
                    className={`absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-500 ${focusedField === "email" ? "text-[#9a01cd]" : "text-white/20"}`}
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    autoComplete="off"
                    className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl px-16 text-white text-lg focus:outline-none focus:border-[#9a01cd]/50 focus:bg-white/[0.08] transition-all placeholder:text-white/10"
                    placeholder="Enter your email"
                  />
                  {focusedField === "email" && (
                    <motion.div
                      layoutId="glow"
                      className="absolute inset-0 rounded-2xl border border-[#9a01cd]/30 shadow-[0_0_20px_rgba(154,1,205,0.1)] pointer-events-none"
                    />
                  )}
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-4">
                <div className="flex justify-between items-end px-2">
                  <label className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-[9px] font-black text-[#9a01cd]/60  transition-colors uppercase tracking-widest"
                  >
                    Forgot Access?
                  </a>
                </div>
                <div
                  className={`relative transition-all duration-500 ${focusedField === "password" ? "scale-[1.02]" : ""}`}
                >
                  <Lock
                    className={`absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-500 ${focusedField === "password" ? "text-[#9a01cd]" : "text-white/20"}`}
                  />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setFocusedField("password")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl px-16 text-white text-lg focus:outline-none focus:border-[#9a01cd]/50 focus:bg-white/[0.08] transition-all placeholder:text-white/10"
                    placeholder="••••••••"
                  />
                  {focusedField === "password" && (
                    <motion.div
                      layoutId="glow"
                      className="absolute inset-0 rounded-2xl border border-[#9a01cd]/30 shadow-[0_0_20px_rgba(154,1,205,0.1)] pointer-events-none"
                    />
                  )}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full h-18 bg-white text-[#0b2677] rounded-3xl font-black uppercase tracking-[0.2em] text-sm shadow-xl shadow-black/20 hover:bg-[#9a01cd] hover:text-white transition-all duration-500 flex items-center justify-center gap-4 group/btn"
              >
                Launch Session
                <div className="w-10 h-10 rounded-full bg-[#0b2677]/5 group-hover/btn:bg-white/20 flex items-center justify-center transition-colors">
                  <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:rotate-[-45deg]" />
                </div>
              </motion.button>
            </form>

            <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between text-[11px] font-bold uppercase tracking-widest">
              <span className="text-white/20">New around here?</span>
              <Link
                href="/signup"
                className="text-white  transition-colors flex items-center gap-2"
              >
                Create Account{" "}
                <UserCheck size={14} className="text-[#9a01cd]" />
              </Link>
            </div>

            {/* Corner Accent */}
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity">
              <Shield size={24} className="text-[#9a01cd]" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Modernist Floating Label (Concept) */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -rotate-90 hidden 2xl:block origin-left ml-10">
        <span className="text-[100px] font-black text-white/[0.02] tracking-[-0.1em] pointer-events-none uppercase">
          AUTHENTICATION
        </span>
      </div>
    </div>
  );
}
