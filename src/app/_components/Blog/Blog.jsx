"use client";

import * as React from "react";
import { useInView } from "framer-motion";
import { BlogHeader } from "./BlogHeader";
import { BlogCard } from "./BlogCard";
import { posts } from "./blogData";

export function Blog() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  return (
    <section
      ref={ref}
      className="relative py-20 sm:py-24 md:py-32 bg-[#0b2677] overflow-hidden"
    >
      {/* Decorative Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        <BlogHeader isInView={isInView} />

        <div className="max-w-7xl mx-auto">
          {/* Asymmetric Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-10">
            {/* Top Row: Large Featured + Standard */}
            <div className="md:col-span-8">
              <BlogCard
                post={posts[0]}
                index={0}
                isInView={isInView}
                variant="featured"
              />
            </div>
            <div className="md:col-span-4">
              <BlogCard
                post={posts[1]}
                index={1}
                isInView={isInView}
                variant="standard"
              />
            </div>

            {/* Bottom Row: Standard + Large Featured */}
            <div className="md:col-span-4">
              <BlogCard
                post={posts[2]}
                index={2}
                isInView={isInView}
                variant="standard"
              />
            </div>
            <div className="md:col-span-8">
              <BlogCard
                post={posts[3]}
                index={3}
                isInView={isInView}
                variant="featured"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
