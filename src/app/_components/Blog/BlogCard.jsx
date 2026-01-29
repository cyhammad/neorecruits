"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { smoothTransition, staggerDelay } from "./blogData";

export function BlogCard({ post, index, isInView, variant = "standard" }) {
  const isFeatured = variant === "featured";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        ...smoothTransition,
        delay: staggerDelay * (index + 1),
      }}
      className="h-full"
    >
      <Link
        href={`/insights/${post.id}`}
        className="group relative flex flex-col h-full rounded-[2.5rem] overflow-hidden bg-[#2165b8]/5 border border-white/5 hover:border-[#9a01cd]/30 transition-all duration-500"
      >
        {isFeatured ? (
          <div className="relative h-full min-h-[420px] w-full flex flex-col justify-end">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b2677] via-[#0b2677]/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative p-8 sm:p-10 space-y-4">
              <span className="text-[#9a01cd] text-[10px] font-black uppercase tracking-[0.2em] bg-white/10 backdrop-blur-md px-3 py-1 rounded-full">
                {post.date}
              </span>
              <h3 className="text-white text-2xl sm:text-3xl font-black uppercase tracking-tight leading-none group-hover:text-[#9a01cd] transition-colors">
                {post.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed line-clamp-2 font-medium">
                {post.excerpt}
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#0b2677]/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            <div className="flex flex-col p-8 space-y-4 flex-grow">
              <span className="text-[#9a01cd]/60 text-[10px] font-black uppercase tracking-[0.2em]">
                {post.date}
              </span>
              <h3 className="text-white text-xl font-black uppercase tracking-tight leading-tight group-hover:text-[#9a01cd] transition-colors">
                {post.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed line-clamp-3 font-medium">
                {post.excerpt}
              </p>
            </div>
          </>
        )}
      </Link>
    </motion.div>
  );
}
