

// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";
// import { Orbit, Menu, X, ArrowUpRight, ArrowLeft } from "lucide-react";

// const NAV_LINKS = [
//   { name: "Home", href: "/dashboard/home" },
//   { name: "About", href: "/dashboard/about" },
//   { name: "Services", href: "/dashboard/services" },
//   { name: "Contact", href: "/dashboard/contact" },
// ];

// export default function Navbar() {
//   const pathname = usePathname();
//   const router = useRouter();
//   const [isOpen, setIsOpen] = useState(false);
//   const [hoveredPath, setHoveredPath] = useState<string | null>(null);

//   /**
//    * LOGIC: Show back button if we are deeper than the main landing page OR the dashboard landing.
//    * This ensures that if they go to /dashboard/about, they can go back to /dashboard/home.
//    */
//   const isSubPage = pathname !== "/" && pathname !== "/dashboard/home";

//   return (
//     <nav className="fixed top-0 left-0 w-full z-[100] px-4 md:px-6 py-5">
//       <div className="max-w-7xl mx-auto">
//         <div className="relative flex items-center justify-between bg-black/40 backdrop-blur-xl border border-white/10 px-4 md:px-6 py-3 rounded-[2rem] shadow-2xl">
          
//           <div className="flex items-center gap-2 md:gap-4">
//             {/* 1. DYNAMIC BACK BUTTON - Appears on sub-pages */}
//             <AnimatePresence mode="wait">
//               {isSubPage && (
//                 <motion.button
//                   initial={{ opacity: 0, x: -20, scale: 0.8 }}
//                   animate={{ opacity: 1, x: 0, scale: 1 }}
//                   exit={{ opacity: 0, x: -20, scale: 0.8 }}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => router.back()}
//                   className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-indigo-400 hover:bg-indigo-500 hover:text-white transition-all duration-300 group"
//                 >
//                   <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
//                 </motion.button>
//               )}
//             </AnimatePresence>

//             {/* 2. LOGO - Links to the root landing page */}
//             <Link href="/" className="flex items-center gap-3 group relative z-10">
//               <motion.div 
//                 whileHover={{ rotate: 180, scale: 1.1 }}
//                 transition={{ type: "spring", stiffness: 260, damping: 20 }}
//                 className="relative"
//               >
//                 <Orbit className="w-8 h-8 text-indigo-500" />
//                 <div className="absolute inset-0 bg-indigo-500/20 blur-lg rounded-full" />
//               </motion.div>
//               <span className="text-lg md:text-xl font-black tracking-tighter text-white">
//                 AETHER<span className="text-indigo-500">OS</span>
//               </span>
//             </Link>
//           </div>

//           {/* 3. DESKTOP NAVIGATION */}
//           <div 
//             className="hidden lg:flex items-center gap-2 relative"
//             onMouseLeave={() => setHoveredPath(null)}
//           >
//             {NAV_LINKS.map((link) => {
//               const isActive = pathname === link.href;
//               const isHovered = hoveredPath === link.href;
              
//               return (
//                 <Link
//                   key={link.name}
//                   href={link.href}
//                   onMouseEnter={() => setHoveredPath(link.href)}
//                   className="relative px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] transition-colors"
//                 >
//                   <motion.span 
//                     animate={{ 
//                       color: isHovered || isActive ? "#818cf8" : "#71717a",
//                       textShadow: isHovered || isActive ? "0px 0px 8px rgba(129, 140, 248, 0.6)" : "0px 0px 0px rgba(0,0,0,0)"
//                     }}
//                     className="relative z-10"
//                   >
//                     {link.name}
//                   </motion.span>

//                   {(isHovered || isActive) && (
//                     <motion.div 
//                       layoutId="nav-line"
//                       className="absolute bottom-0 left-0 h-[2px] bg-indigo-500 shadow-[0_0_12px_#6366f1]"
//                       initial={{ width: 0, opacity: 0 }}
//                       animate={{ width: "100%", opacity: 1 }}
//                       exit={{ width: 0, opacity: 0 }}
//                       transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                     />
//                   )}
//                 </Link>
//               );
//             })}
//           </div>

//           {/* 4. CONSOLE BUTTON - Entry point to Dashboard Home */}
//           <div className="hidden md:flex items-center gap-4 relative z-10">
//             <Link 
//               href="/dashboard/home" 
//               className="group relative flex items-center gap-2 px-6 py-2.5 bg-white text-black rounded-full text-[10px] font-black uppercase tracking-widest overflow-hidden transition-all active:scale-95 shadow-xl"
//             >
//               <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
//                 Console <ArrowUpRight className="w-3 h-3" />
//               </span>
//               {/* Bottom-to-Top Indigo Fill */}
//               <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
//             </Link>
//           </div>

//           {/* MOBILE TOGGLE */}
//           <div className="flex md:hidden items-center gap-2">
//              <button 
//                 className="p-2 text-white relative z-10"
//                 onClick={() => setIsOpen(!isOpen)}
//               >
//                 {isOpen ? <X /> : <Menu />}
//               </button>
//           </div>
//         </div>
//       </div>

