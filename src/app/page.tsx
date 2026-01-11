// import Link from "next/link";

// export default function HomePage() {
//   return (
//     <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
//       <div className="bg-white/90 backdrop-blur-xl p-10 rounded-2xl shadow-2xl text-center max-w-md w-full">
//         <h1 className="text-3xl font-bold mb-4 text-gray-900">
//           Fictional Company 🚀
//         </h1>

//         <p className="text-gray-600 mb-8">
//           Secure authentication powered by Supabase
//         </p>

//         <div className="flex gap-4">
//           <Link
//             href="auth/signup"
//             className="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
//           >
//             Sign Up
//           </Link>

//           <Link
//             href="auth/signin"
//             className="flex-1 border border-indigo-600 text-indigo-600 py-2 rounded-lg hover:bg-indigo-50 transition"
//           >
//             Sign In
//           </Link>
//         </div>
//       </div>
//     </main>
//   );
// }





// "use client";

// import { useEffect } from "react";
// import Link from "next/link";
// import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
// import { Cpu, ArrowRight, Zap, Orbit, Fingerprint } from "lucide-react";

// export default function HomePage() {
//   // --- Tighter Spring Physics for Precision ---
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   // Increased stiffness and damping for a "snappier" small point
//   const springConfig = { stiffness: 150, damping: 25, mass: 0.5 };
//   const lightX = useSpring(mouseX, springConfig);
//   const lightY = useSpring(mouseY, springConfig);

//   // Reduced circle size from 800px to 80px for that "very small" look
//   // Increased opacity slightly so the small point is still visible
//   const background = useTransform(
//     [lightX, lightY],
//     ([x, y]) => `radial-gradient(80px circle at ${x}px ${y}px, rgba(99, 102, 241, 0.35), rgba(168, 85, 247, 0.15), transparent 80%)`
//   );

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       mouseX.set(e.clientX);
//       mouseY.set(e.clientY);
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, [mouseX, mouseY]);

//   return (
//     <main className="relative min-h-screen w-full bg-[#020202] text-white overflow-hidden flex flex-col items-center justify-center">
      
//       {/* 1. THE ENERGY POINT (Small Laser Follower) */}
//       <motion.div 
//         className="pointer-events-none fixed inset-0 z-0" 
//         style={{ background }} 
//       />

//       {/* 2. ATMOSPHERIC LAYERS */}
//       <div className="absolute inset-0 z-[1] bg-[url('https://res.cloudinary.com/dpgu7rvfs/image/upload/v1660749158/noise_v9bh64.png')] opacity-[0.03] pointer-events-none" />
//       {/* Reduced grid size to 40px to match the precision theme */}
//       <div className="absolute inset-0 z-[1] bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />

//       {/* 3. HERO CONTENT */}
//       <div className="relative z-10 flex flex-col items-center px-6">
        
//         <motion.div 
//           animate={{ rotate: 360 }}
//           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//           className="mb-8 p-4 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl"
//         >
//           <Orbit className="w-12 h-12 text-indigo-500" />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
//           className="text-center"
//         >
//           <h1 className="text-7xl md:text-[120px] font-black tracking-tighter leading-[0.8] mb-6">
//             AETHER<span className="text-indigo-600 block md:inline md:ml-4">OS</span>
//           </h1>
          
//           <p className="text-zinc-500 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium">
//             The world's first <span className="text-zinc-200">quantum-secure</span> cloud fabric. 
//             Experience the speed of light, redefined.
//           </p>
//         </motion.div>

//         <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md">
//           <Link
//             href="/auth/signup"
//             className="group relative flex-[2] h-16 bg-white text-black flex items-center justify-center gap-3 rounded-[2rem] font-black text-sm uppercase tracking-widest overflow-hidden transition-all active:scale-95 shadow-[0_0_40px_rgba(99,102,241,0.2)]"
//           >
//             <div className="relative z-10 flex items-center gap-2">
//               <span>Join the Fabric</span>
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </div>
//             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
//           </Link>

//           <Link
//             href="/auth/signin"
//             className="group flex-1 h-16 border border-white/10 bg-white/[0.02] hover:bg-white/[0.08] flex items-center justify-center rounded-[2rem] font-bold text-xs uppercase tracking-widest transition-all backdrop-blur-xl"
//           >
//             Log In
//           </Link>
//         </div>

