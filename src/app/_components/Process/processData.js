import { ClipboardList, Search, Users, ShieldCheck } from "lucide-react";

export const smoothTransition = {
  duration: 1,
  ease: [0.25, 0.1, 0.25, 1],
};

export const staggerDelay = 0.2;

export const steps = [
  {
    id: 1,
    title: "REQUIREMENT",
    description:
      "Our experts conduct an in-depth analysis of your specific talent needs and corporate culture.",
    timeline: "24-48 Hours",
    icon: ClipboardList,
  },
  {
    id: 2,
    title: "SHORTLIST",
    description:
      "Rapid market mapping and rigorous screening to identify the top 5% of suitable candidates.",
    timeline: "3-5 Business Days",
    icon: Search,
  },
  {
    id: 3,
    title: "INTERVIEWS",
    description:
      "We facilitate seamless interview processes, managing all logistics and feedback loops.",
    timeline: "Flexible Schedule",
    icon: Users,
  },
  {
    id: 4,
    title: "ONBOARDING",
    description:
      "Finalizing the selection and ensuring a smooth transition into your powerhouse team.",
    timeline: "Ongoing Support",
    icon: ShieldCheck,
  },
];
