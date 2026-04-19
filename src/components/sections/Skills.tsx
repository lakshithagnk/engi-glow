import { motion } from "framer-motion";
import { Cpu, Zap, Code2, BrainCircuit, Wrench, Layers } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const groups = [
  {
    icon: Zap,
    title: "Power & Control",
    items: ["MATLAB / Simulink", "PSpice", "Power Electronics", "Protection Systems", "MPPT Controllers"],
  },
  {
    icon: Cpu,
    title: "Automation",
    items: ["Siemens PLC", "TIA Portal", "Ladder Logic", "SCADA / HMI", "Modbus / OPC-UA"],
  },
  {
    icon: Wrench,
    title: "Embedded & IoT",
    items: ["ESP32", "STM32", "Arduino", "C / C++", "MQTT", "FreeRTOS"],
  },
  {
    icon: BrainCircuit,
    title: "Machine Learning",
    items: ["Python", "TensorFlow", "PyTorch", "scikit-learn", "Time-Series"],
  },
  {
    icon: Layers,
    title: "Design & EDA",
    items: ["KiCad", "Altium", "AutoCAD Electrical", "LTspice"],
  },
  {
    icon: Code2,
    title: "Tools & Workflow",
    items: ["Git / GitHub", "Linux", "Docker", "VS Code", "Figma"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Tech Stack</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-extrabold">
            Skills recruiters can <span className="text-gradient">scan in seconds</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A practical mix of hardware, firmware, and software — grouped the way engineering teams actually work.
          </p>
        </div>

        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {groups.map((g) => (
            <motion.div
              key={g.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="group bg-card border rounded-3xl p-6 shadow-card hover:shadow-elegant transition-smooth"
            >
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary grid place-items-center group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-smooth">
                  <g.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display font-bold text-lg">{g.title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1.5 rounded-full bg-secondary text-foreground/75 hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
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