//       {/* MOBILE OVERLAY */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             className="absolute top-24 left-6 right-6 bg-black/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 lg:hidden z-50 shadow-2xl"
//           >
//             <div className="flex flex-col gap-6">
//               {NAV_LINKS.map((link) => (
//                 <Link
//                   key={link.name}
//                   href={link.href}
//                   onClick={() => setIsOpen(false)}
//                   className="text-3xl font-black tracking-tighter text-zinc-500 hover:text-indigo-400 transition-colors uppercase italic"
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//               {/* Mobile CTA to Dashboard Home */}
//               <Link
//                 href="/dashboard/home"
//                 onClick={() => setIsOpen(false)}
//                 className="w-full py-4 bg-indigo-600 text-white text-center rounded-2xl font-black uppercase tracking-widest block"
//               >
//                 Launch Console
//               </Link>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }




"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Orbit, Menu, X, ArrowUpRight, ArrowLeft } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/dashboard/home" },
  { name: "About", href: "/dashboard/about" },
  { name: "Services", href: "/dashboard/services" },
  { name: "Contact", href: "/dashboard/contact" },
];

// ✅ DASHBOARD PAGE FLOW
const DASHBOARD_FLOW = [
  "/dashboard",
  "/dashboard/home",
  "/dashboard/about",
  "/dashboard/services",
  "/dashboard/contact",
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  // ✅ SHOW ARROW ONLY ON dashboard pages EXCEPT /dashboard
  const showBackArrow =
    pathname.startsWith("/dashboard") && pathname !== "/dashboard";

  // ✅ SMART BACK NAVIGATION
  const handleDashboardBack = () => {
    const currentIndex = DASHBOARD_FLOW.indexOf(pathname);
    if (currentIndex > 0) {
      router.push(DASHBOARD_FLOW[currentIndex - 1]);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-4 md:px-6 py-5">
      <div className="max-w-7xl mx-auto">
        <div className="relative flex items-center justify-between bg-black/40 backdrop-blur-xl border border-white/10 px-4 md:px-6 py-3 rounded-[2rem] shadow-2xl">
          
          <div className="flex items-center gap-2 md:gap-4">
            {/* 1. DYNAMIC BACK BUTTON */}
            <AnimatePresence mode="wait">
              {showBackArrow && (
                <motion.button
                  initial={{ opacity: 0, x: -20, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -20, scale: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDashboardBack}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-indigo-400 hover:bg-indigo-500 hover:text-white transition-all duration-300 group"
                >
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                </motion.button>
              )}
            </AnimatePresence>

            {/* 2. LOGO */}
            <Link href="/" className="flex items-center gap-3 group relative z-10">
              <motion.div 
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="relative"
              >
                <Orbit className="w-8 h-8 text-indigo-500" />
                <div className="absolute inset-0 bg-indigo-500/20 blur-lg rounded-full" />
              </motion.div>
              <span className="text-lg md:text-xl font-black tracking-tighter text-white">
                AETHER<span className="text-indigo-500">OS</span>
              </span>
            </Link>
          </div>

          {/* 3. DESKTOP NAVIGATION */}
          <div 
            className="hidden lg:flex items-center gap-2 relative"
            onMouseLeave={() => setHoveredPath(null)}
          >
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              const isHovered = hoveredPath === link.href;
              
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setHoveredPath(link.href)}
                  className="relative px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] transition-colors"
                >
                  <motion.span 
                    animate={{ 
                      color: isHovered || isActive ? "#818cf8" : "#71717a",
                      textShadow: isHovered || isActive
                        ? "0px 0px 8px rgba(129, 140, 248, 0.6)"
                        : "0px 0px 0px rgba(0,0,0,0)"
                    }}
                    className="relative z-10"
                  >
                    {link.name}
                  </motion.span>

                  {(isHovered || isActive) && (
                    <motion.div 
                      layoutId="nav-line"
                      className="absolute bottom-0 left-0 h-[2px] bg-indigo-500 shadow-[0_0_12px_#6366f1]"
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: "100%", opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* 4. CONSOLE BUTTON */}
          <div className="hidden md:flex items-center gap-4 relative z-10">
            <Link 
              href="/dashboard/home" 
              className="group relative flex items-center gap-2 px-6 py-2.5 bg-white text-black rounded-full text-[10px] font-black uppercase tracking-widest overflow-hidden transition-all active:scale-95 shadow-xl"
            >
              <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                Console <ArrowUpRight className="w-3 h-3" />
              </span>
              <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="flex md:hidden items-center gap-2">
            <button 
              className="p-2 text-white relative z-10"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-24 left-6 right-6 bg-black/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 lg:hidden z-50 shadow-2xl"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-black tracking-tighter text-zinc-500 hover:text-indigo-400 transition-colors uppercase italic"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/dashboard/home"
                onClick={() => setIsOpen(false)}
                className="w-full py-4 bg-indigo-600 text-white text-center rounded-2xl font-black uppercase tracking-widest block"
              >
                Launch Console
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
