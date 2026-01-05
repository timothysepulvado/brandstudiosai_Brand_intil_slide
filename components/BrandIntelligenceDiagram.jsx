import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Database,
  ShieldCheck,
  Users,
  BrainCircuit,
  Share2,
  Wand2,
  Fingerprint,
  LayoutTemplate,
  ArrowUpRight,
  CheckCircle2,
  Settings2,
  Layers,
  Zap,
  Globe,
  Lock,
  Server,
  Activity,
  Check
} from "lucide-react";

// -----------------------------------------------------------------------------
// Data Configuration
// Source: Cheil Deck Slides 11 (Proof) & 12 (Performance Signals)
// -----------------------------------------------------------------------------

const clients = [
  {
    id: "jenni-kayne",
    name: "Jenni Kayne",
    status: "Review",
    description: "Consistency without sameness.",
    url: "https://jkbrandstudiosai-vis.vercel.app",
    brandFidelity: "98.2%",
    asks: [
      "Prove AI can deliver model and clothing realness at brand quality.",
      "Maintain exact model likeness across all generated assets.",
      "Extend photo shoots and create video from stills—preserving tone."
    ],
    askLink: "#", // Placeholder link
    // "Client Pack" Modules
    solutions: [
      { title: "Visual DNA Archive", icon: Fingerprint, desc: "Living archive of 'California Minimal'." },
      { title: "Campaign Generator", icon: LayoutTemplate, desc: "Seasonal asset creation studio." },
      { title: "Drift Guard", icon: ShieldCheck, desc: "Automated texture & tone protection." },
      { title: "Executive Approval", icon: Users, desc: "Creative Director sign-off workflow." }
    ]
  },
  {
    id: "cylndr",
    name: "CYLNDR",
    status: "Running",
    description: "Coherence under compression.",
    url: "https://cyndr-dysply.vercel.app",
    brandFidelity: "96.9%",
    asks: [
      "60 AI-generated images for rapid merch drop deployment.",
      "40 AI-generated videos with consistent brand styling.",
      "48-hour turnaround for on-brand asset delivery."
    ],
    askLink: "#", // Placeholder link
    // "Client Pack" Modules
    solutions: [
      { title: "Concept Creation", icon: BrainCircuit, desc: "Initial ideation and direction setting." },
      { title: "Asset Adaptation", icon: Zap, desc: "Tailoring assets to local or brand-specific needs." },
      { title: "Creative Studio", icon: Wand2, desc: "Production and refinement of creative outputs." },
      { title: "Compliance Check", icon: Lock, desc: "Final legal and brand governance review." }
    ]
  }
];

// -----------------------------------------------------------------------------
// UI Components
// -----------------------------------------------------------------------------

function ThemeLabel({ children }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="text-[10px] uppercase tracking-[0.25em] text-[#D97943] font-bold font-sans whitespace-nowrap">
        {children}
      </span>
      <div className="h-[1px] flex-1 bg-[#D97943]/30" />
    </div>
  );
}

function SectionCard({ children, className = "" }) {
  return (
    <div className={`rounded-xl border border-[#E8DDD1] bg-white/60 p-6 shadow-sm backdrop-blur-xl ${className}`}>
      {children}
    </div>
  );
}

