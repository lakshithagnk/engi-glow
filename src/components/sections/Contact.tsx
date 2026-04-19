import { motion } from "framer-motion";
import { useState } from "react";
import { Github, Linkedin, Twitter, Youtube, Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { fadeLeft, fadeRight } from "@/lib/motion";

export const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thanks — I'll reply within 24 hours." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="theme-force-dark py-28 relative overflow-hidden"
      style={{ background: "hsl(var(--surface-dark))" }}
    >
      <div className="absolute inset-0 bg-gradient-glow opacity-35 pointer-events-none" />

      <div className="container relative">
        {/* Header row */}
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <span className="section-label">Contact</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-extrabold text-[hsl(220_13%_91%)]">
              Let's connect <br />and build together.
            </h2>
          </div>
          <a
            href="mailto:arjun.mehta@example.com"
            className="inline-flex items-center gap-2 bg-gradient-primary text-white px-7 py-3.5 rounded-full font-semibold shadow-glow hover:scale-105 transition-smooth text-sm"
          >
            Hire Me →
          </a>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="space-y-4"
          >
            {[
              { icon: Mail,   label: "Email",    value: "arjun.mehta@example.com" },
              { icon: Phone,  label: "Phone",    value: "+91 98765 43210" },
              { icon: MapPin, label: "Location", value: "Mumbai, India" },
            ].map((c) => (
              <div
                key={c.label}
                className="flex items-center gap-4 bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5 hover:border-primary/22 transition-smooth"
              >
                <div className="h-11 w-11 rounded-xl bg-gradient-primary grid place-items-center shrink-0 shadow-glow">
                  <c.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-[hsl(218_11%_65%)]">{c.label}</p>
                  <p className="font-medium text-[hsl(220_13%_91%)] text-sm mt-0.5">{c.value}</p>
                </div>
              </div>
            ))}

            {/* Social links */}
            <div className="flex items-center gap-3 pt-2">
              {[Github, Linkedin, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-11 w-11 rounded-full bg-white/[0.06] border border-white/[0.08] grid place-items-center text-[hsl(218_11%_65%)] hover:bg-primary hover:text-white hover:border-primary transition-smooth"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            onSubmit={submit}
            className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-7 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                required
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-white/[0.05] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-[hsl(220_13%_91%)] placeholder:text-[hsl(218_11%_42%)] focus:border-primary/50 focus:outline-none transition-smooth"
              />
              <input
                required
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-white/[0.05] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-[hsl(220_13%_91%)] placeholder:text-[hsl(218_11%_42%)] focus:border-primary/50 focus:outline-none transition-smooth"
              />
            </div>
            <textarea
              required
              rows={6}
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-white/[0.05] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-[hsl(220_13%_91%)] placeholder:text-[hsl(218_11%_42%)] focus:border-primary/50 focus:outline-none transition-smooth resize-none"
            />
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-primary text-white px-6 py-3.5 rounded-xl font-semibold shadow-glow hover:scale-[1.02] transition-smooth text-sm"
            >
              Send Message <Send className="h-4 w-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
