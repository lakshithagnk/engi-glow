import { motion } from "framer-motion";
import { Cpu, Zap, CircuitBoard, BrainCircuit, ArrowUpRight } from "lucide-react";
import { stagger, fadeUp, viewportOnce } from "@/lib/motion";

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
    /*
     * theme-force-dark overrides foreground/muted CSS variables so all
     * Tailwind text utilities stay readable against the dark section bg
     * in both light AND dark page themes.
     */
    <section
      id="services"
      className="theme-force-dark py-28 relative overflow-hidden"
      style={{ background: "hsl(var(--surface-dark))" }}
    >
      <div className="absolute inset-0 bg-gradient-glow opacity-35 pointer-events-none" />

      <div className="container relative">
        {/* Header */}
        <div className="max-w-2xl">
          <span className="section-label">My Services</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-extrabold text-[hsl(220_13%_91%)]">
            Engineering services <br />I deliver with precision.
          </h2>
          <p className="mt-4 text-[hsl(218_11%_65%)] max-w-xl leading-relaxed">
            From shop-floor automation to clean-energy intelligence — building practical engineering
            systems that work in the real world.
          </p>
        </div>

        {/* Service cards */}
        <motion.div
          variants={stagger(0.09)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group relative bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 cursor-pointer overflow-hidden hover:border-primary/28 transition-[border-color,box-shadow] duration-300 hover:shadow-[0_0_22px_hsl(25_95%_53%/0.09)]"
            >
              {/* Glow on hover */}
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/18 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative">
                <div className="h-12 w-12 rounded-xl bg-gradient-primary grid place-items-center mb-5 group-hover:scale-105 transition-smooth shadow-glow">
                  <s.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-display text-lg font-bold text-[hsl(220_13%_91%)]">{s.title}</h3>
                <p className="mt-2.5 text-sm text-[hsl(218_11%_65%)] leading-relaxed">{s.desc}</p>
                <div className="mt-5 flex justify-end">
                  <span className="h-9 w-9 rounded-full bg-white/[0.08] grid place-items-center border border-white/10 group-hover:bg-primary group-hover:rotate-45 transition-smooth duration-400">
                    <ArrowUpRight className="h-4 w-4 text-[hsl(218_11%_65%)] group-hover:text-white transition-smooth" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
