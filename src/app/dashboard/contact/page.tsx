"use client";

import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Mail, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Send, 
  Globe, 
  Zap, 
  ShieldCheck, 
  ArrowUpRight,
  Headphones,
  HelpCircle
} from 'lucide-react';

export default function ContactPage() {
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
              <MessageSquare size={14} /> Open Communication Protocol
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
              Connect to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">The Fabric.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-medium">
              Have a question about the Nano-Kernel or want to deploy a global node? Our distributed support team is always online.
            </p>
          </div>
        </section>

        {/* CONTACT HUB SECTION */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12">
              
              {/* LEFT SIDE: CONTACT INFO (Lots of Content) */}
              <div className="lg:col-span-5 space-y-12">
                <div>
                  <h2 className="text-3xl font-bold mb-6 tracking-tight">Direct Channels</h2>
                  <div className="grid gap-4">
                    <ContactMethod 
                      icon={<Mail size={20}/>}
                      title="General Inquiry"
                      detail="hello@aether-os.systems"
                    />
                    <ContactMethod 
                      icon={<Zap size={20}/>}
                      title="Technical Support"
                      detail="dev-ops@aether-lattice.node"
                    />
                    <ContactMethod 
                      icon={<ShieldCheck size={20}/>}
                      title="Security Reporting"
                      detail="bounty@aether.security"
                    />
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-6 tracking-tight">Global Lattices</h2>
                  <div className="space-y-6">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
                      <div className="flex items-start gap-4">
                        <MapPin className="text-blue-500 mt-1" size={20} />
                        <div>
                          <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-2">North American Hub</h4>
                          <p className="text-slate-400 text-sm leading-relaxed">
                            440 Mission St, Suite 100<br />
                            San Francisco, CA 94105
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
                      <div className="flex items-start gap-4">
                        <Globe className="text-blue-500 mt-1" size={20} />
                        <div>
                          <h4 className="font-bold text-white uppercase tracking-widest text-xs mb-2">European Network</h4>
                          <p className="text-slate-400 text-sm leading-relaxed">
                            Schönhauser Allee 10-11<br />
                            10119 Berlin, Germany
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 rounded-3xl bg-blue-600/10 border border-blue-500/20">
                  <Headphones className="text-blue-500 mb-4" />
                  <h4 className="text-white font-bold mb-2 uppercase tracking-widest text-xs">24/7 Node Support</h4>
                  <p className="text-slate-400 text-sm mb-4">Our engineers are distributed across 12 timezones to ensure constant network availability.</p>
                  <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-tighter">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" /> Current Wait: 4 Minutes
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE: CONTACT FORM */}
              <div className="lg:col-span-7">
                <div className="p-8 md:p-12 rounded-[3rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold mb-8 tracking-tight">Send a Message</h3>
                    
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1">Identity Name</label>
                          <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-colors" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1">Secure Email</label>
                          <input type="email" placeholder="john@aether.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-colors" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1">Subject Matter</label>
                        <select className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-slate-400 focus:outline-none focus:border-blue-500/50 transition-colors appearance-none">
                          <option>Node Partnership</option>
                          <option>Enterprise Integration</option>
                          <option>General Support</option>
                          <option>Media Inquiry</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 ml-1">Encryption Layer / Message</label>
                        <textarea rows={5} placeholder="Type your message here..." className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500/50 transition-colors resize-none"></textarea>
                      </div>

                      {/* SUBMIT BUTTON WITH BOTTOM-TO-TOP FILL */}
                      <button type="button" className="group relative w-full overflow-hidden bg-blue-600 py-5 rounded-2xl text-white font-bold uppercase tracking-[0.2em] text-sm transition-all shadow-xl">
                        <span className="relative z-10 flex items-center justify-center gap-2 transition-colors duration-500 group-hover:text-black">
                          Initialize Transmission <Send size={16} />
                        </span>
                        <div className="absolute inset-0 z-0 h-full w-full translate-y-full bg-white transition-transform duration-500 ease-out group-hover:translate-y-0" />
                      </button>
                    </form>
                  </div>
                  
                  {/* Decorative background element for the form */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FAQ PREVIEW SECTION */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <HelpCircle className="text-blue-500 mx-auto mb-6" size={40} />
              <h2 className="text-4xl font-bold tracking-tight">Quick Answers.</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <FAQCard 
                q="How do I join the Aether Node program?" 
                a="Download the Aether CLI and run 'aether node --init' to begin the hardware handshake and lattice verification."
              />
              <FAQCard 
                q="Is my data really decentralized?" 
                a="Every byte is sharded across 14,000+ nodes. No single entity—not even us—can access your data without your sovereign key."
              />
              <FAQCard 
                q="What are the enterprise licensing costs?" 
                a="Aether OS is open-source. We only charge for managed lattice infrastructure and high-priority neural support pipelines."
              />
              <FAQCard 
                q="Can I build apps for Aether today?" 
                a="Yes. Our SDK supports Rust, Go, and TypeScript. Check the developer documentation for the Lattice-Sync API."
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// --- HELPER COMPONENTS ---

function ContactMethod({ icon, title, detail }: { icon: React.ReactNode, title: string, detail: string }) {
  return (
    <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5 group hover:border-blue-500/30 transition-all cursor-pointer">
      <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
        {icon}
      </div>
      <div>
        <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{title}</h4>
        <p className="text-white font-medium">{detail}</p>
      </div>
      <ArrowUpRight size={14} className="ml-auto text-slate-600 group-hover:text-blue-400 transition-colors" />
    </div>
  );
}

function FAQCard({ q, a }: { q: string, a: string }) {
  return (
    <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-blue-500/20 transition-all group">
      <h4 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{q}</h4>
      <p className="text-slate-500 text-sm leading-relaxed">{a}</p>
    </div>
  );
}