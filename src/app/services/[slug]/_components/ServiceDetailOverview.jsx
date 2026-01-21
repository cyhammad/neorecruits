"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const serviceData = {
  "executive-search": {
    title: "Executive Search for Global Leaders",
    image: "/service_executive_search.png",
    intro:
      "NeoRecruits delivers premium executive search solutions for organizations seeking transformational leadership talent. As the leading executive recruitment agency, we are experts in sourcing C-suite executives, board members, and senior leadership who drive strategic vision and long-term growth.",
    description:
      "With proven market insights, a strong global network, and streamlined search processes, we ensure quicker and more efficient access to top leadership talent. Our executive search expertise enables organizations to scale effectively, meeting strategic demands with agility. We go beyond staffing; we're your strategic partner for long-term leadership success.",
    features: [
      {
        label: "Confidential Search Process",
        text: "Discrete headhunting methodology that protects both client and candidate interests throughout the engagement.",
      },
      {
        label: "Global Talent Network",
        text: "Access to our extensive database of pre-vetted executives across 40+ countries and all major industries.",
      },
      {
        label: "Cultural Fit Assessment",
        text: "Rigorous evaluation ensuring leadership candidates align with your organization's values and culture.",
      },
      {
        label: "Market Intelligence",
        text: "Comprehensive compensation benchmarking and competitive analysis to position your offer effectively.",
      },
      {
        label: "Onboarding Support",
        text: "We support the transition process to ensure successful integration of new executives.",
      },
    ],
  },
  "permanent-staffing": {
    title: "Permanent Staffing Solutions",
    image: "/service_permanent_staffing.png",
    intro:
      "NeoRecruits delivers comprehensive permanent staffing solutions for organizations seeking long-term talent. As the leading staffing agency, we are experts in sourcing professionals who fit your culture and contribute to sustained organizational success.",
    description:
      "With proven market insights, a strong regional network, and streamlined hiring processes, we ensure quicker and more efficient access to top talent. Our permanent staffing expertise enables businesses to build strong teams, meeting growth demands with precision. We go beyond recruitment; we're your strategic partner for workforce development.",
    features: [
      {
        label: "Culture Fit Assessment",
        text: "Thorough evaluation ensuring candidates align with your organization's values, mission, and work environment.",
      },
      {
        label: "Comprehensive Screening",
        text: "Multi-stage vetting process including skills assessment, background checks, and reference verification.",
      },
      {
        label: "Industry Expertise",
        text: "Sector-specific recruiters who understand the nuances of your industry and role requirements.",
      },
      {
        label: "Retention Focus",
        text: "Our approach prioritizes long-term fit, resulting in higher retention rates and reduced turnover costs.",
      },
      {
        label: "Onboarding Support",
        text: "We assist with the transition process to ensure new hires integrate smoothly into your organization.",
      },
    ],
  },
  "contract-recruitment": {
    title: "Contract Staffing for Businesses",
    image: "/service_contract_recruitment.png",
    intro:
      "NeoRecruits delivers compliant and scalable contract and temporary staffing services. As the leading staffing agency, we are experts in sourcing top-tier talent that is ideal for seasonal demands, project-based roles, or workforce expansion under headcount restrictions.",
    description:
      "With proven market insights, a strong regional network, and streamlined hiring processes, we ensure quicker and more efficient access to top talent. Our contract staffing expertise enables businesses to scale effectively, meeting short-term or project-based demands with agility. We go beyond staffing; we're your strategic partner for long-term workforce resilience.",
    features: [
      {
        label: "Compliance Assurance",
        text: "Provides full adherence to labour laws and visa regulations to reduce HR complexities.",
      },
      {
        label: "Rapid Talent Deployment",
        text: "Pre-vetted talent pool that is ready for immediate placement across key industries.",
      },
      {
        label: "Flexible Cost Models",
        text: "Pay only for what you need with our cost-effective staffing solutions.",
      },
      {
        label: "Industry-Focused Hiring",
        text: "Sector-specific recruiters ensure precise talent matches for every role.",
      },
      {
        label: "Complete HR Support",
        text: "We manage payroll, insurance, onboarding, and employee relations end-to-end.",
      },
    ],
  },
  "outsource-rpo": {
    title: "RPO & Outsourced Recruitment",
    image: "/service_rpo.png",
    intro:
      "NeoRecruits delivers end-to-end Recruitment Process Outsourcing solutions for organizations seeking to optimize their hiring operations. As the leading RPO provider, we are experts in managing the complete recruitment lifecycle, from sourcing to onboarding.",
    description:
      "With proven methodologies, advanced technology, and dedicated recruitment teams, we ensure efficient, cost-effective hiring at scale. Our RPO expertise enables businesses to focus on core operations while we handle talent acquisition. We go beyond outsourcing; we're your strategic partner for sustainable recruitment excellence.",
    features: [
      {
        label: "Dedicated Team",
        text: "A specialized recruitment team that becomes an extension of your HR department.",
      },
      {
        label: "Scalable Solutions",
        text: "Flexible capacity to handle varying hiring volumes, from individual roles to mass recruitment.",
      },
      {
        label: "Technology Integration",
        text: "Access to our advanced ATS, AI-powered screening, and analytics platform.",
      },
      {
        label: "Cost Optimization",
        text: "Reduced cost-per-hire through streamlined processes and economies of scale.",
      },
      {
        label: "Performance Metrics",
        text: "Regular reporting on key recruitment KPIs including time-to-fill, quality of hire, and source effectiveness.",
      },
    ],
  },
  "remote-staffing": {
    title: "Remote & Virtual Staffing",
    image: "/service_executive_search.png",
    intro:
      "NeoRecruits delivers specialized remote staffing solutions for organizations building distributed teams. As the leading virtual staffing agency, we are experts in sourcing remote professionals who excel at working across time zones and cultures.",
    description:
      "With proven remote work methodologies, global talent networks, and seamless integration support, we ensure productive virtual teams. Our remote staffing expertise enables businesses to access global talent pools while maintaining collaboration standards. We go beyond placement; we're your strategic partner for remote workforce success.",
    features: [
      {
        label: "Global Talent Access",
        text: "Access to vetted remote professionals from across 40+ countries with verified work capabilities.",
      },
      {
        label: "Time Zone Management",
        text: "Strategic talent placement ensuring adequate coverage across your operating hours.",
      },
      {
        label: "Remote Work Infrastructure",
        text: "Guidance on tools, processes, and best practices for effective remote collaboration.",
      },
      {
        label: "Cultural Integration",
        text: "Support for cross-cultural communication and virtual team building.",
      },
      {
        label: "Ongoing Management",
        text: "HR support for remote employees including performance tracking and engagement initiatives.",
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

export function ServiceDetailOverview({ slug }) {
  const service = serviceData[slug] || serviceData["executive-search"];

  return (
    <section className="relative py-16 sm:py-24 bg-[#0b2677] overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportConfig}
              transition={glideTransition}
              className="space-y-6"
            >
              {/* Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight leading-tight">
                {service.title}
              </h2>

              {/* Intro */}
              <p className="text-white/80 text-sm sm:text-[15px] leading-relaxed font-medium">
                {service.intro}
              </p>

              {/* Description */}
              <p className="text-white/70 text-sm sm:text-[15px] leading-relaxed font-medium">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-4 pt-4">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-white/80 text-sm"
                  >
                    <span className="text-[#9a01cd] mt-1">•</span>
                    <span>
                      <strong className="text-white font-bold">
                        {feature.label}:
                      </strong>{" "}
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className="pt-4">
                <Button
                  className="group relative h-10 sm:h-12 w-fit px-8 rounded-lg bg-white text-[#0b2677] border-none flex items-center gap-2 transition-all text-[11px] font-black tracking-widest uppercase active:scale-95 shadow-xl hover:bg-white/90"
                  asChild
                >
                  <Link href="#request-talent">
                    <span className="relative z-20">Get A Quote</span>
                    <div className="relative w-4 h-4 overflow-hidden flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 absolute transition-all duration-300 group-hover:translate-x-5" />
                      <ArrowRight className="w-4 h-4 absolute -translate-x-5 transition-all duration-300 group-hover:translate-x-0" />
                    </div>
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportConfig}
              transition={{ ...glideTransition, delay: 0.1 }}
              className="relative"
            >
              <div className="relative w-full aspect-[4/3] max-w-lg mx-auto lg:mx-0 rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
