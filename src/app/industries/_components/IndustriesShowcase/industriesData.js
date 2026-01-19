import {
  Droplets,
  Zap,
  Leaf,
  Laptop,
  Truck,
  Building2,
  Factory,
} from "lucide-react";

export const industries = [
  {
    id: "oil-gas",
    title: "Oil & Gas",
    icon: Droplets,
    description:
      "Specialized recruitment for upstream, midstream, and downstream operations, connecting top talent with leading energy companies across exploration, production, refining, and distribution.",
    image: "/hero-1-v2.png",
    stats: "800+ placements",
    link: "/industries/oil-gas",
    isCore: true,
    keyRoles: [
      "Petroleum Engineers",
      "Operations Managers",
      "Project Engineers",
    ],
  },
  {
    id: "electrical-power",
    title: "Electrical & Power",
    icon: Zap,
    description:
      "Recruiting experts for power generation, transmission, distribution, and electrical engineering roles to support critical infrastructure and energy systems.",
    image: "/hero-2-v2.png",
    stats: "500+ placements",
    link: "/industries/electrical-power",
    keyRoles: [
      "Electrical Engineers",
      "Power Systems Specialists",
      "Maintenance Engineers",
    ],
  },
  {
    id: "renewable-energy",
    title: "Renewable Energy & Sustainability",
    icon: Leaf,
    description:
      "Leading recruitment for solar, wind, hydro, and emerging renewable energy technologies, supporting the global transition to sustainable energy solutions.",
    image: "/hero-3.png",
    stats: "/400+ placements",
    link: "/industries/renewable-energy",
    keyRoles: [
      "Solar Engineers",
      "Wind Energy Specialists",
      "Sustainability Consultants",
    ],
  },
  {
    id: "technology",
    title: "Technology & Digital Transformation",
    icon: Laptop,
    description:
      "Connecting technology leaders with software engineers, AI/ML specialists, cloud architects, and digital transformation experts driving innovation.",
    image: "/expertise-tech.png",
    stats: "1200+ placements",
    link: "/industries/technology",
    keyRoles: ["Software Engineers", "AI/ML Specialists", "Cloud Architects"],
  },
  {
    id: "logistics",
    title: "Logistics, Supply Chain & Operations",
    icon: Truck,
    description:
      "Recruiting supply chain professionals, logistics managers, operations specialists, and warehouse leaders to optimize global supply networks.",
    image: "/hero-1.png",
    stats: "600+ placements",
    link: "/industries/logistics",
    keyRoles: [
      "Supply Chain Managers",
      "Logistics Coordinators",
      "Operations Directors",
    ],
  },
  {
    id: "construction",
    title: "Construction, Engineering & Project Management",
    icon: Building2,
    description:
      "Building teams for infrastructure projects, civil engineering, project management, and construction leadership roles across major developments.",
    image: "/hero-2.png",
    stats: "700+ placements",
    link: "/industries/construction",
    keyRoles: ["Civil Engineers", "Project Managers", "Construction Managers"],
  },
  {
    id: "manufacturing",
    title: "Industrial & Manufacturing",
    icon: Factory,
    description:
      "Specialized recruitment for manufacturing operations, industrial engineering, quality control, and production management across diverse manufacturing sectors.",
    image: "/hero-1-v2.png",
    stats: "550+ placements",
    link: "/industries/manufacturing",
    keyRoles: [
      "Manufacturing Engineers",
      "Production Managers",
      "Quality Engineers",
    ],
  },
];
