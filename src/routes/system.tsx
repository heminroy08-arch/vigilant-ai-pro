import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { GlassCard } from "@/components/GlassCard";
import { PageShell, Reveal } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { SYSTEM_FEATURES } from "@/data/site";

export const Route = createFileRoute("/system")({
  head: () => ({
    meta: [
      { title: "AI as a Digital Co-Investigator | System" },
      {
        name: "description",
        content:
          "Suspect detection from CCTV, case similarity search, strategy recommendations, and a connected police intelligence network — each with explainability.",
      },
      { property: "og:title", content: "AI as a Digital Co-Investigator" },
      {
        property: "og:description",
        content:
          "Automated detection, knowledge reuse, and recommended investigative strategies with confidence scores.",
      },
    ],
  }),
  component: System,
});

function FeatureCard({ feature, index }: { feature: (typeof SYSTEM_FEATURES)[number]; index: number }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <GlassCard className="p-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-start gap-4 p-6 text-left"
      >
        <span className="mt-0.5 font-mono text-xs text-primary">0{index + 1}</span>
        <span className="flex-1">
          <span className="block text-base font-semibold text-foreground">{feature.title}</span>
          <span className="mt-2 block text-sm text-muted-foreground">{feature.summary}</span>
        </span>
        <ChevronDown
          className={`size-5 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="space-y-4 border-t border-border/60 p-6">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
                  Sample output
                </p>
                <p className="mt-2 rounded-lg bg-background/60 p-4 font-mono text-xs leading-relaxed text-muted-foreground">
                  {feature.example}
                </p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                  Why the model matched
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{feature.explain}</p>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </GlassCard>
  );
}

function System() {
  return (
    <PageShell>
      <SectionHeading
        as="h1"
        eyebrow="The system"
        title="AI as a Digital Co-Investigator"
        intro="Our system augments investigators with automated detection, knowledge reuse, and recommended investigative strategies. Every output is traceable to the evidence that produced it."
      />

      <div className="mt-10 space-y-4">
        {SYSTEM_FEATURES.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.05}>
            <FeatureCard feature={f} index={i} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14">
        <GlassCard className="p-8">
          <h2 className="text-xl font-semibold text-foreground">Explainability panel</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            No recommendation is presented as a verdict. Each result carries a confidence score, the
            key evidence behind it, and the source records an officer can open and verify.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Confidence", value: "0.88", note: "Calibrated on held-out district data." },
              { label: "Key evidence", value: "3 clips · 2 cameras", note: "Hashes recorded at ingest." },
              { label: "Source cases", value: "CASE-2019-00233", note: "Openable with full custody log." },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-border/70 bg-background/40 p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
                  {s.label}
                </p>
                <p className="mt-2 font-display text-lg text-foreground">{s.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 rounded-lg border border-accent/30 bg-accent/10 p-4 text-sm text-accent">
            Human verification is mandatory before any enforcement action. The platform advises; the
            investigating officer decides.
          </p>
        </GlassCard>
      </Reveal>
    </PageShell>
  );
}
