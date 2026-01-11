"use client";

import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Cpu,
  Cloud,
  Code2,
  ShieldCheck,
  Workflow,
  Globe,
  Zap,
  Terminal,
  ChevronRight,
  Database,
  Search,
  Lock
} from 'lucide-react';

// --- MAIN PAGE ---

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-slate-50 selection:bg-blue-500/30 overflow-x-hidden font-sans">

      {/* SHARED THEME BACKGROUND */}
      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:45px_45px]" />
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_-20%,#1e40af44,transparent_70%)]" />

      <Navbar />

      <main className="relative z-10">

        {/* HERO SECTION */}
        <section className="relative pt-48 pb-20 md:pt-64 md:pb-32 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-10">
              <Zap size={14} className="animate-pulse" /> Protocol Services v2.0
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
              Decentralized <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Infrastructure.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-medium">
              We provide the tools to build, deploy, and scale applications on the world’s first distributed neural fabric. No central servers. No limits.
            </p>
          </div>
        </section>

        {/* CORE SERVICES GRID */}
        <section className="py-24 border-y border-white/5 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              <ServiceCard
                icon={<Cloud size={32} />}
                title="Lattice Compute"
                description="Harness the idle power of 14,000+ nodes. Our distributed compute engine allows you to run complex workloads without a single cloud provider."
                features={["Auto-scaling Nodes", "Zero-Latency Routing", "Edge-Native Execution"]}
              />

              <ServiceCard
                icon={<ShieldCheck size={32} />}
                title="Sovereign Security"
                description="Enterprise-grade lattice encryption as a service. Secure your company's data at the kernel level with post-quantum protocols."
                features={["End-to-End Encryption", "Biometric Kernel Access", "Identity Masking"]}
              />

              <ServiceCard
                icon={<Code2 size={32} />}
                title="Neural API"
                description="Integrate Aether’s native AI primitives into your apps. Predictive loading and intent-based I/O built directly into your dev workflow."
                features={["LLM Edge Deployment", "Predictive Caching", "Real-time Telemetry"]}
              />

              <ServiceCard
                icon={<Database size={32} />}
                title="Immutable Storage"
                description="Store data across a fragmented global mesh. Your files are broken into encrypted shards, ensuring they are always available but never visible."
                features={["99.999% Availability", "Auto-Sharding", "Global Sync"]}
              />

              <ServiceCard
                icon={<Globe size={32} />}
                title="Mesh Networking"
                description="Build private, decentralized networks within the Aether ecosystem. Secure P2P communication for global teams."
                features={["Encrypted Tunneling", "Hidden IP Nodes", "Anti-DDoS Fabric"]}
              />

              <ServiceCard
                icon={<Terminal size={32} />}
                title="Custom OS Builds"
                description="Tailor Aether OS for specific hardware. From IoT devices to high-performance workstations, we build optimized kernels."
                features={["Custom Drivers", "Kernel-level Hardening", "OTA Mesh Updates"]}
              />

            </div>
          </div>
        </section>

        {/* TECHNICAL ARCHITECTURE DIAGRAM SECTION */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8 tracking-tight">How we serve <br /> your data.</h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold">1</div>
                    <div>
                      <h4 className="text-white font-bold mb-2">Fragmentation</h4>
                      <p className="text-slate-500 text-sm">Your service request is shattered into 256 encrypted fragments and scattered across the lattice.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold">2</div>
                    <div>
                      <h4 className="text-white font-bold mb-2">Parallel Processing</h4>
                      <p className="text-slate-500 text-sm">Nodes closest to your geographic location process shards simultaneously for 0.4ms latency.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-bold">3</div>
                    <div>
                      <h4 className="text-white font-bold mb-2">Reconstitution</h4>
                      <p className="text-slate-500 text-sm">Data is reassembled only at the point of request using your private sovereign key.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="relative group">
                <div className="absolute inset-0 bg-blue-600/10 blur-[100px] rounded-full group-hover:bg-blue-600/20 transition-all duration-700" />
                <div className="relative border border-white/10 rounded-[2rem] bg-slate-900/50 p-10 backdrop-blur-xl">
                  <div className="aspect-video flex items-center justify-center border-2 border-dashed border-white/5 rounded-xl">
                    <Workflow className="w-20 h-20 text-blue-500/40 animate-pulse" />
                  </div>
                  <div className="mt-8 grid grid-cols-2 gap-4">
                     <div className="h-2 bg-blue-500/20 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 w-2/3 animate-[pulse_3s_infinite]" />
                     </div>
                     <div className="h-2 bg-blue-500/20 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 w-1/2 animate-[pulse_2s_infinite]" />
                     </div>
                  </div>
                </div>
              </div> */}

              <div className="relative group max-w-3xl mx-auto">
                {/* Larger Glow effect background */}
                <div className="absolute inset-0 bg-blue-500/20 blur-[120px] rounded-full group-hover:bg-blue-600/30 transition-all duration-700" />

                <div className="relative border border-white/10 rounded-[2.5rem] bg-slate-900/80 p-4 md:p-6 backdrop-blur-2xl">

                  {/* Increased Size Image Container */}
                  {/* Changed 'aspect-video' to 'aspect-[4/3]' for a taller, larger view */}
                  <div className="aspect-[4/3] relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950 shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop"
                      alt="Aether App Large View"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />

                    {/* High-contrast UI Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />

                    {/* Top Bar Decoration */}
                    <div className="absolute top-0 left-0 right-0 h-12 bg-white/5 backdrop-blur-md flex items-center px-6 border-b border-white/5">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/60" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                        <div className="w-3 h-3 rounded-full bg-green-500/60" />
                      </div>
                    </div>
                  </div>

                  {/* Status Bars - Sleek & Wide */}
                  <div className="mt-6 px-4 pb-4">
                    <div className="flex justify-between text-[11px] font-mono text-blue-400 mb-2 uppercase tracking-widest">
                      <span>System Analysis</span>
                      <span className="animate-pulse">Live</span>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="h-2 bg-blue-950 rounded-full overflow-hidden border border-white/5">
                        <div className="h-full bg-gradient-to-r from-blue-600 to-indigo-400 w-[92%] shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ENTERPRISE CTA */}
        <section className="py-40">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-gradient-to-tr from-blue-700 to-indigo-900 rounded-[3rem] p-16 md:p-32 text-center relative overflow-hidden shadow-2xl">
              <div className="relative z-10">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Ready to migrate?</h2>
                <p className="text-blue-100 text-xl mb-12 max-w-xl mx-auto opacity-80 font-medium">
                  Whether you are a solo developer or a Fortune 500 company, Aether Services provides the scale you need.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  {/* BOTTOM TO TOP FILL BUTTON */}
                  <button className="group relative overflow-hidden bg-white px-12 py-5 rounded-2xl text-black font-bold uppercase tracking-[0.2em] text-sm transition-all shadow-xl">
                    <span className="relative z-10 transition-colors duration-500 group-hover:text-white">Request Access</span>
                    <div className="absolute inset-0 z-0 h-full w-full translate-y-full bg-black transition-transform duration-500 ease-out group-hover:translate-y-0" />
                  </button>

                  <button className="group relative overflow-hidden border border-white/20 bg-transparent px-12 py-5 rounded-2xl text-white font-bold uppercase tracking-[0.2em] text-sm transition-all">
                    <span className="relative z-10 transition-colors duration-500 group-hover:text-black">Consulting</span>
                    <div className="absolute inset-0 z-0 h-full w-full translate-y-full bg-white transition-transform duration-500 ease-out group-hover:translate-y-0" />
                  </button>
                </div>
              </div>
              <div className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px]" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// --- HELPER COMPONENT ---

