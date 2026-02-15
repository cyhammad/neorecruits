"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { smoothTransition, staggerDelay } from "./blogData";

export function BlogCard({
  post,
  index,
  isInView,
  variant = "standard",
  theme = "dark",
}) {
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
        className={cn(
          "group relative flex flex-col h-full rounded-[2.5rem] overflow-hidden transition-all duration-500",
          theme === "dark"
            ? "bg-[#2165b8]/5 border border-white/5 hover:border-[#9a01cd]/30"
            : "bg-white border border-gray-200 hover:border-[#9a01cd]/30 shadow-sm hover:shadow-md",
        )}
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
              <div className="flex items-center gap-3">
                <span className="text-[#9a01cd] text-[10px] font-black uppercase tracking-[0.2em] bg-white/10 backdrop-blur-md px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-white/60 text-[9px] font-bold uppercase tracking-widest">
                  {post.date}
                </span>
              </div>
              <h3 className="text-white text-2xl sm:text-3xl font-black uppercase tracking-tight leading-tight  transition-colors">
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
              <div
                className={cn(
                  "absolute inset-0 transition-colors duration-500",
                  theme === "dark"
                    ? "bg-[#0b2677]/20 group-hover:bg-transparent"
                    : "bg-black/5 group-hover:bg-transparent",
                )}
              />
            </div>

            <div className="flex flex-col p-8 space-y-4 flex-grow">
              <div className="flex items-center justify-between">
                <span
                  className={cn(
                    "text-[10px] font-black uppercase tracking-[0.2em]",
                    theme === "dark" ? "text-[#9a01cd]/80" : "text-[#9a01cd]",
                  )}
                >
                  {post.category}
                </span>
                <span
                  className={cn(
                    "text-[9px] font-semibold uppercase tracking-widest",
                    theme === "dark" ? "text-white/30" : "text-[#0b2677]/40",
                  )}
                >
                  {post.date}
                </span>
              </div>
              <h3
                className={cn(
                  "text-xl font-black uppercase tracking-tight leading-tight transition-colors ",
                  theme === "dark" ? "text-white" : "text-[#0b2677]",
                )}
              >
                {post.title}
              </h3>
              <p
                className={cn(
                  "text-sm leading-relaxed line-clamp-3 font-medium",
                  theme === "dark" ? "text-white/40" : "text-[#0b2677]/60",
                )}
              >
                {post.excerpt}
              </p>
            </div>
          </>
        )}
      </Link>
    </motion.div>
  );
}
