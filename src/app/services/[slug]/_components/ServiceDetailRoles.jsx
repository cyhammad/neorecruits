"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const serviceInsightsData = {
  "executive-search": {
    insights: [
      {
        date: "15 Jan 2025",
        title: "NeoRecruits Successfully Places CEO for Leading Tech Firm",
        excerpt:
          "A different perspective on executive search excellence. Our team delivered exceptional results for a Fortune 500 client seeking transformational leadership.",
        image: "/service_executive_search.png",
        link: "/insights/executive-search-success",
        featured: true,
      },
      {
        date: "08 Jan 2025",
        title: "The Future of Executive Leadership in the Digital Age",
        excerpt:
          "Insights on how digital transformation is reshaping the C-suite and what it means for executive recruitment strategies.",
        image: "/service_permanent_staffing.png",
        link: "/insights/digital-leadership",
        featured: false,
      },
    ],
  },
  "permanent-staffing": {
    insights: [
      {
        date: "12 Jan 2025",
        title: "Building High-Performance Teams Through Strategic Hiring",
        excerpt:
          "Our approach to permanent staffing that delivers 95% retention rates and exceptional cultural fit across industries.",
        image: "/service_permanent_staffing.png",
        link: "/insights/strategic-hiring",
        featured: true,
      },
      {
        date: "05 Jan 2025",
        title: "Talent Acquisition Trends to Watch in 2025",
        excerpt:
          "Key insights on the evolving permanent staffing landscape and how organizations can stay ahead of the competition.",
        image: "/service_executive_search.png",
        link: "/insights/talent-trends-2025",
        featured: false,
      },
    ],
  },
  "contract-recruitment": {
    insights: [
      {
        date: "26 Sep 2024",
        title:
          "NeoRecruits Wins Two Awards at the Regional Staffing Excellence Awards 2024",
        excerpt:
          "Recognition for our outstanding contract staffing solutions and commitment to client success across the region.",
        image: "/service_contract_recruitment.png",
        link: "/insights/staffing-awards-2024",
        featured: true,
      },
      {
        date: "09 Sep 2024",
        title: "Delivering Contract Staffing Solutions Across MENA",
        excerpt:
          "A different perspective on delivering contract staffing solutions across the MENA region. Building agile workforces.",
        image: "/service_rpo.png",
        link: "/insights/contract-staffing-mena",
        featured: false,
      },
    ],
  },
  "outsource-rpo": {
    insights: [
      {
        date: "26 Sep 2024",
        title:
          "NeoRecruits Wins Two Awards at the Gulf Capital SME Awards 2024",
        excerpt:
          "Recognition for our outstanding RPO solutions and commitment to client success across the GCC region.",
        image: "/service_contract_recruitment.png",
        link: "/insights/sme-awards-2024",
        featured: true,
      },
      {
        date: "09 Sep 2024",
        title:
          "Delivering Recruitment Process Outsourcing (RPO) Solutions Across EMEA",
        excerpt:
          "A different perspective on delivering RPO solutions across the EMEA region. Twenty years ago, recruitment was fundamentally different.",
        image: "/service_rpo.png",
        link: "/insights/rpo-emea",
        featured: false,
      },
    ],
  },
  "remote-staffing": {
    insights: [
      {
        date: "20 Jan 2025",
        title: "Building Distributed Teams: Lessons from Global Organizations",
        excerpt:
          "How leading companies are leveraging remote staffing to access global talent and drive innovation.",
        image: "/service_executive_search.png",
        link: "/insights/distributed-teams",
        featured: true,
      },
      {
        date: "10 Jan 2025",
        title: "Remote Work Infrastructure: Best Practices for 2025",
        excerpt:
          "Essential tools, processes, and strategies for building productive remote teams across time zones.",
        image: "/service_permanent_staffing.png",
        link: "/insights/remote-work-2025",
        featured: false,
      },
    ],
  },
};

const glideTransition = {
  duration: 1.2,
  ease: [0.22, 1, 0.36, 1],
};

const viewportConfig = {
  once: false,
  amount: 0.2,
};

export function ServiceDetailRoles({ slug }) {
  const data =
    serviceInsightsData[slug] || serviceInsightsData["outsource-rpo"];

  return (
    <section className="relative py-16 sm:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {data.insights.map((insight, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ ...glideTransition, delay: idx * 0.1 }}
              >
                <Link href={insight.link} className="group block">
                  {insight.featured ? (
                    /* Featured Card - Large Image with Overlay Text */
                    <div className="relative h-[350px] sm:h-[400px] rounded-xl overflow-hidden">
                      <Image
                        src={insight.image}
                        alt={insight.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 space-y-3">
                        <span className="text-[#9a01cd] text-sm font-bold">
                          {insight.date}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight group-hover:text-[#9a01cd] transition-colors">
                          {insight.title}
                        </h3>
                      </div>
                    </div>
                  ) : (
                    /* Standard Card - Image on Top with Text Below */
                    <div className="space-y-4">
                      <div className="relative h-[200px] sm:h-[240px] rounded-xl overflow-hidden">
                        <Image
                          src={insight.image}
                          alt={insight.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="space-y-3">
                        <span className="text-[#9a01cd] text-sm font-bold">
                          {insight.date}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-[#0b2677] leading-tight group-hover:text-[#9a01cd] transition-colors">
                          {insight.title}
                        </h3>
                        <p className="text-[#0b2677]/70 text-sm leading-relaxed font-medium">
                          {insight.excerpt}
                        </p>
                      </div>
                    </div>
                  )}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
