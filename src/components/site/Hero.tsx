import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import heroImg from "@/assets/hero-living.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const reveal = {
    hidden: { opacity: 0, y: 30 },
    show: (i: number) => ({
      opacity: 1, y: 0,
      transition: { duration: 1, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] as const },
    }),
  };

  return (
    <section ref={ref} id="top" className="relative min-h-[100svh] overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Sunlit japandi living room with sage sofa and walnut paneling"
          className="h-full w-full object-cover"
          width={1920} height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/30 via-cream/10 to-cream" />
      </motion.div>

      {/* floating decorative cards */}
      <motion.div
        initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2, duration: 1 }}
        className="absolute left-6 bottom-28 hidden md:flex animate-float-slow glass rounded-2xl px-4 py-3 items-center gap-3 shadow-[var(--shadow-soft)]"
      >
        <div className="h-9 w-9 rounded-full bg-sage/30 flex items-center justify-center text-[11px] font-medium text-walnut">JP</div>
        <div className="text-[11px] leading-tight">
          <div className="uppercase tracking-[0.18em] text-foreground/60">Now in studio</div>
          <div className="font-display text-base text-foreground">Kyoto Townhouse</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 1 }}
        className="absolute right-6 top-28 hidden md:block animate-float-slow glass rounded-2xl px-5 py-4 text-right shadow-[var(--shadow-soft)]"
        style={{ animationDelay: "1s" }}
      >
        <div className="text-[10px] uppercase tracking-[0.22em] text-foreground/60">Est. 2014</div>
        <div className="font-display text-xl mt-1">Stockholm · Kyoto</div>
      </motion.div>

      {/* sparkles */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        {[...Array(14)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-walnut/30"
            style={{ left: `${(i * 73) % 100}%`, top: `${(i * 41) % 100}%` }}
            animate={{ opacity: [0.1, 0.6, 0.1], scale: [0.6, 1.2, 0.6] }}
            transition={{ duration: 4 + (i % 3), repeat: Infinity, delay: i * 0.4 }}
          />
        ))}
      </div>

      <motion.div style={{ opacity: fade }} className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-24 pt-40">
        <motion.div initial="hidden" animate="show" className="max-w-4xl">
          <motion.div custom={0} variants={reveal} className="mb-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-foreground/60">
            <span className="h-px w-10 bg-foreground/40" />
            Atelier Aura · Interior Studio
          </motion.div>

          <h1 className="font-display text-[14vw] leading-[0.95] text-balance sm:text-[9vw] md:text-[7.5vw] lg:text-[6.5rem]">
            {["Designing", "spaces that feel", "like poetry."].map((line, i) => (
              <motion.span key={i} custom={i + 1} variants={reveal} className="block">
                {i === 1 ? (
                  <>
                    spaces that feel{" "}
                    <span className="italic text-walnut">like</span>
                  </>
                ) : i === 2 ? (
                  <span className="italic">poetry.</span>
                ) : (
                  line
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p custom={4} variants={reveal} className="mt-8 max-w-md text-base text-foreground/70 leading-relaxed">
            Luxury interiors crafted for modern living — quiet materials, considered light, and rooms that hold their stillness.
          </motion.p>

          <motion.div custom={5} variants={reveal} className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#projects" className="group inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-4 text-[12px] uppercase tracking-[0.22em] text-primary-foreground transition-transform hover:scale-[1.03]">
              View Projects
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#contact" className="inline-flex items-center gap-3 rounded-full border border-foreground/30 px-7 py-4 text-[12px] uppercase tracking-[0.22em] text-foreground hover:bg-foreground hover:text-primary-foreground transition-colors">
              Book Consultation
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-foreground/50"
        >
          Scroll
          <motion.span
            animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
            className="block h-8 w-px bg-foreground/40"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
