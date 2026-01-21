"use client";

import * as React from "react";
import { motion } from "framer-motion";

const serviceProcessData = {
  "executive-search": {
    title: "Driving Leadership Excellence Through Executive Search",
    description:
      "NeoRecruits' executive search services provide strategic leadership solutions tailored to meet your unique business needs. From C-suite placement to board advisory, we manage the entire search lifecycle, ensuring precision, confidentiality, and measurable results.",
    benefits: [
      {
        title: "Strategic Talent Mapping",
        description:
          "As a trusted executive search partner, we provide businesses with comprehensive market intelligence and talent mapping. By leveraging our extensive networks and research capabilities, we identify leaders who drive transformation and deliver lasting business impact.",
      },
      {
        title: "Accelerated Placement",
        description:
          "Our executive-driven search services are designed to reduce your time-to-hire by deploying proven methodologies and deep market insights. We have a team of dedicated specialists who ensure that leadership positions are filled swiftly with exceptional candidates.",
      },
      {
        title: "Cultural Alignment",
        description:
          "We go beyond resumes. Our executive search methodology includes rigorous cultural assessment with a deep understanding of organizational dynamics. The leaders you get not only meet technical requirements but fit seamlessly into your organizational culture and values.",
      },
    ],
  },
  "permanent-staffing": {
    title: "Building Lasting Teams Through Permanent Staffing",
    description:
      "NeoRecruits' permanent staffing services provide long-term talent solutions tailored to meet your unique business needs. From entry-level to senior positions, we manage the entire hiring lifecycle, ensuring quality, cultural fit, and measurable results.",
    benefits: [
      {
        title: "Quality Candidates",
        description:
          "As a trusted permanent staffing partner, we provide businesses with thoroughly vetted candidates. By leveraging comprehensive screening processes and reference checks, we identify professionals who drive performance and deliver lasting value.",
      },
      {
        title: "Reduced Time-to-Hire",
        description:
          "Our staffing services are designed to accelerate your hiring timeline by deploying efficient processes and pre-qualified talent pools. We have dedicated recruiters who ensure that positions are filled quickly with quality candidates.",
      },
      {
        title: "Cultural Fit Focus",
        description:
          "We prioritize cultural alignment in every placement. Our methodology includes behavioral assessments and value alignment checks. The candidates you get not only meet job requirements but integrate seamlessly into your team dynamics.",
      },
    ],
  },
  "contract-recruitment": {
    title: "Driving Business Impact Through Expert Staffing Services",
    description:
      "NeoRecruits' contract staffing services provide end-to-end, scalable recruitment solutions tailored to meet your unique business needs. From talent sourcing to onboarding, we manage the entire recruitment lifecycle, ensuring efficiency, consistency, and measurable results.",
    benefits: [
      {
        title: "Cost Efficiency",
        description:
          "As a trusted outsourcing company, we are here to provide businesses with strategic recruitment process outsourcing to reduce operational overhead. By managing hiring processes and using advanced recruitment technologies, our model helps companies save 30% to 50% compared to traditional hiring methods, maximising ROI and increasing business outcomes.",
      },
      {
        title: "Accelerated Hiring",
        description:
          "Our expert-driven services are designed to reduce your time-to-fill and improve time-to-hire by deploying scalable hiring frameworks and deep market insights. We have a team of dedicated specialists who ensure that important positions are filled swiftly and efficiently with high-caliber candidates so your business can never miss a beat.",
      },
      {
        title: "Superior Candidate Quality",
        description:
          "We always go beyond resumes. Our recruitment process outsourcing methodology includes data-driven screening with a deep understanding of the industry dynamics and cultural intent. And the results you get are top-tier talent that not only meets technical requirements but fits easily into your organisational culture and values.",
      },
    ],
  },
  "outsource-rpo": {
    title: "Driving Business Impact Through Expert RPO Services",
    description:
      "NeoRecruits' RPO services provide end-to-end, scalable recruitment solutions tailored to meet your unique business needs. From talent sourcing to onboarding, we manage the entire recruitment lifecycle, ensuring efficiency, consistency, and measurable results.",
    benefits: [
      {
        title: "Cost Efficiency",
        description:
          "As a trusted outsourcing company, we are here to provide businesses with strategic recruitment process outsourcing to reduce operational overhead. By managing hiring processes and using advanced recruitment technologies, our RPO model helps companies save 30% to 50% compared to traditional hiring methods, maximising ROI and increasing business outcomes.",
      },
      {
        title: "Accelerated Hiring",
        description:
          "Our expert-driven RPO services are designed to reduce your time-to-fill and improve time-to-hire by deploying scalable hiring frameworks and deep market insights. We have a team of dedicated RPO specialists who ensure that important positions are filled swiftly and efficiently with high-caliber candidates so your business can never miss a beat.",
      },
      {
        title: "Superior Candidate Quality",
        description:
          "We always go beyond resumes. Our recruitment process outsourcing methodology includes data-driven screening with a deep understanding of the industry dynamics and cultural intent. And the results you get are top-tier talent that not only meets technical requirements but fits easily into your organisational culture and values.",
      },
    ],
  },
  "remote-staffing": {
    title: "Enabling Global Teams Through Remote Staffing",
    description:
      "NeoRecruits' remote staffing services provide distributed workforce solutions tailored to meet your unique business needs. From talent sourcing to virtual onboarding, we manage the entire remote hiring lifecycle, ensuring productivity, collaboration, and measurable results.",
    benefits: [
      {
        title: "Global Talent Access",
        description:
          "As a trusted remote staffing partner, we provide businesses with access to vetted professionals across 40+ countries. By leveraging our global networks and remote work expertise, we identify talent that delivers exceptional performance regardless of location.",
      },
      {
        title: "Seamless Integration",
        description:
          "Our remote staffing services are designed to ensure smooth integration of virtual team members. We provide onboarding support, tooling guidance, and communication frameworks so remote hires hit the ground running from day one.",
      },
      {
        title: "Productivity Focus",
        description:
          "We prioritize candidates with proven remote work capabilities. Our methodology includes assessing self-management skills, communication abilities, and cultural adaptability. The remote professionals you get deliver consistent results across time zones.",
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

export function ServiceDetailProcess({ slug }) {
  const data =
    serviceProcessData[slug] || serviceProcessData["contract-recruitment"];

  return (
    <section className="relative py-16 sm:py-24 bg-[#f8f8f8] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={glideTransition}
            className="text-center space-y-6 mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0b2677] uppercase tracking-tight leading-tight">
              {data.title}
            </h2>
            <p className="text-[#0b2677]/70 text-sm sm:text-base leading-relaxed font-medium max-w-4xl mx-auto">
              {data.description}
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {data.benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ ...glideTransition, delay: idx * 0.1 }}
                className="relative px-6 sm:px-8 py-8"
              >
                {/* Gradient Side Borders (Desktop) */}
                {idx > 0 && (
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#9a01cd]/40 to-transparent hidden md:block" />
                )}

                {/* Gradient Top Border (Mobile) */}
                {idx > 0 && (
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#9a01cd]/40 to-transparent md:hidden" />
                )}

                <div className="space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-[#0b2677]">
                    {benefit.title}
                  </h3>
                  <p className="text-[#0b2677]/70 text-sm leading-relaxed font-medium">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
