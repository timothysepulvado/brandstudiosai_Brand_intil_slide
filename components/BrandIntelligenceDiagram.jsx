import React, { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Database,
  Boxes,
  Repeat,
  SlidersHorizontal,
  Eye,
  CheckCircle2,
  XCircle,
  Wand2,
  CircuitBoard,
  Workflow,
  Settings2,
  Gauge,
  Share2,
  ShieldCheck,
  Server,
  Sparkles,
  GitCommit,
  GitCompare,
} from "lucide-react";

// -----------------------------------------------------------------------------
// BrandStudios.ai - Brand Intelligence Engine (Multi-Tenant)
// -----------------------------------------------------------------------------
// Responsive layout tuned so all text stays inside cards across breakpoints.
// Adds client-facing mode (masks vendor names) and lightweight runtime tests.
// -----------------------------------------------------------------------------

const tenants = [
  {
    id: "acme-fashion",
    name: "ACME Fashion",
    palette: { from: "from-[#E8A587]", via: "via-[#F4D4C0]", to: "to-[#F0E5D8]" },
    dna: {
      colors: ["#111827", "#F59E0B", "#F43F5E"],
      fonts: ["Inter", "EB Garamond"],
      tone: "Bold • Urban • Editorial",
    },
  },
  {
    id: "lilydale-beauty",
    name: "Lilydale Beauty",
    palette: { from: "from-[#F4D4C0]", via: "via-[#F0E5D8]", to: "to-[#FAF3E8]" },
    dna: {
      colors: ["#0F172A", "#A78BFA", "#FDE68A"],
      fonts: ["General Sans", "DM Serif"],
      tone: "Soft • Minimal • Elevated",
    },
  },
  {
    id: "northpeak-outdoors",
    name: "NorthPeak Outdoors",
    palette: { from: "from-[#E8A587]", via: "via-[#A8C5E0]", to: "to-[#B4D7A8]" },
    dna: {
      colors: ["#0B1220", "#10B981", "#06B6D4"],
      fonts: ["Satoshi", "Source Serif"],
      tone: "Crisp • Natural • Adventurous",
    },
  },
];

const backgroundDots = [
  { size: 200, color: "#E8A587", top: "10%", left: "65%" },
  { size: 140, color: "#F4B89C", top: "5%", right: "12%" },
  { size: 100, color: "#A8C5E0", top: "28%", left: "10%" },
  { size: 85, color: "#6B9AC4", top: "45%", right: "28%" },
  { size: 130, color: "#D97943", bottom: "15%", left: "5%" },
  { size: 170, color: "#8FB8D4", bottom: "8%", right: "15%" },
  { size: 75, color: "#B4D7A8", top: "65%", left: "45%" },
  { size: 95, color: "#7DA8C8", top: "50%", right: "8%" },
];

