import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Projects", "Studio", "Process", "Gallery", "Contact"];

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6"
    >
      <nav
        className={`glass flex items-center justify-between gap-6 rounded-full transition-all duration-500 ${
          scrolled ? "px-5 py-2.5 w-full max-w-3xl shadow-[var(--shadow-soft)]" : "px-6 py-3 w-full max-w-4xl"
        }`}
      >
        <a href="#top" className="flex items-center gap-2 font-display text-lg tracking-tight">
          <span className="inline-block h-2 w-2 rounded-full bg-sage" />
          Atelier Aura
        </a>
        <ul className="hidden md:flex items-center gap-7 text-[12px] uppercase tracking-[0.18em] text-foreground/70">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="relative transition-colors hover:text-foreground">
                {l}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-foreground transition-all duration-500 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full bg-foreground px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-primary-foreground transition-transform hover:scale-[1.03]"
        >
          Book
        </a>
      </nav>
    </motion.header>
  );
}

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const move = (e: MouseEvent) => { setPos({ x: e.clientX, y: e.clientY }); setVisible(true); };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseleave", leave); };
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="pointer-events-none fixed z-[60] hidden md:block"
          style={{
            left: pos.x - 180, top: pos.y - 180,
            width: 360, height: 360,
            background: "radial-gradient(circle, oklch(0.66 0.045 135 / 0.18) 0%, transparent 60%)",
            mixBlendMode: "multiply",
            transition: "transform 0.18s ease-out",
          }}
        />
      )}
    </AnimatePresence>
  );
}

export function ScrollIndicator() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? window.scrollY / h : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed left-0 top-0 z-[55] h-px w-full bg-transparent">
      <div className="h-full bg-walnut transition-[width] duration-150" style={{ width: `${p * 100}%` }} />
    </div>
  );
}
