// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { supabase } from "@/app/lib/supabase/client";

// export default function SigninPage() {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   // 🔥 THIS IS THE FIX
//   useEffect(() => {
//     supabase.auth.signOut();
//   }, []);

//   useEffect(() => {
//     const {
//       data: { subscription },
//     } = supabase.auth.onAuthStateChange((_event, session) => {
//       if (session) {
//         router.replace("/dashboard");
//       }
//     });

//     return () => subscription.unsubscribe();
//   }, [router]);

//   const handleSignin = async () => {
//     setError("");
//     setLoading(true);

//     const { error } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     });

//     if (error) {
//       setError(error.message);
//     }

//     setLoading(false);
//   };
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-black text-white">
//       <div className="w-[380px] space-y-4 p-6 bg-zinc-900 rounded-xl">
//         <h1 className="text-2xl font-bold text-center">Welcome Back</h1>

//         {error && (
//           <p className="text-red-500 text-sm text-center">{error}</p>
//         )}

//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full p-2 rounded bg-zinc-800 outline-none"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full p-2 rounded bg-zinc-800 outline-none"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button
//           type="button"
//           onClick={handleSignin}
//           disabled={loading}
//           className="w-full bg-white text-black py-2 rounded font-semibold"
//         >
//           {loading ? "Signing in..." : "Sign In"}
//         </button>
//       </div>
//     </div>
//   );
// }




"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/lib/supabase/client";
import { motion, AnimatePresence, useSpring, useMotionValue, useTransform } from "framer-motion";
import { Mail, Lock, ArrowRight, Cpu, ShieldAlert, Fingerprint, Zap } from "lucide-react";

export default function SigninPage() {
  const router = useRouter();
  const cardRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // --- EXISTING FUNCTIONALITY (KEEPING YOUR LOGIC) ---
  useEffect(() => {
    supabase.auth.signOut();
  }, []);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        router.replace("/dashboard");
      }
    });
    return () => subscription.unsubscribe();
  }, [router]);

  const handleSignin = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page refresh
    setError("");
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    }

    setLoading(false);
  };

  // --- ADVANCED UI PHYSICS ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 3D Tilt Effect
  const rotateX = useSpring(useTransform(mouseY, [0, 800], [5, -5]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1200], [-5, 5]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const spotlight = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `radial-gradient(650px circle at ${x}px ${y}px, rgba(99, 102, 241, 0.12), transparent 80%)`
  );

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full bg-[#030303] text-zinc-100 flex items-center justify-center p-4 overflow-hidden selection:bg-indigo-500/30"
    >
      {/* 1. BACKGROUND LAYERS */}
      <motion.div className="pointer-events-none fixed inset-0 z-10" style={{ background: spotlight }} />
      <div className="absolute inset-0 z-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] brightness-150 contrast-150 mix-blend-screen pointer-events-none" />
      
      {/* CRT Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_3px,2px_100%]" />

      {/* 2. ADVANCED INTERFACE CARD */}
      <motion.div
        ref={cardRef}
        style={{ rotateX, rotateY, perspective: 1000 }}
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 w-full max-w-[440px]"
      >
        {/* Decorative Corner Accents */}
        <div className="absolute -top-4 -left-4 w-12 h-12 border-t border-l border-white/20 rounded-tl-2xl" />
        <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b border-r border-white/20 rounded-br-2xl" />

        <div className="relative bg-zinc-950/60 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-[0_0_80px_-15px_rgba(0,0,0,1)]">
          
          {/* Header Section */}
          <div className="flex flex-col items-center mb-10">
            <div className="relative group mb-6">
              <div className="absolute -inset-2 bg-indigo-500/20 rounded-2xl blur-xl group-hover:bg-indigo-500/40 transition duration-700" />
              <div className="relative w-16 h-16 bg-black border border-white/10 rounded-2xl flex items-center justify-center shadow-inner overflow-hidden">
                <Cpu className="w-8 h-8 text-white z-10" />
                <motion.div 
                   animate={{ x: [-60, 60] }}
                   transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                   className="absolute w-full h-[1px] bg-indigo-400/50 shadow-[0_0_10px_#818cf8]"
                />
              </div>
            </div>
            <h1 className="text-3xl font-black tracking-tighter text-white uppercase italic">Aether<span className="text-indigo-500 font-light">.Log</span></h1>
            <p className="text-zinc-500 text-[10px] font-bold tracking-[0.3em] uppercase mt-2">Authorization Required</p>
          </div>

          <AnimatePresence mode="wait">
            {error && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-8 p-4 rounded-xl bg-red-500/5 border border-red-500/10 flex items-center gap-3"
              >
                <ShieldAlert className="w-4 h-4 text-red-500" />
                <span className="text-[11px] text-red-400 font-medium uppercase tracking-tight">{error}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Form */}
          <form onSubmit={handleSignin} className="space-y-5">
            <div className="group relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600 group-focus-within:text-indigo-400 transition-colors" />
              <input
                required
                type="email"
                placeholder="USER_IDENTITY"
                className="w-full bg-white/[0.03] border border-white/5 py-4 pl-12 pr-4 rounded-2xl outline-none focus:border-indigo-500/40 focus:bg-white/[0.05] transition-all text-xs font-mono tracking-wider text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="group relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600 group-focus-within:text-indigo-400 transition-colors" />
              <input
                required
                type="password"
                placeholder="SECURE_KEY"
                className="w-full bg-white/[0.03] border border-white/5 py-4 pl-12 pr-4 rounded-2xl outline-none focus:border-indigo-500/40 focus:bg-white/[0.05] transition-all text-xs font-mono tracking-wider text-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              disabled={loading}
              className="group relative w-full h-14 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] active:scale-[0.98] disabled:opacity-50"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-zinc-300 border-t-black rounded-full animate-spin" />
              ) : (
                <>
                  <span>Execute Access</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shimmer" />
            </button>
          </form>

          {/* Footer UI */}
          <div className="mt-10 pt-8 border-t border-white/5 flex flex-col items-center gap-6">
              <button 
                  type="button"
                  onClick={() => router.push("/auth/signup")}
                  className="flex items-center gap-2 text-[10px] font-bold text-zinc-500 hover:text-white transition-all tracking-widest uppercase"
              >
                  <Zap className="w-3 h-3 text-indigo-500" />
                  New node registration
              </button>
              
              <div className="flex items-center gap-4 opacity-20">
                <Fingerprint size={14} />
                <div className="w-8 h-[1px] bg-zinc-800" />
                <span className="text-[9px] font-mono tracking-tighter uppercase">Protocol_Encrypted</span>
              </div>
          </div>
        </div>
      </motion.div>

    </div>
  );
}