function hexToRgba(hex, alpha = 1) {
  if (!hex) return `rgba(255,255,255,${alpha})`;
  let normalized = hex.replace("#", "");
  if (normalized.length === 3) {
    normalized = normalized.split("").map((c) => c + c).join("");
  }
  const intVal = parseInt(normalized, 16);
  const r = (intVal >> 16) & 255;
  const g = (intVal >> 8) & 255;
  const b = intVal & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function getLaneItems(clientMode) {
  return [
    {
      key: "memory",
      title: "Brand Memory (Per-Tenant)",
      icon: Database,
      desc: "Logos, palettes, fonts, models, products, copy tone. Embeddings + metadata.",
      badges: [clientMode ? "Auth + Metadata DB" : "Supabase (meta)", clientMode ? "Vector DB" : "Pinecone (vectors)", "Namespaces"],
    },
    {
      key: "orchestrator",
      title: "RAG + Orchestrator",
      icon: Workflow,
      desc: "Retrieve tenant DNA, assemble prompts/templates. Visual flow control.",
      badges: [clientMode ? "Visual Orchestration" : "Flowise", "Prompt libs", "Policies"],
    },
    {
      key: "generator",
      title: "Generative Engine",
      icon: Wand2,
      desc: "On-brand images with same model & clothing. Pose/scene variations.",
      badges: [clientMode ? "Fine-tuned Model" : "Scenario LoRA", clientMode ? "Image Gen Engine" : "Replicate SDXL", clientMode ? "Image API" : "OpenAI Images"],
    },
    {
      key: "evaluator",
      title: "Evaluator / Linter",
      icon: Gauge,
      desc: "Embed outputs, compare to baselines, compute brand-consistency score.",
      badges: [clientMode ? "Vision Embeddings" : "CLIP/ViT", "Cosine distance", "Thresholds"],
    },
    {
      key: "human",
      title: "Human Review",
      icon: Eye,
      desc: "Flagged assets -> visual QA. Approve/Reject/Comment. Audit trail.",
      badges: [clientMode ? "Brand Portal UI" : "Frontify/Brandfolder", clientMode ? "Review App" : "Gradio UI", "Roles"],
    },
    {
      key: "publish",
      title: "Export & Delivery",
      icon: Share2,
      desc: "Auto-approve above threshold or require review. Package for export (ZIP/PNG/JSON).",
      badges: ["BrandStudios.ai Dashboard", "Export", "Headless"],
    },
  ];
}

const Connector = ({ delay = 0, dashed = false }) => (
  <motion.div
    initial={{ opacity: 0, scaleX: 0 }}
    animate={{ opacity: 1, scaleX: 1 }}
    transition={{ delay, type: "spring", stiffness: 90, damping: 18 }}
    className={`h-[2px] origin-left rounded-full ${dashed ? "bg-gradient-to-r from-[#D97943] to-[#F4B89C]" : "bg-[#D97943]"}`}
  />
);

function Pill({ label }) {
  return (
    <span className="px-2.5 py-1 text-[10px] rounded-full bg-[#FFF5F0] border border-[#F4D4C0] text-[#C8632B] font-medium tracking-wide inline-block max-w-full break-words leading-tight">
      {label}
    </span>
  );
}

function HeroStat({ label, value, caption, background }) {
  return (
    <div className="rounded-2xl border border-[#E8DDD1] p-4 shadow-[0_15px_45px_rgba(13,18,53,0.06)] backdrop-blur-lg" style={background}>
      <p className="text-[10px] uppercase tracking-[0.2em] text-[#C8632B] break-words">{label}</p>
      <p className="mt-1.5 text-2xl font-semibold text-[#1a2b4d] break-words">{value}</p>
      <p className="mt-1.5 text-xs text-[#6B7280] leading-snug break-words">{caption}</p>
    </div>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="space-y-3">
      <p className="text-[10px] uppercase tracking-[0.35em] text-[#C8632B]">{eyebrow}</p>
      <div className="flex flex-col gap-2 lg:flex-row lg:items-start lg:justify-between">
        <h2 className="text-2xl font-semibold text-[#1a2b4d] tracking-tight">{title}</h2>
        <p className="text-sm text-[#6B7280] lg:max-w-xl leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function LaneCard({ title, icon: Icon, desc, badges, accent, glassStyle }) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="relative w-full h-full rounded-2xl p-5 border border-[#E8DDD1] bg-white/60 shadow-[0_30px_55px_rgba(15,23,42,0.06)] backdrop-blur-xl flex flex-col"
      style={glassStyle}
    >
      <div className="absolute inset-x-0 -top-[1px] h-[2px] bg-[#D97943]" />
      <div className="flex flex-col mb-4 gap-3">
        <div className="flex items-center gap-2">
          <Icon className="h-4 w-4 text-[#D97943] shrink-0" />
          <h3 className="text-[#1a2b4d] font-semibold text-sm tracking-tight leading-snug break-words">{title}</h3>
        </div>
        <p className="text-[#6B7280] text-xs leading-relaxed break-words">
          {desc}
        </p>
      </div>
      <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-[#F0E8DC]">
        {badges.map((b) => (
          <Pill key={b} label={b} />
        ))}
      </div>
    </motion.div>
  );
}

function Legend({ clientMode, glassStyle }) {
  const chip = (text) => (
    <span className="px-2 py-0.5 rounded-md bg-[#FFF5F0] border border-[#F4D4C0] text-[10px] text-[#C8632B] inline-block">
      {text}
    </span>
  );
  return (
    <div className="rounded-2xl border border-[#E8DDD1] bg-white/60 p-5 space-y-4 shadow-[0_20px_40px_rgba(15,23,42,0.04)] backdrop-blur-xl" style={glassStyle}>
      <div className="flex items-center gap-2 text-[#1a2b4d] font-semibold text-sm">
        <Boxes className="h-4 w-4 shrink-0" /> <span>Legend</span>
      </div>
      <div className="space-y-2.5 text-xs text-[#6B7280]">
        <div className="flex items-start gap-2">
          <span className="shrink-0">{chip("Tenant")}</span>
          <span className="leading-relaxed break-words">Scoped namespace per brand</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="shrink-0">{chip("RAG")}</span>
          <span className="leading-relaxed break-words">Retrieval-augmented prompts from Brand Memory</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="shrink-0">{chip(clientMode ? "Vision Embeddings" : "LoRA")}</span>
          <span className="leading-relaxed break-words">{clientMode ? "Image/vision representation used for similarity" : "Lightweight per-brand adapters for consistency"}</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="shrink-0">{chip("Score")}</span>
          <span className="leading-relaxed break-words">Cosine similarity to baselines (identity, clothing, palette)</span>
        </div>
        <div className="flex items-start gap-2">
          <span className="shrink-0">{chip("Headless")}</span>
          <span className="leading-relaxed break-words">Auto-approve/package if score &gt;= threshold</span>
        </div>
      </div>
    </div>
  );
}

// -----------------------------
// Minimal runtime tests
// -----------------------------
function runTests() {
  const asClient = getLaneItems(true);
  const asInternal = getLaneItems(false);
  const assertions = [
    { name: "lane count", pass: asClient.length === 6 && asInternal.length === 6 },
    { name: "client mask - memory badge", pass: asClient[0].badges[0] === "Auth + Metadata DB" },
    { name: "internal vendors visible", pass: asInternal[0].badges[0] === "Supabase (meta)" },
  ];
  const failed = assertions.filter((a) => !a.pass);
  // eslint-disable-next-line no-console
  console.log("[BrandIntelligenceDiagram tests]", assertions);
  return failed.length === 0;
}

export default function BrandIntelligenceDiagram() {
  const [tenantId, setTenantId] = useState(tenants[0].id);
  const [variations, setVariations] = useState(5);
  const [headless, setHeadless] = useState(true);
  const [threshold, setThreshold] = useState(0.82); // cosine similarity pass threshold
  const [clientMode, setClientMode] = useState(false);

  useEffect(() => { runTests(); }, []);

  const tenant = useMemo(() => tenants.find((t) => t.id === tenantId) || tenants[0], [tenantId]);
  const accent = useMemo(() => `${tenant.palette.from} ${tenant.palette.via} ${tenant.palette.to}`, [tenant]);
  const laneItems = useMemo(() => getLaneItems(clientMode), [clientMode]);
  const tintPrimary = tenant.dna.colors[1] || tenant.dna.colors[0] || "#f08c37";
  const tintSecondary = tenant.dna.colors[2] || "#f6c7a2";
  const glassFill = useMemo(
    () => (opacity = 0.88) => ({
      background: `linear-gradient(135deg, ${hexToRgba(tintPrimary, 0.08)}, ${hexToRgba(tintSecondary, 0.05)}, rgba(255,255,255,${opacity}))`,
      borderColor: "rgba(255,255,255,0.55)",
    }),
    [tintPrimary, tintSecondary]
  );
  const systemStats = useMemo(
    () => [
      { label: "Active tenants", value: `${tenants.length}`, caption: "Pilots live across fashion & beauty" },
      { label: "Variations / brief", value: `${variations}`, caption: "Avg. creative volume per request" },
      { label: "Consistency floor", value: `${(threshold * 100).toFixed(0)}%`, caption: "Cosine similarity target" },
      { label: "View mode", value: clientMode ? "Client-safe" : "Internal", caption: clientMode ? "Vendor names masked" : "Partners visible" },
    ],
    [variations, threshold, clientMode]
  );
  const differentiators = useMemo(
    () => [
      "Multi-tenant Brand Memory isolates embeddings, prompts, and creative rules per customer.",
      `Evaluator enforces ≥ ${(threshold * 100).toFixed(0)}% similarity before assets can ship.`,
      headless ? "Headless automation packages assets automatically when confidence hits the floor." : "Headless automation stays off until confidence targets are met.",
    ],
    [threshold, headless]
  );

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#F5F1EB] text-[#1a2b4d]">
      <div className="pointer-events-none fixed inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "linear-gradient(rgba(16,29,68,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(16,29,68,0.05) 1px, transparent 1px)",
            backgroundSize: "140px 140px",
          }}
        />
        {backgroundDots.map((dot, idx) => (
          <div
            key={`dot-${idx}`}
            className="absolute rounded-full"
            style={{
              width: dot.size,
              height: dot.size,
              background: dot.color,
              top: dot.top,
              left: dot.left,
              right: dot.right,
              bottom: dot.bottom,
              boxShadow: "0 30px 65px rgba(23, 30, 60, 0.12)",
              border: "1px solid rgba(255,255,255,0.55)",
            }}
          />
        ))}
      </div>
      <div className="relative mx-auto max-w-7xl space-y-12 px-6 py-10">
        {/* Hero */}
        <div className="relative overflow-hidden rounded-3xl border border-[#E8DDD1] bg-white/60 p-6 md:p-10 shadow-[0_45px_90px_rgba(17,23,58,0.08)] backdrop-blur-2xl" style={glassFill(0.68)}>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#FFF5F0]/20 via-transparent to-[#F0F5FA]/20" />
          <div className="pointer-events-none absolute -left-16 top-8 h-48 w-48 rounded-full bg-[#F4B89C] opacity-20 blur-[80px]" />
          <div className="pointer-events-none absolute -right-12 bottom-10 h-40 w-40 rounded-full bg-[#A8C5E0] opacity-20 blur-[90px]" />
          <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-1">
                  <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    <span className="text-[#1a2b4d]">BrandStudios</span><span className="text-[#D97943]">.AI</span>
                  </h1>
                  <h2 className="text-2xl font-medium tracking-tight text-[#1a2b4d] sm:text-3xl">
                    Intelligence Control Plane
                  </h2>
                </div>
                <p className="text-sm text-[#6B7280] md:text-base">
                  Multi-tenant creative genome + on-brand generation with evaluators, human-in-loop QA, and headless delivery packaging.
                </p>
              </div>
              <ul className="grid gap-3 text-sm text-[#6B7280] sm:grid-cols-2">
                {differentiators.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#2f9a63]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {systemStats.map((stat) => (
                  <HeroStat key={stat.label} background={glassFill(0.60)} {...stat} />
                ))}
              </div>
            </div>
            <div className="space-y-5 rounded-2xl border border-[#E8DDD1] bg-white/60 p-5 backdrop-blur-xl" style={glassFill(0.72)}>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#C8632B]">Live controls</p>
                <p className="mt-1 text-sm text-[#6B7280]">Demo how the stack responds when you tune tenants, throughput, and governance.</p>
              </div>
              <div className="space-y-4 text-sm">
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-[0.3em] text-[#C8632B]">Tenant workspace</label>
                  <select value={tenantId} onChange={(e) => setTenantId(e.target.value)} className="w-full rounded-xl border border-[#E8DDD1] bg-[#FFFCF8] px-3 py-2 text-sm text-[#1a2b4d] focus:border-[#C8632B] focus:outline-none">
                    {tenants.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-[0.3em] text-[#C8632B]">Variations per brief</label>
                  <div className="flex flex-wrap items-center gap-3">
                    <input type="number" min={1} max={24} value={variations} onChange={(e) => setVariations(parseInt(e.target.value || "1", 10))} className="w-24 rounded-xl border border-[#E8DDD1] bg-[#FFFCF8] px-3 py-2 text-sm text-[#1a2b4d] focus:border-[#C8632B] focus:outline-none" />
                    <span className="text-xs text-[#6B7280]">Controls creative volume</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-[0.3em] text-[#C8632B]">Consistency floor</label>
                  <div className="flex items-center justify-between text-xs text-[#6B7280]">
                    <span>Auto-pass requires</span>
                    <span className="text-[#1a2b4d] font-semibold">{(threshold * 100).toFixed(0)}%</span>
                  </div>
                  <input type="range" min={0.6} max={0.95} step={0.01} value={threshold} onChange={(e) => setThreshold(parseFloat(e.target.value))} className="w-full accent-[#D97943]" />
                </div>
                <div className="grid gap-2 sm:grid-cols-2">
                  <button onClick={() => setHeadless((v) => !v)} className={`flex items-start gap-3 rounded-2xl border px-4 py-3 text-left transition-all ${headless ? "border-[#3d8b51] bg-[#e3f6ea] shadow-[0_0_25px_rgba(61,139,81,0.2)]" : "border-[#E8DDD1] bg-white/60 backdrop-blur-sm hover:border-[#C8632B]"}`}>
                    <ShieldCheck className={`h-5 w-5 shrink-0 mt-0.5 ${headless ? "text-[#2f9a63]" : "text-[#9ca3c0]"}`} />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-[#1a2b4d] break-words">{headless ? "Headless automation" : "Manual review route"}</p>
                      <p className="text-xs text-[#6B7280] mt-1 leading-snug break-words">{headless ? "Auto-packages assets when scores clear." : "Requires human approval for every asset."}</p>
                    </div>
                  </button>
                  <button onClick={() => setClientMode((v) => !v)} className={`flex items-start gap-3 rounded-2xl border px-4 py-3 text-left transition-all ${clientMode ? "border-[#D97943] bg-[#FFF5F0] shadow-[0_0_25px_rgba(217,121,67,0.2)]" : "border-[#E8DDD1] bg-white/60 backdrop-blur-sm hover:border-[#C8632B]"}`}>
                    <Eye className={`h-5 w-5 shrink-0 mt-0.5 ${clientMode ? "text-[#D97943]" : "text-[#9ca3c0]"}`} />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-[#1a2b4d] break-words">{clientMode ? "Client-safe view" : "Internal view"}</p>
                      <p className="text-xs text-[#6B7280] mt-1 leading-snug break-words">{clientMode ? "Masks vendor & infra names." : "Shows every vendor touchpoint."}</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DNA + Infrastructure */}
        <div className="space-y-6">
          <SectionHeading eyebrow="" title="Tenant DNA + shared fabric" description="Every brand lives in its own namespace with dedicated memory, typography, palettes, and oversight controls layered on common infrastructure." />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-[#E8DDD1] bg-white/60 p-5 shadow-[0_20px_40px_rgba(15,23,42,0.04)] backdrop-blur-xl" style={glassFill(0.68)}>
              <div className="flex items-center gap-2 text-sm font-medium text-[#1a2b4d]">
                <CircuitBoard className="h-4 w-4 text-[#D97943] shrink-0" /> <span className="break-words">{clientMode ? "Client Workspace" : `${tenant.name} • DNA snapshot`}</span>
              </div>
              <div className="mt-4 space-y-4 text-sm text-[#6B7280]">
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#C8632B]">{clientMode ? "Style" : "Tone"}</span>
                  <span className="leading-relaxed break-words">{tenant.dna.tone}</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#C8632B]">{clientMode ? "Typography" : "Fonts"}</span>
                  <span className="break-words leading-relaxed">{tenant.dna.fonts.join(", ")}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#C8632B]">Colors</span>
                  <div className="flex items-center gap-2 flex-wrap">
                    {tenant.dna.colors.map((c) => (
                      <span key={c} className="h-5 w-8 rounded-md border border-[#E8DDD1] shrink-0" style={{ background: c }} title={c} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <Legend clientMode={clientMode} glassStyle={glassFill(0.66)} />
            <div className="rounded-2xl border border-[#E8DDD1] bg-white/60 p-5 shadow-[0_20px_40px_rgba(15,23,42,0.04)] backdrop-blur-xl" style={glassFill(0.68)}>
              <div className="flex items-center gap-2 text-sm font-medium text-[#1a2b4d]">
                <Server className="h-4 w-4 shrink-0" /> <span>Shared Infrastructure</span>
              </div>
              <div className="mt-4 grid grid-cols-1 gap-2 text-xs text-[#6B7280] sm:grid-cols-2">
                <div className="flex items-start gap-2 rounded-xl border border-[#E8DDD1] bg-[#FFFCF8] px-3 py-2">
                  <Database className="h-4 w-4 text-[#D97943] shrink-0 mt-0.5" /> <span className="break-words leading-relaxed">{clientMode ? "Auth + Metadata DB" : "Supabase (Auth + Meta)"}</span>
                </div>
                <div className="flex items-start gap-2 rounded-xl border border-[#E8DDD1] bg-[#FFFCF8] px-3 py-2">
                  <Database className="h-4 w-4 text-[#D97943] shrink-0 mt-0.5" /> <span className="break-words leading-relaxed">{clientMode ? "Vector DB" : "Pinecone (Vectors)"}</span>
                </div>
                <div className="flex items-start gap-2 rounded-xl border border-[#E8DDD1] bg-[#FFFCF8] px-3 py-2">
                  <Workflow className="h-4 w-4 text-[#D97943] shrink-0 mt-0.5" /> <span className="break-words leading-relaxed">{clientMode ? "Visual Orchestration" : "Flowise (Orchestration)"}</span>
                </div>
                <div className="flex items-start gap-2 rounded-xl border border-[#E8DDD1] bg-[#FFFCF8] px-3 py-2">
                  <Share2 className="h-4 w-4 text-[#D97943] shrink-0 mt-0.5" /> <span className="break-words leading-relaxed">BrandStudios.ai (Dashboard/Export)</span>
                </div>
                <div className="flex items-start gap-2 rounded-xl border border-[#E8DDD1] bg-[#FFFCF8] px-3 py-2">
                  <Sparkles className="h-4 w-4 text-[#D97943] shrink-0 mt-0.5" /> <span className="break-words leading-relaxed">{clientMode ? "Image Gen Engines" : "Scenario/Replicate (Gen)"}</span>
                </div>
                <div className="flex items-start gap-2 rounded-xl border border-[#E8DDD1] bg-[#FFFCF8] px-3 py-2">
                  <Settings2 className="h-4 w-4 text-[#D97943] shrink-0 mt-0.5" /> <span className="break-words leading-relaxed">Vercel (API + Cron)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lanes */}
        <div className="space-y-6">
          <SectionHeading eyebrow="" title="Execution lanes from memory to delivery" description="Shows exactly how intelligence flows: capture brand DNA, orchestrate prompts, generate, score, route to humans, and publish/export." />
          <div className="rounded-3xl border border-[#E8DDD1] bg-white/65 p-6 shadow-[0_35px_70px_rgba(17,23,58,0.06)] backdrop-blur-xl" style={glassFill(0.75)}>
            <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {laneItems.map((lane, idx) => (
                <div key={lane.key} className="flex flex-col h-full">
                  <LaneCard title={lane.title} icon={lane.icon} desc={lane.desc} badges={lane.badges} accent={accent} glassStyle={glassFill(0.66)} />
                  {idx < laneItems.length - 1 && (
                    <div className="hidden xl:block mt-4">
                      <Connector delay={0.05 * idx} />
                      <div className="mt-1 flex items-center justify-between text-[10px] text-[#8B8B8B]">
                        <span className="flex items-center gap-1"><GitCommit className="h-3 w-3 text-[#D97943]" /> <span>step {idx + 1}</span></span>
                        <span className="flex items-center gap-1"><GitCompare className="h-3 w-3 text-[#D97943]" /> <span>pass &gt;= {threshold.toFixed(2)}</span></span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-3 text-sm text-[#6B7280] md:grid-cols-3">
              <div className="flex items-start gap-3 rounded-2xl border border-[#E8DDD1] bg-[#FFFCF8] p-4">
                <Repeat className="h-5 w-5 text-[#D97943] shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#C8632B]">Volume</p>
                  <p className="text-sm text-[#1a2b4d] mt-1 break-words">{variations} variations / brief</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-[#E8DDD1] bg-[#FFFCF8] p-4">
                {headless ? (<CheckCircle2 className="h-5 w-5 text-[#2f9a63] shrink-0 mt-0.5" />) : (<XCircle className="h-5 w-5 text-[#C8632B] shrink-0 mt-0.5" />)}
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#C8632B]">Headless</p>
                  <p className="text-sm text-[#1a2b4d] mt-1 break-words">{headless ? "Auto-package enabled (meets guardrails)" : "Manual QA required"}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-[#E8DDD1] bg-[#FFFCF8] p-4">
                <SlidersHorizontal className="h-5 w-5 text-[#D97943] shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#C8632B]">Thresholds</p>
                  <p className="text-sm text-[#1a2b4d] mt-1 break-words">Per-tenant scoring tuned</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
