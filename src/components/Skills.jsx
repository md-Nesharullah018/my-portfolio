
import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaCode,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiNextdotjs,
  SiCplusplus,
  SiRedis,
} from "react-icons/si";

const Skills = () => {
  // =========================
  // FRONTEND
  // =========================
  const frontendSkills = [
    {
      name: "React.js",
      icon: FaReact,
      color: "text-cyan-400",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "text-white",
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      color: "text-yellow-400",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "text-blue-400",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "text-cyan-300",
    },
  ];

  // =========================
  // BACKEND
  // =========================
  const backendSkills = [
    {
      name: "Node.js",
      icon: FaNodeJs,
      color: "text-green-400",
    },
    {
      name: "Express.js",
      icon: SiExpress,
      color: "text-gray-200",
    },
    {
      name: "REST API",
      icon: FaCode,
      color: "text-cyan-400",
    },
  ];

  // =========================
  // DATABASES
  // =========================
  const databaseSkills = [
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "text-green-400",
    },
    {
      name: "MySQL",
      icon: SiMysql,
      color: "text-blue-400",
    },
    {
      name: "Redis",
      icon: SiRedis,
      color: "text-red-400",
    },
  ];

  // =========================
  // LANGUAGES
  // =========================
  const languageSkills = [
    {
      name: "Java",
      icon: FaJava,
      color: "text-red-400",
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      color: "text-yellow-400",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "text-blue-400",
    },
  ];

  // =========================
  // TOOLS & DEVOPS
  // =========================
  const toolsSkills = [
    {
      name: "Git",
      icon: FaGitAlt,
      color: "text-orange-500",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      color: "text-white",
    },
    {
      name: "Docker",
      icon: FaDocker,
      color: "text-blue-400",
    },
    {
      name: "VS Code",
      icon: FaCode,
      color: "text-blue-400",
    },
  ];

  const cardHover = {
    whileHover: {
      y: -6,
      scale: 1.02,
    },
    transition: {
      duration: 0.25,
    },
  };

  return (
    <section className="relative min-h-screen bg-black text-white px-5 md:px-10 lg:px-16 py-24 overflow-hidden">

      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* =========================
          HEADER
      ========================= */}
      <div className="relative max-w-6xl mx-auto mb-20">

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-cyan-400 text-sm tracking-[0.35em] uppercase mb-4"
        >
          Technical Expertise
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold"
        >
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Skills
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 mt-5 max-w-2xl text-sm md:text-base leading-7"
        >
          Technologies and tools I use to build modern, scalable and
          production-ready web applications.
        </motion.p>

      </div>


      {/* =====================================================
          FRONTEND
      ===================================================== */}
      <div className="relative max-w-6xl mx-auto mb-24">

        <div className="flex items-center gap-4 mb-8">
          <span className="text-cyan-400 text-sm font-mono">01</span>

          <h2 className="text-2xl md:text-3xl font-semibold">
            Frontend
          </h2>

          <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/40 to-transparent" />
        </div>


        {/* Horizontal Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

          {frontendSkills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                {...cardHover}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group border border-white/10 bg-white/[0.03] rounded-xl p-6 text-center hover:border-cyan-400/40 hover:bg-cyan-400/[0.04] transition-all"
              >

                <Icon
                  className={`text-4xl mx-auto mb-4 ${skill.color} group-hover:scale-110 transition-transform`}
                />

                <h3 className="text-sm font-medium text-gray-200">
                  {skill.name}
                </h3>

              </motion.div>
            );
          })}

        </div>
      </div>


      {/* =====================================================
          BACKEND
      ===================================================== */}
      <div className="relative max-w-6xl mx-auto mb-24">

        <div className="flex items-center gap-4 mb-8">
          <span className="text-cyan-400 text-sm font-mono">02</span>

          <h2 className="text-2xl md:text-3xl font-semibold">
            Backend
          </h2>

          <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/40 to-transparent" />
        </div>


        {/* Big Backend Cards */}
        <div className="grid md:grid-cols-3 gap-5">

          {backendSkills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent rounded-2xl p-7 group hover:border-cyan-400/40 transition-all"
              >

                {/* Number */}
                <span className="absolute right-5 top-4 text-5xl font-bold text-white/[0.03]">
                  0{index + 1}
                </span>

                <Icon
                  className={`text-5xl ${skill.color} mb-6 group-hover:scale-110 transition-transform`}
                />

                <h3 className="text-xl font-semibold mb-2">
                  {skill.name}
                </h3>

                <p className="text-sm text-gray-500">
                  Backend development & API integration
                </p>

              </motion.div>
            );
          })}

        </div>
      </div>


      {/* =====================================================
          DATABASES
      ===================================================== */}
      <div className="relative max-w-6xl mx-auto mb-24">

        <div className="flex items-center gap-4 mb-8">
          <span className="text-cyan-400 text-sm font-mono">03</span>

          <h2 className="text-2xl md:text-3xl font-semibold">
            Databases
          </h2>

          <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/40 to-transparent" />
        </div>


        {/* Database Style */}
        <div className="grid md:grid-cols-3 gap-6">

          {databaseSkills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="border border-white/10 rounded-full px-7 py-5 bg-white/[0.02] hover:border-cyan-400/50 hover:bg-cyan-400/[0.03] transition-all flex items-center gap-5"
              >

                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                  <Icon className={`text-2xl ${skill.color}`} />
                </div>

                <div>
                  <h3 className="font-medium">
                    {skill.name}
                  </h3>

                  <p className="text-xs text-gray-500 mt-1">
                    Database Technology
                  </p>
                </div>

              </motion.div>
            );
          })}

        </div>
      </div>


      {/* =====================================================
          LANGUAGES
      ===================================================== */}
      <div className="relative max-w-6xl mx-auto mb-24">

        <div className="flex items-center gap-4 mb-8">
          <span className="text-cyan-400 text-sm font-mono">04</span>

          <h2 className="text-2xl md:text-3xl font-semibold">
            Programming Languages
          </h2>

          <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/40 to-transparent" />
        </div>


        {/* Language Pills */}
        <div className="flex flex-wrap gap-4">

          {languageSkills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={`${skill.name}-${index}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 bg-white/[0.03] hover:border-cyan-400/40 transition-all"
              >

                <Icon className={`text-xl ${skill.color}`} />

                <span className="text-sm text-gray-200">
                  {skill.name}
                </span>

              </motion.div>
            );
          })}

        </div>
      </div>


      {/* =====================================================
          TOOLS & DEVOPS
      ===================================================== */}
      <div className="relative max-w-6xl mx-auto">

        <div className="flex items-center gap-4 mb-8">
          <span className="text-cyan-400 text-sm font-mono">05</span>

          <h2 className="text-2xl md:text-3xl font-semibold">
            Tools & DevOps
          </h2>

          <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/40 to-transparent" />
        </div>


        {/* Different Masonry-like Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          {toolsSkills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`
                  group relative overflow-hidden
                  border border-white/10
                  rounded-2xl
                  bg-white/[0.03]
                  p-6
                  ${index === 0 ? "md:col-span-2" : ""}
                  hover:border-cyan-400/40
                  transition-all
                `}
              >

                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 rounded-xl bg-white/[0.05] flex items-center justify-center group-hover:bg-cyan-400/10 transition-all">

                    <Icon
                      className={`text-2xl ${skill.color} group-hover:scale-110 transition-transform`}
                    />

                  </div>

                  <div>
                    <h3 className="font-medium">
                      {skill.name}
                    </h3>

                    <p className="text-xs text-gray-500 mt-1">
                      Development Tool
                    </p>
                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>
      </div>

    </section>
  );
};

export default Skills;