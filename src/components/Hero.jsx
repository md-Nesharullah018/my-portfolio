

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#030303] text-white flex flex-col justify-center px-8 md:px-24 overflow-hidden font-sans">
      
      <div className="absolute inset-0 z-0">

        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[650px] md:h-[650px] pointer-events-none opacity-50">
          <div className="absolute inset-0 bg-orange-600/20 blur-[140px] rounded-full"></div>
          <div className="absolute inset-12 border-[1px] border-orange-500/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
        </div>

        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px]"
        />

        <div 
          className="absolute inset-0 opacity-[0.04] pointer-events-none" 
          style={{ 
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`, 
            backgroundSize: '60px 60px' 
          }} 
        />

        <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <div className="relative z-10 max-w-5xl w-full">
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-orange-500 font-mono text-xl mb-4 tracking-widest uppercase"
        >
          Hello
        </motion.p>
        
        <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight leading-none">
          I am <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-orange-500 inline-block">
            Md Nesharullah
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          <span className="text-orange-400 font-bold tracking-widest text-sm md:text-lg uppercase">
            Full Stack Developer
          </span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-8"
        >
          <h2 className="text-2xl md:text-3xl font-medium text-slate-300">
             <span className="text-white font-bold underline decoration-orange-500/50 underline-offset-4">Electronics and Communication Engineering</span>
          </h2>

          <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl border-l-2 border-orange-500/30 pl-6 italic bg-white/[0.01] rounded-xl">
          “I am an Electronics and Communication Engineering student and a Full Stack Developer specializing in building
           scalable web applications. I work across the full stack using React.js for frontend and Node.js, Express.js, 
           and MongoDB for backend development. With a strong engineering mindset, I focus on building efficient, scalable, 
           and well-structured solutions to complex technical problems.”
          </p>

          <div className="flex items-center gap-8 pt-4">
            <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mneshar018@gmail.com" 
                target="_blank" 
                rel="noreferrer" 
                title="Mail Me" 
                className="hover:scale-125 transition-all duration-300"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="Gmail" className="w-8 h-8" />
              </a>

            <a href="https://github.com/md-Nesharullah018" target="_blank" rel="noreferrer" title="GitHub" className="hover:scale-125 transition-all duration-300 bg-white rounded-full p-0.5">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" className="w-8 h-8" />
            </a>

            <a href="https://www.linkedin.com/in/md-neshar-874516292/" target="_blank" rel="noreferrer" title="LinkedIn" className="hover:scale-125 transition-all duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" className="w-8 h-8 rounded" />
            </a>

            <a href="https://leetcode.com/u/md_neshar/" target="_blank" rel="noreferrer" title="LeetCode" className="hover:scale-125 transition-all duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" className="w-8 h-8 invert" />
            </a>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes typing {
          0% { width: 0 }
          50% { width: 100% }
          100% { width: 0 }
        }
        .animate-typing {
          animation: typing 6s steps(20) infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;