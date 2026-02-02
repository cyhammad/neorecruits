import {
  Users,
  FileText,
  Briefcase,
  ClipboardCheck,
  BarChart3,
  ShieldCheck,
  GraduationCap,
  HardHat,
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
  {
    id: "item-4",
    title: "QA/QC Inspection Services",
    icon: ShieldCheck,
    image: "/service_contract_recruitment.png",
    description:
      "Expert quality assurance and control services to ensure your projects meet the highest standards.",
    link: "/services/qa-qc-inspection",
  },
  {
    id: "item-5",
    title: "Technical Training",
    icon: GraduationCap,
    image: "/service_permanent_staffing.png",
    description:
      "Specialized training programs to empower your workforce with the latest technical skills and certifications.",
    link: "/services/technical-training",
  },
  {
    id: "item-6",
    title: "Manpower Supply",
    icon: HardHat,
    image: "/service_executive_search.png",
    description:
      "Providing skilled and reliable manpower to support your project execution and operational requirements.",
    link: "/services/manpower-supply",
  },
];
