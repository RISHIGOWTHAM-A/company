"use client";

import Link from "next/link";
import { Orbit, Twitter, Github, Linkedin, Cpu } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#020202] py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Section */}
        <div className="md:col-span-2 space-y-6">
          <Link href="/" className="flex items-center gap-2">
            <Orbit className="w-8 h-8 text-indigo-500" />
            <span className="text-2xl font-black tracking-tighter">AETHER OS</span>
          </Link>
          <p className="text-zinc-500 max-w-sm text-sm leading-relaxed">
            The architect of the post-quantum internet. We provide the infrastructure for humanity's most ambitious digital dreams. Decentralized, secure, and instant.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="p-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all text-zinc-400 hover:text-white">
              <Twitter className="w-4 h-4" />
            </Link>
            <Link href="#" className="p-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all text-zinc-400 hover:text-white">
              <Github className="w-4 h-4" />
            </Link>
            <Link href="#" className="p-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all text-zinc-400 hover:text-white">
              <Linkedin className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Links Column 1 */}
        <div className="space-y-6">
          <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white">Platform</h4>
          <ul className="space-y-4 text-sm text-zinc-500">
            <li><Link href="/services" className="hover:text-indigo-400 transition-colors">Edge Nodes</Link></li>
            <li><Link href="/services" className="hover:text-indigo-400 transition-colors">Quantum Vault</Link></li>
            <li><Link href="/dashboard" className="hover:text-indigo-400 transition-colors">Neural Console</Link></li>
            <li><Link href="#" className="hover:text-indigo-400 transition-colors">Status API</Link></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div className="space-y-6">
          <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white">Company</h4>
          <ul className="space-y-4 text-sm text-zinc-500">
            <li><Link href="/about" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-indigo-400 transition-colors">Contact Hub</Link></li>
            <li><Link href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-indigo-400 transition-colors">Terms of Flux</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
          <span>&copy; 2026 Aether OS Corp.</span>
          <span className="hidden md:block">|</span>
          <span className="flex items-center gap-1">
            <Cpu className="w-3 h-3" /> System Stable
          </span>
        </div>
        <p className="text-[10px] text-zinc-700 font-mono italic">
          ESTABLISHING_SECURE_CONNECTION_SUCCESSFUL_...
        </p>
      </div>
    </footer>
  );
}