import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import { stagger, fadeUp, fadeLeft, fadeRight, viewportOnce } from "@/lib/motion";

const Counter = ({ to, suffix = "+" }: { to: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: false });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${Math.floor(v)}${suffix}`);

  useEffect(() => {
    if (inView) {
      count.set(0);
      const controls = animate(count, to, { duration: 1.5, ease: "easeOut" });
      return () => controls.stop();
    }
  }, [inView, to, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const strengths = [
  "Strong analytical & problem-solving mindset",
  "End-to-end engineering design experience",
  "Adaptable across hardware, firmware & software",
  "Team player with leadership in technical clubs",
];

const stats = [
  { n: 15, label: "Engineering Projects" },
  { n: 8,  label: "Months of Internship" },
  { n: 5,  label: "Certifications" },
  { n: 2,  label: "Hackathons Won", suffix: "" },
];

export const About = () => {
  return (
    <section id="about" className="py-28 bg-surface-soft">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
          >
            <span className="section-label">Why Hire Me?</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-extrabold">
              Engineering <span className="text-gradient">that ships</span>, not just slides.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              I combine fundamentals from electrical engineering with modern tooling — embedded
              firmware, ML, and cloud — to build complete systems that solve real problems on the
              bench and on the grid.
            </p>

            <ul className="mt-7 space-y-3.5">
              {strengths.map((s) => (
                <li key={s} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex mt-9 items-center gap-2 px-7 py-3 rounded-full border border-border hover:border-primary/40 hover:text-primary text-muted-foreground transition-smooth font-medium text-sm"
            >
              Hire Me →
            </a>
          </motion.div>

          {/* Right — stat cards */}
          <motion.div
            variants={stagger(0.08, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                className="bg-card border border-border rounded-2xl p-6 card-glow"
              >
                {/* White bold number + tiny accent dot */}
                <div className="flex items-start gap-1.5">
                  <div className="font-display text-4xl font-extrabold leading-none">
                    <Counter to={s.n} suffix={s.suffix ?? "+"} />
                  </div>
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-snug">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
