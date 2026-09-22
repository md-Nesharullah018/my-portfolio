
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#000000] text-white flex flex-col justify-center px-8 md:px-24 overflow-hidden font-sans">

      {/* Background */}
      <div className="absolute inset-0 z-0">

        {/* Very subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.018] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Very subtle noise */}
        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl w-full pt-16">

        {/* Hello */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-5"
        >
          <span className="text-cyan-400 font-mono text-sm md:text-base tracking-[0.35em] uppercase">
            Hello
          </span>

          <span className="h-[1px] w-12 bg-cyan-400/60"></span>
        </motion.div>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-5 tracking-tight leading-[1.05]">

          I am <br />

          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-500 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-cyan-400 inline-block">
            Md Nesharullah
          </span>

        </h1>

        {/* Developer Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-7 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

          <span className="text-cyan-400 font-bold tracking-widest text-xs md:text-sm uppercase">
            Full Stack Developer
          </span>
        </motion.div>

        {/* Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-7"
        >

          <h2 className="text-lg md:text-xl font-medium text-slate-300">
            <span className="text-white font-bold underline decoration-cyan-500/50 underline-offset-4">
              Electronics and Communication Engineering
            </span>
          </h2>

          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-3xl border-l-2 border-cyan-500/30 pl-5 italic bg-white/[0.005] rounded-xl">
            “I am Full Stack Developer with hands-on experience building and improving real-world web applications. Experienced in developing complete application 
            workflows, designing RESTful APIs, managing databases, and resolving complex backend and integration challenges. I focus on writing clean, maintainable 
            code and building reliable solutions with attention to performance, scalability, and overall application quality.”
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-8 pt-3">

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mneshar018@gmail.com"
              target="_blank"
              rel="noreferrer"
              title="Mail Me"
              className="hover:scale-125 transition-all duration-300"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
                alt="Gmail"
                className="w-7 h-7"
              />
            </a>

            <a
              href="https://github.com/md-Nesharullah018"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
              className="hover:scale-125 transition-all duration-300 bg-white rounded-full p-0.5"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                alt="GitHub"
                className="w-7 h-7"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/md-neshar-874516292/"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
              className="hover:scale-125 transition-all duration-300"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                alt="LinkedIn"
                className="w-7 h-7 rounded"
              />
            </a>

            <a
              href="https://leetcode.com/u/md_neshar/"
              target="_blank"
              rel="noreferrer"
              title="LeetCode"
              className="hover:scale-125 transition-all duration-300"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                alt="LeetCode"
                className="w-7 h-7 invert"
              />
            </a>

          </div>

        </motion.div>
      </div>

      <style jsx>{`
        @keyframes typing {
          0% {
            width: 0;
          }

          50% {
            width: 100%;
          }

          100% {
            width: 0;
          }
        }

        .animate-typing {
          animation: typing 6s steps(20) infinite;
        }
      `}</style>

    </section>
  );
};

export default Hero;