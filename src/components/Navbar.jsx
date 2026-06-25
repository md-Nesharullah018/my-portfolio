

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt4 } from "react-icons/hi";
import { VscClose } from "react-icons/vsc";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-[100] px-4 py-4 md:px-10">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`mx-auto max-w-6xl transition-all duration-500 rounded-[24px] border ${
          scrolled 
          ? "bg-black/40 backdrop-blur-2xl border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] py-3 px-6" 
          : "bg-transparent border-transparent py-5 px-4"
        } flex items-center justify-between`}
      >

        <Link to="/" className="relative flex items-center gap-2 group">
          <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg rotate-45 group-hover:rotate-[225deg] transition-all duration-700 flex items-center justify-center">
            <span className="text-white font-black -rotate-45 group-hover:-rotate-[225deg] transition-all duration-700 text-xs">MD</span>
          </div>
          <span className="font-black tracking-[0.2em] text-white text-sm md:text-base hidden sm:block">
            NESHARULLAH
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-2 bg-white/5 p-1.5 rounded-full border border-white/5">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path}>
              <motion.div
                className={`relative px-6 py-2 rounded-full text-[12px] font-bold uppercase tracking-widest transition-all duration-300 ${
                  location.pathname === link.path ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {location.pathname === link.path && (
                  <motion.div 
                    layoutId="nav-glow"
                    className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-amber-600/20 rounded-full border border-orange-500/30 shadow-[0_0_15px_rgba(234,88,12,0.2)]"
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </motion.div>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(234,88,12,0.4)" }}
            whileTap={{ scale: 0.95 }}
            href="/Md_Neshar 25-06-2026.pdf"
            download
            className="hidden sm:block px-6 py-2.5 bg-white text-black text-[11px] font-black uppercase tracking-tighter rounded-full transition-all"
          >
            Get Resume
          </motion.a>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white text-2xl"
          >
            {isOpen ? <VscClose /> : <HiMenuAlt4 />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 bg-[#050505] z-[99] md:hidden flex flex-col justify-center items-center gap-8"
          >
             <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] bg-orange-600/20 blur-[100px] rounded-full" />
             
             {navLinks.map((link, i) => (
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.1 }}
                 key={link.name}
               >
                 <Link 
                   to={link.path} 
                   onClick={() => setIsOpen(false)}
                   className="text-4xl font-black text-white hover:text-orange-500 transition-colors uppercase tracking-tighter"
                 >
                   {link.name}
                 </Link>
               </motion.div>
             ))}
             
             <motion.a
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.5 }}
               href="/Md_Neshar 25-06-2026.pdf"
               className="mt-10 px-10 py-4 bg-orange-600 text-white rounded-2xl font-black uppercase tracking-widest"
             >
               Download CV
             </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;