//         <div className="mt-20 flex flex-wrap justify-center gap-12 border-t border-white/5 pt-12 opacity-40">
//            <div className="flex flex-col items-center gap-2 group cursor-default hover:opacity-100 transition-opacity">
//               <Zap className="w-4 h-4 text-yellow-500" />
//               <span className="text-[10px] font-mono tracking-widest uppercase italic">0.2ms Latency</span>
//            </div>
//            <div className="flex flex-col items-center gap-2 group cursor-default hover:opacity-100 transition-opacity">
//               <Fingerprint className="w-4 h-4 text-indigo-500" />
//               <span className="text-[10px] font-mono tracking-widest uppercase italic">Bio-Auth Ready</span>
//            </div>
//            <div className="flex flex-col items-center gap-2 group cursor-default hover:opacity-100 transition-opacity">
//               <Cpu className="w-4 h-4 text-emerald-500" />
//               <span className="text-[10px] font-mono tracking-widest uppercase italic">99.9% Uptime</span>
//            </div>
//         </div>
//       </div>

//       <div className="fixed top-10 left-10 hidden lg:block">
//         <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.5em] vertical-text">
//           ESTABLISHING_LINK...
//         </p>
//       </div>

//           </main>
//   );
// }


"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import { Cpu, ArrowRight, Zap, Orbit, Fingerprint } from "lucide-react";

export default function HomePage() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 25, mass: 0.5 };
  const lightX = useSpring(mouseX, springConfig);
  const lightY = useSpring(mouseY, springConfig);

  // Updated radial gradient for the mouse follower to match the new "Aether" theme
  const background = useTransform(
    [lightX, lightY],
    ([x, y]) => `radial-gradient(100px circle at ${x}px ${y}px, rgba(129, 140, 248, 0.4), rgba(16, 185, 129, 0.1), transparent 80%)`
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <main className="relative min-h-screen w-full bg-[#030303] text-white overflow-hidden flex flex-col items-center justify-center">
      
      {/* --- NEW DYNAMIC BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        {/* Animated Mesh Blob 1 */}
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] rounded-full bg-indigo-900/20 blur-[120px]"
        />
        {/* Animated Mesh Blob 2 */}
        <motion.div 
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -80, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] rounded-full bg-emerald-900/10 blur-[120px]"
        />
      </div>

      {/* 1. THE ENERGY POINT (Your Original Laser Follower) */}
      <motion.div 
        className="pointer-events-none fixed inset-0 z-[2]" 
        style={{ background }} 
      />

      {/* 2. ATMOSPHERIC LAYERS */}
      <div className="absolute inset-0 z-[1] bg-[url('https://res.cloudinary.com/dpgu7rvfs/image/upload/v1660749158/noise_v9bh64.png')] opacity-[0.05] pointer-events-none" />
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* 3. HERO CONTENT */}
      <div className="relative z-10 flex flex-col items-center px-6">
        
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="mb-8 p-4 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl"
        >
          <Orbit className="w-12 h-12 text-indigo-400" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <h1 className="text-7xl md:text-[120px] font-black tracking-tighter leading-[0.8] mb-6">
            AETHER<span className="text-indigo-500 block md:inline md:ml-4">OS</span>
          </h1>
          
          <p className="text-zinc-500 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium">
            The world's first <span className="text-zinc-200">quantum-secure</span> cloud fabric. 
            Experience the speed of light, redefined.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md">
          <Link
            href="/auth/signup"
            className="group relative flex-[2] h-16 bg-white text-black flex items-center justify-center gap-3 rounded-[2rem] font-black text-sm uppercase tracking-widest overflow-hidden transition-all active:scale-95 shadow-[0_0_40px_rgba(99,102,241,0.3)]"
          >
            <div className="relative z-10 flex items-center gap-2">
              <span>Join the Fabric</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
          </Link>

          <Link
            href="/auth/signin"
            className="group flex-1 h-16 border border-white/10 bg-white/[0.02] hover:bg-white/[0.08] flex items-center justify-center rounded-[2rem] font-bold text-xs uppercase tracking-widest transition-all backdrop-blur-xl"
          >
            Log In
          </Link>
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-12 border-t border-white/5 pt-12 opacity-40">
           <div className="flex flex-col items-center gap-2 group cursor-default hover:opacity-100 transition-opacity">
              <Zap className="w-4 h-4 text-yellow-500" />
              <span className="text-[10px] font-mono tracking-widest uppercase italic">0.2ms Latency</span>
           </div>
           <div className="flex flex-col items-center gap-2 group cursor-default hover:opacity-100 transition-opacity">
              <Fingerprint className="w-4 h-4 text-indigo-400" />
              <span className="text-[10px] font-mono tracking-widest uppercase italic">Bio-Auth Ready</span>
           </div>
           <div className="flex flex-col items-center gap-2 group cursor-default hover:opacity-100 transition-opacity">
              <Cpu className="w-4 h-4 text-emerald-500" />
              <span className="text-[10px] font-mono tracking-widest uppercase italic">99.9% Uptime</span>
           </div>
        </div>
      </div>

      <div className="fixed top-10 left-10 hidden lg:block">
        <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-[0.5em] [writing-mode:vertical-lr]">
          ESTABLISHING_LINK...
        </p>
      </div>
    </main>
  );
}