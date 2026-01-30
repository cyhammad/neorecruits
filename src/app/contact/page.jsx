"use client";

import * as React from "react";
import { ContactHero } from "./_components/ContactHero";
import { ContactForm } from "../_components/Contact/ContactForm";
import { FormSuccess } from "../_components/Contact/FormSuccess";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Clock,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = async (data) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitted(true);
  };

  const contactDetails = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+971 800 385 726", "+971 4 123 4567"],
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@neorecruits.com", "careers@neorecruits.com"],
      color: "bg-purple-500/10 text-purple-500",
    },
    {
      icon: MapPin,
      title: "Our Headquarters",
      details: [
        "Dubai International Financial Centre",
        "Level 15, Gate Building, Dubai, UAE",
      ],
      color: "bg-teal-500/10 text-teal-500",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat - Sun: Closed"],
      color: "bg-amber-500/10 text-amber-500",
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
  ];

  return (
    <main className="flex flex-col w-full min-h-screen bg-white">
      <ContactHero />

      <section className="relative py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Contact Info Card */}
              <div className="lg:col-span-5 space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-[#0b2677] rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden group"
                >
                  {/* Decorative Elements */}
                  <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                  />
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-white/10 transition-colors duration-500" />

                  <div className="relative z-10 space-y-8">
                    <div className="space-y-4">
                      <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
                        Contact Information
                      </h2>
                      <p className="text-white/60 font-medium">
                        Have a specific inquiry? Our team is ready to assist you
                        across the globe.
                      </p>
                    </div>

                    <div className="space-y-8">
                      {contactDetails.map((item, idx) => (
                        <div key={idx} className="flex gap-6 group/item">
                          <div
                            className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center shrink-0 border border-white/10 group-hover/item:scale-110 transition-transform`}
                          >
                            <item.icon className="w-6 h-6" />
                          </div>
                          <div className="space-y-1">
                            <h4 className="text-sm font-black uppercase tracking-widest text-white/40">
                              {item.title}
                            </h4>
                            {item.details.map((detail, dIdx) => (
                              <p key={dIdx} className="text-base font-bold">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center gap-6">
                      <span className="text-sm font-black uppercase tracking-widest text-white/40">
                        Follow Us
                      </span>
                      <div className="flex gap-4">
                        {socialLinks.map((social, sIdx) => (
                          <a
                            key={sIdx}
                            href={social.href}
                            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#9a01cd] hover:border-[#9a01cd] transition-all duration-300"
                          >
                            <social.icon className="w-5 h-5" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Secondary Small Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-[#9a01cd] rounded-[2rem] p-8 text-white relative overflow-hidden shadow-xl"
                >
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                  />
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="space-y-1">
                      <h3 className="text-xl font-black uppercase tracking-tight">
                        Visit Career Portal
                      </h3>
                      <p className="text-white/80 text-sm font-medium">
                        Explore latest job opportunities
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white text-[#9a01cd] flex items-center justify-center shadow-lg group hover:scale-110 transition-transform cursor-pointer">
                      <Globe className="w-6 h-6" />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Form Card */}
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-gray-100 flex flex-col h-full"
                >
                  <div className="mb-10 space-y-2 text-center lg:text-left">
                    <h3 className="text-3xl md:text-4xl font-black text-[#0b2677] uppercase tracking-tight">
                      Send a Message
                    </h3>
                    <p className="text-[#0b2677]/60 font-medium italic">
                      We respond to all inquiries within 24 hours.
                    </p>
                  </div>

                  <div className="flex-1">
                    {isSubmitted ? (
                      <div className="h-full flex items-center justify-center py-20">
                        <FormSuccess onReset={() => setIsSubmitted(false)} />
                      </div>
                    ) : (
                      <ContactForm onSubmit={handleSubmit} />
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-gray-50 border-y border-gray-100 mb-20">
        <div className="container mx-auto px-4 text-center">
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#0b2677]/40 mb-12">
            Trusted by global leaders
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Mock logos */}
            <div className="text-2xl font-black text-[#0b2677]">TECHNO</div>
            <div className="text-2xl font-black text-[#0b2677]">GLOBAL</div>
            <div className="text-2xl font-black text-[#0b2677]">ELITE</div>
            <div className="text-2xl font-black text-[#0b2677]">STRAT</div>
            <div className="text-2xl font-black text-[#0b2677]">NEXUS</div>
          </div>
        </div>
      </section>
    </main>
  );
}