// "use client";

// import { useState, useEffect, useRef } from "react";
// import { useRouter } from "next/navigation";
// import { motion, AnimatePresence, useSpring, useMotionValue, useTransform } from "framer-motion";
// import { supabase } from "@/app/lib/supabase/client";
// import { Mail, Lock, ArrowRight, Cpu, Zap, Activity, Fingerprint, Shield } from "lucide-react";

// export default function SigninPage() {
//   const router = useRouter();
//   const cardRef = useRef<HTMLDivElement>(null);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   // --- Magnetic & 3D Physics ---
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
//   const cardRotateX = useSpring(useTransform(mouseY, [0, 1000], [5, -5]), { stiffness: 200, damping: 30 });
//   const cardRotateY = useSpring(useTransform(mouseX, [0, 1920], [-5, 5]), { stiffness: 200, damping: 30 });

//   useEffect(() => {
//     const handleMove = (e: MouseEvent) => {
//       mouseX.set(e.clientX);
//       mouseY.set(e.clientY);
//     };
//     window.addEventListener("mousemove", handleMove);
//     return () => window.removeEventListener("mousemove", handleMove);
//   }, [mouseX, mouseY]);

//   const handleSignin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     const { error } = await supabase.auth.signInWithPassword({ email, password });
//     if (error) setError(error.message);
//     setLoading(false);
//   };

//   return (
//     <div className="relative min-h-screen w-full bg-[#050505] flex items-center justify-center p-6 overflow-hidden selection:bg-indigo-500/40">
      
//       {/* 1. LAYERED BACKGROUND SYSTEM */}
//       <div className="absolute inset-0 z-0">
//         {/* Animated Radial Orb */}
//         <motion.div 
//           style={{ x: useTransform(mouseX, [0, 1920], [-50, 50]), y: useTransform(mouseY, [0, 1080], [-50, 50]) }}
//           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 blur-[150px] rounded-full"
//         />
//         {/* Tech Grid */}
//         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
//         {/* The Scanline Effect */}
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-50 pointer-events-none bg-[length:100%_4px,3px_100%]" />
//       </div>

//       {/* 2. THE ADVANCED INTERFACE CARD */}
//       <motion.div
//         ref={cardRef}
//         style={{ rotateX: cardRotateX, rotateY: cardRotateY, perspective: 1000 }}
//         initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
//         animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
//         transition={{ duration: 0.8 }}
//         className="relative z-10 w-full max-w-[480px]"
//       >
//         {/* Floating Accents */}
//         <div className="absolute -top-10 -left-10 w-20 h-20 border-t-2 border-l-2 border-indigo-500/30 rounded-tl-3xl" />
//         <div className="absolute -bottom-10 -right-10 w-20 h-20 border-b-2 border-r-2 border-indigo-500/30 rounded-br-3xl" />

