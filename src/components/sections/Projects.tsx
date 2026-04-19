import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useState } from "react";
import automation from "@/assets/project-automation.jpg";
import solar from "@/assets/project-solar.jpg";
import iot from "@/assets/project-iot.jpg";
import ml from "@/assets/project-ml.jpg";

const projects = [
  {
    title: "Smart Factory Automation",
    desc: "PLC + SCADA system for a conveyor sorting line with real-time HMI dashboards and OEE tracking.",
    img: automation,
    tags: ["PLC", "SCADA", "TIA Portal"],
    github: "#",
    demo: "#",
    category: "Automation",
  },
  {
    title: "Hybrid Solar–Wind MPPT",
    desc: "Microcontroller-based hybrid MPPT controller boosting energy capture by 18% in lab tests.",
    img: solar,
    tags: ["Power", "STM32", "MATLAB"],
    github: "#",
    demo: "#",
    category: "Power Systems",
  },
  {
    title: "IoT Energy Monitor",
    desc: "ESP32 device streaming live load data to a web dashboard with anomaly alerts.",
    img: iot,
    tags: ["ESP32", "MQTT", "React"],
    github: "#",
    demo: "#",
    category: "Embedded",
  },
  {
    title: "Fault Prediction with ML",
    desc: "LSTM model predicting transformer faults from vibration & thermal sensor streams.",
    img: ml,
    tags: ["Python", "TensorFlow", "Time Series"],
    github: "#",
    demo: "#",
    category: "Machine Learning",
  },
];

const categories = ["All", "Automation", "Power Systems", "Embedded", "Machine Learning"];

export const Projects = () => {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Portfolio</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-extrabold">
            Let's have a look at <br className="hidden md:block" />my recent <span className="text-gradient">work</span>
          </h2>
        </div>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-smooth ${
                filter === c
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "bg-secondary text-foreground/70 hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-7">
          {visible.map((p, i) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-card border rounded-3xl overflow-hidden shadow-card hover:shadow-elegant transition-smooth"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover group-hover:scale-110 transition-smooth duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-5 gap-3">
                  <a href={p.github} className="h-10 w-10 rounded-full bg-white text-surface-dark grid place-items-center hover:bg-primary hover:text-primary-foreground transition-smooth">
                    <Github className="h-4 w-4" />
                  </a>
                  <a href={p.demo} className="h-10 w-10 rounded-full bg-white text-surface-dark grid place-items-center hover:bg-primary hover:text-primary-foreground transition-smooth">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-secondary text-foreground/70">{t}</span>
                  ))}
                </div>
                <h3 className="font-display text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Marquee strip like PDF */}
        <div className="mt-16 bg-gradient-primary rounded-full overflow-hidden py-4">
          <div className="marquee flex gap-10 whitespace-nowrap text-primary-foreground font-display font-semibold text-lg">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex gap-10 px-5">
                {["Automation ✦", "Power Systems ✦", "Embedded ✦", "Machine Learning ✦", "Renewable Energy ✦", "IoT ✦", "Robotics ✦"].map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
