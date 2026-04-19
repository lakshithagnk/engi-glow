import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Dr. Priya Iyer",
    role: "Professor, IIT Bombay",
    quote: "Arjun's research instincts are sharp. His MPPT controller exceeded our lab benchmarks and showed industry-grade engineering rigor.",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "Engineer, Tata Power",
    quote: "During his internship, Arjun shipped working SCADA logic in weeks. He asks the right questions and writes clean, documented code.",
    rating: 5,
  },
  {
    name: "Sneha Patil",
    role: "Robotics Club Lead",
    quote: "Reliable, calm under deadline pressure, and exceptional with power electronics. Our robot wouldn't have placed without him.",
    rating: 5,
  },
];

export const Testimonials = () => {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % testimonials.length);
  const prev = () => setI((p) => (p - 1 + testimonials.length) % testimonials.length);
  const t = testimonials[i];

  return (
    <section className="py-24 bg-surface-dark text-surface-dark-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-40" />
      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Testimonials</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-extrabold">
            Words that speak <br />to my results.
          </h2>
        </div>

        <div className="mt-14 max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="glass-dark rounded-3xl p-8 md:p-12 text-center"
            >
              <div className="flex justify-center gap-1 text-primary">
                {Array.from({ length: t.rating }).map((_, k) => (
                  <Star key={k} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="mt-6 text-lg md:text-xl leading-relaxed text-white/90">"{t.quote}"</p>
              <div className="mt-8">
                <p className="font-display font-bold">{t.name}</p>
                <p className="text-sm text-white/60">{t.role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-3 mt-8">
            <button onClick={prev} aria-label="Previous" className="h-11 w-11 rounded-full bg-white/10 grid place-items-center hover:bg-primary transition-smooth">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button onClick={next} aria-label="Next" className="h-11 w-11 rounded-full bg-white/10 grid place-items-center hover:bg-primary transition-smooth">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
