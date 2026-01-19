"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import { smoothTransition, staggerDelay } from "./testimonialsData";

export function AvatarsRow({ isInView }) {
  const avatars = [
    { gradient: "linear-gradient(to bottom right, #539ce0, #2165b8)" },
    { gradient: "linear-gradient(to bottom right, #9a01cd, #7a01a5)" },
    { gradient: "linear-gradient(to bottom right, #2165b8, #0b2677)" },
    { gradient: "linear-gradient(to bottom right, #539ce0, #9a01cd)" },
  ];

  return (
    <div className="flex -space-x-3">
      {avatars.map((avatar, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={
            isInView
              ? { opacity: 1, scale: 1, rotate: 0 }
              : { opacity: 0, scale: 0, rotate: -180 }
          }
          transition={{
            ...smoothTransition,
            delay: staggerDelay * (4.5 + i * 0.2),
            type: "spring",
            stiffness: 200,
          }}
          whileHover={{ scale: 1.15, zIndex: 10 }}
          className="w-12 h-12 rounded-full border-2 border-white shadow-lg flex items-center justify-center text-white cursor-pointer hover:shadow-xl transition-all duration-300 relative overflow-hidden"
          style={{ backgroundImage: avatar.gradient }}
        >
          <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />
          <User className="w-6 h-6 fill-white relative z-10" />
        </motion.div>
      ))}
    </div>
  );
}
