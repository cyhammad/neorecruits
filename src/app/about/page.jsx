"use client";

import * as React from "react";
import { AboutHero } from "./_components/AboutHero/AboutHero";
import { AboutOverview } from "./_components/AboutOverview/AboutOverview";
import { AboutJourney } from "./_components/AboutJourney/AboutJourney";
import { AboutCEOMessage } from "./_components/AboutCEOMessage/AboutCEOMessage";
import { AboutMissionValues } from "./_components/AboutMissionValues/AboutMissionValues";
import { AboutOffices } from "./_components/AboutOffices/AboutOffices";
import { motion, AnimatePresence } from "framer-motion";

export default function AboutPage() {
  const [activeTab, setActiveTab] = React.useState("who-we-are");

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  const tabs = [
    { id: "who-we-are", label: "Who We Are" },
    { id: "leadership", label: "Leadership" },
    { id: "values", label: "Mission & Values" },
    { id: "locations", label: "Locations" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "who-we-are":
        return (
          <motion.div
            key="who-we-are"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <AboutOverview />
            <AboutJourney />
          </motion.div>
        );
      case "leadership":
        return (
          <motion.div
            key="leadership"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <AboutCEOMessage />
          </motion.div>
        );
      case "values":
        return (
          <motion.div
            key="values"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <AboutMissionValues />
          </motion.div>
        );
      case "locations":
        return (
          <motion.div
            key="locations"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <AboutOffices />
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="flex flex-col w-full min-h-screen bg-white">
      <AboutHero
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabs={tabs}
      />

      <div className="flex-1 overflow-hidden">
        <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
      </div>
    </main>
  );
}
