import { motion } from "framer-motion";

const items = [
  {
    org: "IPD Colombo (pvt) Ltd",
    period: "Mar 2025 – Jun 2025",
    role: "Intern Electrical Engineer",
    desc: "Analyzed industrial electrical panel boards including contactors, circuit breakers, protection relays, and control devices. Studied control panel design aspects including component selection, safety mechanisms, wiring layouts, and compliance with electrical standards.",
  },
  {
    org: "Ceylon Electricity Board",
    period: "Dec 2024 – Feb 2025",
    role: "Intern Electrical Engineer",
    desc: "Studied power generation through site visits to Upper Kotmale Hydropower Plant and Lakvijaya Coal Power Plant. Learned high voltage transmission systems, switchyard operations, and the Colombo underground distribution network.",
  },
    {
    org: "University of Moratuwa",
    period: "May2022- Present",
    role: "Electrical Engineering Undergraduate",
    desc: "Pursuing a B.Sc. in Electrical Engineering with a focus on power systems and electrical installations. Completed coursework in power system analysis, electrical machines, control systems, and renewable energy. ",
  },
];

export const Experience = () => {
  return (
    <section id="resume" className="py-28">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <span className="section-label">Resume</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-extrabold">
            My Work Experience
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            A timeline of academic, industrial and research milestones.
          </p>
        </div>

        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Centre vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/25 to-transparent md:-translate-x-px" />

          {items.map((item, i) => {
            const left = i % 2 === 0;
            return (
              <motion.div
                key={item.org}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-12 md:pl-0 mb-12 md:grid md:grid-cols-2 md:gap-12"
              >
                {/* Dot */}
                <span className="absolute left-4 md:left-1/2 top-3 -translate-x-1/2 h-3 w-3 rounded-full bg-primary ring-[3px] ring-background z-10" />
                <span className="absolute left-4 md:left-1/2 top-3 -translate-x-1/2 h-3 w-3 rounded-full bg-primary/25 animate-ping-soft" />

                {/* Org + period */}
                <div className={left ? "md:text-right md:pr-8" : "md:order-2 md:pl-8"}>
                  <h3 className="font-display text-lg font-bold">{item.org}</h3>
                  <p className="text-xs text-primary font-semibold mt-1 uppercase tracking-wide">
                    {item.period}
                  </p>
                </div>

                {/* Role card */}
                <div className={left ? "mt-3 md:mt-0 md:pl-8" : "md:order-1 mt-3 md:mt-0 md:pr-8 md:text-right"}>
                  <div className="bg-card border border-border rounded-2xl p-5 card-glow">
                    <h4 className="font-semibold text-sm">{item.role}</h4>
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
