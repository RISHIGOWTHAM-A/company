// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { supabase } from "@/app/lib/supabase/client"; // ✅ correct path

// export default function SignupPage() {
//   const router = useRouter();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const handleSignup = async () => {
//     setError("");
//     setMessage("");
//     setLoading(true);

//     // 1️⃣ Create auth user
//     const { data, error } = await supabase.auth.signUp({
//       email,
//       password,
//       options: {
//         emailRedirectTo: `${window.location.origin}/auth/callback`,
//       },
//     });

//     if (error) {
//       setError(error.message);
//       setLoading(false);
//       return;
//     }

//     // 2️⃣ VERY IMPORTANT: create / update profile
//     if (data.user) {
//       const { error: profileError } = await supabase
//         .from("profiles")
//         .upsert({
//           id: data.user.id,
//           email: data.user.email,
//           role: "user", // default role
//         });

//       if (profileError) {
//         setError("Profile creation failed");
//         setLoading(false);
//         return;
//       }
//     }

//     setLoading(false);
//     setMessage("✅ Success! Please check your email to confirm your account.");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-black text-white">
//       <div className="w-[380px] space-y-4 p-6 bg-zinc-900 rounded-xl">
//         <h1 className="text-2xl font-bold text-center">Create Account</h1>

//         {error && (
//           <p className="text-red-500 text-sm text-center">{error}</p>
//         )}

//         {message && (
//           <p className="text-green-500 text-sm text-center">{message}</p>
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
//           onClick={handleSignup}
//           disabled={loading}
//           className="w-full bg-white text-black py-2 rounded font-semibold hover:opacity-90 disabled:opacity-50"
//         >
//           {loading ? "Creating..." : "Sign Up"}
//         </button>

//         <p className="text-sm text-center text-zinc-400">
//           Already have an account?{" "}
//           <span
//             className="text-white cursor-pointer underline"
//             onClick={() => router.push("/auth/signin")}
//           >
//             Sign In
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }














"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, useSpring, useMotionValue, useTransform } from "framer-motion";
import { supabase } from "@/app/lib/supabase/client";
import { Mail, Lock, ArrowRight, ShieldCheck, CheckCircle2, Globe, Cpu, Sparkles } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 25, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // --- High-Performance Spring Physics ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Softer mass and higher stiffness for that "magnetic" feel
  const springConfig = { stiffness: 200, damping: 40, mass: 0.4 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Create a dynamic gradient string that reacts to spring values
  const background = useTransform(
    [smoothX, smoothY],
    ([x, y]) => `radial-gradient(650px circle at ${x}px ${y}px, rgba(79, 70, 229, 0.2), rgba(139, 92, 246, 0.08), transparent 80%)`
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);
const handleSignup = async (e: React.FormEvent) => {
  e.preventDefault();
  setError("");
  setMessage("");
  setLoading(true);

  const { data, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${window.location.origin}/auth/callback`,
    },
  });

  if (signUpError) {
    setError(signUpError.message);
    setLoading(false);
    return;
  }

  if (data.user) {
    await supabase.from("profiles").upsert({
      id: data.user.id,
      email: data.user.email,
      role: "user",
    });
  }

  setLoading(false);
  setMessage("Success! Check your inbox for verification.");

  // ✅ redirect to signin
  setTimeout(() => {
    router.replace("/auth/signin");
  }, 1500);
};

  return (
    <div className="relative min-h-screen w-full bg-[#020202] text-zinc-100 selection:bg-indigo-500/40 overflow-hidden">
      
      {/* 1. Interactive Spring Spotlight Layer */}
      <motion.div 
        className="pointer-events-none fixed inset-0 z-10 opacity-100 transition-opacity duration-500"
        style={{ background }}
      />

      {/* 2. Grid & Noise Textures */}
      <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] brightness-200" />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="grid lg:grid-cols-2 min-h-screen relative z-20">
        
        {/* --- Left Column: Brand Story --- */}
        <div className="hidden lg:flex flex-col justify-between p-20 border-r border-white/5 bg-black/20 backdrop-blur-3xl">
          <motion.div initial="hidden" animate="visible" variants={containerVariants}>
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-16">
              <div className="relative group">
                <div className="absolute -inset-1 bg-indigo-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative w-12 h-12 bg-zinc-900 border border-white/10 rounded-xl flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-indigo-400" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-[0.2em] uppercase text-white">Aether</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-[5rem] font-bold tracking-tight leading-[0.85] mb-10">
              The Engine <br /> 
              <span className="text-zinc-700">of Innovation.</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-zinc-400 text-xl max-w-sm leading-relaxed mb-12">
              Deploy high-performance infrastructure in seconds. Zero config, infinite scale.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-6">
              {[
                { icon: ShieldCheck, text: "End-to-end encrypted storage", color: "text-blue-400" },
                { icon: Globe, text: "Global Edge Runtime", color: "text-indigo-400" },
                { icon: Sparkles, text: "AI-native resource optimization", color: "text-purple-400" }
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-4 group cursor-default">
                  <div className={`p-2 rounded-lg bg-white/5 border border-white/5 transition-colors group-hover:border-white/10`}>
                    <feature.icon className={`w-5 h-5 ${feature.color}`} />
                  </div>
                  <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">{feature.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex items-center gap-6"
          >
            <div className="h-px flex-1 bg-white/5" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-600">Enterprise Ready</span>
            <div className="h-px flex-1 bg-white/5" />
          </motion.div>
        </div>

        {/* --- Right Column: Signup Interface --- */}
        <div className="flex items-center justify-center p-8 lg:p-24 bg-transparent">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[440px]"
          >
            <div className="mb-12">
              <h2 className="text-4xl font-bold tracking-tight text-white mb-3">Create an account</h2>
              <p className="text-zinc-500">Start your 14-day free trial. No credit card required.</p>
            </div>

            <AnimatePresence mode="wait">
              {error && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-8 p-4 rounded-xl bg-red-500/5 border border-red-500/20 text-red-400 text-sm flex items-center gap-3 overflow-hidden"
                >
                  <div className="w-1 h-1 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSignup} className="space-y-6">
              <div className="space-y-5">
                <div className="group space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">Work Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-zinc-600 group-focus-within:text-indigo-500 transition-all duration-300" />
                    <input
                      required
                      type="email"
                      placeholder="name@company.com"
                      className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/[0.03] border border-white/10 focus:border-indigo-500/50 focus:bg-white/[0.05] outline-none transition-all placeholder:text-zinc-700 text-white"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="group space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">Choose Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-zinc-600 group-focus-within:text-indigo-500 transition-all duration-300" />
                    <input
                      required
                      type="password"
                      placeholder="At least 8 characters"
                      className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/[0.03] border border-white/10 focus:border-indigo-500/50 focus:bg-white/[0.05] outline-none transition-all placeholder:text-zinc-700 text-white"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <button
                disabled={loading}
                className="group relative w-full bg-white text-black py-4 rounded-xl font-bold text-sm transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] active:scale-[0.99] disabled:opacity-50 flex items-center justify-center gap-2 overflow-hidden"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-zinc-400 border-t-black rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Initialize Workspace</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer transition-none" />
              </button>
            </form>

            <div className="mt-10 text-center">
              <p className="text-xs text-zinc-500 font-medium">
                Already have an account?{" "}
                <button
                  onClick={() => router.push("/auth/signin")}
                  className="text-white hover:text-indigo-400 transition-colors ml-1 underline underline-offset-4 decoration-zinc-800"
                >
                  Log in
                </button>
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      </div>
  );
}