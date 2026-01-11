"use client";

import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Layers, 
  ChevronRight, 
  Github, 
  Globe, 
  Terminal, 
  Lock, 
  Command,
  Twitter,
  MessageCircle,
  ArrowUpRight,
  Activity,
  Server,
  Network
} from 'lucide-react';


// --- MAIN PAGE ---

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-slate-50 selection:bg-blue-500/30 overflow-x-hidden font-sans">
       

      {/* THEME BACKGROUND: GRID & GLOW */}
      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:45px_45px]" />
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_-20%,#1e40af44,transparent_70%)]" />

      <Navbar />

    
      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="relative pt-48 pb-20 md:pt-64 md:pb-40">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Lattice-Sync V2.0.4 Online
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
              The Operating System <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                For The Global Edge.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
              Aether OS abstracts hardware into a single, unified neural fabric. 
              Zero latency, infinite scale, and natively secure.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              {/* PRIMARY FILL BUTTON */}
              <button className="group relative w-full sm:w-auto overflow-hidden bg-blue-600 px-10 py-4 rounded-xl text-white font-bold uppercase tracking-widest text-xs transition-all shadow-[0_20px_40px_rgba(37,99,235,0.2)]">
                <span className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-black">
                  Start Building <ChevronRight size={16} />
                </span>
                <div className="absolute inset-0 z-0 h-full w-full translate-y-full bg-white transition-transform duration-500 ease-out group-hover:translate-y-0" />
              </button>

              {/* SECONDARY FILL BUTTON */}
              <button className="group relative w-full sm:w-auto overflow-hidden bg-white/5 border border-white/10 px-10 py-4 rounded-xl text-white font-bold uppercase tracking-widest text-xs transition-all">
                <span className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-black">
                  <Github size={16} /> Repository
                </span>
                <div className="absolute inset-0 z-0 h-full w-full translate-y-full bg-white transition-transform duration-500 ease-out group-hover:translate-y-0" />
              </button>
            </div>
          </div>
        </section>

        {/* TRUST STATS */}
        <section className="py-20 border-y border-white/5 bg-black/40 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {[
                { label: 'Core Latency', val: '0.4ms' },
                { label: 'Active Nodes', val: '14.2K' },
                { label: 'Throughput', val: '800 GB/s' },
                { label: 'Encryption', val: 'Lattice' },
              ].map((stat, i) => (
                <div key={i} className="text-center group cursor-default">
                  <div className="text-4xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors tracking-tighter">{stat.val}</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-[0.3em] font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURE CARDS */}
        <section id="features" className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-left mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <h2 className="text-[11px] font-bold uppercase tracking-[0.4em] text-blue-500 mb-4">Architecture</h2>
                <h3 className="text-5xl font-bold tracking-tight text-white">Advanced Foundations.</h3>
              </div>
              <p className="text-slate-400 max-w-sm font-medium">
                Rebuilding the kernel for the era of spatial intelligence and distributed sovereignty.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <FeatureCard 
                icon={<Zap className="text-blue-400" />}
                title="Nano-Kernel"
                description="A lightweight micro-kernel architecture designed for sub-millisecond task switching."
              />
              <FeatureCard 
                icon={<Lock className="text-blue-400" />}
                title="Quantum-Safe"
                description="Post-quantum lattice encryption integrated directly into the core I/O stack."
              />
              <FeatureCard 
                icon={<Cpu className="text-blue-400" />}
                title="Neural Priority"
                description="AI-first scheduling that predicts resource demand before processes initialize."
              />
            </div>
          </div>
        </section>

        {/* NEW ADDED CONTENT: SYSTEM METRICS SECTION */}
        <section className="py-32 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Activity className="text-blue-500 mb-6" size={40} />
                <h2 className="text-4xl font-bold mb-6 tracking-tight">Real-time Performance <br />Visualization.</h2>
                <p className="text-slate-400 text-lg mb-8 font-medium">
                  Aether provides a native telemetry engine. Monitor every node, process, and neural link across the global lattice with zero overhead.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: <Server size={16}/>, text: "Distributed State Management" },
                    { icon: <Network size={16}/>, text: "Auto-Healing Node Mesh" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                       <div className="text-blue-400">{item.icon}</div>
                       <span className="text-sm font-bold uppercase tracking-widest text-slate-300">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-4 bg-blue-600/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative bg-slate-900 border border-white/10 rounded-3xl p-8 overflow-hidden shadow-2xl">
                    <div className="h-64 flex items-end gap-2">
                        {[40, 70, 45, 90, 65, 80, 30, 95, 50, 75].map((h, i) => (
                          <div key={i} className="flex-1 bg-blue-600/20 border-t-2 border-blue-500 rounded-t-sm animate-pulse" style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }} />
                        ))}
                    </div>
                    <div className="mt-6 flex justify-between text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                        <span>Cluster Load</span>
                        <span>94.2% Efficiency</span>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-40">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-[3rem] p-16 md:p-32 text-center relative overflow-hidden shadow-2xl">
              <div className="relative z-10">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-none">Initialize Your Node.</h2>
                <p className="text-blue-100 text-xl mb-12 max-w-xl mx-auto opacity-80 font-medium">
                  Be part of the infrastructure. Join 14,000+ nodes powering the spatial web.
                </p>
                <button className="group relative overflow-hidden bg-white px-12 py-6 rounded-2xl text-black font-bold uppercase tracking-[0.2em] text-sm transition-all shadow-xl">
                  <span className="relative z-10 transition-colors duration-500 group-hover:text-white">Get Started Now</span>
                  <div className="absolute inset-0 z-0 h-full w-full translate-y-full bg-black transition-transform duration-500 ease-out group-hover:translate-y-0" />
                </button>
              </div>
              {/* Abstract decorative glow */}
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px]" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-10 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-blue-500/30 transition-all group relative overflow-hidden backdrop-blur-sm">
      <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-blue-600/10 transition-all duration-500">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 tracking-tight text-white">{title}</h3>
      <p className="text-slate-400 leading-relaxed font-medium text-sm">
        {description}
      </p>
      {/* Decorative line animation */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-500 transition-all duration-700 group-hover:w-full" />
    </div>
  );
}