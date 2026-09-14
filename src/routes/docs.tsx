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
  component: Docs;
});

function Docs() {
  return <div />;
}
