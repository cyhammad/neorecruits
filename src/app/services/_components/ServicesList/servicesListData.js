import {
  Briefcase,
  Users,
  FileText,
  Building2,
  Laptop,
  ShieldCheck,
  GraduationCap,
  HardHat,
} from "lucide-react";

export const services = [
  {
    id: "executive-search",
    number: "01",
    title: "Executive Search",
    icon: Users,
    description:
      "At NeoRecruits, we specialize in identifying and securing top-tier executive talent for leadership roles. Our executive search methodology combines deep market intelligence with a personalized approach, ensuring we find leaders who not only have the right skills but also align with your organization's culture and strategic vision.",
    image: "/service_executive_search.png",
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
    number: "02",
    title: "Permanent Staffing",
    icon: Briefcase,
    description:
      "Long-term talent acquisition strategies focused on finding candidates who fit your culture and goals. We take a consultative approach to understand your unique requirements and deliver professionals who will contribute to your organization's success for years to come.",
    image: "/service_permanent_staffing.png",
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
    number: "03",
    title: "Contract Staffing",
    icon: FileText,
    description:
      "Short term, long term, globally, locally... NeoRecruits is your one-stop shop for contract staffing solutions. Our goal is to bring the best talent to your business through insightful search and selection techniques that save you time, costs and energy.",
    image: "/service_contract_recruitment.png",
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
    number: "04",
    title: "Outsource Staffing / RPO",
    icon: Building2,
    description:
      "End-to-end recruitment process outsourcing to streamline your hiring operations and reduce costs. We become an extension of your HR team, handling everything from sourcing to onboarding while maintaining your employer brand standards.",
    image: "/service_rpo.png",
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
    number: "05",
    title: "Remote / Virtual Staffing",
    icon: Laptop,
    description:
      "Build distributed teams with remote professionals skilled in working across time zones and cultures. We help you access global talent pools while ensuring seamless integration with your existing workflows and communication practices.",
    image: "/service_executive_search.png",
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
    id: "qa-qc-inspection",
    number: "06",
    title: "QA/QC Inspection Services",
    icon: ShieldCheck,
    description:
      "Comprehensive quality assurance and quality control inspection services across various technical sectors. We provide specialized inspectors and auditors to ensure your projects meet international standards and regulatory requirements.",
    image: "/service_contract_recruitment.png",
    industries: [
      "Oil & Gas",
      "Construction",
      "Manufacturing",
      "Energy",
      "Infrastructure",
    ],
    link: "/services/qa-qc-inspection",
  },
  {
    id: "technical-training",
    number: "07",
    title: "Technical Training",
    icon: GraduationCap,
    description:
      "Specialized technical training programs designed to enhance the skills and competencies of your workforce. From safety certifications to advanced technical workshops, we help your team stay ahead in an ever-evolving industrial landscape.",
    image: "/service_permanent_staffing.png",
    industries: [
      "Engineering",
      "IT & Software",
      "Operations",
      "Health & Safety",
    ],
    link: "/services/technical-training",
  },
  {
    id: "manpower-supply",
    number: "08",
    title: "Manpower Supply",
    icon: HardHat,
    description:
      "Reliable manpower supply solutions for large-scale projects and industrial operations. We provide skilled, semi-skilled, and unskilled labor tailored to your project's specific needs, ensuring productivity and progress.",
    image: "/service_executive_search.png",
    industries: [
      "Construction",
      "Engineering",
      "Logistics",
      "Operations",
      "Project Management",
    ],
    link: "/services/manpower-supply",
  },
];
