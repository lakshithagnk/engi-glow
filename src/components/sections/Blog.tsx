import { motion } from "framer-motion";
import { stagger, fadeUp, viewportOnce } from "@/lib/motion";
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
    <section className="py-28">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <span className="section-label">Insights</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-extrabold">
            From My Blog
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Engineering notes, tutorials &amp; deep-dives.
          </p>
        </div>

        <motion.div
          variants={stagger(0.09)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid md:grid-cols-3 gap-7"
        >
          {posts.map((p) => (
            <motion.article
              key={p.title}
              variants={fadeUp}
              className="group bg-card border border-border rounded-2xl overflow-hidden card-glow cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={800}
                  height={500}
                  className="h-full w-full object-cover group-hover:scale-105 transition-smooth duration-700"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs">
                  <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-semibold border border-primary/15">
                    {p.tag}
                  </span>
                  <span className="text-muted-foreground">Nuwan L. · {p.date}</span>
                </div>
                <h3 className="mt-3 font-display text-sm font-bold leading-snug group-hover:text-primary transition-smooth line-clamp-2">
                  {p.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
