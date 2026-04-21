export const Footer = () => {
  return (
    <footer
      className="theme-force-dark border-t border-white/[0.07]"
      style={{ background: "hsl(var(--surface-dark))" }}
    >
      <div className="container py-14 grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h3 className="font-display text-2xl font-extrabold">
            <span className="text-gradient">L</span>
            <span className="text-[hsl(220_13%_91%)]">akshitha</span>
            <span className="text-primary">.</span>
          </h3>
          <p className="mt-4 text-sm text-[hsl(218_11%_55%)] leading-relaxed">
            Electrical Engineering undergraduate specializing in power systems, renewable energy,
            and ML-driven solutions.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold text-[hsl(220_13%_91%)] text-sm mb-4">Navigation</h4>
          <ul className="space-y-2.5 text-sm text-[hsl(218_11%_55%)]">
            {["Home", "About", "Services", "Resume", "Projects", "Contact"].map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className="hover:text-primary transition-smooth link-underline"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="font-semibold text-[hsl(220_13%_91%)] text-sm mb-4">Contact</h4>
          <ul className="space-y-2.5 text-sm text-[hsl(218_11%_55%)]">
            <li>+94 70 108 4049</li>
            <li>gnklakshitha@gmail.com</li>
            <li>Colombo, Sri Lanka</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold text-[hsl(220_13%_91%)] text-sm mb-4">Stay Updated</h4>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 bg-white/[0.05] border border-white/[0.10] rounded-xl px-3 py-2.5 text-sm text-[hsl(220_13%_91%)] placeholder:text-[hsl(218_11%_38%)] focus:border-primary/50 focus:outline-none transition-smooth"
            />
            <button className="px-4 rounded-xl bg-gradient-primary text-white font-semibold text-sm hover:scale-105 transition-smooth shadow-glow">
              →
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.07]">
        <div className="container py-5 flex flex-col md:flex-row justify-between gap-2 text-xs text-[hsl(218_11%_45%)]">
          <p>© {new Date().getFullYear()} Lakshitha. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
};
