import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { GlassCard } from "@/components/GlassCard";
import { PageShell, Reveal } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { WORKFLOW_STEPS } from "@/data/site";

export const Route = createFileRoute("/workflow")({
  head: () => ({
    meta: [
      { title: "How It Works | Investigation Workflow" },
      {
        name: "description",
        content:
          "Upload, extract, scan, search, link, recommend — a six-step investigative workflow with sample logs and time-saved metrics.",
      },
      { property: "og:title", content: "How It Works" },
      {
        property: "og:description",
        content: "From case upload to recommended investigative strategy in minutes, not weeks.",
      },
    ],
  }),
  component: Workflow,
});

function Workflow() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <PageShell>
      <SectionHeading
        as="h1"
        eyebrow="Workflow"
        title="How It Works"
        intro="Select any step to see what happens under the hood, including the log entries an officer can audit afterwards."
      />

      <ol className="mt-10 space-y-3">
        {WORKFLOW_STEPS.map((s, i) => {
          const expanded = open === i;
          return (
            <Reveal key={s.title} delay={i * 0.05}>
              <li className="relative pl-10">
                <span
                  aria-hidden="true"
                  className="absolute left-[14px] top-8 h-[calc(100%-1rem)] w-px bg-border last:hidden"
                />
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-5 flex size-7 items-center justify-center rounded-full border font-mono text-[11px] ${
                    expanded
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-surface text-muted-foreground"
                  }`}
                >
                  {i + 1}
                </span>
                <GlassCard className="p-0">
                  <button
                    type="button"
                    aria-expanded={expanded}
                    onClick={() => setOpen(expanded ? null : i)}
                    className="w-full p-5 text-left"
                  >
                    <span className="block text-base font-semibold text-foreground">{s.title}</span>
                    <span className="mt-1 block text-sm text-muted-foreground">{s.text}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {expanded ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="m-5 mt-0 rounded-lg bg-background/60 p-4 font-mono text-xs text-primary">
                          {s.log}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </GlassCard>
              </li>
            </Reveal>
          );
        })}
      </ol>

      <Reveal className="mt-14">
        <GlassCard className="p-8">
          <h2 className="text-xl font-semibold text-foreground">Metrics panel</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-4">
            {[
              { k: "Time saved per case", v: "18–34 hrs", n: "Median across pilot cases." },
              { k: "Confidence threshold", v: "≥ 0.75", n: "Below this, results are advisory only." },
              { k: "Officer review", v: "100%", n: "Every match is human-verified." },
              { k: "Sample ROI", v: "4.1×", n: "Year-one, district-level estimate." },
            ].map((m) => (
              <div key={m.k} className="rounded-xl border border-border/70 bg-background/40 p-5">
                <p className="font-display text-2xl text-primary">{m.v}</p>
                <p className="mt-1 text-sm font-medium text-foreground">{m.k}</p>
                <p className="mt-1 text-xs text-muted-foreground">{m.n}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </Reveal>
    </PageShell>
  );
}
