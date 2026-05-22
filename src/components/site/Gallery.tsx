import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import bed from "@/assets/project-bedroom.jpg";
import cafe from "@/assets/project-cafe.jpg";
import { SectionHeader } from "./Projects";

const items = [
  { img: g1, label: "Travertine Bath", tag: "Bath" },
  { img: g2, label: "Long Table Dinner", tag: "Dining" },
  { img: g3, label: "Reading Corner", tag: "Nook" },
  { img: bed, label: "Quiet Bedroom", tag: "Suite" },
  { img: g4, label: "Pampas Entry", tag: "Entry" },
  { img: cafe, label: "Café Banquette", tag: "Hospitality" },
];

export function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-55%"]);

  return (
    <section id="gallery" ref={ref} className="relative py-28 sm:py-40 overflow-hidden">
      <div className="px-6 mx-auto max-w-7xl">
        <SectionHeader eyebrow="Gallery" title={<>An <em className="italic text-walnut">editorial</em> archive.</>} />
      </div>

      <motion.div style={{ x }} className="mt-16 flex gap-6 pl-6 will-change-transform">
        {items.map((it, i) => (
          <figure key={i} className="relative shrink-0 w-[78vw] sm:w-[55vw] md:w-[38vw] lg:w-[28vw] aspect-[3/4] overflow-hidden rounded-2xl bg-beige group">
            <img src={it.img} alt={it.label} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105" />
            <figcaption className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between text-primary-foreground">
              <div className="font-display text-xl">{it.label}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] opacity-80">{it.tag}</div>
            </figcaption>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent pointer-events-none" />
          </figure>
        ))}
      </motion.div>
    </section>
  );
}
