import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const education = [
  {
    school: "University of Moratuwa",
    degree: "Bachelor of Science in Engineering ",
    period: "May 2022 – Present",
    detail: "Specialization in Electrical Engineering.",
  },
  {
    school: "Thurstain College, Colombo-07",
    degree: "G.C.E A/L — Physical Science",
    period: "2017 – 2019",
    detail: "3 A's · Physical Science stream.",
  },
  {
    school: "St John's College, Nugegoda",
    degree: "G.C.E O/L",
    period: "2006 – 2016",
    detail: "8 A's · Primary and secondary education.",
  },
];

const certifications = [
  "Graphic Designing — NVQ Level 3",
  "Computer Hardware and Networking — NVQ Level 3",
  "Generative AI with Large Language Models — DeepLearning.AI",
  "Python Programming",
  "Front End Web Development",
];

export const Education = () => {
  return (
    <section id="education" className="py-28 bg-surface-soft">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <span className="section-label">Education</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-extrabold">
            Academic background
          </h2>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          {/* Education cards */}
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
                className="bg-card border border-border rounded-2xl p-6 card-glow"
              >
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary grid place-items-center shrink-0">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display font-bold text-base leading-snug">{e.school}</h3>
                      <span className="text-xs font-semibold text-primary shrink-0">{e.period}</span>
                    </div>
                    <p className="mt-1.5 text-sm font-medium">{e.degree}</p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{e.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="bg-card border border-border rounded-2xl p-6 card-glow"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary grid place-items-center shrink-0">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="font-display font-bold text-base">Certifications</h3>
            </div>
            <ul className="space-y-3.5">
              {certifications.map((c) => (
                <li key={c} className="flex gap-3 text-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span className="text-muted-foreground leading-snug">{c}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