//         <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-3xl shadow-[0_0_100px_-20px_rgba(79,70,229,0.2)]">
          
//           {/* Top Decorative Bar */}
//           <div className="h-1.5 w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50" />
          
//           <div className="p-8 md:p-12">
//             <header className="flex flex-col items-center mb-10 text-center">
//               <div className="relative group cursor-pointer mb-6">
//                 <div className="absolute inset-0 bg-indigo-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-60 transition duration-500" />
//                 <div className="relative w-16 h-16 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center overflow-hidden shadow-inner">
//                   <Cpu size={32} className="text-white z-10" />
//                   <motion.div 
//                     animate={{ y: [-40, 40] }}
//                     transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
//                     className="absolute w-full h-[2px] bg-indigo-500/50 shadow-[0_0_15px_indigo]"
//                   />
//                 </div>
//               </div>
              
//               <div className="space-y-1">
//                 <h1 className="text-4xl font-black tracking-tighter text-white uppercase italic">Aether<span className="text-indigo-500 font-light">.OS</span></h1>
//                 <div className="flex items-center gap-2 justify-center">
//                   <Activity size={12} className="text-emerald-500" />
//                   <span className="text-[10px] text-zinc-500 uppercase tracking-[0.3em] font-bold">System Online</span>
//                 </div>
//               </div>
//             </header>

//             <AnimatePresence>
//               {error && (
//                 <motion.div 
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: "auto" }}
//                   className="mb-8 overflow-hidden"
//                 >
//                   <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/20 flex items-center gap-3">
//                     <Shield className="text-red-500" size={18} />
//                     <span className="text-xs text-red-400 font-mono tracking-tighter uppercase">{error}</span>
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>

//             <form onSubmit={handleSignin} className="space-y-6">
//               {/* Input 1 */}
//               <div className="group relative">
//                 <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-0 group-focus-within:opacity-20 transition duration-500" />
//                 <div className="relative flex items-center">
//                   <Mail className="absolute left-4 text-zinc-600 group-focus-within:text-indigo-400 transition-colors" size={18} />
//                   <input
//                     required
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="w-full bg-black/40 border border-white/5 py-4 pl-12 pr-4 rounded-2xl outline-none focus:border-indigo-500/50 transition-all text-sm font-medium placeholder:text-zinc-800"
//                     placeholder="PROTOCOL_EMAIL"
//                   />
//                 </div>
//               </div>

//               {/* Input 2 */}
//               <div className="group relative">
//                 <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-0 group-focus-within:opacity-20 transition duration-500" />
//                 <div className="relative flex items-center">
//                   <Lock className="absolute left-4 text-zinc-600 group-focus-within:text-indigo-400 transition-colors" size={18} />
//                   <input
//                     required
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="w-full bg-black/40 border border-white/5 py-4 pl-12 pr-4 rounded-2xl outline-none focus:border-indigo-500/50 transition-all text-sm font-medium placeholder:text-zinc-800"
//                     placeholder="SECURE_PHRASE"
//                   />
//                 </div>
//               </div>

//               {/* Submit Button */}
//               <button
//                 disabled={loading}
//                 className="group relative w-full py-4 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-[0.2em] overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] disabled:opacity-50 active:scale-[0.98]"
//               >
//                 <div className="relative z-10 flex items-center justify-center gap-2">
//                   {loading ? (
//                     <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
//                   ) : (
//                     <>
//                       <span>Initialize Access</span>
//                       <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
//                     </>
//                   )}
//                 </div>
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
//               </button>
//             </form>

//             <footer className="mt-10 pt-8 border-t border-white/5 flex flex-col items-center gap-6">
//               <button 
//                 onClick={() => router.push("/auth/signup")}
//                 className="group flex items-center gap-2 text-[10px] font-bold text-zinc-500 hover:text-white transition-all tracking-widest uppercase"
//               >
//                 <Zap size={14} className="text-indigo-500 group-hover:animate-pulse" />
//                 Request New Clearance
//               </button>
              
//               <div className="flex items-center gap-4 opacity-30">
//                 <Fingerprint size={16} />
//                 <div className="w-8 h-[1px] bg-zinc-700" />
//                 <span className="text-[9px] font-mono">NODE_774_READY</span>
//               </div>
//             </footer>
//           </div>
//         </div>
//       </motion.div>

//     </div>
//   );
// }