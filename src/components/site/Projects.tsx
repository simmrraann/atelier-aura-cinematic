import { motion } from "motion/react";
import bedroom from "@/assets/project-bedroom.jpg";
import japandi from "@/assets/project-japandi.jpg";
import kitchen from "@/assets/project-kitchen.jpg";
import workspace from "@/assets/project-workspace.jpg";
import cafe from "@/assets/project-cafe.jpg";

const projects = [
  { img: bedroom, title: "Linen & Oak", category: "Luxury Bedroom", year: "Copenhagen · 2024", span: "md:col-span-4 md:row-span-2" },
  { img: japandi, title: "House of Quiet Hours", category: "Japandi Living Room", year: "Kyoto · 2024", span: "md:col-span-8" },
  { img: kitchen, title: "Walnut Atelier", category: "Minimal Kitchen", year: "Milan · 2023", span: "md:col-span-5" },
  { img: workspace, title: "Sage Study", category: "Modern Workspace", year: "Stockholm · 2024", span: "md:col-span-3 md:row-span-2" },
  { img: cafe, title: "Café Mira", category: "Boutique Cafe", year: "Lisbon · 2023", span: "md:col-span-4" },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28 sm:py-40 px-6 grain">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Selected Work"
          title={<>Interiors that <em className="italic text-walnut">linger.</em></>}
          intro="Five recent rooms — each one made for slow afternoons, soft footsteps, and natural light."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 auto-rows-[260px] md:auto-rows-[320px]">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-2xl bg-beige ${p.span}`}
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-100" />
              <div className="absolute inset-0 p-6 sm:p-7 flex flex-col justify-end text-primary-foreground">
                <div className="text-[10px] uppercase tracking-[0.25em] opacity-80">{p.category}</div>
                <div className="mt-1 flex items-end justify-between gap-3">
                  <h3 className="font-display text-2xl sm:text-3xl">{p.title}</h3>
                  <span className="text-[10px] uppercase tracking-[0.2em] opacity-70">{p.year}</span>
                </div>
                <div className="mt-4 h-px w-0 bg-primary-foreground transition-[width] duration-700 group-hover:w-full" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow, title, intro, align = "left",
}: { eyebrow: string; title: React.ReactNode; intro?: string; align?: "left" | "center" }) {
  return (
    <div className={`flex flex-col gap-6 ${align === "center" ? "items-center text-center" : ""}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.8 }}
        className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-foreground/60"
      >
        <span className="h-px w-10 bg-foreground/40" />
        {eyebrow}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.1 }}
        className="font-display text-5xl sm:text-6xl md:text-7xl leading-[1] max-w-3xl text-balance"
      >
        {title}
      </motion.h2>
      {intro && (
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.2 }}
          className="max-w-xl text-foreground/70 leading-relaxed"
        >
          {intro}
        </motion.p>
      )}
    </div>
  );
}
