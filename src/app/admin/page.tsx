

// "use client";

// import { useEffect, useState } from "react";
// import { Mail, Plus, ShieldAlert, Trash2, Loader2, Fingerprint, Activity, Zap } from "lucide-react";

// type User = {
//   id: string;
//   email: string | null;
//   created_at: string;
// };

// export default function AdminPage() {
//   const [users, setUsers] = useState<User[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [creating, setCreating] = useState(false);

//   async function fetchUsers() {
//     try {
//       const res = await fetch("/api/admin/users");
//       const data = await res.json();
//       setUsers(data);
//     } catch (err) { console.error(err); } 
//     finally { setLoading(false); }
//   }

//   async function createUser() {
//     if (!email || !password) return;
//     setCreating(true);
//     const res = await fetch("/api/admin/users/create", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password }),
//     });
//     setCreating(false);
//     if (res.ok) { setEmail(""); setPassword(""); fetchUsers(); }
//   }

//   useEffect(() => { fetchUsers(); }, []);

//   return (
//     <div className="min-h-screen bg-[#030712] text-slate-300 p-4 md:p-12 font-sans selection:bg-cyan-500/30">
//       {/* Animated Background Gradients */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-cyan-500/5 blur-[120px] rounded-full animate-pulse" />
//         <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-indigo-600/10 blur-[120px] rounded-full" />
//       </div>

//       <div className="relative max-w-6xl mx-auto space-y-16">
        
//         {/* Futuristic Header */}
//         <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/5 pb-10">
//           <div className="space-y-2">
//             <div className="flex items-center gap-2 text-cyan-400 font-mono text-[10px] tracking-[0.5em] uppercase">
//               <Fingerprint size={14} /> System Registry
//             </div>
//             <h1 className="text-6xl font-black tracking-tighter text-white">
//               Aether<span className="text-cyan-500 italic">OS</span>
//             </h1>
//           </div>
//           <div className="flex gap-8">
//             <div className="text-right">
//               <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Total Nodes</div>
//               <div className="text-2xl font-mono text-white">{users.length.toString().padStart(2, '0')}</div>
//             </div>
//             <div className="text-right">
//               <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Status</div>
//               <div className="text-2xl font-mono text-cyan-500 flex items-center gap-2">
//                 <Activity size={20} className="animate-bounce" /> ONLINE
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Create Identity Card */}
//         <div className="relative max-w-4xl mx-auto">
//           <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-[2rem] blur-xl opacity-20" />
//           <div className="relative bg-black/40 border border-white/10 backdrop-blur-3xl rounded-[2rem] p-8 md:p-12 shadow-2xl overflow-hidden">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
//               <div className="space-y-6">
//                 <h3 className="text-xl font-bold text-white flex items-center gap-3">
//                   <Zap className="text-cyan-400" size={20} /> Deploy New Identity
//                 </h3>
//                 <div className="space-y-4">
//                   <div className="group">
//                     <input
//                       type="email"
//                       placeholder="Access Email"
//                       className="w-full bg-white/5 border border-white/10 group-hover:border-cyan-500/50 rounded-2xl px-6 py-4 outline-none transition-all placeholder:text-slate-600"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                     />
//                   </div>
//                   <div className="group">
//                     <input
//                       type="password"
//                       placeholder="Security Token"
//                       className="w-full bg-white/5 border border-white/10 group-hover:border-cyan-500/50 rounded-2xl px-6 py-4 outline-none transition-all placeholder:text-slate-600"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="flex flex-col justify-end gap-4">
//                 <p className="text-xs text-slate-500 leading-relaxed italic px-2">
//                   * Deploying an identity grants Level-1 access to the Aether Cloud nodes. Ensure the security token meets encryption standards.
//                 </p>
//                 <button
//                   onClick={createUser}
//                   disabled={creating}
//                   className="w-full py-5 bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white rounded-2xl font-black uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all active:scale-95 flex items-center justify-center gap-3"
//                 >
//                   {creating ? <Loader2 className="animate-spin" /> : <><Plus size={20} /> Authorize Node</>}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Identities Grid (Replaces Table) */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {loading ? (
//              <div className="col-span-full py-20 text-center font-mono tracking-widest text-cyan-500 animate-pulse">
//                FETCHING CORE DATA...
//              </div>
//           ) : (
//             users.map((u) => (
//               <div key={u.id} className="group relative">
//                 <div className="absolute inset-0 bg-cyan-500/5 rounded-3xl blur-md opacity-0 group-hover:opacity-100 transition-all duration-500" />
//                 <div className="relative bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 p-6 rounded-3xl transition-all duration-500 backdrop-blur-md">
//                   <div className="flex justify-between items-start mb-6">
//                     <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20">
//                       <Fingerprint size={20} />
//                     </div>
//                     <button className="text-slate-600 hover:text-red-500 transition-colors p-1">
//                       <Trash2 size={16} />
//                     </button>
//                   </div>
                  
