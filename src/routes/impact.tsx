import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { GlassCard } from "@/components/GlassCard";
import { PageShell, Reveal } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Impact on Policing & Society | AI Crime Intelligence" },
      {
        name: "description",
        content:
          "Faster suspect identification, cross-district repeat-offender detection, hotspot insight, and measurable value for government, public, and society.",
      },
      { property: "og:title", content: "Impact on Policing & Society" },
      {
        property: "og:description",
        content: "Operational impact and stakeholder value, with KPI dashboards.",
      },
    ],
  }),
  component: Impact,
});

const RESOLUTION = [
  { month: "Jan", before: 42, after: 38 },
  { month: "Feb", before: 44, after: 33 },
  { month: "Mar", before: 41, after: 27 },
  { month: "Apr", before: 45, after: 24 },
  { month: "May", before: 43, after: 19 },
  { month: "Jun", before: 46, after: 17 },
];

const MATCHES = [
  { district: "Ernakulam", matched: 128 },
  { district: "Thrissur", matched: 96 },
  { district: "Kozhikode", matched: 84 },
  { district: "Thiruvananthapuram", matched: 112 },
];

const OPERATIONAL = [
  {
    t: "Faster suspect identification",
    d: "Descriptions become searchable across every connected camera, cutting manual footage review from days to minutes.",
  },
  {
    t: "Detect repeat offenders across districts",
    d: "Shared identifiers link cases that previously sat in separate station registers.",
  },
  {
    t: "Spot crime hotspots",
    d: "Temporal and spatial clustering highlights where patrol resources change outcomes most.",
  },
  {
    t: "Reduce manual officer workload",
    d: "Routine correlation and paperwork retrieval are automated, returning officer hours to fieldwork.",
  },
];

const STAKEHOLDER = [
  {
    t: "Government",
    d: "Efficient resource allocation and smarter policing, with auditable evidence for every deployment decision.",
  },
  {
    t: "Public",
    d: "Safer streets, faster justice, and improved trust through transparent, explainable processes.",
  },
  {
    t: "Society",
    d: "Reduced crime rates and proactive prevention, backed by independent fairness review.",
  },
];

function Impact() {
  const [tab, setTab] = useState<"ops" | "stake">("ops");
  const items = tab === "ops" ? OPERATIONAL : STAKEHOLDER;

  return (
    <PageShell>
      <SectionHeading
        as="h1"
        eyebrow="Impact"
        title="Impact on Policing &amp; Society"
        intro="Measured against pilot baselines, with every claim traceable to case records."
      />

      <div className="mt-8 inline-flex rounded-xl border border-border/70 bg-surface/50 p-1" role="tablist">
        {[
          { id: "ops", label: "Operational Impact" },
          { id: "stake", label: "Stakeholder Value" },
        ].map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={tab === t.id}
            type="button"
            onClick={() => setTab(t.id as "ops" | "stake")}
            className={`rounded-lg px-4 py-2 text-sm transition-colors ${
              tab === t.id
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {items.map((i, idx) => (
          <Reveal key={i.t} delay={idx * 0.05}>
            <GlassCard className="h-full">
              <h2 className="text-base font-semibold text-foreground">{i.t}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{i.d}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>

      <section className="mt-16">
        <SectionHeading eyebrow="Dashboards" title="KPIs at a glance" />
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <GlassCard>
            <h3 className="text-sm font-semibold text-foreground">
              Median resolution time (days) — before vs. with the platform
            </h3>
            <div className="mt-4 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={RESOLUTION}>
                  <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" />
                  <XAxis dataKey="month" stroke="var(--muted-foreground)" fontSize={12} />
                  <YAxis stroke="var(--muted-foreground)" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      background: "var(--popover)",
                      border: "1px solid var(--border)",
                      borderRadius: 10,
                      color: "var(--foreground)",
                    }}
                  />
                  <Line type="monotone" dataKey="before" stroke="var(--chart-5)" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="after" stroke="var(--chart-1)" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </GlassCard>

          <GlassCard>
            <h3 className="text-sm font-semibold text-foreground">
              Cases matched to prior records (pilot districts)
            </h3>
            <div className="mt-4 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={MATCHES}>
                  <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" />
                  <XAxis dataKey="district" stroke="var(--muted-foreground)" fontSize={11} />
                  <YAxis stroke="var(--muted-foreground)" fontSize={12} />
                  <Tooltip
                    cursor={{ fill: "var(--muted)" }}
                    contentStyle={{
                      background: "var(--popover)",
                      border: "1px solid var(--border)",
                      borderRadius: 10,
                      color: "var(--foreground)",
                    }}
                  />
                  <Bar dataKey="matched" fill="var(--chart-2)" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </GlassCard>
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-3">
          {[
            { k: "False positive rate", v: "3.4%", n: "Reviewed monthly against officer feedback." },
            { k: "Cases matched", v: "420", n: "Across four pilot districts, 6 months." },
            { k: "Officer hours returned", v: "9,800", n: "Estimated from manual review avoided." },
          ].map((s) => (
            <GlassCard key={s.k}>
              <p className="font-display text-3xl text-accent">{s.v}</p>
              <p className="mt-1 text-sm font-medium text-foreground">{s.k}</p>
              <p className="mt-1 text-xs text-muted-foreground">{s.n}</p>
            </GlassCard>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
