export const slides = [
  {
    id: 1,
    title: "Connecting Elite Talent with Global Leaders",
    subtitle:
      "Empowering businesses through strategic recruitment and personalized career coaching.",
    image: "/hero-1-v2.png",
    cta: { text: "Learn More", href: "/services" },
    badge: "Premium Recruitment",
    animation: {
      badge: { initial: { opacity: 0, x: -60 }, animate: { opacity: 1, x: 0 } },
      title: {
        initial: { opacity: 0, x: -100 },
        animate: { opacity: 1, x: 0 },
      },
      subtitle: {
        initial: { opacity: 0, x: -80 },
        animate: { opacity: 1, x: 0 },
      },
      buttons: {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
      },
    },
  },
  {
    id: 2,
    title: "The Future of Tech Hiring is Here",
    subtitle:
      "Discover high-impact roles in AI, Fintech, and emerging technologies.",
    image: "/hero-2-v2.png",
    cta: { text: "Learn More", href: "/services" },
    badge: "Tech Focus",
    animation: {
      badge: { initial: { opacity: 0, y: -40 }, animate: { opacity: 1, y: 0 } },
      title: { initial: { opacity: 0, y: 80 }, animate: { opacity: 1, y: 0 } },
      subtitle: {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
      },
      buttons: {
        initial: { opacity: 0, scale: 0.8, y: 40 },
        animate: { opacity: 1, scale: 1, y: 0 },
      },
    },
  },
  {
    id: 3,
    title: "Building Dynamic Teams Across Industries",
    subtitle:
      "From logistics to finance, we provide specialized workforce solutions that drive growth.",
    image: "/hero-3.png",
    cta: { text: "Learn More", href: "/services" },
    badge: "Industry Leaders",
    showSearch: true,
    animation: {
      badge: { initial: { opacity: 0, x: 60 }, animate: { opacity: 1, x: 0 } },
      title: {
        initial: { opacity: 0, x: 120, scale: 0.9 },
        animate: { opacity: 1, x: 0, scale: 1 },
      },
      subtitle: {
        initial: { opacity: 0, x: 80 },
        animate: { opacity: 1, x: 0 },
      },
      buttons: {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
      },
      search: {
        initial: { opacity: 0, y: 80, scale: 0.9 },
        animate: { opacity: 1, y: 0, scale: 1 },
      },
    },
  },
];

export const smoothTransition = {
  duration: 1,
  ease: [0.25, 0.1, 0.25, 1],
};

export const staggerDelay = 0.2;
