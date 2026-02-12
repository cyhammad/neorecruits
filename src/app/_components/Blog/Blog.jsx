"use client";

import * as React from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { BlogHeader } from "./BlogHeader";
import { BlogCard } from "./BlogCard";
import { posts } from "./blogData";

export function Blog() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const controls = useAnimation();
  const [isPaused, setIsPaused] = React.useState(false);

  // Width calculation for the marquee loop
  const cardWidth = 85; // vw
  const gapWidth = 24; // px
  const totalCards = posts.length;

  React.useEffect(() => {
    if (isInView && !isPaused) {
      controls.start({
        x: [0, -(85 * totalCards + 24 * totalCards)],
        transition: {
          duration: 35, // Increased speed (from 60s)
          ease: "linear",
          repeat: Infinity,
        },
      });
    } else {
      controls.stop();
    }
  }, [isInView, isPaused, controls, totalCards]);

  const handlePointerDown = () => setIsPaused(true);
  const handlePointerUp = () => setIsPaused(false);

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
          {/* Desktop/Tablet View: Grid Layout */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10">
            {/* Top Row: Large Featured + Standard */}
            <div className="lg:col-span-8 col-span-1">
              <BlogCard
                post={posts[0]}
                index={0}
                isInView={isInView}
                variant="featured"
              />
            </div>
            <div className="lg:col-span-4 col-span-1">
              <BlogCard
                post={posts[1]}
                index={1}
                isInView={isInView}
                variant="standard"
              />
            </div>

            {/* Bottom Row: Standard + Large Featured */}
            <div className="lg:col-span-4 col-span-1">
              <BlogCard
                post={posts[2]}
                index={2}
                isInView={isInView}
                variant="standard"
              />
            </div>
            <div className="lg:col-span-8 col-span-1">
              <BlogCard
                post={posts[3]}
                index={3}
                isInView={isInView}
                variant="featured"
              />
            </div>
          </div>

          {/* Mobile View: Continuous Smooth Marquee with Interaction */}
          <div
            className="md:hidden w-full relative -mx-4 overflow-hidden touch-none"
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
          >
            {/* Fading Edges */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0b2677] to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0b2677] to-transparent z-20 pointer-events-none" />

            <div className="w-max">
              <motion.div
                animate={controls}
                drag="x"
                dragConstraints={{ left: -2000, right: 0 }}
                onDragStart={() => setIsPaused(true)}
                onDragEnd={() => setIsPaused(false)}
                className="flex gap-6 px-4 py-8"
              >
                {/* Triplicate posts for seamless loop */}
                {[...posts, ...posts, ...posts].map((post, index) => (
                  <div
                    key={`${post.id}-${index}`}
                    className="w-[85vw] flex-none"
                  >
                    <BlogCard
                      post={post}
                      index={index % posts.length}
                      isInView={true}
                      variant="standard"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
