"use client";

import * as React from "react";
import { InsightsHero } from "./_components/InsightsHero/InsightsHero";
import { BlogCard } from "../_components/Blog/BlogCard";
import { posts } from "../_components/Blog/blogData";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export default function InsightsPage() {
  const [activeTab, setActiveTab] = React.useState("news");
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  const tabs = [
    { id: "news", label: "News" },
    { id: "blogs", label: "Blogs" },
  ];

  // Filter posts based on tab
  // News includes: Corporate, Acquisition, Awards
  // Blogs includes: Market Insights
  const newsPosts = posts.filter((p) =>
    ["Corporate", "Acquisition", "Awards"].includes(p.category),
  );

  // If blog posts are few, we might want to duplicate or just show what matches.
  // For now, let's just show matching ones.
  const blogPosts = posts.filter((p) =>
    ["Market Insights"].includes(p.category),
  );

  // Allow fallback to show all if empty, for demo purposes,
  // or just show what we have.
  // If blogPosts is empty (only 1 in data), it might look empty.
  // Let's just use what we have.

  const displayPosts = activeTab === "news" ? newsPosts : blogPosts;

  return (
    <main className="flex flex-col w-full min-h-screen bg-white" ref={ref}>
      <InsightsHero
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={tabs}
      />

      <div className="flex-1 overflow-hidden bg-white relative">
        {/* Decorative Background Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230b2677' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 sm:px-6 md:px-10 py-20 relative z-10"
          >
            <div className="max-w-7xl mx-auto">
              {displayPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
                  {displayPosts.map((post, index) => {
                    // Make the first item featured in the News tab, or first item in Blogs if only 1
                    const isFeatured = index === 0 && displayPosts.length > 1;
                    return (
                      <div
                        key={post.id}
                        className={cn(
                          isFeatured
                            ? "md:col-span-12 lg:col-span-8"
                            : "md:col-span-6 lg:col-span-4",
                        )}
                      >
                        <BlogCard
                          post={post}
                          index={index}
                          isInView={isInView}
                          variant={isFeatured ? "featured" : "standard"}
                          theme="light"
                        />
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-20 text-[#0b2677]/40">
                  <p className="text-xl font-medium italic">
                    More {activeTab} coming soon.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