//                   <div className="space-y-1">
//                     <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Verified Identity</div>
//                     <div className="text-sm font-semibold text-white truncate">{u.email ?? "UNIDENTIFIED"}</div>
//                   </div>

//                   <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/5">
//                     <div className="flex items-center gap-2">
//                       <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
//                       <span className="text-[10px] font-mono text-slate-500 uppercase">Sector-01</span>
//                     </div>
//                     <span className="text-[10px] font-mono text-slate-600 italic">
//                       {new Date(u.created_at).toLocaleDateString()}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { Mail, Plus, ShieldAlert, Loader2, Fingerprint, Activity, Zap } from "lucide-react";

type User = {
  id: string;
  email: string | null;
  created_at: string;
};

export default function AdminPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [creating, setCreating] = useState(false);

  async function fetchUsers() {
    try {
      const res = await fetch("/api/admin/users");
      const data = await res.json();
      setUsers(data);
    } catch (err) { console.error(err); } 
    finally { setLoading(false); }
  }

  async function createUser() {
    if (!email || !password) return;
    setCreating(true);
    const res = await fetch("/api/admin/users/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    setCreating(false);
    if (res.ok) { setEmail(""); setPassword(""); fetchUsers(); }
  }

  useEffect(() => { fetchUsers(); }, []);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-300 p-4 md:p-12 font-sans selection:bg-cyan-500/30">
      {/* Animated Background Gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-cyan-500/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-indigo-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        
        {/* Futuristic Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/5 pb-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-[10px] tracking-[0.5em] uppercase">
              <Fingerprint size={14} /> System Registry
            </div>
            <h1 className="text-6xl font-black tracking-tighter text-white">
              Aether<span className="text-cyan-500 italic">OS</span>
            </h1>
          </div>
          <div className="flex gap-8">
            <div className="text-right">
              <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Total Nodes</div>
              <div className="text-2xl font-mono text-white">{users.length.toString().padStart(2, '0')}</div>
            </div>
            <div className="text-right">
              <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Status</div>
              <div className="text-2xl font-mono text-cyan-500 flex items-center gap-2">
                <Activity size={20} className="animate-bounce" /> ONLINE
              </div>
            </div>
          </div>
        </div>

        {/* ADDED SPACE HERE: mt-32 for large gap between title and card */}
        <div className="mt-32 relative max-w-4xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-[2rem] blur-xl opacity-20" />
          <div className="relative bg-black/40 border border-white/10 backdrop-blur-3xl rounded-[2rem] p-8 md:p-12 shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-3">
                  <Zap className="text-cyan-400" size={20} /> Deploy New Identity
                </h3>
                <div className="space-y-4">
                  <div className="group">
                    <input
                      type="email"
                      placeholder="Access Email"
                      className="w-full bg-white/5 border border-white/10 group-hover:border-cyan-500/50 rounded-2xl px-6 py-4 outline-none transition-all placeholder:text-slate-600"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="group">
                    <input
                      type="password"
                      placeholder="Security Token"
                      className="w-full bg-white/5 border border-white/10 group-hover:border-cyan-500/50 rounded-2xl px-6 py-4 outline-none transition-all placeholder:text-slate-600"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-end gap-4">
                <p className="text-xs text-slate-500 leading-relaxed italic px-2">
                  * Deploying an identity grants Level-1 access to the Aether Cloud nodes. Ensure the security token meets encryption standards.
                </p>
                
                {/* Authorize Button with Bottom-to-Top Flow Animation */}
                <button
                  onClick={createUser}
                  disabled={creating}
                  className="relative group/btn overflow-hidden w-full py-5 bg-[#0a0a0a] text-white rounded-2xl font-black uppercase tracking-[0.2em] shadow-[0_0_40px_rgba(6,182,212,0.2)] transition-all active:scale-95 flex items-center justify-center gap-3 border border-white/10"
                >
                  {/* The Flowing Layer (Bottom to Top) */}
                  <div className="absolute inset-0 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-out bg-gradient-to-t from-cyan-600 to-indigo-600" />
                  
                  {/* Button Content */}
                  <span className="relative z-10 flex items-center gap-3">
                    {creating ? <Loader2 className="animate-spin" /> : <><Plus size={20} /> Authorize Node</>}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Space for the user list */}
        <div className="mt-24 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading ? (
                <div className="col-span-full py-20 text-center font-mono tracking-widest text-cyan-500 animate-pulse">
                  FETCHING CORE DATA...
                </div>
            ) : (
              users.map((u) => (
                <div key={u.id} className="group relative">
                  <div className="absolute inset-0 bg-cyan-500/5 rounded-3xl blur-md opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="relative bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 p-6 rounded-3xl transition-all duration-500 backdrop-blur-md">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20">
                        <Fingerprint size={20} />
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Verified Identity</div>
                      <div className="text-sm font-semibold text-white truncate">{u.email ?? "UNIDENTIFIED"}</div>
                    </div>

                    <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/5">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                        <span className="text-[10px] font-mono text-slate-500 uppercase">Sector-01</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-600 italic">
                        {new Date(u.created_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}