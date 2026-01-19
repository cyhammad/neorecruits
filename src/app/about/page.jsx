import { AboutHero } from "./_components/AboutHero/AboutHero";
import { AboutOverview } from "./_components/AboutOverview/AboutOverview";
import { AboutRegions } from "./_components/AboutRegions/AboutRegions";
import { AboutCEOMessage } from "./_components/AboutCEOMessage/AboutCEOMessage";
import { AboutMissionValues } from "./_components/AboutMissionValues/AboutMissionValues";
import { AboutServices } from "./_components/AboutServices/AboutServices";
import { AboutOffices } from "./_components/AboutOffices/AboutOffices";
import { AboutCompliance } from "./_components/AboutCompliance/AboutCompliance";

export const metadata = {
  title: "About Us | NeoRecruits",
  description:
    "Learn more about NeoRecruits, our story, mission, values, global presence, and commitment to excellence in recruitment.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col w-full">
      <AboutHero />
      <AboutOverview />
      <AboutRegions />
      <AboutCEOMessage />
      <AboutMissionValues />
      <AboutServices />
      <AboutOffices />
      <AboutCompliance />
    </main>
  );
}
