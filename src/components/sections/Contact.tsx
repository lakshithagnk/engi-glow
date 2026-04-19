import { motion } from "framer-motion";
import { useState } from "react";
import { Github, Linkedin, Twitter, Youtube, Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thanks — I'll reply within 24 hours." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-surface-dark text-surface-dark-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      <div className="container relative">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contact</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-extrabold">Let's connect <br />and build together.</h2>
          </div>
          <a
            href="mailto:arjun.mehta@example.com"
            className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-7 py-3.5 rounded-full font-medium shadow-glow hover:scale-105 transition-smooth"
          >
            Hire Me →
          </a>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            {[
              { icon: Mail, label: "Email", value: "arjun.mehta@example.com" },
              { icon: Phone, label: "Phone", value: "+91 98765 43210" },
              { icon: MapPin, label: "Location", value: "Mumbai, India" },
            ].map((c) => (
              <div key={c.label} className="flex items-center gap-4 glass-dark rounded-2xl p-5">
                <div className="h-12 w-12 rounded-xl bg-gradient-primary grid place-items-center">
                  <c.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-white/60">{c.label}</p>
                  <p className="font-medium">{c.value}</p>
                </div>
              </div>
            ))}

            <div className="flex items-center gap-3 pt-2">
              {[Github, Linkedin, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="h-11 w-11 rounded-full bg-white/10 grid place-items-center hover:bg-primary transition-smooth">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={submit}
            className="glass-dark rounded-3xl p-7 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                required
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-white/40 focus:border-primary focus:outline-none transition-smooth"
              />
              <input
                required
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-white/40 focus:border-primary focus:outline-none transition-smooth"
              />
            </div>
            <textarea
              required
              rows={6}
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-white/40 focus:border-primary focus:outline-none transition-smooth resize-none"
            />
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground px-6 py-3.5 rounded-xl font-medium shadow-glow hover:scale-[1.02] transition-smooth"
            >
              Send Message <Send className="h-4 w-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
