import { motion } from "framer-motion";
import { Cpu, Zap, Code2, BrainCircuit, Wrench, Layers } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const groups = [
  {
    icon: Zap,
    title: "Power & Energy",
    items: ["PSCAD", "PSS®E", "MATLAB", "Simulink"],
  },
  {
    icon: Cpu,
    title: "Automation",
    items: ["LabVIEW", "Factory I/O", "LADSIM","PLC ladder logic"],
  },
  {
    icon: Wrench,
    title: "Embedded & IoT",
    items: ["ESP32", "Arduino", "PlatformIO", "Node-RED"],
  },
  {
    icon: BrainCircuit,
    title: "Machine Learning",
    items: ["Python", "PyTorch", "TensorFlow Lite", "TinyML"],
  },
  {
    icon: Layers,
    title: "Design Tools",
    items: ["SolidWorks", "Photoshop", "Illustrator", "Canva"],
  },
  {
    icon: Code2,
    title: "Web & Software",
    items: ["Java", "Spring Boot", "React.js", "MongoDB", "GitHub"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-28">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <span className="section-label">Skills</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-extrabold">
            Technologies I <span className="text-gradient">work with</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            From embedded firmware to web applications — tools I've used in real projects.
          </p>
        </div>

        <motion.div
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {groups.map((g) => (
            <motion.div
              key={g.title}
              variants={fadeUp}
              className="group bg-card border border-border rounded-2xl p-6 card-glow"
            >
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary grid place-items-center group-hover:bg-primary group-hover:text-white transition-smooth shrink-0">
                  <g.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display font-bold text-base">{g.title}</h3>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1.5 rounded-full bg-secondary text-muted-foreground border border-border hover:border-primary/30 hover:text-foreground transition-smooth cursor-default"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
