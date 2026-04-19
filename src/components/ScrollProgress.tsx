import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 inset-x-0 h-1 bg-gradient-primary origin-left z-[60]"
      />
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full bg-gradient-primary text-primary-foreground grid place-items-center shadow-glow hover:scale-110 transition-smooth"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
};
