"use client";

import * as React from "react";
import { services } from "./servicesListData";
import { ServiceSection } from "./ServiceSection";

export function ServicesList() {
  return (
    <div className="bg-white">
      {services.map((service, index) => (
        <ServiceSection key={service.id} service={service} index={index} />
      ))}
    </div>
  );
}
