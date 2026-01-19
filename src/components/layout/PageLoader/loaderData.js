export const loadingWords = [
  "INNOVATING",
  "CONNECTING",
  "EMPOWERING",
  "NEORECRUITS",
];

export const panelVariants = {
  initial: { y: 0 },
  exit: (custom) => ({
    y: custom === "top" ? "-100%" : "100%",
    transition: { duration: 0.8, ease: [0.65, 0, 0.35, 1], delay: 0.2 },
  }),
};
