import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useState } from "react";
import { stagger, fadeUp, viewportOnce } from "@/lib/motion";
import automation from "@/assets/project-automation.jpg";
import solar from "@/assets/project-solar.jpg";
import iot from "@/assets/project-iot.jpg";
import ml from "@/assets/project-ml.jpg";

const projects = [
  {
    title: "TinyML Li-Ion Battery Fault Detection",
    desc: "Microcontroller-based anomaly detection system for Li-ion battery packs using TinyML. Deployed a lightweight Multi-Scale CNN on an ESP32 for real-time on-device fault classification with low latency.",
    img: ml,
    tags: ["Python", "PyTorch", "TensorFlow Lite", "ESP32"],
    github: "#",
    demo: "#",
    category: "Machine Learning",
  },
  {
    title: "Maze Solving & Line Following Robot",
    desc: "Autonomous robot solving two connected mazes with line following. Integrated ultrasonic sensors for wall detection and an IR sensor array for accurate navigation using shortest path algorithms.",
    img: automation,
    tags: ["Arduino Mega", "C/C++", "Ultrasonic Sensors", "IR Array"],
    github: "#",
    demo: "#",
    category: "Automation",
  },
  {
    title: "Intelligent Street Lighting & Railway Gate",
    desc: "Automated system controlling street lighting and railway gates based on vehicle and train detection, improving safety and reducing energy consumption using LabVIEW and NIDAQmx.",
    img: iot,
    tags: ["LabVIEW", "NIDAQmx", "IR Sensor", "LDR"],
    github: "#",
    demo: "#",
    category: "Automation",
  },
  {
    title: "Smart MediBox",
    desc: "Smart medication box providing timely reminders and monitoring temperature and humidity for proper medicine storage, with a real-time dashboard built in Node-RED.",
    img: solar,
    tags: ["Wokwi", "Node-RED", "IoT"],
    github: "#",
    demo: "#",
    category: "Embedded",
  },
  {
    title: "HR Subsystem Web Application",
    desc: "Full-stack web application for HR and business process management in an electronics manufacturing company. Built with Spring Boot backend and React.js frontend connected to MongoDB.",
    img: automation,
    tags: ["Java", "Spring Boot", "React.js", "MongoDB"],
    github: "#",
    demo: "#",
    category: "Web Dev",
  },
];

const categories = ["All", "Machine Learning", "Automation", "Embedded", "Web Dev"];

export const Projects = () => {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-28 bg-surface-soft">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="section-label">Projects</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-extrabold">
            Things I've <span className="text-gradient">built</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            A selection of projects across embedded systems, power engineering, and software.
          </p>
        </div>

        {/* Filter chips */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-smooth ${
                filter === c
                  ? "bg-primary text-white shadow-glow"
                  : "bg-card border border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Cards — 3-column desktop, 2-column tablet, 1-column mobile */}
        <motion.div
          variants={stagger(0.06, 0.05)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.article
                key={p.title}
                layout
                variants={fadeUp}
                exit={{ opacity: 0, scale: 0.96 }}
                className="group bg-card border border-border rounded-2xl overflow-hidden card-glow"
              >
                {/* Compact image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={640}
                    height={360}
                    className="h-full w-full object-cover group-hover:scale-105 transition-smooth duration-700"
                  />
                  {/* Hover overlay with links */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17]/85 via-[#0B0F17]/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-3 gap-2">
                    <a
                      href={p.github}
                      className="h-8 w-8 rounded-full bg-card/90 backdrop-blur-sm grid place-items-center border border-border hover:bg-primary hover:text-white hover:border-primary transition-smooth"
                    >
                      <Github className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href={p.demo}
                      className="h-8 w-8 rounded-full bg-card/90 backdrop-blur-sm grid place-items-center border border-border hover:bg-primary hover:text-white hover:border-primary transition-smooth"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>

                {/* Compact content */}
                <div className="p-4">
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground border border-border leading-5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display text-sm font-bold leading-snug">{p.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {p.desc}
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
