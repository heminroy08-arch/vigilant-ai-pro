import { createFileRoute } from "@tanstack/react-router";
import { FileText, Film, Landmark, Smartphone } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { PageShell, Reveal } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/case-study")({
  head: () => ({
    meta: [
      { title: "Case Study: Cyber Fraud | AI Crime Intelligence" },
      {
        name: "description",
        content:
          "A cyber fraud case resolved 60% faster: evidence list, timeline, knowledge graph links, and outcome metrics.",
      },
      { property: "og:title", content: "Real-World Application: Cyber Fraud" },
      {
        property: "og:description",
        content: "How AI surfaced three similar solved cases and the exact investigative path.",
      },
    ],
  }),
  component: CaseStudy,
});

const EVIDENCE = [
  { Icon: FileText, name: "FIR-2026-00841.pdf", meta: "41 pages · hashed at ingest" },
  { Icon: Smartphone, name: "victim_chat_export.json", meta: "1,204 messages · 3 numbers" },
  { Icon: Landmark, name: "bank_statement_q1.csv", meta: "7 transfers · 4 beneficiaries" },
  { Icon: Film, name: "atm_cam_04.mp4", meta: "00:06:12 · 2 candidate tracks" },
];

const STEPS = [
  {
    n: "Step 1",
    t: "New cyber fraud case uploaded",
    d: "A ₹18.4 lakh investment-app fraud is filed. The case file, chat exports, and bank statements are ingested and hashed within four minutes.",
  },
  {
    n: "Step 2",
    t: "AI finds 3 similar past cases solved with digital forensics",
    d: "Semantic search returns CASE-2019-00233, CASE-2021-01190, and CASE-2023-00457 — all sharing a mule-account structure and the same payment gateway corridor.",
  },
  {
    n: "Step 3",
    t: "AI suggests the exact investigative path",
    d: "Freeze two wallet accounts within 24 hours, request gateway logs before the rotation window, and pull CDRs for three numbers. Result: 60% faster resolution.",
  },
];

const GRAPH_LINKS = [
  "Victim → transfer → Wallet A (frozen, day 1)",
  "Wallet A → shared KYC address → Wallet B",
  "Wallet B → recharge outlet → SIM used in CASE-2021-01190",
  "SIM → IMEI → suspect identified in Ernakulam",
];

function CaseStudy() {
  return (
    <PageShell>
      <SectionHeading
        as="h1"
        eyebrow="Case study"
        title="Real-World Application: Cyber Fraud"
        intro="An anonymised reconstruction of a pilot case, shown exactly as an investigating officer sees it."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <GlassCard className="h-full">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">
              Case file · CASE-2026-00841
            </p>
            <h2 className="mt-3 text-lg font-semibold text-foreground">Evidence list</h2>
            <ul className="mt-4 space-y-3">
              {EVIDENCE.map(({ Icon, name, meta }) => (
                <li
                  key={name}
                  className="flex items-start gap-3 rounded-lg border border-border/70 bg-background/40 p-3"
                >
                  <Icon className="mt-0.5 size-4 text-accent" aria-hidden="true" />
                  <span>
                    <span className="block font-mono text-xs text-foreground">{name}</span>
                    <span className="block text-xs text-muted-foreground">{meta}</span>
                  </span>
                </li>
              ))}
            </ul>
            <h3 className="mt-6 text-sm font-semibold text-foreground">Knowledge graph snippet</h3>
            <ul className="mt-3 space-y-2 font-mono text-[11px] text-muted-foreground">
              {GRAPH_LINKS.map((g) => (
                <li key={g} className="rounded-md border border-primary/20 bg-primary/5 px-3 py-2">
                  {g}
                </li>
              ))}
            </ul>
          </GlassCard>
        </Reveal>

        <div className="space-y-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.07}>
              <GlassCard>
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary">{s.n}</p>
                <h2 className="mt-2 text-lg font-semibold text-foreground">{s.t}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal className="mt-14">
        <GlassCard className="p-8">
          <h2 className="text-xl font-semibold text-foreground">Outcome metrics</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-4">
            {[
              { v: "60%", k: "Faster resolution", n: "22 days vs. 55-day baseline." },
              { v: "31 hrs", k: "Officer time saved", n: "Manual correlation avoided." },
              { v: "0.81", k: "Match confidence", n: "Top similar case score." },
              { v: "₹11.2 L", k: "Funds recovered", n: "Following early wallet freeze." },
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
