import { createFileRoute } from "@tanstack/react-router";
import { GlassCard } from "@/components/GlassCard";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/legal/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy & Data Handling | AI Crime Intelligence" },
      {
        name: "description",
        content:
          "Data minimisation, residency, encryption, access control, retention, secure deletion, and audit rights for the AI Crime Intelligence platform.",
      },
      { property: "og:title", content: "Privacy & Data Handling" },
      {
        property: "og:description",
        content: "How evidence and personal data are stored, accessed, retained, and deleted.",
      },
    ],
  }),
  component: Privacy,
});

const SECTIONS = [
  {
    t: "Data minimisation",
    d: "Only data required for an active investigation is ingested. Edge inference keeps raw footage on site wherever possible, transmitting derived clips and embeddings rather than whole streams.",
  },
  {
    t: "Data residency",
    d: "All evidence and personal data are hosted within the State Data Centre or an approved government cloud region. No data leaves the jurisdiction.",
  },
  {
    t: "Encryption",
    d: "TLS 1.3 with mutual authentication in transit, AES-256 at rest, with keys held in a government-controlled key management service.",
  },
  {
    t: "Access control",
    d: "Role-based access with least privilege, scoped by jurisdiction and case assignment, enforced through departmental single sign-on and two-factor authentication.",
  },
  {
    t: "Audit and chain of custody",
    d: "Every read, write, export, and model query is written to a tamper-evident log. Custody reports are exportable for court submission.",
  },
  {
    t: "Retention and deletion",
    d: "Retention periods are configurable per district within statutory limits. Secure deletion workflows overwrite and certify removal, with the deletion event itself retained in the audit log.",
  },
  {
    t: "Explainability and correction",
    d: "Every AI match records its confidence, key features, and source case identifiers. Officers can flag incorrect matches, which are reviewed and fed into model evaluation.",
  },
  {
    t: "Independent review",
    d: "Fairness audits, penetration tests, and compliance reviews are conducted periodically in coordination with CERT-In and academic reviewers.",
  },
];

function Privacy() {
  return (
    <PageShell className="max-w-3xl">
      <SectionHeading
        as="h1"
        eyebrow="Legal"
        title="Privacy &amp; Data Handling"
        intro="This policy governs how the platform handles evidence, personal data, and audit records."
      />
      <div className="mt-10 space-y-4">
        {SECTIONS.map((s) => (
          <GlassCard key={s.t}>
            <h2 className="text-base font-semibold text-foreground">{s.t}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
          </GlassCard>
        ))}
      </div>
      <p className="mt-8 font-mono text-[11px] text-muted-foreground">
        Policy version 1.0 · Reviewed annually or on any material change to processing.
      </p>
    </PageShell>
  );
}
