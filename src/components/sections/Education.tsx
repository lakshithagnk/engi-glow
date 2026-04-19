import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const education = [
  {
    school: "Indian Institute of Technology, Bombay",
    degree: "B.Tech, Electrical Engineering",
    period: "2021 – 2025 (Final Year)",
    detail: "CGPA 8.7 / 10 · Coursework: Power Systems, Control Theory, Signals, Embedded Systems, ML.",
  },
  {
    school: "Delhi Public School, R.K. Puram",
    degree: "Higher Secondary (PCM + CS)",
    period: "2019 – 2021",
    detail: "95.2% · School topper in Physics; led the robotics club to a national finalist position.",
  },
];

const certifications = [
  "Siemens PLC & TIA Portal — Industrial Automation",
  "DeepLearning.AI — Machine Learning Specialization",
  "NPTEL — Power System Analysis (Elite + Gold)",
  "AWS Cloud Practitioner",
  "MATLAB Onramp & Simulink Onramp",
];

export const Education = () => {
  return (
    <section id="education" className="py-24 bg-surface-soft">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Education</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-extrabold">Academic background</h2>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="lg:col-span-2 space-y-5"
          >
            {education.map((e) => (
              <motion.div
                key={e.school}
                variants={fadeUp}
                className="bg-card border rounded-3xl p-6 shadow-card hover:shadow-elegant transition-smooth"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-primary grid place-items-center shrink-0">
                    <GraduationCap className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display font-bold text-lg">{e.school}</h3>
                      <span className="text-xs font-medium text-primary">{e.period}</span>
                    </div>
                    <p className="mt-1 text-sm font-medium">{e.degree}</p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{e.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            className="bg-card border rounded-3xl p-6 shadow-card"
          >
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary grid place-items-center">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="font-display font-bold text-lg">Certifications</h3>
            </div>
            <ul className="mt-5 space-y-3">
              {certifications.map((c) => (
                <li key={c} className="flex gap-3 text-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