function Badge({ status }) {
  const styles = {
    Running: "bg-[#e3f6ea] text-[#2f9a63] border-[#2f9a63]/20",
    Review: "bg-[#FFF5F0] text-[#D97943] border-[#D97943]/20",
    Attention: "bg-[#FFF0E6] text-[#C8632B] border-[#C8632B]/20",
  };
  return (
    <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${styles[status] || styles.Running}`}>
      {status}
    </span>
  );
}

function StatusChip({ label }) {
  return (
    <div className="px-3 py-1 rounded-full bg-[#1a2b4d]/5 border border-[#1a2b4d]/10 text-[10px] font-mono font-medium text-[#1a2b4d] uppercase tracking-wider">
      {label}
    </div>
  );
}

function BrandFidelityCard({ client }) {
  return (
    <div className="bg-white rounded-lg border border-[#E8DDD1] p-5 shadow-sm">
      <div className="flex justify-between items-center mb-4 border-b border-[#E8DDD1] pb-3">
        <div>
          <div className="text-[10px] uppercase tracking-widest text-[#6B7280] font-bold">Brand Fidelity</div>
          <div className="text-2xl font-display font-semibold text-[#1a2b4d] mt-1">{client.brandFidelity}</div>
        </div>
      </div>
      <div className="space-y-2">
        {[
          { label: "Brand Similarity", status: "Strong" },
          { label: "Color Alignment", status: "Strong" },
          { label: "Visual Consistency", status: "Strong" },
          { label: "Composition", status: "Review", warn: true },
        ].map((item) => (
          <div key={item.label} className="flex items-center justify-between text-xs">
            <span className="text-[#6B7280]">{item.label}</span>
            <div className="flex items-center gap-1.5">
              {item.warn ? (
                <div className="w-1.5 h-1.5 rounded-full bg-[#D97943]" />
              ) : (
                <Check className="w-3 h-3 text-[#2f9a63]" />
              )}
              <span className={`font-medium ${item.warn ? "text-[#D97943]" : "text-[#1a2b4d]"}`}>{item.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Main Component
// -----------------------------------------------------------------------------

export default function BrandIntelligenceDiagram() {
  const [selectedClientId, setSelectedClientId] = useState("jenni-kayne");

  const client = useMemo(() => clients.find(c => c.id === selectedClientId), [selectedClientId]);

  // Operating System Lanes - Updated Language
  const lanes = [
    {
      step: "01",
      title: "Brand Memory",
      icon: Database,
      desc: "Your brand's living truth, captured as Brand DNA, strengthened by use.",
    },
    {
      step: "02",
      title: "Creative Studio",
      icon: Wand2,
      desc: "Connected environment where AI accelerates and humans decide.",
    },
    {
      step: "03",
      title: "Brand Grade + Drift Control", // Updated Title
      icon: ShieldCheck,
      desc: "Moves work forward when thresholds are met, or routes to HITL.",
    },
    {
      step: "04",
      title: "Human Intelligence",
      icon: Users,
      desc: "Judgment embedded as system logic. Decisions train the system.",
    },
    {
      step: "05",
      title: "Insight Loop",
      icon: BrainCircuit,
      desc: "Turns outcomes into learning. Updates Brand Memory.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#F5F1EB] text-[#1a2b4d] font-sans selection:bg-[#D97943]/20 pb-20">
      <div className="mx-auto max-w-7xl px-6 py-10 space-y-12">

        {/* HEADER: OS Console Style */}
        <header className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#D97943]/20 pb-6">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-[#1a2b4d] tracking-tight">
              BrandStudios.AI Operating System
            </h1>
            <p className="text-base md:text-lg text-[#6B7280] font-sans font-medium">
              Session view: <span className="text-[#1a2b4d]">Jenni Kayne</span> <span className="text-[#D97943]">+</span> <span className="text-[#1a2b4d]">CYLNDR</span>
            </p>
          </div>
          <div className="flex flex-col items-end gap-3">
            <div className="flex flex-wrap items-center justify-end gap-3 mb-2">
              <StatusChip label="Governance: Active" />
              <StatusChip label="HITL: Required" />
              <StatusChip label="Build: v2.0" />
            </div>
            {/* Safe-harbored Metrics */}
            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#6B7280]">Active Pilots</p>
                <p className="text-xl font-display text-[#1a2b4d]">2</p>
              </div>
            </div>
          </div>
        </header>

        {/* SECTION 1: Client & Governance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left Column: Client Selector & Fidelity (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div>
              <ThemeLabel>CLIENT</ThemeLabel>
              <div className="space-y-3">
                {clients.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedClientId(c.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 group ${selectedClientId === c.id
                      ? "bg-white border-[#D97943] shadow-lg ring-1 ring-[#D97943]/10"
                      : "bg-white/40 border-[#E8DDD1] hover:bg-white/80 hover:border-[#D97943]/50"
                      }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`font-display font-semibold text-xl ${selectedClientId === c.id ? "text-[#1a2b4d]" : "text-[#6B7280]"}`}>
                        {c.name}
                      </span>
                      <Badge status={c.status} />
                    </div>
                    <p className="text-xs text-[#6B7280] font-light italic">
                      {c.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Governance Anchor: Brand Fidelity Widget */}
            <div>
              <ThemeLabel>GOVERNANCE PROOF</ThemeLabel>
              <BrandFidelityCard client={client} />
              <div className="mt-3 text-[10px] text-[#6B7280] text-center italic">
                Real-time signal from active pilot data
              </div>
            </div>
          </div>

          {/* Right Column: Client Pack & Insights (8 Cols) */}
          <div className="lg:col-span-8 flex flex-col gap-8">

            {/* Client Pack (Installed Modules) */}
            <div>
              <ThemeLabel>CLIENT PACK (INSTALLED MODULES)</ThemeLabel>
              <div className="bg-white/60 backdrop-blur-xl rounded-xl border border-[#E8DDD1] shadow-sm overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                  {client.solutions.map((sol, i) => (
                    <div
                      key={sol.title}
                      className={`
                            relative p-6 group cursor-default
                            border-b sm:border-b-0 lg:border-r border-[#E8DDD1] last:border-r-0
                            hover:bg-white transition-colors
                          `}
                    >
                      {/* Puzzle Notch visual for interlocking look */}
                      {i < 3 && (
                        <div className="hidden lg:block absolute -right-[6px] top-1/2 -translate-y-1/2 w-[11px] h-[16px] bg-[#F5F1EB] z-10 rounded-full border border-[#E8DDD1] shadow-inner" />
                      )}

                      <div className="flex items-center justify-between mb-3">
                        <div className="text-[#D97943] group-hover:scale-110 transition-transform duration-300">
                          <sol.icon className="w-6 h-6" />
                        </div>
                      </div>
                      <h4 className="font-display font-semibold text-base text-[#1a2b4d] mb-1">{sol.title}</h4>
                      <p className="text-[11px] text-[#6B7280] leading-snug">{sol.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* The Ask Panel */}
            <div>
              <ThemeLabel>THE ASK</ThemeLabel>
              <SectionCard className="grid md:grid-cols-2 gap-6 items-center">
                <div className="space-y-4">
                  <ul className="space-y-4">
                    {client.asks.map((ask, i) => (
                      <motion.li
                        key={selectedClientId + i}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3 text-sm text-[#4B5563] leading-relaxed"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#2f9a63] shrink-0 mt-0.5" />
                        <span>{ask}</span>
                      </motion.li>
                    ))}
                  </ul>
                  {client.askLink && client.askLink !== "#" && (
                    <a
                      href={client.askLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-[#D97943] hover:text-[#b96232] font-medium mt-2"
                    >
                      Learn more <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <div className="flex flex-col items-center justify-center p-6 bg-[#F5F1EB]/50 rounded-xl border border-[#E8DDD1] text-center space-y-3">
                  <div className="text-[10px] uppercase tracking-widest text-[#6B7280]">Live Environment</div>
                  <h3 className="font-display text-2xl text-[#1a2b4d]">{client.name} Dashboard</h3>
                  <a
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#D97943] text-white px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-[#b96232] transition-colors shadow-md hover:shadow-lg"
                  >
                    View Dashboard <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </SectionCard>
            </div>
          </div>
        </div>

        {/* SECTION 2: OS Core Services */}
        <div>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#D97943] font-bold font-sans whitespace-nowrap">
              OS CORE SERVICES (ALWAYS ON)
            </span>
            <div className="h-[1px] flex-1 bg-[#D97943]/30" />
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-[#FFF5F0] border border-[#D97943]/20 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D97943]" />
              <span className="text-[10px] font-bold text-[#D97943] uppercase tracking-wide">Ship-Gate: auto-pass ≥ 90%</span>
            </div>
          </div>

          <div className="relative pt-6">
            {/* Bus Line - Faint backplane */}
            <div className="hidden lg:block absolute top-[3.5rem] left-0 right-0 h-[6px] bg-[#E8DDD1]/40 border-y border-[#E8DDD1] z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {lanes.map((lane, i) => (
                <div key={lane.title} className="relative z-10 h-full">
                  <div className="h-full bg-white rounded-xl border border-[#E8DDD1] p-5 hover:border-[#D97943] hover:shadow-lg transition-all group flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.02)]">

                    {/* Bus Connector (Vertical) */}
                    <div className="hidden lg:block absolute -top-[24px] left-1/2 -translate-x-1/2 w-[2px] h-[24px] bg-[#E8DDD1] group-hover:bg-[#D97943] transition-colors" />
                    <div className="hidden lg:block absolute -top-[4px] left-1/2 -translate-x-1/2 w-[6px] h-[6px] rounded-full border border-[#E8DDD1] bg-white group-hover:border-[#D97943] transition-colors" />

                    {/* Step Number */}
                    <div className="w-6 h-6 rounded-full bg-[#1a2b4d] text-[#F5F1EB] flex items-center justify-center font-mono text-[10px] font-bold shadow-md mb-3 group-hover:bg-[#D97943] transition-colors">
                      {lane.step}
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <lane.icon className="w-5 h-5 text-[#D97943]" />
                      <h4 className="text-sm font-bold uppercase tracking-tight text-[#1a2b4d] leading-tight">{lane.title}</h4>
                    </div>

                    <p className="text-xs text-[#6B7280] leading-relaxed mb-3">
                      {lane.desc}
                    </p>

                    {lane.chips && (
                      <div className="mt-auto flex flex-wrap gap-1 pt-2 border-t border-[#F5F1EB]">
                        {lane.chips.map(chip => (
                          <span key={chip} className="px-1.5 py-0.5 rounded bg-[#F5F1EB] text-[9px] text-[#6B7280] font-medium border border-[#E8DDD1]">
                            {chip}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex justify-center items-center gap-6 opacity-60">
            <div className="flex items-center gap-2">
              <Server className="w-3 h-3 text-[#6B7280]" />
              <span className="text-[10px] text-[#6B7280] font-mono">System Status: Nominal</span>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="w-3 h-3 text-[#6B7280]" />
              <span className="text-[10px] text-[#6B7280] font-mono">Drift Monitoring: Active</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
