// import { redirect } from "next/navigation";
// import { createSupabaseServer } from "@/app/lib/supabase/server";

// export default async function DashboardPage() {
//   const supabase = await createSupabaseServer();

//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   // ❌ BLOCK BEFORE RENDER
//   if (!user) {
//     redirect("/auth/signin");
//   }

//   return (
//     <div className="p-6 text-white">
//       <h1 className="text-2xl font-bold">Dashboard</h1>
//     </div>
//   );
// }






// import { redirect } from "next/navigation";
// import { createSupabaseServer } from "@/app/lib/supabase/server";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { 
//   ArrowRight, 
//   Cpu, 
//   Layers, 
//   Fingerprint, 
//   Wind,
//   Infinity,
//   Sparkles
// } from "lucide-react";

// export default async function AetherLandingPage() {
//   const supabase = await createSupabaseServer();

//   const { data: { user } } = await supabase.auth.getUser();

//   if (!user) {
//     redirect("/auth/signin");
//   }

//   return (
//     <div className="min-h-screen bg-[#020202] text-white flex flex-col selection:bg-indigo-500/30">
//       <Navbar />
      
//       <main className="flex-grow pt-32 pb-20">
        
//         {/* --- HERO SECTION --- */}
//         <section className="px-6 max-w-7xl mx-auto mb-24">
//           <div className="flex flex-col items-center text-center space-y-6">
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold tracking-widest uppercase animate-pulse">
//               <Sparkles className="w-3 h-3" /> Welcome to the Future
//             </div>
//             <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-tight max-w-4xl">
//               THE INTERNET HAS A <span className="text-indigo-500 italic">NEW REALITY.</span>
//             </h1>
//             <p className="text-zinc-500 text-lg md:text-xl max-w-2xl leading-relaxed">
//               Welcome back, <span className="text-white font-medium">{user.email?.split('@')[0]}</span>. 
//               You are now part of a global collective rewriting the rules of the digital fabric.
//             </p>
//           </div>
//         </section>

//         {/* --- PRODUCT SHOWCASE (Responsive Grid) --- */}
//         <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          
//           {/* Card 1: Quantum Networking */}
//           <div className="group p-8 rounded-[2.5rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 hover:border-indigo-500/50 transition-all duration-500">
//             <Wind className="w-10 h-10 text-indigo-500 mb-6 group-hover:scale-110 transition-transform" />
//             <h3 className="text-2xl font-bold mb-4">Aether Flow</h3>
//             <p className="text-zinc-500 text-sm leading-relaxed mb-6">
//               Our proprietary transport protocol that ignores traditional IP bottlenecks. Data moves at the speed of light through neural-mapped pathways.
//             </p>
//             <div className="flex items-center text-xs font-black text-indigo-400 uppercase tracking-widest gap-2">
//               Explore Protocol <ArrowRight className="w-3 h-3" />
//             </div>
//           </div>

//           {/* Card 2: Neural Compute */}
//           <div className="group p-8 rounded-[2.5rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 hover:border-indigo-500/50 transition-all duration-500">
//             <Cpu className="w-10 h-10 text-indigo-500 mb-6 group-hover:scale-110 transition-transform" />
//             <h3 className="text-2xl font-bold mb-4">Neural Fabric</h3>
//             <p className="text-zinc-500 text-sm leading-relaxed mb-6">
//               A distributed processing engine that lives in the gaps between traditional servers. Scale your vision without ever seeing a "Server Busy" error.
//             </p>
//             <div className="flex items-center text-xs font-black text-indigo-400 uppercase tracking-widest gap-2">
//               View Architecture <ArrowRight className="w-3 h-3" />
//             </div>
//           </div>

//           {/* Card 3: Ironclad Privacy */}
//           <div className="group p-8 rounded-[2.5rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 hover:border-indigo-500/50 transition-all duration-500">
//             <Fingerprint className="w-10 h-10 text-indigo-500 mb-6 group-hover:scale-110 transition-transform" />
//             <h3 className="text-2xl font-bold mb-4">Zero Trust</h3>
//             <p className="text-zinc-500 text-sm leading-relaxed mb-6">
//               In the Aether, we don't just secure your data—we make it mathematically impossible to exist without your specific biometric signature.
//             </p>
//             <div className="flex items-center text-xs font-black text-indigo-400 uppercase tracking-widest gap-2">
//               Security Whitepaper <ArrowRight className="w-3 h-3" />
//             </div>
//           </div>
//         </section>

