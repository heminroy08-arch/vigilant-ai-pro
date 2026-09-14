import { createFileRoute } from "@tanstack/react-router";
import { GlassCard } from "@/components/GlassCard";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/legal/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use | AI Crime Intelligence" },
      {
        name: "description",
        content:
          "Authorised use, officer responsibilities, liability, service levels, export controls, and termination terms for the platform.",
      },
      { property: "og:title", content: "Terms of Use" },
      {
        property: "og:description",
        content: "Conditions of authorised government use, liability, and export controls.",
      },
    ],
  }),
  component: Terms,
});

const SECTIONS = [
  {
    t: "Authorised use",
    d: "Access is restricted to authorised law-enforcement personnel acting within their jurisdiction and assigned cases. Credentials must not be shared and sessions must not be left unattended.",
  },
  {
    t: "Human decision-making",
    d: "Outputs are investigative aids, not determinations. No arrest, search, or enforcement action may rest on an AI match alone; independent verification is mandatory and recorded.",
  },
  {
    t: "Liability",
    d: "The platform is provided under the terms of the executed procurement contract. Liability is limited as set out there; nothing limits liability that cannot be limited by law.",
  },
  {
    t: "Service levels",
    d: "Availability, response, and resolution commitments follow the maintenance schedule attached to the licence tier in force.",
  },
  {
    t: "Export controls",
    d: "Models, evidence data, and audit records may not be exported outside the approved jurisdiction or shared with third parties without written departmental authorisation.",
  },
  {
    t: "Suspension and termination",
    d: "Access may be suspended on suspected misuse pending investigation. On termination, the department receives a full data export and certified deletion of hosted copies.",
  },
];

function Terms() {
  return (
    <PageShell className="max-w-3xl">
      <SectionHeading
        as="h1"
        eyebrow="Legal"
        title="Terms of Use"
        intro="These terms apply to every user of the AI Crime Intelligence platform."
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
        Terms version 1.0 · Superseded by the executed procurement contract where they conflict.
      </p>
    </PageShell>
  );
}
