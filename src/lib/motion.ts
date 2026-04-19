import type { Variants, Transition } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const; // expo-out feel

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease } },
};

export const stagger = (delay = 0.08, initial = 0.1): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: delay, delayChildren: initial } },
});

export const viewportOnce = { once: true, margin: "-80px" } as const;

export const hoverLift: Transition = { type: "spring", stiffness: 320, damping: 22 };
