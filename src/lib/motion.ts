import type { Variants } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const; // expo-out

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.65, ease } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { duration: 0.55, ease } },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -28 },
  show:   { opacity: 1, x: 0,  transition: { duration: 0.65, ease } },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 28 },
  show:   { opacity: 1, x: 0,  transition: { duration: 0.65, ease } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show:   { opacity: 1, scale: 1,    transition: { duration: 0.6, ease } },
};

export const stagger = (delay = 0.08, initial = 0.08): Variants => ({
  hidden: {},
  show:   { transition: { staggerChildren: delay, delayChildren: initial } },
});

/**
 * Viewport config — once: false so animations replay every time
 * the element re-enters the viewport (scroll back to section).
 */
export const viewportOnce  = { once: false, margin: "-80px" } as const;
export const viewportClose = { once: false, margin: "-40px" } as const;
