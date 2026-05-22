import { motion, useMotionValue, useTransform } from "motion/react";
import { useState, useRef } from "react";
import sketch from "@/assets/ai-sketch.jpg";
import render from "@/assets/ai-render.jpg";
import { SectionHeader } from "./Projects";

export function AIVisualization() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (clientX: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  };

  return (
    <section className="relative bg-beige py-28 sm:py-40 px-6 overflow-hidden">
      <div aria-hidden className="absolute inset-0 grid-bg opacity-60" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-cream/40 via-transparent to-cream/40 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-5">
            <SectionHeader
              eyebrow="AI Visualization"
              title={<>From sketch <em className="italic text-walnut">to soul.</em></>}
              intro="Every project begins as a single line. Our visualization studio renders the room before the first plank is laid — so you can step inside the design weeks before move-in day."
            />
            <ul className="mt-10 space-y-4 text-sm text-foreground/80">
              {[
                "Hand-drawn concepts in 48 hours",
                "Photoreal AI renders with true materials",
                "Walk-through previews, scaled 1:1",
              ].map((t, i) => (
                <motion.li
                  key={t}
                  initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-sage" />
                  {t}
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 1 }}
            className="md:col-span-7"
          >
            <div
              ref={ref}
              onMouseMove={(e) => onMove(e.clientX)}
              onTouchMove={(e) => onMove(e.touches[0].clientX)}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-[var(--shadow-luxe)] cursor-ew-resize select-none bg-cream"
            >
              <img src={render} alt="AI rendered luxury living room" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
                <img src={sketch} alt="Hand drawn sketch of living room" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="absolute top-0 bottom-0 w-px bg-cream shadow-[0_0_0_1px_oklch(0.42_0.05_50/0.3)]" style={{ left: `${pos}%` }}>
                <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 rounded-full glass flex items-center justify-center text-walnut shadow-[var(--shadow-soft)]">
                  ↔
                </div>
              </div>
              <span className="absolute top-4 left-4 rounded-full glass px-3 py-1.5 text-[10px] uppercase tracking-[0.2em]">Sketch</span>
              <span className="absolute top-4 right-4 rounded-full glass px-3 py-1.5 text-[10px] uppercase tracking-[0.2em]">Render</span>
            </div>
            <p className="mt-3 text-center text-xs text-foreground/50">Drag to compare</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
