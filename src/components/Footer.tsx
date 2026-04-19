export const Footer = () => {
  return (
    <footer className="bg-surface-dark text-surface-dark-foreground border-t border-white/10">
      <div className="container py-14 grid md:grid-cols-4 gap-10">
        <div>
          <h3 className="font-display text-2xl font-extrabold">
            <span className="text-gradient">A</span>rjun<span className="text-primary">.</span>
          </h3>
          <p className="mt-4 text-sm text-white/60 leading-relaxed">
            Final-year Electrical Engineering student building automation, renewable, and ML-driven systems.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-white/70">
            {["Home", "About", "Services", "Resume", "Projects", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="hover:text-primary transition-smooth">{l}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>+91 98765 43210</li>
            <li>arjun.mehta@example.com</li>
            <li>Mumbai, India</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Newsletter</h4>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-sm placeholder:text-white/40 focus:border-primary focus:outline-none"
            />
            <button className="px-4 rounded-xl bg-gradient-primary text-primary-foreground font-medium">→</button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-col md:flex-row justify-between gap-2 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Arjun Mehta. All rights reserved.</p>
          <p>Built with React, Tailwind & Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
};
