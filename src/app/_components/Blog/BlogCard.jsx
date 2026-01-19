"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { smoothTransition, staggerDelay } from "./blogData";

export function BlogCard({ post, index, isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{
        ...smoothTransition,
        delay: staggerDelay * (2 + index * 0.3),
      }}
    >
      <Link
        href={`/insights/${post.id}`}
        className="group flex flex-col h-full bg-[#2165b8]/20 border border-white/5 rounded-2xl overflow-hidden hover:border-[#539ce0]/30 hover:shadow-2xl hover:shadow-[#539ce0]/5 transition-all duration-300"
      >
        <div className="relative h-60 w-full overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[#0b2677]/20 group-hover:bg-transparent transition-colors duration-300" />
          <div className="absolute top-4 left-4">
            <Badge className="bg-[#0b2677]/80 hover:bg-[#0b2677] backdrop-blur-sm text-white border-white/10 uppercase tracking-wider text-[10px] font-bold px-3 py-1.5">
              {post.category}
            </Badge>
          </div>
        </div>

        <div className="flex flex-col flex-1 p-5 sm:p-6 md:p-8 space-y-3 sm:space-y-4">
          <div className="flex items-center gap-4 text-xs font-bold text-white/40 uppercase tracking-wider">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#539ce0]" />
              {post.readTime}
            </span>
            <span>|</span>
            <span>{post.date}</span>
          </div>

          <h3 className="text-white group-hover:text-[#539ce0] transition-colors line-clamp-2 leading-snug text-lg sm:text-xl font-bold">
            {post.title}
          </h3>

          <p className="text-white/60 text-sm leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>

          <div className="mt-auto pt-6 flex items-center text-[#9a01cd] text-sm font-bold uppercase tracking-wider group/link font-bold">
            Read Article
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
