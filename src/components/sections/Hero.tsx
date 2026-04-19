import { motion } from "framer-motion";
import { ArrowRight, Star, Sparkles, Download, MapPin, GraduationCap, Mail } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-24 overflow-hidden">
      {/* Subtle dot-grid background */}
      <div className="absolute inset-0 -z-10 bg-grid" />

      {/* Ambient blobs — very subtle */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-20 -left-40 h-[500px] w-[500px] rounded-full bg-primary/8 blur-[140px] animate-blob" />
        <div
          className="absolute -bottom-20 right-0 h-[400px] w-[400px] rounded-full bg-primary/6 blur-[120px] animate-blob"
          style={{ animationDelay: "6s" }}
        />
      </div>

      <div className="container">
        {/* Headline block */}
        <motion.div
          variants={stagger(0.12, 0.05)}
          initial="hidden"
          animate="show"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border border-primary/25 bg-primary/8 text-primary"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Available for internships &amp; collaborations
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-6 font-display text-5xl md:text-7xl font-extrabold leading-[1.08] tracking-tight"
          >
            I'm <span className="text-gradient-animated">Arjun Mehta</span>,
            <br />
            Electrical Engineer
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Final-year EE undergraduate at IIT Bombay — building production-grade systems across{" "}
            <span className="text-foreground font-medium">Automation</span>,{" "}
            <span className="text-foreground font-medium">Renewable Energy</span> &amp;{" "}
            <span className="text-foreground font-medium">Machine Learning</span>.
          </motion.p>
        </motion.div>

        {/* Portrait row */}
        <motion.div
          variants={stagger(0.14, 0.25)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto"
        >
          {/* Left — testimonial quote */}
          <motion.div variants={fadeUp} className="md:text-right space-y-2">
            <p className="text-4xl text-primary/60 font-display leading-none select-none">"</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Arjun's commitment to clean engineering and renewable systems made our project a real
              success. Highly recommended.
            </p>
          </motion.div>

          {/* Centre — portrait, clean with only subtle shadow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative mx-auto"
          >
            {/* Thin spinning ring (very faint) */}
            <div className="absolute -inset-3 rounded-full border border-dashed border-primary/15 animate-spin-slow pointer-events-none" />

            {/* Portrait — circular, soft shadow only, no glow border */}
            <div
              className="relative h-56 w-56 md:h-64 md:w-64 rounded-full overflow-hidden animate-float"
              style={{ boxShadow: "0 8px 40px -8px hsl(221 39% 11% / 0.35)" }}
            >
              <img
                src={heroPortrait}
                alt="Arjun Mehta — Electrical Engineering portfolio"
                width={512}
                height={512}
                className="h-full w-full object-cover object-top"
              />
            </div>

            {/* Open-to-work badge */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="absolute -bottom-2 -right-2 md:bottom-1 md:-right-8 glass rounded-2xl px-3 py-2 shadow-card flex items-center gap-2 text-xs font-medium"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
              Open to work
            </motion.div>
          </motion.div>

          {/* Right — star rating + count */}
          <motion.div variants={fadeUp} className="space-y-2">
            <div className="flex items-center gap-1 text-primary md:justify-start">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.35 + i * 0.07, type: "spring", stiffness: 400 }}
                >
                  <Star className="h-4 w-4 fill-current" />
                </motion.span>
              ))}
            </div>
            <h3 className="font-display text-2xl font-extrabold">15+ Projects</h3>
            <p className="text-sm text-muted-foreground">Hands-on Engineering Experience</p>
          </motion.div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-3"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 420, damping: 18 }}
            className="group relative inline-flex items-center gap-2 bg-gradient-primary text-white px-7 py-3.5 rounded-full font-semibold shadow-glow overflow-hidden"
          >
            <span className="relative z-10">View Projects</span>
            <ArrowRight className="h-4 w-4 relative z-10 transition-transform group-hover:translate-x-1" />
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </motion.a>

          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 420, damping: 18 }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium border border-border hover:border-primary/40 hover:text-primary text-muted-foreground transition-smooth"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 420, damping: 18 }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium bg-secondary text-foreground hover:bg-secondary/70 border border-border transition-smooth"
          >
            <Mail className="h-4 w-4" />
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Quick facts strip */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground"
        >
          <span className="inline-flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-primary" />
            B.Tech EE · IIT Bombay · 2025
          </span>
          <span className="hidden sm:inline text-border">|</span>
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            Mumbai, India · Open to relocation
          </span>
          <span className="hidden sm:inline text-border">|</span>
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Available from May 2025
          </span>
        </motion.div>
      </div>
    </section>
  );
};
