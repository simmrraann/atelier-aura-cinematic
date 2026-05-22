import { motion } from "motion/react";
import { SectionHeader } from "./Projects";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 sm:py-40 px-6">
      {/* floating decorative blobs */}
      <motion.div
        aria-hidden
        animate={{ y: [0, -20, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-sage-soft/60 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, 25, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-beige blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-start">
        <div>
          <SectionHeader
            eyebrow="Begin"
            title={<>Tell us about <em className="italic text-walnut">your space.</em></>}
            intro="We take on a small number of residential and hospitality projects each season. Share a few notes and we'll be in touch within two days."
          />
          <div className="mt-12 space-y-4 text-sm text-foreground/70">
            <div className="flex gap-4"><span className="w-20 uppercase tracking-[0.2em] text-[10px] text-foreground/50">Studio</span> Bondegatan 18, Stockholm</div>
            <div className="flex gap-4"><span className="w-20 uppercase tracking-[0.2em] text-[10px] text-foreground/50">Mail</span> hello@atelieraura.studio</div>
            <div className="flex gap-4"><span className="w-20 uppercase tracking-[0.2em] text-[10px] text-foreground/50">Phone</span> +46 8 555 03 02</div>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.9 }}
          onSubmit={(e) => e.preventDefault()}
          className="glass rounded-3xl p-8 sm:p-10 shadow-[var(--shadow-luxe)] space-y-6"
        >
          {[
            { l: "Your name", t: "text", p: "Mira Lindqvist" },
            { l: "Email", t: "email", p: "you@home.com" },
            { l: "Project type", t: "text", p: "Residential · 240 m²" },
          ].map((f) => (
            <label key={f.l} className="block">
              <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/60">{f.l}</span>
              <input type={f.t} placeholder={f.p}
                className="mt-2 w-full bg-transparent border-b border-foreground/20 pb-3 text-base outline-none transition-colors focus:border-foreground placeholder:text-foreground/30" />
            </label>
          ))}
          <label className="block">
            <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/60">Tell us a little</span>
            <textarea rows={4} placeholder="A few words about the home, the mood, the light…"
              className="mt-2 w-full bg-transparent border-b border-foreground/20 pb-3 text-base outline-none transition-colors focus:border-foreground placeholder:text-foreground/30 resize-none" />
          </label>
          <button
            type="submit"
            className="group w-full inline-flex items-center justify-center gap-3 rounded-full bg-foreground px-6 py-4 text-[12px] uppercase tracking-[0.22em] text-primary-foreground transition-transform hover:scale-[1.02]"
          >
            Send Enquiry
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-foreground/10 px-6 py-12">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] uppercase tracking-[0.25em] text-foreground/50">
        <div className="font-display text-base normal-case tracking-tight text-foreground">Atelier Aura</div>
        <div>© {new Date().getFullYear()} — Designed in Stockholm</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
          <a href="#" className="hover:text-foreground transition-colors">Journal</a>
        </div>
      </div>
    </footer>
  );
}
