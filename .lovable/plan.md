# AI-Powered Crime Intelligence System — Website

A complete multi-page site for the Kerala Police AI crime intelligence platform, with all 13 pages, full written content (no placeholder text), animated transitions, and a dark navy / cyan-glow / amber visual identity.

## Pages

| Page | Path | Content |
|---|---|---|
| Home | `/` | Hero with animated surveillance-grid city visual, headline, two calls to action, intro paragraph, four quick-feature cards |
| About | `/about` | Project summary, HEMIN profile (Project Lead, Kodungallur, KL, India, bio, contacts, personal statement), team & partners cards, onboarding/training, press & recognition |
| System | `/system` | "AI as a Digital Co-Investigator", four expandable feature cards with sample outputs, explainability panel with confidence scores |
| Architecture | `/architecture` | Clickable SVG diagram of the eight stack layers, per-node detail panel, expandable API contract list |
| Workflow | `/workflow` | Six-step interactive timeline (Upload → Extract → Scan → Search → Link → Recommend) with sample logs, metrics panel |
| Impact | `/impact` | Tabs for Operational Impact and Stakeholder Value, KPI charts (resolution time, cases matched, false-positive rate) |
| Case Study | `/case-study` | Cyber fraud walkthrough: case-file panel, evidence list, timeline, knowledge-graph snippet, outcome metrics |
| Roadmap | `/roadmap` | Milestone visual with dates, dependencies, budgets, pilot plans |
| Pricing | `/pricing` | Pilot / Standard / Enterprise tiers, add-ons, procurement notes |
| Demo | `/demo` | Secure-login panel (SSO + 2FA presentation), demo request form, demo-mode description |
| Docs | `/docs` | API reference with sample requests, auth flow, onboarding guides, retention policy |
| Privacy | `/legal/privacy` | Data minimization, retention, access controls |
| Terms | `/legal/terms` | Usage, liability, export controls |

Shared header navigation and a footer with Secure Login / Request Demo / Documentation links appear on every page.

## Look and feel

Deep navy base, cyan glow accents, amber highlights. Frosted glass cards, thin luminous borders, a faint grid/scanline texture, and monospace detailing for evidence and log readouts. Page changes and card reveals animate smoothly; all motion is disabled for visitors who prefer reduced motion.

## Interactive behaviour

- Expandable feature cards, clickable architecture nodes, expandable timeline steps, tabbed impact section.
- Charts for the KPI dashboards.
- Keyboard-accessible navigation, skip link, visible focus rings, labelled interactive diagram nodes.
- Forms (demo request, contact) validate inline and show a confirmation state.

## Scope note

This is the front-end product site and interactive demonstration layer. The AI pipeline, CCTV processing, database, and government SSO are documented and represented in the interface but not live — the forms and login panel show their designed states rather than submitting anywhere. Real accounts, data storage, or working sign-in can be added afterwards with Lovable Cloud.

## Technical details

- Routes under `src/routes/` using TanStack Router file routes (the project's router; Next.js pages are not used here). Nested legal routes as `legal.privacy.tsx` / `legal.terms.tsx`.
- Design tokens (navy, cyan, amber, glass surfaces, glow shadows) defined in `src/styles.css` under `@theme inline`; no hardcoded colours in components.
- Reusable components in `src/components/`: `Navbar`, `Footer`, `PageTransition`, `GlassCard`, `SectionHeading`, `InteractiveDiagram`, `Timeline`, `KnowledgeGraphViewer`, `CaseFilePanel`, `KPICharts`, `DemoRequestForm`, `ExplainabilityPanel`.
- `motion` (Framer Motion) for route and element transitions; `recharts` for KPI charts; `lucide-react` for icons. Custom inline SVG for the architecture and graph visuals.
- Per-route `head()` metadata: unique title, description, og:title, og:description on every page.
- Static content lives in typed data modules under `src/data/` so copy and profile details are easy to edit in one place.
