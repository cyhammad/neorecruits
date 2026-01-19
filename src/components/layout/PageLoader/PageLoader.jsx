"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { loadingWords } from "./loaderData";
import { LoaderPanels } from "./LoaderPanels";
import { LoaderShimmer } from "./LoaderShimmer";
import { LoaderProgress } from "./LoaderProgress";

export function PageLoader() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isVisible, setIsVisible] = React.useState(true);
  const [progress, setProgress] = React.useState(0);
  const [wordIndex, setWordIndex] = React.useState(0);

  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(prev + Math.random() * 8, 100);
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    const wordStep = 100 / loadingWords.length;
    setWordIndex(
      Math.min(Math.floor(progress / wordStep), loadingWords.length - 1),
    );

    if (progress === 100) {
      setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => {
          setIsVisible(false);
          document.body.style.overflow = "";
        }, 800);
      }, 500);
    }
  }, [progress]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden pointer-events-none">
      <AnimatePresence>
        {isLoading && (
          <>
            <LoaderPanels isLoading={isLoading} />
            <LoaderShimmer />
            <motion.div
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="relative z-20 flex flex-col items-center justify-center p-8 pointer-events-auto"
            >
              <div className="absolute inset-0 -z-10 bg-radial-gradient from-[#9a01cd]/20 to-transparent blur-3xl opacity-50" />
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-80 h-28 mb-16"
              >
                <Image
                  src="/mainLogo.png"
                  alt="NeoRecruits"
                  fill
                  className="object-contain brightness-0 invert"
                  priority
                />
              </motion.div>
              <LoaderProgress progress={progress} wordIndex={wordIndex} />
              <div
                className="fixed inset-0 pointer-events-none opacity-[0.03]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, white 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