//         {/* --- COMPANY VISION SECTION --- */}
//         <section className="bg-white/[0.02] border-y border-white/5 py-24">
//           <div className="px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             <div className="space-y-8">
//               <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">
//                 A Unified <br /> <span className="text-indigo-500">Global Entity.</span>
//               </h2>
//               <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
//                 <p>
//                   Aether OS was founded on the belief that the current internet is broken—fragmented by regions, limited by cables, and exposed by legacy code.
//                 </p>
//                 <p>
//                   We build the "Aether Alpha" layer. A hidden infrastructure that empowers creators to deploy applications that are globally available in milliseconds, regardless of where their users are standing.
//                 </p>
//               </div>
//               <button className="px-10 py-4 bg-white text-black font-black uppercase text-xs rounded-full hover:bg-indigo-600 hover:text-white transition-all transform active:scale-95 shadow-xl shadow-white/5">
//                 Join the Founding Collective
//               </button>
//             </div>
            
//             <div className="relative">
//                {/* Visual Element: A glowing geometric shape mockup */}
//                <div className="aspect-square bg-indigo-600/10 rounded-[4rem] border border-indigo-500/20 flex items-center justify-center overflow-hidden">
//                   <Infinity className="w-48 h-48 text-indigo-500/20 animate-pulse" />
//                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_transparent_0%,_#020202_90%)]" />
//                </div>
//                <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/20 blur-[80px] rounded-full" />
//                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/10 blur-[100px] rounded-full" />
//             </div>
//           </div>
//         </section>

//         {/* --- BEYOND THE CLOUD (Feature List) --- */}
//         <section className="px-6 max-w-7xl mx-auto py-32 text-center">
//            <h2 className="text-sm font-black uppercase tracking-[0.5em] text-indigo-500 mb-16">The Aether Standard</h2>
//            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
//               {[
//                 { title: "99.9999%", label: "Uptime Guaranteed" },
//                 { title: "0.18ms", label: "Latency Ceiling" },
//                 { title: "Infinite", label: "Scalability Path" },
//                 { title: "Quantum", label: "Encryption Ready" },
//               ].map((item, i) => (
//                 <div key={i} className="space-y-2">
//                   <p className="text-4xl font-black tracking-tighter">{item.title}</p>
//                   <p className="text-[10px] uppercase font-bold text-zinc-600 tracking-widest">{item.label}</p>
//                 </div>
//               ))}
//            </div>
//         </section>

//       </main>

//       <Footer />
//     </div>
//   );
// }

import { redirect } from "next/navigation";
import { createSupabaseServer } from "@/app/lib/supabase/server";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  ArrowRight, Cpu, Layers, Fingerprint, Wind, Infinity, 
  Sparkles, ShieldCheck, Zap, Globe, Trophy, Workflow,
  Network, Box, Radio, ZapOff, ShieldAlert, ChevronRight,
  Terminal, Activity, Lock
} from "lucide-react";

