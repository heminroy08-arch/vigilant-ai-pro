import { createFileRoute } from "@tanstack/react-router";
import { GlassCard } from "@/components/GlassCard";
import { PageShell, Reveal } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { ROADMAP } from "@/data/site";

export const Route = createFileRoute("/roadmap")({
  head: () => ({
    meta: [
      { title: "Future Scope & Scaling | AI Crime Intelligence" },
      {
        name: "description",
        content:
          "IoT smart camera integration, predictive crime analytics, national police network expansion, and court-ready AI-assisted evidence packages.",
      },
      { property: "og:title", content: "Future Scope & Scaling" },
      {
        property: "og:description",
        content: "Milestones, budgets, partners, and pilot plans through 2029.",
      },
    ],
  }),
  component: Roadmap,
});

function Roadmap() {
  return (
    <PageShell>
      <SectionHeading
        as="h1"
        eyebrow="Roadmap"
        title="Future Scope"
        intro="Each milestone is gated on the previous one: nothing scales until the pilot before it passes security, fairness, and operational review."
      />

      <ol className="mt-10 space-y-4">
        {ROADMAP.map((m, i) => (
          <Reveal key={m.title} delay={i * 0.06}>
            <li>
              <GlassCard className="grid gap-5 md:grid-cols-[160px_1fr]">
                <div>
                  <p className="font-mono text-sm text-primary">{m.period}</p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    Milestone {i + 1}
                  </p>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-foreground">{m.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.detail}</p>
                  <dl className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-lg border border-border/70 bg-background/40 p-3">
                      <dt className="font-mono text-[11px] uppercase tracking-widest text-accent">
                        Budget
                      </dt>
                      <dd className="mt-1 text-sm text-foreground">{m.budget}</dd>
                    </div>
                    <div className="rounded-lg border border-border/70 bg-background/40 p-3">
                      <dt className="font-mono text-[11px] uppercase tracking-widest text-accent">
                        Partners
                      </dt>
                      <dd className="mt-1 text-sm text-foreground">{m.partners}</dd>
                    </div>
                  </dl>
                  <p className="mt-3 font-mono text-[11px] text-muted-foreground">
                    Dependency: completion and sign-off of milestone {i === 0 ? "0 (current pilot)" : i}.
                  </p>
                </div>
              </GlassCard>
            </li>
          </Reveal>
        ))}
      </ol>
    </PageShell>
  );
}
