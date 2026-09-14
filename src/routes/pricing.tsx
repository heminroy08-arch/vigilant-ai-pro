import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { PageShell, Reveal } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Licensing & Contracts | AI Crime Intelligence" },
      {
        name: "description",
        content:
          "Modular licensing per feature plus maintenance subscription: Pilot, Standard, and Enterprise tiers with government procurement terms.",
      },
      { property: "og:title", content: "Licensing & Contracts" },
      {
        property: "og:description",
        content: "Pilot, Standard, and Enterprise licensing with SLA-based maintenance.",
      },
    ],
  }),
  component: Pricing,
});

const TIERS = [
  {
    name: "Pilot",
    price: "Fixed fee",
    term: "6-month pilot",
    highlight: false,
    features: [
      "Limited module set, one district",
      "Anonymised evaluation dataset",
      "Officer training for one cohort",
      "Weekly evaluation reporting",
    ],
  },
  {
    name: "Standard",
    price: "Per-module annual",
    term: "Annual licence",
    highlight: true,
    features: [
      "CCTV suspect detection",
      "Case similarity search",
      "Role-based dashboard & alerts",
      "Business-hours support with SLA",
    ],
  },
  {
    name: "Enterprise",
    price: "Negotiated",
    term: "Multi-year contract",
    highlight: false,
    features: [
      "Full stack including knowledge graph",
      "LangChain agent orchestration",
      "On-premise or state cloud hosting",
      "24×7 priority support and audit exports",
    ],
  },
];

const ADDONS = [
  { t: "Training", d: "Additional officer cohorts, trainer-of-trainers, and refresher certification." },
  { t: "On-premise hosting", d: "Deployment inside the State Data Centre with local key management." },
  { t: "Edge devices", d: "Certified inference appliances for camera sites, supplied and maintained." },
  { t: "Custom integrations", d: "CCTNS, ANPR, forensic labs, and departmental record systems." },
];

function Pricing() {
  return (
    <PageShell>
      <SectionHeading
        as="h1"
        eyebrow="Commercials"
        title="Licensing &amp; Contracts"
        intro="Modular licensing per feature plus a maintenance subscription. Departments pay only for the modules they deploy."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {TIERS.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.07}>
            <GlassCard
              className={`flex h-full flex-col ${t.highlight ? "border-primary/60 shadow-glow" : ""}`}
            >
              {t.highlight ? (
                <span className="mb-3 inline-flex w-fit rounded-full bg-primary/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                  Most deployed
                </span>
              ) : null}
              <h2 className="text-xl font-semibold text-foreground">{t.name}</h2>
              <p className="mt-1 font-display text-2xl text-primary">{t.price}</p>
              <p className="font-mono text-xs text-muted-foreground">{t.term}</p>
              <ul className="mt-5 flex-1 space-y-2.5">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/demo"
                className={`mt-6 rounded-lg px-4 py-2.5 text-center text-sm font-medium ${
                  t.highlight
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-foreground"
                }`}
              >
                Discuss this tier
              </Link>
            </GlassCard>
          </Reveal>
        ))}
      </div>

      <section className="mt-16 grid gap-5 md:grid-cols-2">
        <Reveal>
          <GlassCard className="h-full">
            <h2 className="text-xl font-semibold text-foreground">Add-ons</h2>
            <ul className="mt-4 space-y-3">
              {ADDONS.map((a) => (
                <li key={a.t} className="rounded-lg border border-border/70 bg-background/40 p-4">
                  <p className="text-sm font-medium text-foreground">{a.t}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{a.d}</p>
                </li>
              ))}
            </ul>
          </GlassCard>
        </Reveal>
        <Reveal delay={0.08}>
          <GlassCard className="h-full">
            <h2 className="text-xl font-semibold text-foreground">Payment &amp; procurement</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>Government procurement contracts under standard state tender terms.</li>
              <li>Annual licensing with milestone-linked payment schedules.</li>
              <li>SLA-based maintenance: P1 30-minute response, 99.9% platform availability.</li>
              <li>Exit terms include full data export and certified deletion.</li>
            </ul>
            <p className="mt-5 rounded-lg border border-accent/30 bg-accent/10 p-4 text-sm text-accent">
              Indicative figures only. Final pricing is issued against a departmental requirement
              note and procurement process.
            </p>
          </GlassCard>
        </Reveal>
      </section>
    </PageShell>
  );
}
