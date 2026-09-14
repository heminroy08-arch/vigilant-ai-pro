import { createFileRoute } from "@tanstack/react-router";
import { Award, Download, GraduationCap, Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { PageShell, Reveal } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { PROFILE } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the Project & Team | AI Crime Intelligence" },
      {
        name: "description",
        content:
          "Meet HEMIN, Project Lead of the AI Crime Intelligence initiative, the team, partners, and the officer onboarding programme.",
      },
      { property: "og:title", content: "About the Project & Team" },
      {
        property: "og:description",
        content:
          "An AI co-investigator for Kerala Police — led by HEMIN, Kodungallur, KL, India, with NIC and academic partners.",
      },
    ],
  }),
  component: About,
});

const TEAM = [
  {
    name: "Dr. A. Nair",
    role: "Chief Data Scientist",
    bio: "Leads the computer-vision and re-identification models, with 11 years in applied vision research.",
  },
  {
    name: "S. Varghese",
    role: "Security Architect",
    bio: "Owns encryption, RBAC, and chain-of-custody design; former state data-centre security lead.",
  },
  {
    name: "R. Menon",
    role: "Police Liaison Officer",
    bio: "Translates station-level investigative practice into product requirements and training material.",
  },
  {
    name: "K. Thomas",
    role: "Platform Engineer",
    bio: "Builds the ingestion pipeline, edge deployment tooling, and observability stack.",
  },
];

const PARTNERS = [
  { name: "NIC", note: "Government hosting, identity, and interoperability standards." },
  { name: "Kerala Police IT Cell", note: "Operational ownership, station rollout, and support." },
  { name: "Academic Partners", note: "Model evaluation, fairness auditing, and independent review." },
];

function About() {
  return (
    <PageShell>
      <Reveal>
        <GlassCard className="p-8 sm:p-10">
          <div className="flex flex-wrap items-center gap-6">
            <div
              aria-hidden="true"
              className="flex size-20 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 font-display text-xs uppercase tracking-widest text-primary"
            >
              Emblem
            </div>
            <div>
              <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
                About the Project &amp; Team
              </h1>
              <p className="mt-2 text-primary">
                An AI co-investigator for the Kerala Police — secure, explainable, accountable.
              </p>
            </div>
          </div>
          <p className="mt-7 max-w-3xl leading-relaxed text-muted-foreground">
            A collaborative initiative to provide Kerala Police with an AI co-investigator that
            learns from historical cases, reduces manual workload, and improves public safety.
          </p>
        </GlassCard>
      </Reveal>

      <section className="mt-16">
        <SectionHeading eyebrow="Personal profile" title={PROFILE.name} />
        <Reveal className="mt-6">
          <GlassCard className="grid gap-8 p-8 md:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
                {PROFILE.role}
              </p>
              <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="size-4 text-accent" aria-hidden="true" /> {PROFILE.location}
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="size-4 text-primary" aria-hidden="true" />
                  <a className="hover:text-foreground" href={`mailto:${PROFILE.email}`}>
                    {PROFILE.email}
                  </a>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="size-4 text-primary" aria-hidden="true" />
                  <a className="hover:text-foreground" href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}>
                    {PROFILE.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Linkedin className="size-4 text-primary" aria-hidden="true" />
                  <a
                    className="hover:text-foreground"
                    href={PROFILE.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn profile
                  </a>
                </li>
              </ul>
              <button
                type="button"
                className="mt-7 inline-flex items-center gap-2 rounded-lg border border-accent/40 bg-accent/10 px-4 py-2.5 text-sm font-medium text-accent"
              >
                <Download className="size-4" aria-hidden="true" /> Download CV
              </button>
              <p className="mt-2 font-mono text-[11px] text-muted-foreground">
                Upload/replace restricted to administrators.
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-foreground">Short bio</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{PROFILE.bio}</p>
              </div>
              <div className="rounded-xl border border-primary/25 bg-primary/5 p-5">
                <h3 className="text-sm font-semibold text-foreground">Personal statement</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{PROFILE.statement}</p>
              </div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                All profile fields are editable by the project administrator.
              </p>
            </div>
          </GlassCard>
        </Reveal>
      </section>

      <section className="mt-16">
        <SectionHeading eyebrow="Team" title="Team &amp; Partners" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.06}>
              <GlassCard className="h-full">
                <h3 className="text-base font-semibold text-foreground">{m.name}</h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                  {m.role}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">{m.bio}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
        <div className="mt-5 grid gap-5 sm:grid-cols-3">
          {PARTNERS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <GlassCard className="h-full text-center">
                <div className="mx-auto flex h-14 items-center justify-center rounded-lg border border-border/70 bg-surface/60 px-4 font-display text-sm text-foreground">
                  {p.name}
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{p.note}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-5 md:grid-cols-2">
        <Reveal>
          <GlassCard className="h-full">
            <GraduationCap className="size-6 text-primary" aria-hidden="true" />
            <h2 className="mt-4 text-xl font-semibold text-foreground">Onboarding &amp; Training</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Officers complete a three-module programme: platform basics (half day), evidence
              handling and chain of custody (one day), and interpreting AI recommendations including
              confidence, limitations, and mandatory human verification (one day). District
              administrators receive an additional session on roles, retention, and audit exports.
            </p>
            <ul className="mt-4 space-y-2 font-mono text-xs text-muted-foreground">
              <li>Rollout: 6 weeks per district, trainer-of-trainers model.</li>
              <li>Support SLA: P1 response 30 minutes, resolution 4 hours, 24×7.</li>
              <li>Refresher certification every 12 months.</li>
            </ul>
          </GlassCard>
        </Reveal>
        <Reveal delay={0.08}>
          <GlassCard className="h-full">
            <Award className="size-6 text-accent" aria-hidden="true" />
            <h2 className="mt-4 text-xl font-semibold text-foreground">Press &amp; Recognition</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              This space records pilot results, awards, and testimonials as the programme progresses.
            </p>
            <div className="mt-4 space-y-3">
              {[
                "Pilot results — publication pending district sign-off.",
                "Awards & recognition — reserved for upcoming submissions.",
                "Officer testimonials — collected after each training cohort.",
              ].map((t) => (
                <p
                  key={t}
                  className="rounded-lg border border-dashed border-border/80 px-4 py-3 text-sm text-muted-foreground"
                >
                  {t}
                </p>
              ))}
            </div>
          </GlassCard>
        </Reveal>
      </section>
    </PageShell>
  );
}
