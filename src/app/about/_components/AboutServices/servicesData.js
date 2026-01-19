import {
  Users,
  FileText,
  Briefcase,
  ClipboardCheck,
  BarChart3,
} from "lucide-react";

export const services = [
  {
    id: 1,
    title: "Executive Search",
    description:
      "Identify and attract top-tier leadership talent to drive your organization's strategic vision forward.",
    icon: Users,
    link: "/services/executive-search",
    image: "/hero-1.png",
  },
  {
    id: 2,
    title: "Contract Recruitment",
    description:
      "Flexible staffing solutions to meet short-term project demands and seasonal peaks with skilled professionals.",
    icon: FileText,
    link: "/services/contract-recruitment",
    image: "/hero-2.png",
  },
  {
    id: 3,
    title: "Permanent Recruitment",
    description:
      "Long-term talent acquisition strategies focused on finding candidates who fit your culture and goals.",
    icon: Briefcase,
    link: "/services/permanent-recruitment",
    image: "/hero-3.png",
  },
  {
    id: 4,
    title: "Payroll",
    description:
      "Comprehensive payroll management services ensuring compliance, accuracy, and timely processing.",
    icon: ClipboardCheck,
    link: "/services/payroll",
    image: "/hero-1-v2.png",
  },
  {
    id: 5,
    title: "Recruitment Campaigns",
    description:
      "Targeted, high-volume recruitment drives tailored to launch new divisions or scale operations rapidly.",
    icon: BarChart3,
    link: "/services/recruitment-campaigns",
    image: "/hero-2-v2.png",
  },
];
