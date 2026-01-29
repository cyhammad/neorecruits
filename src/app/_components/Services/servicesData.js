import {
  Users,
  FileText,
  Briefcase,
  ClipboardCheck,
  BarChart3,
} from "lucide-react";

export const smoothTransition = {
  duration: 1,
  ease: [0.25, 0.1, 0.25, 1],
};

export const staggerDelay = 0.2;

export const servicesData = [
  {
    id: "item-1",
    title: "Executive Search",
    icon: Users,
    image: "/service_executive_search.png",
    description:
      "Identify and attract top-tier leadership talent to drive your organization's strategic vision forward.",
    link: "/services/executive-search",
  },
  {
    id: "item-2",
    title: "Contract Recruitment",
    icon: FileText,
    image: "/service_contract_recruitment.png",
    description:
      "Flexible staffing solutions to meet short-term project demands and seasonal peaks with skilled professionals.",
    link: "/services/contract-recruitment",
  },
  {
    id: "item-3",
    title: "Permanent Recruitment",
    icon: Briefcase,
    image: "/service_permanent_staffing.png",
    description:
      "Long-term talent acquisition strategies focused on finding candidates who fit your culture and goals.",
    link: "/services/permanent-recruitment",
  },
];