export default async function AetherLandingPage() {
  const supabase = await createSupabaseServer();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/signin");
  }

  return (
    <div className="min-h-screen bg-[#030303] text-zinc-300 flex flex-col selection:bg-cyan-500/30 overflow-x-hidden relative font-sans">
      
      {/* --- PROFESSIONAL AMBIENT BACKGROUND --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Color Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[40%] bg-cyan-500/5 blur-[100px] rounded-full" />
      </div>

      <Navbar />
      
      <main className="flex-grow pt-24 relative z-10">
        
        {/* 1. HERO SECTION: REFINED PRECISION */}
        <section className="px-6 max-w-6xl mx-auto pt-20 pb-40 text-center">
          <div className="flex flex-col items-center space-y-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/5 border border-blue-500/20 text-blue-400 text-[10px] font-black tracking-[0.2em] uppercase">
              <Activity className="w-3 h-3 animate-pulse" /> Network Latency: 0.002ms
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white leading-[1.05]">
              Intelligence at the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600">
                Speed of Light.
              </span>
            </h1>

            <p className="text-zinc-500 text-lg md:text-xl max-w-2xl leading-relaxed font-light">
              Redefining global infrastructure with an autonomous compute fabric. 
              Deploy applications that scale themselves, heal themselves, and protect themselves.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              {/* BUTTON: RISING FILL EFFECT */}
              <button className="relative group overflow-hidden px-10 py-4 bg-transparent border border-blue-500/50 rounded-xl text-white font-bold text-sm transition-all duration-300">
                <span className="relative z-10 group-hover:text-white">Initialize System</span>
                <div className="absolute bottom-0 left-0 w-full h-0 bg-blue-600 group-hover:h-full transition-all duration-500 ease-out z-0" />
              </button>
              
              <button className="relative group overflow-hidden px-10 py-4 bg-white/5 border border-white/10 rounded-xl text-white font-bold text-sm transition-all duration-300">
                <span className="relative z-10 group-hover:text-black">Documentation</span>
                <div className="absolute bottom-0 left-0 w-full h-0 bg-white group-hover:h-full transition-all duration-500 ease-out z-0" />
              </button>
            </div>
          </div>
        </section>

        {/* 2. CORE FEATURES: SPOTLIGHT GRID */}
        <section className="px-6 max-w-7xl mx-auto mb-56">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                icon: <Terminal className="w-5 h-5" />, 
                title: "Edge Compute", 
                desc: "Logic executed at the node nearest to the user, eliminating round-trip delays." 
              },
              { 
                icon: <Lock className="w-5 h-5" />, 
                title: "Quantum-Safe", 
                desc: "Post-quantum cryptographic tunnels ensure your data remains future-proof." 
              },
              { 
                icon: <Box className="w-5 h-5" />, 
                title: "Atomic Deploy", 
                desc: "Immutable deployments with instant rollback capabilities and zero-downtime." 
              }
            ].map((feature, i) => (
              <div 
                key={i} 
                className="group relative p-10 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-blue-500/30 transition-all duration-500 overflow-hidden"
              >
                {/* Internal Glow Effect */}
                <div className="absolute -inset-px bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="text-blue-500 mb-6 group-hover:text-cyan-400 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. TECHNICAL SPECIFICATION SECTION */}
        <section className="bg-[#050505] border-y border-white/5 py-32 mb-56">
          <div className="px-6 max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                Built for <br /> <span className="text-blue-500">Scale.</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Aether Omni isn't just a hosting platform—it's a distributed operating system. 
                Our architecture uses <strong>Atmospheric Routing</strong> to handle 10M+ concurrent requests per second without breaking a sweat.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-2xl font-bold text-white">12ms</div>
                  <div className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold">P99 Global Latency</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">256-bit</div>
                  <div className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold">Lattice Encryption</div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 w-full bg-[#080808] border border-blue-500/20 rounded-3xl p-8 relative overflow-hidden group">
               {/* Animated Pulse in background */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full animate-pulse" />
               <div className="relative z-10 space-y-4 font-mono text-xs">
                 <div className="flex items-center gap-2 text-blue-400">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                    <span>SYSTEM_ACTIVE</span>
                 </div>
                 <div className="p-4 bg-black/50 rounded-lg border border-white/5 text-zinc-500">
                    {">"} Initializing Global Mesh... <br />
                    {">"} Allocating Shards [8/8] <br />
                    {">"} Encryption: ACTIVE <br />
                    {">"} Status: <span className="text-cyan-400 italic font-bold text-[10px] tracking-widest">DEPLOYED</span>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* 4. FINAL CALL TO ACTION */}
        <section className="px-6 max-w-4xl mx-auto py-40 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-10 tracking-tight">
            Transcend the Cloud.
          </h2>
          <button className="relative group overflow-hidden px-12 py-5 bg-white text-black font-black uppercase text-xs tracking-[0.2em] rounded-full transition-all duration-300">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Start Your Nexus</span>
            <div className="absolute bottom-0 left-0 w-full h-0 bg-blue-600 group-hover:h-full transition-all duration-300 ease-out z-0" />
          </button>
        </section>

      </main>

      <Footer />
    </div>
  );
}