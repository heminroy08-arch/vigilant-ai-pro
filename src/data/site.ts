export const SITE_NAME = "AI-Powered Crime Intelligence System";
export const SITE_TAGLINE = "Transforming Policing with Smart AI for the Kerala Police.";

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/system", label: "System" },
  { to: "/architecture", label: "Architecture" },
  { to: "/workflow", label: "Workflow" },
  { to: "/impact", label: "Impact" },
  { to: "/case-study", label: "Case Study" },
  { to: "/roadmap", label: "Roadmap" },
  { to: "/pricing", label: "Pricing" },
  { to: "/docs", label: "Docs" },
] as const;

export const PROFILE = {
  name: "HEMIN",
  role: "Project Lead",
  location: "Kodungallur, KL, India",
  bio: "HEMIN leads the AI Crime Intelligence initiative, coordinating technical design, stakeholder engagement, and deployment strategy for law enforcement.",
  statement:
    "Committed to building secure, explainable AI tools that respect privacy and strengthen community trust.",
  email: "hemin@crimeintel.kerala.gov.in",
  phone: "+91 (0)487 000 0000",
  linkedin: "https://www.linkedin.com/in/hemin",
};

export const QUICK_FEATURES = [
  {
    icon: "Cctv",
    title: "Real-time CCTV suspect detection",
    text: "Detect and track persons of interest.",
  },
  {
    icon: "Search",
    title: "Case similarity search",
    text: "Find past cases with matching patterns.",
  },
  {
    icon: "Share2",
    title: "Knowledge graph linking",
    text: "Visualize relationships across evidence and suspects.",
  },
  {
    icon: "Sparkles",
    title: "Explainable recommendations",
    text: "Confidence scores and reasoning for every suggestion.",
  },
] as const;

export const SYSTEM_FEATURES = [
  {
    title: "Detect suspects from CCTV based on descriptions",
    summary:
      "Natural-language descriptions are converted into visual attributes and matched against live and archived camera feeds.",
    example:
      'Query: "male, dark blue shirt, red helmet, near Thrissur Round, 21:00-22:30" → 7 candidate clips returned across 4 cameras.',
    explain:
      "Confidence 0.88 — attribute match on upper-body colour and helmet, re-identification consistency across 3 consecutive cameras.",
  },
  {
    title: "Search old case databases for similarities",
    summary:
      "Every case file is embedded and indexed, so investigators retrieve precedent by meaning rather than keyword.",
    example:
      "New chit-fund fraud FIR → 3 closed cases surfaced from 2019-2023 with overlapping mule-account structures.",
    explain:
      "Confidence 0.81 — shared entities (bank corridor, payment gateway), narrative similarity 0.79, modus operandi cluster #14.",
  },
  {
    title: "Suggest investigative strategies based on past solved cases",
    summary:
      "The agent reconstructs the investigative path that closed comparable cases and proposes the next best action.",
    example:
      "Recommended: request CDR for 3 numbers, freeze 2 wallet accounts within 24h, request gateway logs before rotation window closes.",
    explain:
      "Confidence 0.76 — derived from 12 solved cases where early wallet freeze correlated with recovery above 60%.",
  },
  {
    title: "Build a connected intelligence network for police",
    summary:
      "Suspects, vehicles, phone numbers, accounts, and locations become a living graph shared across districts.",
    example:
      "A single SIM links a Kochi snatching case to two Kozhikode cheating cases through a shared recharge outlet.",
    explain:
      "Confidence 0.92 — deterministic identifier match (IMEI + SIM) plus co-location within a 300 m radius.",
  },
] as const;

export const ARCHITECTURE_NODES = [
  {
    id: "ingest",
    title: "CCTV Ingest & Edge Inference",
    stack: "YOLOv8 + ReID on edge devices",
    detail:
      "Cameras stream to edge nodes running detection and re-identification locally, so only relevant clips and embeddings leave the site. Low latency, low bandwidth, and no raw footage crossing the network unnecessarily.",
  },
  {
    id: "cv",
    title: "CV Pipeline",
    stack: "Frame extraction → detection → ReID → clip storage",
    detail:
      "Frames are sampled adaptively, persons detected, re-identification vectors computed, and matched clips written to the evidence store with camera, timestamp, and hash.",
  },
  {
    id: "meta",
    title: "Metadata Extraction",
    stack: "OCR + NER + structured metadata",
    detail:
      "FIRs, statements, and scanned documents are parsed for names, dates, places, vehicle numbers, and account identifiers, then normalised into the case schema.",
  },
  {
    id: "nlp",
    title: "NLP & Vector Database",
    stack: "Embeddings → Pinecone / Weaviate / FAISS",
    detail:
      "Case narratives and evidence summaries are embedded and indexed for semantic retrieval, with per-district namespaces and access filters applied at query time.",
  },
  {
    id: "graph",
    title: "Knowledge Graph",
    stack: "Neo4j",
    detail:
      "Suspects, evidence, locations, vehicles, and accounts are stored as nodes with typed, time-stamped relationships, enabling multi-hop link analysis across districts.",
  },
  {
    id: "agents",
    title: "LangChain Agents",
    stack: "Multi-step reasoning and query planning",
    detail:
      "An orchestration layer decomposes an investigator's question into retrieval, graph traversal, and summarisation steps, returning a reasoning trace with every answer.",
  },
  {
    id: "dashboard",
    title: "Dashboard & Alerts",
    stack: "Role-based police UI",
    detail:
      "Station, district, and state views with case queues, live match alerts, and export-controlled reporting. Every panel respects the officer's role and jurisdiction.",
  },
  {
    id: "audit",
    title: "Storage & Audit",
    stack: "Immutable evidence store + chain of custody",
    detail:
      "Write-once evidence storage with cryptographic hashing, tamper-evident audit logs, and exportable custody reports suitable for court submission.",
  },
] as const;