function ServiceCard({ icon, title, description, features }: {
  icon: React.ReactNode,
  title: string,
  description: string,
  features: string[]
}) {
  return (
    <div className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:border-blue-500/30 transition-all group relative overflow-hidden flex flex-col h-full">
      <div className="text-blue-500 mb-8 group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 tracking-tight text-white">{title}</h3>
      <p className="text-slate-400 leading-relaxed font-medium text-sm mb-8 flex-grow">
        {description}
      </p>

      <ul className="space-y-3 mb-8">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-slate-500">
            <div className="w-1 h-1 rounded-full bg-blue-500" />
            {f}
          </li>
        ))}
      </ul>

      {/* BOTTOM-TO-TOP FILL BUTTON FOR CARD */}
      <button className="group/btn relative overflow-hidden bg-white/5 border border-white/10 w-full py-4 rounded-xl text-white font-bold uppercase tracking-widest text-[10px] transition-all">
        <span className="relative z-10 transition-colors duration-500 group-hover/btn:text-black flex items-center justify-center gap-2">
          Explore Service <ChevronRight size={14} />
        </span>
        <div className="absolute inset-0 z-0 h-full w-full translate-y-full bg-white transition-transform duration-500 ease-out group-hover/btn:translate-y-0" />
      </button>

      {/* FILL BAR ON HOVER (BOTTOM) */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-500 transition-all duration-700 group-hover:w-full" />
    </div>
  );
}