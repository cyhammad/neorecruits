import { MessageCircle, Users, ClipboardCheck, TrendingUp } from "lucide-react";

export const smoothTransition = {
  duration: 1,
  ease: [0.25, 0.1, 0.25, 1],
};

export const staggerDelay = 0.2;

export const steps = [
  {
    id: 1,
    title: "Share your hiring need or job search goal",
    icon: MessageCircle,
    color: "from-[#9a01cd] to-[#c026d3]",
  },
  {
    id: 2,
    title: "We connect you with the right candidates or employers",
    icon: Users,
    color: "from-[#c026d3] to-[#7c3aed]",
  },
  {
    id: 3,
    title: "We handle contracts, visas, payroll, and compliance",
    icon: ClipboardCheck,
    color: "from-[#7c3aed] to-[#3b82f6]",
  },
  {
    id: 4,
    title: "You focus on business results or career growth",
    icon: TrendingUp,
    color: "from-[#3b82f6] to-[#60a5fa]",
  },
];
