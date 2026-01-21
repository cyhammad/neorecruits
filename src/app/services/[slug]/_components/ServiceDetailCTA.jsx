"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const serviceCTAData = {
  "executive-search": {
    title:
      "Get Started: Partner With The Region's Leading Executive Search Experts",
    description:
      "Ready to transform your leadership team and gain a competitive edge in the talent market? Our dedicated team is committed to delivering exceptional executive search solutions that align with your business goals. Contact NeoRecruits today for a tailored executive search solution.",
  },
  "permanent-staffing": {
    title: "Get Started: Partner With The Region's Leading Staffing Experts",
    description:
      "Ready to build high-performing teams that drive business success? Our dedicated team is committed to delivering exceptional permanent staffing solutions that align with your business goals. Contact NeoRecruits today for a tailored staffing solution.",
  },
  "contract-recruitment": {
    title:
      "Get Started: Partner With The Region's Leading Contract Staffing Experts",
    description:
      "Ready to transform your workforce flexibility and gain a competitive edge in the talent market? Our dedicated team is committed to delivering customized contract staffing solutions that align with your business goals. Contact NeoRecruits today for a tailored staffing solution.",
  },
  "outsource-rpo": {
    title: "Get Started: Partner With The Region's Leading RPO Experts",
    description:
      "Ready to transform your recruitment process and gain a competitive edge in the talent market? Our dedicated team is committed to delivering customized RPO solutions that align with your business goals. Contact NeoRecruits today for a tailored RPO solution.",
  },
  "remote-staffing": {
    title:
      "Get Started: Partner With The Region's Leading Remote Staffing Experts",
    description:
      "Ready to build distributed teams that deliver results across time zones? Our dedicated team is committed to delivering exceptional remote staffing solutions that align with your business goals. Contact NeoRecruits today for a tailored remote staffing solution.",
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

export function ServiceDetailCTA({ slug }) {
  const data = serviceCTAData[slug] || serviceCTAData["outsource-rpo"];

  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Static for now - would integrate with backend
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! Our team will contact you shortly.");
  };

  return (
    <section
      id="request-talent"
      className="relative py-16 sm:py-24 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left Column - Title & Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportConfig}
              transition={glideTransition}
              className="space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0b2677] uppercase tracking-tight leading-tight">
                {data.title}
              </h2>
              <p className="text-[#0b2677]/70 text-sm sm:text-base leading-relaxed font-medium">
                {data.description}
              </p>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportConfig}
              transition={{ ...glideTransition, delay: 0.1 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1: First Name / Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="peer w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-[#0b2677] placeholder-transparent focus:outline-none focus:border-[#9a01cd] focus:ring-1 focus:ring-[#9a01cd] transition-colors"
                      placeholder="First Name"
                    />
                    <label
                      htmlFor="firstName"
                      className="absolute left-3 -top-2.5 bg-white px-1 text-xs text-[#9a01cd] font-medium transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-[#9a01cd]"
                    >
                      First Name<span className="text-red-500">*</span>
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="peer w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-[#0b2677] placeholder-transparent focus:outline-none focus:border-[#9a01cd] focus:ring-1 focus:ring-[#9a01cd] transition-colors"
                      placeholder="Last Name"
                    />
                    <label
                      htmlFor="lastName"
                      className="absolute left-3 -top-2.5 bg-white px-1 text-xs text-[#9a01cd] font-medium transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-[#9a01cd]"
                    >
                      Last Name<span className="text-red-500">*</span>
                    </label>
                  </div>
                </div>

                {/* Row 2: Email / Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="peer w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-[#0b2677] placeholder-transparent focus:outline-none focus:border-[#9a01cd] focus:ring-1 focus:ring-[#9a01cd] transition-colors"
                      placeholder="Email Address"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-3 -top-2.5 bg-white px-1 text-xs text-[#9a01cd] font-medium transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-[#9a01cd]"
                    >
                      Email Address<span className="text-red-500">*</span>
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="peer w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-[#0b2677] placeholder-transparent focus:outline-none focus:border-[#9a01cd] focus:ring-1 focus:ring-[#9a01cd] transition-colors"
                      placeholder="Phone Number"
                    />
                    <label
                      htmlFor="phone"
                      className="absolute left-3 -top-2.5 bg-white px-1 text-xs text-[#9a01cd] font-medium transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-[#9a01cd]"
                    >
                      Phone Number<span className="text-red-500">*</span>
                    </label>
                  </div>
                </div>

                {/* Row 3: Company Name */}
                <div className="relative">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="peer w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-[#0b2677] placeholder-transparent focus:outline-none focus:border-[#9a01cd] focus:ring-1 focus:ring-[#9a01cd] transition-colors"
                    placeholder="Company Name"
                  />
                  <label
                    htmlFor="company"
                    className="absolute left-3 -top-2.5 bg-white px-1 text-xs text-[#9a01cd] font-medium transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-[#9a01cd]"
                  >
                    Company Name<span className="text-red-500">*</span>
                  </label>
                </div>

                {/* Row 4: Additional Notes */}
                <div className="relative">
                  <textarea
                    name="notes"
                    id="notes"
                    rows={4}
                    value={formData.notes}
                    onChange={handleChange}
                    className="peer w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-[#0b2677] placeholder-transparent focus:outline-none focus:border-[#9a01cd] focus:ring-1 focus:ring-[#9a01cd] transition-colors resize-none"
                    placeholder="Additional Notes"
                  />
                  <label
                    htmlFor="notes"
                    className="absolute left-3 -top-2.5 bg-white px-1 text-xs text-gray-500 font-medium transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-xs peer-focus:text-[#9a01cd]"
                  >
                    Additional Notes
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    className="group relative h-12 w-fit px-10 rounded-full bg-[#9a01cd] text-white border-none flex items-center gap-2 transition-all text-[11px] font-black tracking-widest uppercase active:scale-95 shadow-xl shadow-[#9a01cd]/20 hover:bg-[#8a00bd]"
                  >
                    <span className="relative z-20">Submit</span>
                    <div className="relative w-4 h-4 overflow-hidden flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 absolute transition-all duration-300 group-hover:translate-x-5" />
                      <ArrowRight className="w-4 h-4 absolute -translate-x-5 transition-all duration-300 group-hover:translate-x-0" />
                    </div>
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
