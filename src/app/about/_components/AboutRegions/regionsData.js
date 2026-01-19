import { Globe, Handshake, Award } from "lucide-react";

export const regions = [
  {
    name: "Middle East & GCC",
    countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman"],
  },
  {
    name: "Asia Pacific",
    countries: ["Pakistan", "India", "Singapore", "Malaysia"],
  },
  {
    name: "Europe",
    countries: ["United Kingdom", "Germany", "Netherlands"],
  },
  {
    name: "Americas",
    countries: ["United States", "Canada"],
  },
];

export const partnerships = [
  {
    type: "Industry Leaders",
    description: "Trusted by Fortune 500 companies and government entities",
    icon: Award,
  },
  {
    type: "Global Networks",
    description: "Partnerships with leading recruitment associations worldwide",
    icon: Handshake,
  },
  {
    type: "Technology Partners",
    description: "Strategic alliances with HR tech innovators",
    icon: Globe,
  },
];
