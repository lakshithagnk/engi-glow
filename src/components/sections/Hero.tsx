import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin, GraduationCap, Mail, Sparkles } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";
import { fadeUp, stagger } from "@/lib/motion";

export const Hero = () => {
  return (
    <section id="home" className="relative pt-28 pb-20 overflow-hidden">
      {/* Dot-grid background */}
      <div className="absolute inset-0 -z-10 bg-grid" />

      {/* Ambient blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-10 -left-48 h-[420px] w-[420px] rounded-full bg-primary/8 blur-[130px] animate-blob" />
        <div
          className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-primary/6 blur-[110px] animate-blob"
          style={{ animationDelay: "7s" }}
        />
      </div>

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: text content ── */}
          <motion.div
            variants={stagger(0.1, 0.05)}
            initial="hidden"
            animate="show"
            className="order-2 lg:order-1"
          >
            {/* Name */}
            <motion.h1
              variants={fadeUp}
              className="font-display text-4xl md:text-5xl font-extrabold leading-[1.12] tracking-tight"
            >
              Hi, I'm{" "}
              <span className="text-gradient-animated">Nuwan Lakshitha</span>
            </motion.h1>

            {/* Role */}
            <motion.p
              variants={fadeUp}
              className="mt-2 text-lg md:text-xl font-semibold text-muted-foreground"
            >
              Electrical Engineering Undergraduate
            </motion.p>

            {/* Bio */}
            <motion.p
              variants={fadeUp}
              className="mt-5 text-sm md:text-base text-muted-foreground leading-relaxed max-w-lg"
            >
              I interest in {" "}
               <span className="text-foreground font-medium">Machine Learning </span>,
              <span className="text-foreground font-medium">power systems</span>, and{" "}
              <span className="text-foreground font-medium">electrical installations</span>
             , with a strong interest in renewable energy integration and grid stability. I seek opportunities to apply my 
              technical knowledge to deliver practical, efficient engineering solutions.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap gap-3"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 420, damping: 18 }}
                className="group inline-flex items-center gap-2 bg-gradient-primary text-white px-6 py-3 rounded-full font-semibold text-sm shadow-glow overflow-hidden relative"
              >
                <span className="relative z-10">View Projects</span>
                <ArrowRight className="h-4 w-4 relative z-10 transition-transform group-hover:translate-x-1" />
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </motion.a>

              <motion.a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                download
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 420, damping: 18 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border border-border hover:border-primary/40 hover:text-primary text-muted-foreground transition-smooth"
              >
                <Download className="h-4 w-4" />
                Resume
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 420, damping: 18 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium bg-secondary border border-border text-muted-foreground hover:bg-secondary/70 transition-smooth"
              >
                <Mail className="h-4 w-4" />
                Contact
              </motion.a>
            </motion.div>

            {/* Quick facts */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground"
            >
              <span className="inline-flex items-center gap-1.5">
                <GraduationCap className="h-3.5 w-3.5 text-primary" />
                B.Sc. in Electrical Engineering · University of Moratuwa
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-primary" />
                Colombo, Sri Lanka
              </span>
            </motion.div>
          </motion.div>

          {/* ── Right: portrait ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-64 md:w-72 lg:w-80">
              {/* Ambient glow behind image */}
              <div className="absolute inset-6 rounded-3xl bg-primary/12 blur-3xl -z-10" />

              {/* Portrait card */}
                <motion.div
                whileHover={{ scale: 1.02, rotate: -1 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
                className="relative mx-auto w-full max-w-[320px]"
                >
                <div className="relative">
                  {/* Continuous outward wave rings */}
                  {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 rounded-full border-2 border-primary/30"
                    initial={{ scale: 1, opacity: 0.45 }}
                    animate={{ scale: 1.35, opacity: 0 }}
                    transition={{
                    duration: 2.8,
                    ease: "easeOut",
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: i * 0.9,
                    }}
                  />
                  ))}

                  <div className="relative aspect-square overflow-hidden rounded-full border-4 border-border bg-card shadow-[0_20px_60px_-18px_hsl(221_39%_11%/0.45)] ring-1 ring-white/10">
                  <motion.img
                    src={heroPortrait}
                    alt="Nuwan Lakshitha — Electrical Engineering portfolio"
                    width={512}
                    height={512}
                    className="h-full w-full object-cover object-top"
                    style={{ objectPosition: "center 12%" }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 140, damping: 18 }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent" />
                  <div className="absolute inset-4 rounded-full border border-white/10" />
                  </div>
                </div>

                {/* Floating "Open to work" chip */}
                <motion.div
                  initial={{ opacity: 0, y: 14, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 1.05, type: "spring", stiffness: 220, damping: 18 }}
                  className="absolute -bottom-3 left-1/2 -translate-x-1/2 glass rounded-full px-4 py-2 shadow-card flex items-center gap-2 text-xs font-semibold whitespace-nowrap border border-border/60 backdrop-blur-md"
                >
                  <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                  className="h-2.5 w-2.5 rounded-full bg-emerald-500 shrink-0 shadow-[0_0_0_4px_hsl(142_76%_36%/0.18)]"
                  />
                  Open to Work
                </motion.div>
                </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
