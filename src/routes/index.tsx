import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Cctv, Search, Share2, Sparkles } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { Reveal } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI-Powered Crime Intelligence System | Kerala Police" },
      {
        name: "description",
        content:
          "Transforming policing with smart AI: real-time CCTV suspect detection, case similarity search, knowledge graph linking, and explainable recommendations.",
      },
      { property: "og:title", content: "AI-Powered Crime Intelligence System" },
      {
        property: "og:description",
        content:
          "A secure, explainable AI platform that accelerates investigations for the Kerala Police.",
      },
    ],
  }),
  component: Home,
});

const FEATURES = [
  {
    Icon: Cctv,
    title: "Real-time CCTV suspect detection",
    text: "Detect and track persons of interest.",
  },
  {
    Icon: Search,
    title: "Case similarity search",
    text: "Find past cases with matching patterns.",
  },
  {
    Icon: Share2,
    title: "Knowledge graph linking",
    text: "Visualize relationships across evidence and suspects.",
  },
  {
    Icon: Sparkles,
    title: "Explainable recommendations",
    text: "Confidence scores and reasoning for every suggestion.",
  },
];

function HeroVisual() {
  const reduce = useReducedMotion();
  const nodes = [
    { x: 18, y: 30 },
    { x: 44, y: 18 },
    { x: 72, y: 34 },
    { x: 30, y: 66 },
    { x: 60, y: 72 },
    { x: 86, y: 58 },
  ];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden grid-surface"
    >
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background to-transparent" />
      <svg className="absolute inset-0 size-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {nodes.map((n, i) =>
          nodes.slice(i + 1).map((m, j) => (
            <line
              key={`${i}-${j}`}
              x1={n.x}
              y1={n.y}
              x2={m.x}
              y2={m.y}
              stroke="currentColor"
              className="text-primary/15"
              strokeWidth={0.15}
            />
          )),
        )}
        {nodes.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={0.9}
            className="fill-primary"
            initial={{ opacity: 0.25 }}
            animate={reduce ? { opacity: 0.7 } : { opacity: [0.25, 1, 0.25] }}
            transition={{ duration: 3.2, repeat: Infinity, delay: i * 0.45 }}
          />
        ))}
      </svg>
    </div>
  );
}

function Home() {
  return (
    <main id="main">
      <section className="relative overflow-hidden border-b border-border/60 scanlines">
        <HeroVisual />
        <div className="relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.24em] text-primary">
              Kerala Police · Restricted Deployment
            </p>
            <h1 className="text-4xl font-semibold leading-[1.05] text-foreground text-glow sm:text-6xl">
              AI-Powered Crime Intelligence System
            </h1>
            <p className="mt-5 text-lg text-primary sm:text-xl">
              Transforming Policing with Smart AI for the Kerala Police.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              A secure, explainable AI platform that accelerates investigations, connects scattered
              case knowledge, and helps Kerala Police solve crimes faster while preserving chain of
              custody and privacy.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/system"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
              >
                Explore the System <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                to="/architecture"
                className="inline-flex items-center gap-2 rounded-lg border border-accent/40 bg-accent/10 px-5 py-3 text-sm font-medium text-accent transition-transform hover:-translate-y-0.5"
              >
                View Architecture
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="Capabilities"
          title="An AI co-investigator built for real casework"
          intro="Four capabilities work together across every case: see, recall, connect, and explain."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.07}>
              <GlassCard className="h-full">
                <Icon className="size-6 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-base font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{text}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <GlassCard className="flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-semibold text-foreground">
                See it on an anonymised dataset
              </h2>
              <p className="mt-2 max-w-xl text-sm text-muted-foreground">
                Request a guided walkthrough for your department, or review the documentation and
                API reference before you commit to a pilot.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/demo"
                className="rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
              >
                Request Demo
              </Link>
              <Link
                to="/docs"
                className="rounded-lg border border-border px-5 py-3 text-sm font-medium text-foreground"
              >
                Documentation
              </Link>
            </div>
          </GlassCard>
        </Reveal>
      </section>
    </main>
  );
}
