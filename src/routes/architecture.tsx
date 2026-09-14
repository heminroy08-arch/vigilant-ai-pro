import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { GlassCard } from "@/components/GlassCard";
import { PageShell, Reveal } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { API_ENDPOINTS, ARCHITECTURE_NODES } from "@/data/site";

export const Route = createFileRoute("/architecture")({
  head: () => ({
    meta: [
      { title: "System Architecture | AI Crime Intelligence" },
      {
        name: "description",
        content:
          "Edge CCTV inference, CV pipeline, metadata extraction, vector search, Neo4j knowledge graph, agent orchestration, dashboards, and immutable audit storage.",
      },
      { property: "og:title", content: "System Architecture" },
      {
        property: "og:description",
        content: "A secure, modular stack designed for government compliance and scale.",
      },
    ],
  }),
  component: Architecture,
});

function Architecture() {
  const [active, setActive] = useState<string>(ARCHITECTURE_NODES[0].id);
  const node = ARCHITECTURE_NODES.find((n) => n.id === active)!;

  return (
    <PageShell>
      <SectionHeading
        as="h1"
        eyebrow="Blueprint"
        title="System Architecture"
        intro="A secure, modular stack designed for government compliance and scale. Select any layer to inspect what it does and how it is deployed."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <GlassCard className="grid-surface p-6">
          <ul className="space-y-2" aria-label="Architecture layers">
            {ARCHITECTURE_NODES.map((n, i) => {
              const selected = n.id === active;
              return (
                <li key={n.id}>
                  <button
                    type="button"
                    onClick={() => setActive(n.id)}
                    aria-pressed={selected}
                    className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition-colors ${
                      selected
                        ? "border-primary/60 bg-primary/10 text-foreground shadow-glow"
                        : "border-border/60 bg-background/30 text-muted-foreground hover:border-primary/40"
                    }`}
                  >
                    <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
                    <span className="flex-1">
                      <span className="block text-sm font-medium">{n.title}</span>
                      <span className="block font-mono text-[11px] text-muted-foreground">
                        {n.stack}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className={`size-2 rounded-full ${selected ? "bg-primary" : "bg-border"}`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </GlassCard>

        <motion.div key={node.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          <GlassCard className="h-full p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
              Layer detail
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-foreground">{node.title}</h2>
            <p className="mt-1 font-mono text-xs text-primary">{node.stack}</p>
            <p className="mt-5 leading-relaxed text-muted-foreground">{node.detail}</p>
            <div className="mt-6 rounded-xl border border-border/70 bg-background/40 p-4 font-mono text-xs text-muted-foreground">
              Data in transit: TLS 1.3 + mutual TLS · Data at rest: AES-256 · Access: RBAC via
              government SSO · Every read and write appended to the tamper-evident audit log.
            </div>
          </GlassCard>
        </motion.div>
      </div>

      <section className="mt-16">
        <SectionHeading
          eyebrow="Interfaces"
          title="APIs &amp; Contracts"
          intro="All endpoints require short-TTL JWTs over mutual TLS, carry RBAC scopes, and emit audit headers."
        />
        <div className="mt-8 space-y-3">
          {API_ENDPOINTS.map((e, i) => (
            <Reveal key={e.path} delay={i * 0.04}>
              <details className="group glass rounded-xl p-5">
                <summary className="flex cursor-pointer list-none flex-wrap items-center gap-3">
                  <span className="rounded-md bg-primary/15 px-2 py-1 font-mono text-[11px] font-medium text-primary">
                    {e.method}
                  </span>
                  <code className="font-mono text-sm text-foreground">{e.path}</code>
                  <span className="ml-auto text-xs text-muted-foreground">{e.desc}</span>
                </summary>
                <pre className="mt-4 overflow-x-auto rounded-lg bg-background/60 p-4 font-mono text-xs text-muted-foreground">
                  {e.res}
                </pre>
              </details>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
