import { Users, Building2, Globe2 } from "lucide-react";

export const smoothTransition = {
  duration: 1,
  ease: [0.25, 0.1, 0.25, 1],
};

export const staggerDelay = 0.2;

export const stats = [
  {
    label: "Successful Placements",
    value: "15,000+",
    icon: Users,
    color: "text-[#539ce0]",
  },
  {
    label: "Industries Served",
    value: "25+",
    icon: Building2,
    color: "text-[#2165b8]",
  },
  {
    label: "Countries Reached",
    value: "40+",
    icon: Globe2,
    color: "text-[#9a01cd]",
  },
  {
    label: "Client Satisfaction",
    value: "98%",
    icon: Users,
    color: "text-[#539ce0]",
  },
];
