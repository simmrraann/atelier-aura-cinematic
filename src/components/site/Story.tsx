import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { SectionHeader } from "./Projects";

const testimonials = [
  { q: "They listened to our silences as carefully as our words. The home feels inevitable now.", a: "Mira Lindqvist", r: "Private Residence, Stockholm" },
  { q: "Walking in for the first time was like exhaling. Every material was right.", a: "Akira Tanaka", r: "Townhouse, Kyoto" },
  { q: "Atelier Aura made our café feel like a chapter from a novel — guests stay an hour longer.", a: "Elena Costa", r: "Café Mira, Lisbon" },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="relative bg-beige py-28 sm:py-40 px-6 grain">
      <div className="mx-auto max-w-6xl text-center">
        <SectionHeader eyebrow="Client Experience" title={<>Words from <em className="italic text-walnut">their homes.</em></>} align="center" />
        <div className="relative mt-16 h-56 sm:h-44">
          {testimonials.map((t, idx) => (
            <motion.blockquote
              key={idx}
              animate={{ opacity: i === idx ? 1 : 0, y: i === idx ? 0 : 20 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-4"
            >
              <p className="font-display text-2xl sm:text-4xl leading-snug max-w-3xl text-balance">
                “{t.q}”
              </p>
              <footer className="text-[11px] uppercase tracking-[0.25em] text-foreground/60">
                {t.a} · {t.r}
              </footer>
            </motion.blockquote>
          ))}
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)} aria-label={`Testimonial ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${i === idx ? "w-8 bg-foreground" : "w-1.5 bg-foreground/30"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { n: "01", t: "Concept", d: "Listening sessions, mood, light study, material instincts." },
  { n: "02", t: "Visualization", d: "Sketches and AI renders bring the room into focus." },
  { n: "03", t: "Design", d: "Drawings, sourcing, bespoke commissions — every detail named." },
  { n: "04", t: "Execution", d: "On-site direction, craftspeople, and a styled hand-over." },
];

export function Process() {
  return (
    <section id="process" className="relative py-28 sm:py-40 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Process" title={<>Four quiet <em className="italic text-walnut">movements.</em></>} />
        <div className="relative mt-20 grid md:grid-cols-4 gap-10 md:gap-6">
          <motion.div
            aria-hidden
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left" }}
            className="hidden md:block absolute top-6 left-0 right-0 h-px bg-walnut/30"
          />
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.15 + i * 0.12 }}
              className="relative"
            >
              <div className="flex items-center gap-3">
                <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full bg-cream border border-walnut/30 font-display text-lg text-walnut">
                  {s.n}
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl">{s.t}</h3>
              <p className="mt-3 text-sm text-foreground/70 leading-relaxed max-w-xs">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function useCounter(target: number, run: boolean, duration = 1800) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const start = performance.now();
    const step = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, run, duration]);
  return v;
}

function Stat({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver((e) => e[0].isIntersecting && setRun(true), { threshold: 0.4 });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  const n = useCounter(value, run);
  return (
    <div ref={ref} className="text-center md:text-left">
      <div className="font-display text-6xl md:text-7xl leading-none">
        {n}
        {suffix && <span className="text-walnut">{suffix}</span>}
      </div>
      <div className="mt-3 text-[11px] uppercase tracking-[0.25em] text-foreground/60">{label}</div>
    </div>
  );
}

export function Stats() {
  return (
    <section className="relative py-28 sm:py-36 px-6 bg-beige grain">
      <div aria-hidden className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-12">
        <Stat value={184} label="Projects Completed" />
        <Stat value={62} label="Luxury Homes" />
        <Stat value={99} suffix="%" label="Client Satisfaction" />
        <Stat value={2400} suffix="+" label="AI Renders" />
      </div>
    </section>
  );
}
