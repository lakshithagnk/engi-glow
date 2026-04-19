import { motion } from "framer-motion";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const posts = [
  {
    img: blog1,
    tag: "Automation",
    date: "12 Mar, 2025",
    title: "From Relay Logic to PLCs: A Modern Guide for Students",
  },
  {
    img: blog2,
    tag: "IoT",
    date: "02 Feb, 2025",
    title: "Building a Low-Cost Home Energy Monitor with ESP32",
  },
  {
    img: blog3,
    tag: "Power",
    date: "18 Jan, 2025",
    title: "Why Smart Grids Need Machine Learning, Not Just Sensors",
  },
];

export const Blog = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Insights</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-extrabold">From My Blog</h2>
          <p className="mt-4 text-muted-foreground">Engineering notes, tutorials & deep-dives.</p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-7">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card border rounded-3xl overflow-hidden shadow-card hover:shadow-elegant hover:-translate-y-1 transition-smooth cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" width={1024} height={640} className="h-full w-full object-cover group-hover:scale-110 transition-smooth duration-700" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">{p.tag}</span>
                  <span className="text-muted-foreground">Arjun M. • {p.date}</span>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold leading-snug group-hover:text-primary transition-smooth">
                  {p.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
