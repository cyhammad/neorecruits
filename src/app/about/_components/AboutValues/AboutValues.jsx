"use client";

import * as React from "react";
import { values } from "./valuesData";
import { ValueRow } from "./ValueRow";
import { ValuesVisual } from "./ValuesVisual";

export function AboutValues() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0f1d2d] uppercase leading-tight">
                Core Values
              </h2>
              <p className="text-[#00b8b0] font-bold text-sm tracking-widest uppercase">
                The Spirit of Team Neo
              </p>
              <svg
                width="200"
                height="20"
                viewBox="0 0 200 20"
                className="text-[#00b8b0] fill-current"
              >
                <path
                  d="M0,10 Q50,20 100,10 T200,10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
              </svg>
            </div>
            <div className="grid gap-8">
              {values.map((v, idx) => (
                <ValueRow key={idx} value={v} />
              ))}
            </div>
          </div>
          <ValuesVisual />
        </div>
      </div>
    </section>
  );
}
