import { createFileRoute, Link } from "@tanstack/react-router";
import { GlassCard } from "@/components/GlassCard";
import { PageShell, Reveal } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { API_ENDPOINTS } from "@/data/site";

export const Route = createFileRoute("/docs")({
  head: () => ({
    meta: [
      { title: "Documentation | AI Crime Intelligence" },
      {
        name: "description",
        content:
          "API reference with sample requests and authentication flow, officer onboarding guides, admin setup, and the data retention policy.",
      },
      { property: "og:title", content: "Documentation" },
      {
        property: "og:description",
        content: "OpenAPI reference, authentication flows, onboarding guides, and retention policy.",
      },
    ],
  }),
  component: Docs,
});

const CURL = `curl -X POST https://api.crimeintel.internal/api/cases \\
  --cert /etc/pki/station.pem --key /etc/pki/station.key \\
  -H "Authorization: Bearer $ACCESS_TOKEN" \\
  -H "X-Audit-Actor: SI-4412" \\
  -H "Content-Type: application/json" \\
  -d '{ "title": "Investment app fraud", "district": "Ernakulam", "category": "cyber-fraud" }'`;

const GUIDES = [
  {
    t: "Officer training",
    d: "Platform basics, evidence handling, and how to read confidence scores and reasoning traces. Includes the mandatory verification checklist before any action is taken on an AI match.",
  },
  {
    t: "Admin setup",
    d: "Identity provider configuration, role definitions, jurisdiction scoping, camera registration, and audit export scheduling.",
  },
  {
    t: "Data retention policy",
    d: "Default retention: 180 days for processed footage, case lifetime plus statutory period for evidence, 7 years for audit logs. All values are configurable per district within statutory limits.",
  },
];

function Docs() {
  return (
    <PageShell>
      <SectionHeading
        as="h1"
        eyebrow="Documentation"
        title="API reference &amp; onboarding"
        intro="Everything an integrator or administrator needs before a pilot begins."
      />

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-foreground">Authentication flow</h2>
        <GlassCard className="mt-4">
          <ol className="space-y-2 text-sm text-muted-foreground">
            <li>1. Station client presents a certificate; the gateway enforces mutual TLS.</li>
            <li>2. Officer authenticates through departmental SSO (SAML 2.0 / OAuth2) with TOTP 2FA.</li>
            <li>3. Gateway issues a short-TTL JWT (15 minutes) carrying role and jurisdiction scopes.</li>
            <li>4. Every request carries an audit actor header; the response records the access.</li>
          </ol>
        </GlassCard>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-foreground">Sample request</h2>
        <pre className="mt-4 overflow-x-auto rounded-xl border border-border/70 bg-background/60 p-5 font-mono text-xs leading-relaxed text-muted-foreground">
          {CURL}
        </pre>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold text-foreground">Endpoints</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">API endpoints and sample responses</caption>
            <thead>
              <tr className="border-b border-border/70 font-mono text-[11px] uppercase tracking-widest text-primary">
                <th scope="col" className="py-3 pr-4">Method</th>
                <th scope="col" className="py-3 pr-4">Path</th>
                <th scope="col" className="py-3">Description</th>
              </tr>
            </thead>
            <tbody>
              {API_ENDPOINTS.map((e) => (
                <tr key={e.path} className="border-b border-border/50">
                  <td className="py-3 pr-4 font-mono text-xs text-accent">{e.method}</td>
                  <td className="py-3 pr-4 font-mono text-xs text-foreground">{e.path}</td>
                  <td className="py-3 text-muted-foreground">{e.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 font-mono text-[11px] text-muted-foreground">
          The full OpenAPI 3.1 specification is issued to integrators under the deployment agreement.
        </p>
      </section>

      <section className="mt-12 grid gap-5 md:grid-cols-3">
        {GUIDES.map((g, i) => (
          <Reveal key={g.t} delay={i * 0.06}>
            <GlassCard className="h-full">
              <h2 className="text-base font-semibold text-foreground">{g.t}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{g.d}</p>
            </GlassCard>
          </Reveal>
        ))}
      </section>

      <Reveal className="mt-12">
        <GlassCard className="flex flex-wrap items-center justify-between gap-4 p-6">
          <p className="text-sm text-muted-foreground">
            Handling rules for evidence and personal data are set out in the privacy policy.
          </p>
          <div className="flex gap-3">
            <Link
              to="/legal/privacy"
              className="rounded-lg border border-border px-4 py-2 text-sm text-foreground"
            >
              Privacy &amp; Data Handling
            </Link>
            <Link
              to="/legal/terms"
              className="rounded-lg border border-border px-4 py-2 text-sm text-foreground"
            >
              Terms of Use
            </Link>
          </div>
        </GlassCard>
      </Reveal>
    </PageShell>
  );
}
