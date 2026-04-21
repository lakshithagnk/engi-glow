import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

const links = [
  { id: "home",    label: "Home" },
  { id: "about",   label: "About" },
  { id: "skills",  label: "Skills" },
  { id: "projects",label: "Projects" },
  { id: "resume",  label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const Navbar = () => {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(links.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-smooth",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="container">
        <nav
          className={cn(
            "flex items-center justify-between rounded-full px-5 md:px-7 py-3 transition-smooth",
            scrolled
              ? "backdrop-blur-xl bg-card/85 border border-border shadow-card"
              : "bg-transparent"
          )}
        >
          {/* Logo */}
          <a href="#home" className="font-display font-extrabold text-xl">
            <span className="text-gradient">L</span>
            <span className="text-foreground">akshitha</span>
            <span className="text-primary">.</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-full transition-smooth",
                    active === l.id
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {l.label}
                  {active === l.id && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-full bg-primary/10 -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              download
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-gradient-primary text-white shadow-glow hover:scale-105 transition-smooth"
            >
              <Download className="h-3.5 w-3.5" />
              Resume
            </a>

            {/* Theme toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="h-10 w-10 rounded-full grid place-items-center bg-secondary border border-border text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-smooth"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              className="md:hidden h-10 w-10 rounded-full grid place-items-center bg-secondary border border-border text-muted-foreground"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {/* Mobile drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-3 backdrop-blur-xl bg-card/90 border border-border rounded-2xl p-4 shadow-card"
            >
              <ul className="flex flex-col gap-1">
                {links.map((l) => (
                  <li key={l.id}>
                    <a
                      href={`#${l.id}`}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block px-4 py-3 rounded-xl text-sm font-medium transition-smooth",
                        active === l.id
                          ? "bg-primary text-white"
                          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                      )}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
