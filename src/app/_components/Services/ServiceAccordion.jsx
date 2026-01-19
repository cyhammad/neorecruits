"use client";

import { motion } from "framer-motion";
import { Accordion } from "@/components/ui/accordion";
import { servicesData, smoothTransition, staggerDelay } from "./servicesData";
import { ServiceItem } from "./ServiceItem";

export function ServiceAccordion({ isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
      transition={{ ...smoothTransition, delay: staggerDelay * 1 }}
      className="order-2 lg:order-1"
    >
      <Accordion type="single" collapsible className="space-y-4">
        {servicesData.map((service, index) => (
          <ServiceItem
            key={service.id}
            service={service}
            index={index}
            isInView={isInView}
          />
        ))}
      </Accordion>
    </motion.div>
  );
}
