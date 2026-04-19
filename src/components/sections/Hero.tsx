import { motion } from "framer-motion";
import { ArrowRight, Star, Sparkles, Download, MapPin, GraduationCap, Mail } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-24 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 bg-grid" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -left-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary-glow/20 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container">
        <motion.div
          variants={stagger(0.12, 0.05)}
          initial="hidden"
          animate="show"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium glass border border-primary/30 text-primary"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Available for internships & collaborations
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-6 font-display text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight"
          >
            I'm <span className="text-gradient-animated">Arjun Mehta</span>,
            <br />
            Electrical Engineer
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Final Year Electrical Engineering Undergraduate — passionate about
            <span className="text-foreground font-semibold"> Automation</span>,
            <span className="text-foreground font-semibold"> Renewable Energy</span> &
            <span className="text-foreground font-semibold"> Machine Learning</span>.
          </motion.p>
        </motion.div>

        {/* Quote + Portrait + Rating row (PDF style) */}
        <motion.div
          variants={stagger(0.15, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto"
        >
          <motion.div variants={fadeUp} className="md:text-right">
            <p className="text-6xl text-primary/80 font-display leading-none">"</p>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              Arjun's commitment to clean engineering and renewable systems made our project a real success. Highly recommended.
            </p>
          </motion.div>

          {/* Center portrait with rotating ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-50 rounded-full scale-90" />
            {/* Rotating dashed ring */}
            <div className="absolute -inset-3 rounded-full border-2 border-dashed border-primary/40 animate-spin-slow" />
            {/* Pulse rings */}
            <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping-soft" />

            <div className="relative h-56 w-56 md:h-72 md:w-72 rounded-full overflow-hidden border-4 border-background shadow-elegant animate-float">
              <img
                src={heroPortrait}
                alt="Arjun Mehta — Electrical Engineering portfolio portrait"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="absolute -bottom-2 -right-2 md:bottom-4 md:-right-6 glass rounded-2xl px-3 py-2 shadow-card flex items-center gap-2 text-xs font-medium"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Open to work
            </motion.div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <div className="flex items-center gap-1 text-primary md:justify-start">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.08, type: "spring", stiffness: 400 }}
                >
                  <Star className="h-4 w-4 fill-current" />
                </motion.span>
              ))}
            </div>
            <h3 className="font-display text-2xl font-bold mt-2">15+ Projects</h3>
            <p className="text-sm text-muted-foreground">Hands-on Experience</p>
          </motion.div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="group relative inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-7 py-3.5 rounded-full font-medium shadow-glow overflow-hidden"
          >
            <span className="relative z-10">View Portfolio</span>
            <ArrowRight className="h-4 w-4 relative z-10 transition-transform group-hover:translate-x-1" />
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-primary-foreground/30 to-transparent" />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium border border-foreground/20 hover:bg-foreground hover:text-background transition-smooth"
          >
            Hire Me
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
