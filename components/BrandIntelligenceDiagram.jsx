import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Check,
  Cpu,
  Terminal,
  MoreHorizontal,
  Image as ImageIcon,
  Play,
  GitCommit,
  CircuitBoard
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
    theme: "light",
    description: "Consistency without sameness.",
    url: "https://jkbrandstudiosai-vis.vercel.app",
    insights: [
      "Cycle time reduced by 40% for seasonal campaign assets.",
      "Governance issues dropped 70% via automated Quality Gates.",
      "Human Intelligence layer refining 'California Minimal' tone."
    ],
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
    theme: "dark",
    description: "Coherence under compression.",
    url: "https://cyndr-dysply.vercel.app",
    insights: [
      "Localized asset volume up 320% across regional markets.",
      "Turnaround time decreased by 65% for adaptation requests.",
      "Tech-forward motion graphics aligning 98% with Brand Grade."
    ],
    // "Client Pack" Modules
    solutions: [
      { title: "Global Asset DB", icon: Globe, desc: "Centralized network-wide memory." },
      { title: "Adaptation Engine", icon: Zap, desc: "High-velocity localization & motion." },
      { title: "Compliance Check", icon: Lock, desc: "Strict brand & legal guardrails." },
      { title: "Regional Audit", icon: Layers, desc: "Distributed human review & logs." }
    ]
  }
];

// -----------------------------------------------------------------------------
// UI Components
// -----------------------------------------------------------------------------