export const API_ENDPOINTS = [
  {
    method: "POST",
    path: "/api/cases",
    desc: "Upload case metadata.",
    res: '{ "id": "CASE-2026-00841", "status": "created" }',
  },
  {
    method: "POST",
    path: "/api/cases/:id/footage",
    desc: "Upload CCTV footage for processing.",
    res: '{ "jobId": "job_7f21c", "status": "queued" }',
  },
  {
    method: "GET",
    path: "/api/cases/:id/similar",
    desc: "Retrieve similar historical cases.",
    res: '[{ "caseId": "CASE-2021-01190", "score": 0.81, "highlights": ["mule accounts", "gateway X"] }]',
  },
  {
    method: "GET",
    path: "/api/suspects/search?q=",
    desc: "Search suspects by description.",
    res: '[{ "suspectId": "SUS-4412", "clips": 7, "confidence": 0.88 }]',
  },
  {
    method: "GET",
    path: "/api/graph/:id/links",
    desc: "Knowledge graph neighbours for an entity.",
    res: '{ "nodes": 14, "edges": 23, "maxHops": 3 }',
  },
  {
    method: "POST",
    path: "/api/agents/query",
    desc: "Orchestrated agent query with reasoning trace.",
    res: '{ "answer": "...", "trace": [ ... ], "sources": ["CASE-2019-00233"] }',
  },
] as const;

export const WORKFLOW_STEPS = [
  {
    title: "Upload",
    text: "Police upload the case file and CCTV footage through the secure station portal.",
    log: "[10:04:12] FIR-2026-00841.pdf ingested · 4 video files (2.7 GB) queued · SHA-256 recorded",
  },
  {
    title: "Extract",
    text: "AI extracts metadata — names, places, dates, vehicles, and account identifiers.",
    log: "[10:04:58] OCR 41 pages · 17 entities extracted · 3 conflicts flagged for officer review",
  },
  {
    title: "Scan",
    text: "The CCTV module scans footage for suspects matching the recorded descriptions.",
    log: "[10:11:36] 142,000 frames scanned · 7 candidate tracks · top confidence 0.88",
  },
  {
    title: "Search",
    text: "The vector database finds past cases with similar patterns and modus operandi.",
    log: "[10:12:02] 3 similar cases retrieved · scores 0.81 / 0.77 / 0.74",
  },
  {
    title: "Link",
    text: "The knowledge graph surfaces links between suspects, evidence, and other crimes.",
    log: "[10:12:19] 14 nodes · 23 edges · 2 cross-district links identified",
  },
  {
    title: "Recommend",
    text: "The dashboard proposes an investigative strategy with reasoning and sources.",
    log: "[10:12:31] 5 recommended actions · earliest deadline: wallet freeze within 24h",
  },
] as const;

export const ROADMAP = [
  {
    period: "Q1 2027",
    title: "Integration with IoT smart cameras",
    detail:
      "Direct integration with municipal smart-city camera networks and ANPR units, with edge inference packaged as a certified appliance.",
    budget: "₹4.2 Cr pilot allocation",
    partners: "Kerala Police IT Cell, Smart City Kochi",
  },
  {
    period: "Q3 2027",
    title: "Predictive analytics for crime trends",
    detail:
      "District-level trend forecasting and hotspot modelling with strict fairness auditing and human sign-off before any deployment decision.",
    budget: "₹2.6 Cr",
    partners: "Academic partners, State Data Centre",
  },
  {
    period: "2028",
    title: "Expansion to national police networks",
    detail:
      "Federated deployment allowing inter-state queries over shared identifiers without centralising raw evidence.",
    budget: "Phase-gated, procurement-led",
    partners: "NIC, participating state police forces",
  },
  {
    period: "2029+",
    title: "AI-assisted decision-making in courts",
    detail:
      "Court-ready evidence packages with full provenance, reasoning traces, and defence-accessible explainability records.",
    budget: "Under assessment",
    partners: "Judicial academy, legal review board",
  },
] as const;
