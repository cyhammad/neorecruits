"use client";

import { motion } from "framer-motion";
import { panelVariants } from "./loaderData";

export function LoaderPanels({ isLoading }) {
  if (!isLoading) return null;

  return (
    <>
      <motion.div
        custom="top"
        variants={panelVariants}
        initial="initial"
        exit="exit"
        className="absolute top-0 left-0 w-full h-1/2 bg-[#0b2677] z-10"
      />
      <motion.div
        custom="bottom"
        variants={panelVariants}
        initial="initial"
        exit="exit"
        className="absolute bottom-0 left-0 w-full h-1/2 bg-[#0b2677] z-10"
      />
    </>
  );
}
