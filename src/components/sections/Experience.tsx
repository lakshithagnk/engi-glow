import { motion } from "framer-motion";

const items = [
  {
    org: "Tata Power, Mumbai",
    period: "May 2024 – Aug 2024",
    role: "Power Systems Intern",
    desc: "Worked on substation automation, conducted load flow studies, and assisted in commissioning a 33 kV feeder protection scheme.",
  },
  {
    org: "Siemens Industrial Training",
    period: "Jan 2024 – Apr 2024",
    role: "Automation Trainee",
    desc: "Hands-on training with SIMATIC S7-1200 PLCs, TIA Portal, and industrial HMI design for a conveyor sorting application.",
  },
  {
    org: "IIT Bombay – Renewable Lab",
    period: "Jun 2023 – Dec 2023",
    role: "Research Assistant",
    desc: "Built a hybrid MPPT controller for a 1 kW solar–wind setup; co-authored a paper on neural-network-based fault prediction.",
  },
  {
    org: "University Robotics Club",
    period: "2022 – Present",
    role: "Lead Electrical Engineer",
    desc: "Designed power distribution and motor-control systems for autonomous robots competing at national level.",
  },
];

export const Experience = () => {
  return (
    <section id="resume" className="py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Resume</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-extrabold">My Work Experience</h2>
          <p className="mt-4 text-muted-foreground">A timeline of academic, industrial and research milestones.</p>
        </div>

        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/40 to-transparent md:-translate-x-1/2" />

          {items.map((item, i) => {
            const left = i % 2 === 0;
            return (
              <motion.div
                key={item.org}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-12 md:pl-0 mb-12 md:grid md:grid-cols-2 md:gap-12"
              >
                <span className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 h-4 w-4 rounded-full bg-primary ring-4 ring-background shadow-glow z-10" />
                <span className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 h-4 w-4 rounded-full bg-primary/40 animate-ping-soft" />

                <div className={left ? "md:text-right md:pr-8" : "md:order-2 md:pl-8"}>
                  <h3 className="font-display text-xl font-bold">{item.org}</h3>
                  <p className="text-sm text-primary font-medium mt-1">{item.period}</p>
                </div>
                <div className={left ? "mt-3 md:mt-0 md:pl-8" : "md:order-1 mt-3 md:mt-0 md:pr-8 md:text-right"}>
                  <div className="bg-card border rounded-2xl p-5 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-smooth">
                    <h4 className="font-semibold">{item.role}</h4>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
