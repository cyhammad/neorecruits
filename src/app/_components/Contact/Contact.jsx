"use client";

import * as React from "react";
import { useInView } from "framer-motion";
import { ContactContent } from "./ContactContent";
import { ContactForm } from "./ContactForm";
import { FormSuccess } from "./FormSuccess";

export function Contact() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = async (data) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitted(true);
  };

  return (
    <section
      ref={ref}
      className="relative py-12 sm:py-16 md:py-24 bg-[#f4f4f4] overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-24 max-w-7xl mx-auto">
          <ContactContent isInView={isInView} />

          <div className="lg:w-1/2">
            <div className="bg-white border border-gray-100 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#539ce0]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              {isSubmitted ? (
                <FormSuccess onReset={() => setIsSubmitted(false)} />
              ) : (
                <ContactForm onSubmit={handleSubmit} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
