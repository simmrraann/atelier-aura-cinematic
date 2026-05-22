import { createFileRoute } from "@tanstack/react-router";
import { Navbar, CursorGlow, ScrollIndicator } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Projects } from "@/components/site/Projects";
import { AIVisualization } from "@/components/site/AIVisualization";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials, Process, Stats } from "@/components/site/Story";
import { Contact, Footer } from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-background text-foreground">
      <ScrollIndicator />
      <CursorGlow />
      <Navbar />
      <Hero />
      <Projects />
      <AIVisualization />
      <Gallery />
      <Process />
      <Stats />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
