import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 -left-20 h-80 w-80 rounded-full bg-primary/20 blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary-glow/20 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium glass border border-primary/30 text-primary">
            👋 Hello!
          </span>

          <h1 className="mt-6 font-display text-5xl md:text-7xl font-extrabold leading-[1.05]">
            I'm <span className="text-gradient">Arjun Mehta</span>,
            <br />
            Electrical Engineer
          </h1>

          <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Final Year Electrical Engineering Undergraduate — passionate about
            <span className="text-foreground font-semibold"> Automation</span>,
            <span className="text-foreground font-semibold"> Renewable Energy</span> &
            <span className="text-foreground font-semibold"> Machine Learning</span>.
          </p>
        </motion.div>

        {/* Quote + Rating row (PDF style) */}
        <div className="mt-14 grid md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:text-right"
          >
            <p className="text-5xl text-primary font-display leading-none">"</p>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              Arjun's commitment to clean engineering and renewable systems made our project a real success. Highly recommended.
            </p>
          </motion.div>

          {/* Center portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-primary blur-2xl opacity-40 rounded-full" />
            <div className="relative h-56 w-56 md:h-72 md:w-72 rounded-full overflow-hidden border-4 border-background shadow-elegant animate-float">
              <img
                src={heroPortrait}
                alt="Arjun Mehta — Electrical Engineering portfolio portrait"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-1 text-primary md:justify-start">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <h3 className="font-display text-2xl font-bold mt-2">15+ Projects</h3>
            <p className="text-sm text-muted-foreground">Hands-on Experience</p>
          </motion.div>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-7 py-3.5 rounded-full font-medium shadow-glow hover:scale-105 transition-smooth"
          >
            View Portfolio
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium border border-foreground/20 hover:bg-foreground hover:text-background transition-smooth"
          >
            Hire Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};