function TechLabel({ children }) {
  return (
    <div className="flex items-center gap-2 mb-3 opacity-80">
      <div className="w-1.5 h-1.5 bg-[#D97943] rounded-sm" />
      <span className="text-[10px] uppercase tracking-[0.2em] text-[#1a2b4d] font-mono font-medium">
        {children}
      </span>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-[#1a2b4d]/20 to-transparent" />
    </div>
  );
}

function TechCard({ children, className = "", noPadding = false }) {
  return (
    <div className={`relative bg-[#FDFBF7] border border-[#1a2b4d]/10 shadow-[2px_4px_16px_rgba(26,43,77,0.03)] overflow-hidden group ${className}`}>
      {/* Tech Corners */}
      <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-[#D97943]/40" />
      <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-[#D97943]/40" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-[#D97943]/40" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-[#D97943]/40" />
      
      <div className={`${noPadding ? "" : "p-6"}`}>
        {children}
      </div>
    </div>
  );
}

function StatusChip({ label, active = false }) {
  return (
    <div className={`px-2 py-1 rounded-sm border text-[9px] font-mono uppercase tracking-wider ${
      active 
      ? "bg-[#D97943]/10 border-[#D97943] text-[#D97943]" 
      : "bg-white border-[#1a2b4d]/10 text-[#6B7280]"
    }`}>
      {label}
    </div>
  );
}

function BrandFidelityMetric() {
  return (
    <TechCard className="h-full">
       <div className="flex justify-between items-start mb-6">
          <div>
             <div className="text-[9px] uppercase tracking-[0.2em] text-[#6B7280] font-mono mb-1">Compute Score</div>
             <div className="text-[9px] uppercase tracking-[0.2em] text-[#1a2b4d] font-bold">Brand Fidelity</div>
          </div>
          <div className="px-2 py-0.5 border border-[#2f9a63] text-[#2f9a63] text-[9px] font-mono uppercase tracking-widest bg-[#2f9a63]/5">
            Auto-Pass
          </div>
       </div>

       <div className="flex items-end gap-3 mb-6">
          <div className="text-5xl font-light text-[#1a2b4d] tracking-tighter">92.1<span className="text-2xl text-[#D97943]">%</span></div>
       </div>

       <div className="space-y-3 pt-4 border-t border-[#1a2b4d]/5">
          {[
             { label: "Visual DNA Match", val: 98 },
             { label: "Tone Compliance", val: 94 },
             { label: "Composition Drift", val: 82, warn: true }
          ].map((m, i) => (
             <div key={i} className="group">
                <div className="flex justify-between text-[10px] font-mono text-[#6B7280] mb-1">
                   <span>{m.label}</span>
                   <span className={m.warn ? "text-[#D97943]" : ""}>{m.val}%</span>
                </div>
                <div className="h-1 w-full bg-[#1a2b4d]/5 overflow-hidden">
                   <div 
                      className={`h-full ${m.warn ? "bg-[#D97943]" : "bg-[#1a2b4d]"}`} 
                      style={{ width: `${m.val}%` }}
                   />
                </div>
             </div>
          ))}
       </div>
    </TechCard>
  );
}

// Simulated Website Previews (Sidebar Crop Style)
function WebsiteMock({ client }) {
  if (client.id === "jenni-kayne") {
    return (
      <div className="w-full h-full bg-[#FAF9F6] flex overflow-hidden relative font-serif">
        {/* Sidebar (Left Side of Screen) */}
        <div className="w-[140px] h-full bg-white border-r border-[#E8DDD1] flex flex-col pt-6 px-4 shrink-0 shadow-[2px_0_10px_rgba(0,0,0,0.02)] z-10">
            <div className="text-xl font-bold text-[#1a2b4d] italic mb-8 tracking-tight">JK Studios</div>
            <div className="space-y-6">
                <div className="text-[8px] uppercase tracking-widest text-[#6B7280] font-sans">Main Menu</div>
                <div className="space-y-3">
                    <div className="flex items-center gap-2 text-[#1a2b4d] font-medium text-xs font-sans bg-[#F5F1EB] p-2 rounded -mx-2">
                        <div className="w-1.5 h-1.5 bg-[#D97943] rounded-full" />
                        Dashboard
                    </div>
                    <div className="flex items-center gap-2 text-[#6B7280] text-xs font-sans pl-1 hover:text-[#1a2b4d] transition-colors cursor-pointer">Campaigns</div>
                    <div className="flex items-center gap-2 text-[#6B7280] text-xs font-sans pl-1 hover:text-[#1a2b4d] transition-colors cursor-pointer">Assets</div>
                    <div className="flex items-center gap-2 text-[#6B7280] text-xs font-sans pl-1 hover:text-[#1a2b4d] transition-colors cursor-pointer">Insights</div>
                </div>
            </div>
            <div className="mt-auto mb-4 p-3 bg-[#F5F1EB] rounded text-center">
                <div className="text-[8px] uppercase tracking-wider text-[#6B7280] font-sans mb-1">Storage</div>
                <div className="w-full h-1 bg-[#E8DDD1] rounded-full overflow-hidden">
                    <div className="w-2/3 h-full bg-[#D97943]" />
                </div>
            </div>
        </div>
        
        {/* Sliver of Main Content */}
        <div className="flex-1 p-8 bg-[#FAF9F6]">
            <div className="flex items-baseline justify-between mb-6 border-b border-[#E8DDD1] pb-4">
                 <h2 className="text-xl text-[#1a2b4d] italic">Summer '26</h2>
                 <span className="text-[9px] font-sans text-[#D97943] border border-[#D97943]/30 px-2 py-0.5 rounded-full uppercase tracking-widest bg-[#D97943]/5">Drafting</span>
            </div>
            <div className="grid grid-cols-2 gap-3 opacity-80">
                 <div className="aspect-[3/4] bg-[#EBE5DA] relative group cursor-pointer overflow-hidden">
                     <ImageIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white w-6 h-6 opacity-50" />
                     <div className="absolute bottom-0 left-0 right-0 p-2 bg-white/90 text-[8px] font-sans text-[#1a2b4d] translate-y-full group-hover:translate-y-0 transition-transform">img_2026_cam_01.raw</div>
                 </div>
                 <div className="aspect-[3/4] bg-[#EBE5DA] relative group cursor-pointer overflow-hidden">
                      <ImageIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white w-6 h-6 opacity-50" />
                 </div>
            </div>
        </div>
      </div>
    )
  }

  if (client.id === "cylndr") {
    return (
      <div className="w-full h-full bg-[#0F172A] flex overflow-hidden relative font-sans text-white">
         {/* Sidebar */}
         <div className="w-[140px] h-full bg-[#020617] border-r border-white/10 flex flex-col pt-6 px-3 shrink-0 shadow-xl z-10">
             <div className="flex items-center gap-2 mb-8 px-2">
                 <div className="w-4 h-4 rounded bg-[#3B82F6] flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                 </div>
                 <span className="font-bold text-sm tracking-tighter font-mono">CYLNDR</span>
             </div>
             
             <div className="space-y-1">
                 <div className="flex items-center gap-3 p-2 bg-[#3B82F6]/10 text-[#3B82F6] rounded text-[10px] font-mono border border-[#3B82F6]/20 cursor-default">
                     <Activity className="w-3 h-3" />
                     MONITOR_01
                 </div>
                 <div className="flex items-center gap-3 p-2 text-slate-400 hover:text-white rounded text-[10px] font-mono transition-colors cursor-pointer">
                     <Database className="w-3 h-3" />
                     INGEST_DB
                 </div>
                 <div className="flex items-center gap-3 p-2 text-slate-400 hover:text-white rounded text-[10px] font-mono transition-colors cursor-pointer">
                     <Cpu className="w-3 h-3" />
                     RENDER_FARM
                 </div>
                 <div className="flex items-center gap-3 p-2 text-slate-400 hover:text-white rounded text-[10px] font-mono transition-colors cursor-pointer">
                     <ShieldCheck className="w-3 h-3" />
                     AUDIT_LOGS
                 </div>
             </div>
             
             <div className="mt-auto border-t border-white/10 pt-4 pb-4 px-2">
                 <div className="flex justify-between text-[8px] text-slate-400 font-mono mb-1">
                     <span>CPU_LOAD</span>
                     <span className="text-red-400">98%</span>
                 </div>
                 <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                     <div className="w-[98%] h-full bg-red-500 animate-pulse" />
                 </div>
             </div>
         </div>

         {/* Content Sliver */}
         <div className="flex-1 p-6 bg-[#0F172A]">
             <div className="flex items-center gap-2 mb-6 text-slate-500 text-[10px] font-mono border-b border-white/5 pb-2">
                 <span>/</span>
                 <span className="hover:text-[#3B82F6] cursor-pointer">SYS_ROOT</span>
                 <span>/</span>
                 <span className="text-white">LIVE_DASHBOARD</span>
             </div>
             
             <div className="grid gap-3">
                 <div className="p-3 bg-[#1E293B] border border-white/5 rounded flex justify-between items-center group cursor-pointer hover:border-[#3B82F6]/30 transition-colors">
                     <div>
                        <div className="text-[8px] text-slate-500 uppercase tracking-widest mb-1">Throughput</div>
                        <div className="text-lg font-mono tracking-tight group-hover:text-[#3B82F6] transition-colors">2.4 TB/s</div>
                     </div>
                     <Activity className="w-4 h-4 text-[#3B82F6]" />
                 </div>
                 <div className="p-3 bg-[#1E293B] border border-white/5 rounded relative overflow-hidden h-24">
                     <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%)] bg-[length:250%_250%] animate-[pulse_4s_ease-in-out_infinite]" />
                     <div className="flex gap-1 items-end h-full w-full justify-between px-1 pb-1">
                         {[40, 60, 35, 80, 50, 90, 45, 70, 30, 60].map((h, i) => (
                             <div key={i} className="w-1.5 bg-[#3B82F6] opacity-60 rounded-t-sm transition-all duration-500" style={{ height: `${h}%` }} />
                         ))}
                     </div>
                 </div>
             </div>
         </div>
      </div>
    )
  }
}

// -----------------------------------------------------------------------------
// Main Component
// -----------------------------------------------------------------------------

export default function BrandIntelligenceDiagram() {
  const [selectedClientId, setSelectedClientId] = useState("jenni-kayne");
  const client = useMemo(() => clients.find(c => c.id === selectedClientId), [selectedClientId]);

  // Operating System Lanes - Full Copy Restored
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
      title: "Brand Grade + Drift", 
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
    {
      step: "06",
      title: "Activation & Dist", 
      icon: Share2,
      desc: "Headless delivery across regions, agencies, and channels.",
      chips: ["DAM", "CMS", "Media", "Commerce"]
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#F2EFE9] text-[#1a2b4d] font-sans selection:bg-[#D97943]/20 pb-20 relative overflow-hidden">
      
      {/* Background Grid Texture */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#1a2b4d 1px, transparent 1px), linear-gradient(90deg, #1a2b4d 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Subtle Grain */}
      <div className="absolute inset-0 z-0 opacity-[0.4] pointer-events-none mix-blend-multiply" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")` }} />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-8 space-y-10">
        
        {/* HEADER: Technical Console */}
        <header className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#1a2b4d]/10">
          <div className="space-y-1">
             <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-[#D97943]" />
                <p className="text-[10px] uppercase tracking-[0.3em] font-mono text-[#1a2b4d]/60">
                  Proforma Dashboard
                </p>
             </div>
             <h1 className="text-3xl lg:text-5xl font-light tracking-[-0.03em] text-[#1a2b4d]">
               BrandStudios<span className="font-serif italic font-bold text-[#D97943]">.AI</span> OS
             </h1>
             <p className="text-sm text-[#6B7280] font-mono mt-1">
                Session view: <span className="text-[#1a2b4d] font-semibold">Jenni Kayne</span> <span className="text-[#D97943]">+</span> <span className="text-[#1a2b4d] font-semibold">CYLNDR</span>
             </p>
          </div>
          
          <div className="flex flex-col items-end gap-3">
             <div className="flex gap-2 mb-1">
                <StatusChip label="Governance: Active" active />
                <StatusChip label="HITL: Required" active />
                <StatusChip label="Build: v2.0" />
             </div>
             
             <div className="flex items-center gap-8">
                <div className="text-right hidden md:block">
                   <p className="text-[9px] uppercase tracking-widest text-[#6B7280] font-mono mb-1">Active Pilots</p>
                   <p className="text-xl font-mono text-[#1a2b4d]">2</p>
                </div>
                <div className="text-right hidden md:block">
                   <p className="text-[9px] uppercase tracking-widest text-[#6B7280] font-mono mb-1">Assets Governed</p>
                   <p className="text-xl font-mono text-[#1a2b4d]">12,402 <span className="text-xs text-[#6B7280]">(Pilot)</span></p>
                </div>
             </div>
          </div>
        </header>

        {/* MAIN DASHBOARD GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* LEFT: Client Select & Metrics (3 Cols) */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <nav aria-label="Client Selector">
              <TechLabel>Active Workstreams</TechLabel>
              <div className="space-y-2">
                {clients.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedClientId(c.id)}
                    className={`w-full group relative overflow-hidden text-left p-4 transition-all duration-300 border ${
                      selectedClientId === c.id
                        ? "bg-[#1a2b4d] border-[#1a2b4d] text-[#F5F1EB] shadow-lg"
                        : "bg-white border-transparent hover:border-[#1a2b4d]/20 text-[#6B7280]"
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className={`font-mono text-sm uppercase tracking-wider font-bold ${selectedClientId === c.id ? "text-[#D97943]" : "text-[#1a2b4d]"}`}>
                        {c.name}
                      </span>
                      {selectedClientId === c.id && <Activity className="w-3 h-3 text-[#D97943]" />}
                    </div>
                    <div className="flex items-center justify-between">
                       <span className="text-[10px] opacity-70 font-mono">{c.status} Protocol</span>
                       <ArrowUpRight className={`w-3 h-3 transition-transform ${selectedClientId === c.id ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"}`} />
                    </div>
                  </button>
                ))}
              </div>
            </nav>

            <div>
               <TechLabel>Governance Proof</TechLabel>
               <BrandFidelityMetric />
            </div>
          </div>

          {/* MIDDLE: Active Modules (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
             <div>
                <TechLabel>Client Pack (Installed Modules)</TechLabel>
                <div className="grid grid-cols-2 gap-4">
                   {client.solutions.map((sol, i) => (
                      <TechCard key={i} className="hover:-translate-y-1 transition-transform duration-300 cursor-default bg-white">
                         <div className="flex items-start justify-between mb-4">
                            <sol.icon className="w-5 h-5 text-[#D97943]" />
                            <div className="text-[9px] font-mono text-[#1a2b4d]/40">MOD_0{i+1}</div>
                         </div>
                         <h3 className="text-sm font-bold text-[#1a2b4d] mb-2">{sol.title}</h3>
                         <p className="text-xs text-[#6B7280] leading-relaxed border-t border-[#1a2b4d]/5 pt-2">
                            {sol.desc}
                         </p>
                      </TechCard>
                   ))}
                </div>
             </div>

             <div>
                <TechLabel>Insights (Live Feed)</TechLabel>
                <TechCard className="bg-[#1a2b4d] text-white h-full min-h-[200px]" noPadding>
                   <div className="p-3 border-b border-white/10 flex justify-between items-center bg-[#152340]">
                      <div className="flex items-center gap-2">
                         <Terminal className="w-4 h-4 text-[#D97943]" />
                         <span className="font-mono text-[10px] text-[#D97943] uppercase tracking-wider">System_Output_Log</span>
                      </div>
                      <div className="flex gap-1.5">
                         <div className="w-1.5 h-1.5 rounded-full bg-[#FF5F56]" />
                         <div className="w-1.5 h-1.5 rounded-full bg-[#FFBD2E]" />
                         <div className="w-1.5 h-1.5 rounded-full bg-[#27C93F]" />
                      </div>
                   </div>
                   <div className="p-5 font-mono text-sm leading-relaxed space-y-4">
                      {client.insights.map((insight, i) => (
                         <div key={i} className="flex gap-3 items-start group">
                            <span className="text-white/50 select-none whitespace-nowrap font-medium">{`0${i+1}::`}</span>
                            <div className="flex-1 text-white group-hover:text-white transition-colors font-medium">
                               <span className="text-[#D97943] mr-2 font-bold">{`>`}</span>
                               {insight}
                            </div>
                         </div>
                      ))}
                      <div className="flex gap-2 items-center text-[#D97943] animate-pulse pt-2">
                         <span className="select-none">{`_`}</span>
                      </div>
                   </div>
                </TechCard>
             </div>
          </div>

          {/* RIGHT: Live Preview (3 Cols) */}
          <div className="lg:col-span-3">
             <TechLabel>Output Stream</TechLabel>
             <div className="h-full min-h-[400px] bg-white border border-[#1a2b4d]/10 p-2 relative group flex flex-col">
                {/* Faux Browser Chrome */}
                <div className="bg-[#F5F1EB] border-b border-[#E8DDD1] p-2 flex items-center gap-2 mb-2 shrink-0">
                   <Globe className="w-3 h-3 text-[#6B7280]" />
                   <div className="flex-1 bg-white h-5 border border-[#E8DDD1] rounded-sm text-[8px] flex items-center px-2 text-[#6B7280] font-mono truncate">
                      {client.url}
                   </div>
                </div>
                
                {/* Visual Mock Area */}
                <div className="relative flex-1 bg-[#F5F1EB] overflow-hidden border border-[#E8DDD1]/50 group">
                   <AnimatePresence mode="wait">
                      <motion.div 
                        key={client.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-full h-full"
                      >
                         <WebsiteMock client={client} />
                      </motion.div>
                   </AnimatePresence>
                   
                   {/* Hover Overlay */}
                   <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                      <a 
                         href={client.url}
                         target="_blank"
                         rel="noreferrer"
                         className="flex items-center gap-2 px-6 py-3 bg-[#1a2b4d] text-white text-xs font-mono uppercase tracking-widest shadow-xl hover:scale-105 transition-transform"
                      >
                         Open Live Environment <ArrowUpRight className="w-3 h-3" />
                      </a>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* SECTION 2: System Architecture (Bus Layout) */}
        <div className="mt-12 pt-8 relative">
           {/* Section Title as a Chip on the Bus */}
           <div className="absolute top-0 left-8 -translate-x-1/2 bg-[#F2EFE9] px-4 text-[#D97943] font-mono text-[9px] uppercase tracking-widest flex items-center gap-2 z-10">
                <CircuitBoard className="w-3 h-3" />
                OS Governance Bus • v2.6.0
           </div>

           {/* The Bus Line */}
           <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#1a2b4d]/10" />
           <div className="absolute top-0 left-0 w-8 h-[2px] bg-[#D97943]" />

           {/* Vertical Connectors Container */}
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pt-6">
               {lanes.map((lane, i) => (
                  <div key={lane.title} className="relative group">
                      {/* Vertical Trace Line to Bus */}
                      <div className="absolute -top-[24px] left-1/2 -translate-x-1/2 w-[1px] h-[24px] bg-[#1a2b4d]/10 group-hover:bg-[#D97943] transition-colors" />
                      
                      {/* Connector Dot on Bus */}
                      <div className="absolute -top-[27px] left-1/2 -translate-x-1/2 w-[5px] h-[5px] rounded-full bg-[#1a2b4d]/20 group-hover:bg-[#D97943] transition-colors" />

                      {/* Hardware Module Card */}
                      <div className="bg-white border border-[#1a2b4d]/10 p-4 h-full hover:border-[#D97943] transition-all duration-300 relative z-10 shadow-sm hover:shadow-md flex flex-col group-hover:-translate-y-1">
                          
                          {/* Module Header */}
                          <div className="flex justify-between items-center mb-3 pb-2 border-b border-[#1a2b4d]/5 border-dashed">
                             <span className="text-[9px] font-mono text-[#1a2b4d]/40 group-hover:text-[#D97943] transition-colors">
                               SYS.0{i+1}
                             </span>
                             <div className="w-1.5 h-1.5 rounded-full bg-[#2f9a63] animate-pulse" />
                          </div>

                          <div className="flex items-center gap-2 mb-2">
                             <lane.icon className="w-4 h-4 text-[#D97943]" />
                             <h4 className="text-xs font-bold uppercase tracking-tight text-[#1a2b4d] leading-none">{lane.title}</h4>
                          </div>
                          
                          <p className="text-[10px] text-[#6B7280] leading-snug mb-3">
                             {lane.desc}
                          </p>

                          {lane.chips && (
                            <div className="mt-auto flex flex-wrap gap-1 pt-2">
                               {lane.chips.map(chip => (
                                 <span key={chip} className="px-1 py-0.5 bg-[#F5F1EB] text-[8px] text-[#6B7280] font-mono border border-[#E8DDD1] rounded-sm">
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

      </div>
    </div>
  );
}
