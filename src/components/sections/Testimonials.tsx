import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { fadeUp, viewportOnce } from "@/lib/motion";

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
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((p) => (p + 1) % testimonials.length);
  const prev = () => setIdx((p) => (p - 1 + testimonials.length) % testimonials.length);
  const t = testimonials[idx];

  return (
    <section className="py-28 bg-surface-soft">
      <div className="container">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="section-label">Testimonials</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-extrabold">
            Words that speak <br />to my results.
          </h2>
        </motion.div>

        <div className="mt-14 max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center card-glow"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 text-primary">
                {Array.from({ length: t.rating }).map((_, k) => (
                  <Star key={k} className="h-5 w-5 fill-current" />
                ))}
              </div>

              <p className="mt-6 text-base md:text-lg leading-relaxed text-muted-foreground">
                "{t.quote}"
              </p>

              <div className="mt-8">
                <p className="font-display font-bold">{t.name}</p>
                <p className="text-sm text-muted-foreground mt-0.5">{t.role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            <button
              onClick={prev}
              aria-label="Previous"
              className="h-11 w-11 rounded-full bg-secondary border border-border grid place-items-center text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-smooth"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === idx ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next"
              className="h-11 w-11 rounded-full bg-secondary border border-border grid place-items-center text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-smooth"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
