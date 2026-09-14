import { createFileRoute } from "@tanstack/react-router";
import { KeyRound, ShieldCheck } from "lucide-react";
import { useState, type FormEvent } from "react";
import { GlassCard } from "@/components/GlassCard";
import { PageShell, Reveal } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/demo")({
  head: () => ({
    meta: [
      { title: "Request Demo & Secure Login | AI Crime Intelligence" },
      {
        name: "description",
        content:
          "Government SSO with 2FA for authorised officers, plus a demo request form and guided walkthrough on an anonymised dataset.",
      },
      { property: "og:title", content: "Request Demo & Secure Login" },
      {
        property: "og:description",
        content: "SAML/OAuth2 single sign-on, TOTP 2FA, and a sandboxed demo environment.",
      },
    ],
  }),
  component: Demo,
});

function Field({
  label,
  name,
  type = "text",
  required = true,
  children,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm text-foreground">{label}</span>
      {children ?? (
        <input
          name={name}
          type={type}
          required={required}
          className="w-full rounded-lg border border-input bg-background/60 px-3 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
        />
      )}
    </label>
  );
}

function Demo() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = String(data.get("email") ?? "");
    if (!email.includes("@")) {
      setError("Enter a valid official email address.");
      return;
    }
    setError("");
    setSent(true);
  }

  return (
    <PageShell>
      <SectionHeading
        as="h1"
        eyebrow="Access"
        title="Secure Login &amp; Demo Request"
        intro="Authorised officers sign in through government SSO. Everyone else can request a guided walkthrough on anonymised data."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <Reveal>
          <GlassCard className="h-full">
            <ShieldCheck className="size-6 text-primary" aria-hidden="true" />
            <h2 className="mt-4 text-xl font-semibold text-foreground">Secure login</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Single sign-on via SAML 2.0 or OAuth2 against the departmental identity provider,
              followed by TOTP-based two-factor verification. Sessions are short-lived and every
              sign-in is recorded in the audit log.
            </p>
            <div className="mt-6 space-y-3">
              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-medium text-primary-foreground"
              >
                <KeyRound className="size-4" aria-hidden="true" /> Continue with Government SSO
              </button>
              <button
                type="button"
                className="w-full rounded-lg border border-border px-4 py-3 text-sm text-foreground"
              >
                Use recovery code
              </button>
            </div>
            <p className="mt-4 font-mono text-[11px] text-muted-foreground">
              Sign-in is disabled in this environment. Identity provider details are configured at
              deployment.
            </p>
          </GlassCard>
        </Reveal>

        <Reveal delay={0.08}>
          <GlassCard className="h-full">
            <h2 className="text-xl font-semibold text-foreground">Request a demo</h2>
            {sent ? (
              <div className="mt-6 rounded-xl border border-primary/40 bg-primary/10 p-6">
                <p className="font-medium text-foreground">Request received</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Thank you. The programme team will confirm your session and share the sandbox
                  access brief before the scheduled date.
                </p>
              </div>
            ) : (
              <form className="mt-5 space-y-4" onSubmit={onSubmit} noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full name" name="name" />
                  <Field label="Department" name="department" />
                  <Field label="Designation" name="designation" />
                  <Field label="Official email" name="email" type="email" />
                  <Field label="Contact number" name="phone" type="tel" />
                  <Field label="Preferred demo date" name="date" type="date" />
                </div>
                <Field label="What would you like to see?" name="notes" required={false}>
                  <textarea
                    name="notes"
                    rows={3}
                    className="w-full rounded-lg border border-input bg-background/60 px-3 py-2.5 text-sm text-foreground outline-none focus:border-primary"
                  />
                </Field>
                {error ? (
                  <p role="alert" className="text-sm text-destructive">
                    {error}
                  </p>
                ) : null}
                <button
                  type="submit"
                  className="w-full rounded-lg bg-accent px-4 py-3 text-sm font-medium text-accent-foreground"
                >
                  Submit request
                </button>
              </form>
            )}
          </GlassCard>
        </Reveal>
      </div>

      <Reveal className="mt-10">
        <GlassCard className="p-8">
          <h2 className="text-xl font-semibold text-foreground">Demo mode</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {[
              {
                t: "Anonymised dataset",
                d: "Synthetic cases and footage. No real PII or evidence is ever used in demonstrations.",
              },
              {
                t: "Guided walkthrough",
                d: "A 40-minute session covering upload, detection, similarity search, and recommendations.",
              },
              {
                t: "Admin sandbox",
                d: "Try roles, retention settings, and audit exports without touching production.",
              },
            ].map((d) => (
              <div key={d.t} className="rounded-xl border border-border/70 bg-background/40 p-5">
                <p className="text-sm font-medium text-foreground">{d.t}</p>
                <p className="mt-1 text-sm text-muted-foreground">{d.d}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </Reveal>
    </PageShell>
  );
}
