import { createFileRoute } from "@tanstack/react-router";
import { FileText, Film, Landmark, Smartphone } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { PageShell, Reveal } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/case-study")({
  head: () => ({
    meta: [
      { title: "Case Study: Cyber Fraud | AI Crime Intelligence" },
      {
        name: "description",
        content:
          "A cyber fraud case resolved 60% faster: evidence list, timeline, knowledge graph links, and outcome metrics.",
      },
      { property: "og:title", content: "Real-World Application: Cyber Fraud" },
      {
        property: "og:description",
        content: "How AI surfaced three similar solved cases and the exact investigative path.",
      },
    ],
  }),
  component: CaseStudy;
});

function CaseStudy() {
  return <div />;
}
