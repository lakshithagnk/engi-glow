import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const Counter = ({ to, suffix = "+" }: { to: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${Math.floor(v)}${suffix}`);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 1.6, ease: "easeOut" });
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

export const About = () => {
  return (
    <section id="about" className="py-24 bg-surface-soft">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Why Hire Me?</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-extrabold">
              Engineering <span className="text-gradient">that ships</span>, not just slides.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              I combine fundamentals from electrical engineering with modern tooling — embedded firmware,
              ML, and cloud — to build complete systems that solve real problems on the bench and on the grid.
            </p>

            <ul className="mt-6 space-y-3">
              {strengths.map((s) => (
                <li key={s} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex mt-8 items-center gap-2 px-7 py-3 rounded-full border border-foreground/20 hover:bg-foreground hover:text-background transition-smooth font-medium"
            >
              Hire Me →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-5"
          >
            {[
              { n: 15, label: "Engineering Projects" },
              { n: 8, label: "Months of Internship" },
              { n: 5, label: "Certifications" },
              { n: 2, label: "Hackathons Won", suffix: "" },
            ].map((s) => (
              <div key={s.label} className="bg-card border rounded-3xl p-7 shadow-card hover:-translate-y-1 transition-smooth">
                <div className="font-display text-4xl md:text-5xl font-extrabold text-gradient">
                  <Counter to={s.n} suffix={s.suffix ?? "+"} />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
