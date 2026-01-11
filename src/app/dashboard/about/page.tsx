"use client";

import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Users, 
  History, 
  Target, 
  Award, 
  ChevronRight, 
  Layers,
  Sparkles,
  Milestone,
  ShieldAlert,
  Globe2,
  Cpu,
  Zap,
  Fingerprint
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-slate-50 selection:bg-blue-500/30 overflow-x-hidden font-sans">
      
      {/* SHARED THEME BACKGROUND */}
      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:45px_45px]" />
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_-20%,#1e40af44,transparent_70%)]" />

      <Navbar />

      <main className="relative z-10">
        
        {/* HERO SECTION - THE MANIFESTO */}
        <section className="relative pt-48 pb-20 md:pt-64 md:pb-40 text-center">
          <div className="max-w-5xl mx-auto px-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-10">
              <Sparkles size={14} /> Established 2023
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
              WE BUILD THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">UNSTOPPABLE.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-medium max-w-3xl mx-auto">
              Aether OS isn't just software. It is a sovereign digital layer designed to survive the transition from the legacy web to a truly decentralized spatial reality.
            </p>
          </div>
        </section>

        {/* SECTION 1: THE PROBLEM & THE GENESIS */}
        <section className="py-32 border-y border-white/5 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <h2 className="text-[11px] font-bold uppercase tracking-[0.4em] text-blue-500 mb-6">The Genesis</h2>
                <h3 className="text-5xl font-bold tracking-tight mb-8">Decentralization was <br/> a promise broken.</h3>
                <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                  <p>
                    For decades, the promise of the internet was freedom. Yet, we ended up in a world of digital fiefdoms—where your data, your identity, and your compute power are leased back to you by three global conglomerates.
                  </p>
                  <p>
                    Aether OS was founded by a collective of cryptographers and systems engineers who realized that to fix the web, we had to go deeper than the browser. We had to fix the **Operating System**.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-10 bg-blue-500/10 blur-[120px] rounded-full" />
                <div className="relative grid grid-cols-2 gap-4">
                  <div className="p-8 rounded-3xl bg-slate-900/50 border border-white/10 backdrop-blur-xl">
                    <ShieldAlert className="text-blue-500 mb-4" />
                    <h4 className="font-bold text-white mb-2 uppercase tracking-widest text-xs">Anti-Silo</h4>
                    <p className="text-slate-500 text-sm">No central databases. No single point of failure.</p>
                  </div>
                  <div className="p-8 rounded-3xl bg-slate-900/50 border border-white/10 backdrop-blur-xl mt-12">
                    <Fingerprint className="text-blue-500 mb-4" />
                    <h4 className="font-bold text-white mb-2 uppercase tracking-widest text-xs">Self-Sovereign</h4>
                    <p className="text-slate-500 text-sm">Encryption keys remain in the user's hardware lattice.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE TECHNICAL EVOLUTION (TIMELINE) */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white italic">The Evolutionary Path.</h2>
            </div>
            
            <div className="space-y-12">
              {[
                { year: '2023', title: 'The Whitepaper', desc: 'Publication of the Lattice-Sync Protocol, the first sub-millisecond consensus engine for local compute.' },
                { year: '2024', title: 'Alpha Mesh', desc: 'Deployment of the first 1,000 "Guardian Nodes" across 40 countries, establishing the Aether Backbone.' },
                { year: '2025', title: 'The Kernel Shift', desc: 'Transitioned from a Linux-based foundation to our proprietary Nano-Kernel architecture (v1.0).' },
                { year: '2026', title: 'Global Lattice', desc: 'Scaling to 14,000+ nodes and launching the first neural-integrated spatial OS interface.' },
              ].map((step, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-8 items-start border-l-2 border-blue-500/20 pl-8 relative group">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                  <div className="md:w-32">
                    <span className="text-2xl font-black text-blue-500/40 group-hover:text-blue-500 transition-colors">{step.year}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2 text-white uppercase tracking-tight">{step.title}</h4>
                    <p className="text-slate-400 max-w-2xl leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: CORE PHILOSOPHY CARDS */}
        <section className="py-32 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AboutCard 
                icon={<Cpu size={24}/>}
                title="Hardware Agnostic"
                description="We believe the machine shouldn't matter. Whether it's an AR visor or a server rack, Aether delivers the same neural-optimized performance."
              />
              <AboutCard 
                icon={<Globe2 size={24}/>}
                title="Borderless Compute"
                description="Our nodes don't recognize jurisdictions. Your workload is distributed across the global lattice to ensure 100% censorship resistance."
              />
              <AboutCard 
                icon={<Zap size={24}/>}
                title="Predictive Intelligence"
                description="The OS learns your intent. It pre-fetches data and allocates memory before you even execute a command, making latency a relic of the past."
              />
            </div>
          </div>
        </section>

        {/* SECTION 4: IMPACT BY THE NUMBERS */}
        <section className="py-32 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-slate-900/40 border border-white/5 rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
              <div className="grid md:grid-cols-3 gap-12 text-center relative z-10">
                <div>
                  <div className="text-6xl font-black text-white mb-2 tracking-tighter">14.2K</div>
                  <div className="text-[10px] text-blue-500 uppercase tracking-[0.4em] font-bold">Active Nodes</div>
                </div>
                <div>
                  <div className="text-6xl font-black text-white mb-2 tracking-tighter">0.4ms</div>
                  <div className="text-[10px] text-blue-500 uppercase tracking-[0.4em] font-bold">Lattice Latency</div>
                </div>
                <div>
                  <div className="text-6xl font-black text-white mb-2 tracking-tighter">100%</div>
                  <div className="text-[10px] text-blue-500 uppercase tracking-[0.4em] font-bold">Open Source</div>
                </div>
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1e40af22,transparent_70%)]" />
            </div>
          </div>
        </section>

        {/* SECTION 5: CALL TO ACTION */}
        <section className="py-48">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-[3rem] p-16 md:p-32 text-center relative overflow-hidden shadow-2xl">
              <div className="relative z-10">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 uppercase italic leading-none">Shape the <br/> future with us.</h2>
                <p className="text-blue-100 text-xl mb-12 max-w-xl mx-auto opacity-80 font-medium">
                  We are a remote-first collective of 400+ contributors. No offices, just code.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  {/* BOTTOM TO TOP FILL BUTTON */}
                  <button className="group relative overflow-hidden bg-white px-12 py-5 rounded-2xl text-black font-bold uppercase tracking-[0.2em] text-sm transition-all">
                    <span className="relative z-10 transition-colors duration-500 group-hover:text-white">Join Aether</span>
                    <div className="absolute inset-0 z-0 h-full w-full translate-y-full bg-black transition-transform duration-500 ease-out group-hover:translate-y-0" />
                  </button>
                  
                  <button className="group relative overflow-hidden border border-white/20 bg-transparent px-12 py-5 rounded-2xl text-white font-bold uppercase tracking-[0.2em] text-sm transition-all">
                    <span className="relative z-10 transition-colors duration-500 group-hover:text-black">Partner with us</span>
                    <div className="absolute inset-0 z-0 h-full w-full translate-y-full bg-white transition-transform duration-500 ease-out group-hover:translate-y-0" />
                  </button>
                </div>
              </div>
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px]" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function AboutCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-12 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:border-blue-500/30 transition-all group relative overflow-hidden backdrop-blur-sm">
      <div className="text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 tracking-tight text-white">{title}</h3>
      <p className="text-slate-400 leading-relaxed font-medium text-base">
        {description}
      </p>
      {/* FILL BAR ON HOVER */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-500 transition-all duration-700 group-hover:w-full" />
    </div>
  );
}