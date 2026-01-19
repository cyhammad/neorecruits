import {
  Briefcase,
  Users,
  FileText,
  Building2,
  Laptop,
  GraduationCap,
  UserCheck,
} from "lucide-react";

export const services = [
  {
    id: "executive-search",
    title: "Executive Search",
    icon: Users,
    description:
      "Identify and attract top-tier leadership talent to drive your organization's strategic vision forward.",
    industries: [
      "Banking & Finance",
      "Technology",
      "Healthcare",
      "Manufacturing",
    ],
    link: "/services/executive-search",
  },
  {
    id: "permanent-staffing",
    title: "Permanent Staffing",
    icon: Briefcase,
    description:
      "Long-term talent acquisition strategies focused on finding candidates who fit your culture and goals.",
    industries: [
      "All Industries",
      "Technology",
      "Finance",
      "Healthcare",
      "Engineering",
    ],
    link: "/services/permanent-staffing",
  },
  {
    id: "contract-recruitment",
    title: "Contract / Temporary Recruitment",
    icon: FileText,
    description:
      "Flexible staffing solutions to meet short-term project demands and seasonal peaks with skilled professionals.",
    industries: [
      "Technology",
      "Construction",
      "Healthcare",
      "Retail",
      "Logistics",
    ],
    link: "/services/contract-recruitment",
  },
  {
    id: "outsource-rpo",
    title: "Outsource Staffing / RPO",
    icon: Building2,
    description:
      "End-to-end recruitment process outsourcing to streamline your hiring operations and reduce costs.",
    industries: [
      "Technology",
      "Finance",
      "Healthcare",
      "Call Centers",
      "Manufacturing",
    ],
    link: "/services/outsource-rpo",
  },
  {
    id: "remote-staffing",
    title: "Remote / Virtual Staffing",
    icon: Laptop,
    description:
      "Build distributed teams with remote professionals skilled in working across time zones and cultures.",
    industries: [
      "Technology",
      "Digital Marketing",
      "Customer Support",
      "Data Analytics",
      "IT Services",
    ],
    link: "/services/remote-staffing",
  },
  {
    id: "technical-training",
    title: "Technical Training Services",
    icon: GraduationCap,
    description:
      "Comprehensive training programs to upskill your workforce and prepare them for emerging technologies.",
    industries: [
      "Technology",
      "Engineering",
      "Manufacturing",
      "Healthcare",
      "Finance",
    ],
    link: "/services/technical-training",
  },
  {
    id: "manpower-supply",
    title: "Manpower Supply Services",
    icon: UserCheck,
    description:
      "Specialized manpower solutions for Saudi Arabia market, ensuring compliance with local regulations and cultural fit.",
    industries: [
      "Construction",
      "Manufacturing",
      "Hospitality",
      "Retail",
      "Logistics",
    ],
    link: "/services/manpower-supply",
    region: "Saudi Arabia",
  },
];
