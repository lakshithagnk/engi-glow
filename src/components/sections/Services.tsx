import { motion } from "framer-motion";
import { Cpu, Zap, CircuitBoard, BrainCircuit, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Cpu,
    title: "Automation Systems",
    desc: "PLC programming, SCADA dashboards, and industrial control logic for smart factories.",
  },
  {
    icon: Zap,
    title: "Power Systems",
    desc: "Load flow analysis, grid integration of renewables, and protection system design.",
  },
  {
    icon: CircuitBoard,
    title: "Embedded & IoT",
    desc: "ESP32 / STM32 firmware, sensor networks, and real-time embedded control systems.",
  },
  {
    icon: BrainCircuit,
    title: "ML Applications",
    desc: "Predictive maintenance, fault detection, and data-driven energy optimization.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-surface-dark text-surface-dark-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      <div className="container relative">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">My Services</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-extrabold">
            Engineering services <br />I deliver with precision.
          </h2>
          <p className="mt-4 text-white/70 max-w-xl">
            From shop-floor automation to clean-energy intelligence — building practical engineering systems that work in the real world.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="group relative glass-dark rounded-3xl p-6 hover:bg-white/[0.08] transition-smooth cursor-pointer overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-primary/30 blur-3xl opacity-0 group-hover:opacity-100 transition-smooth duration-700" />
              <div className="relative">
                <div className="h-12 w-12 rounded-2xl bg-gradient-primary grid place-items-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-smooth shadow-glow">
                  <s.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-3 text-sm text-white/65 leading-relaxed">{s.desc}</p>
                <div className="mt-6 flex justify-end">
                  <span className="h-10 w-10 rounded-full bg-white/10 grid place-items-center group-hover:bg-primary group-hover:rotate-45 transition-smooth duration-500">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
