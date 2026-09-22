import { motion } from "framer-motion";
import {
  FaNodeJs,
  FaDatabase,
  FaCode,
  FaGitAlt,
  FaGithub,
  FaServer,
  FaCertificate,
  FaDownload,
  FaExternalLinkAlt,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiJavascript,
} from "react-icons/si";

const Experience = () => {
  const technologies = [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "REST APIs", icon: <FaCode /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
  ];

  const projects = [
    {
      number: "01",
      name: "E-commerce Backend",
      type: "Backend Development",
      description:
        "Developed the backend from scratch with authentication, CRUD operations, validation, database operations, and business logic. Worked across Admin, Vendor, Customer, Product, Order, Category, Offers, and Commission modules.",
      tags: ["Node.js", "Express.js", "MongoDB"],
    },
    {
      number: "02",
      name: "RO Service Engineer",
      type: "Backend Maintenance & Development",
      description:
        "Worked on an existing backend application and resolved issues across Vendor, Admin, Super Admin, and Customer panels. Diagnosed API, routing, middleware, authentication, and database-related issues.",
      tags: ["Node.js", "Express.js", "MongoDB"],
    },
    {
      number: "03",
      name: "Softwave-Technify",
      type: "Backend Development",
      description:
        "Worked on backend issues involving data creation, data transfer, API integration, routing, and middleware while improving frontend-backend communication and overall data flow.",
      tags: ["Node.js", "Express.js", "REST API"],
    },
  ];

  const responsibilities = [
    "Developed and maintained backend APIs using Node.js and Express.js.",
    "Implemented CRUD operations, authentication, authorization, and validation.",
    "Worked with MongoDB for application data management and database operations.",
    "Debugged API, routing, middleware, authentication, and database-related issues.",
    "Worked on API integration and frontend-backend communication.",
    "Used Git and GitHub for version control and project collaboration.",
  ];

  return (
    <section className="relative min-h-screen bg-black text-white px-5 sm:px-6 py-24 overflow-hidden">

      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />

        <div className="absolute top-[-100px] left-[10%] w-[400px] h-[400px] rounded-full bg-cyan-500/[0.04] blur-[130px]" />

        <div className="absolute bottom-[-100px] right-[10%] w-[400px] h-[400px] rounded-full bg-blue-500/[0.04] blur-[130px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-5">
            <span className="h-px w-10 bg-cyan-400" />

            <span className="text-cyan-400 text-xs sm:text-sm tracking-[0.3em] uppercase">
              03 — Experience
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500">
              Experience
            </span>
          </h1>

          <p className="text-gray-500 mt-6 max-w-2xl leading-7">
            Hands-on experience in backend development, API development,
            database management, debugging, and real-world application
            development.
          </p>
        </motion.div>

        {/* ================= TIMELINE ================= */}

        <div className="relative">

          {/* Timeline */}
          <div className="absolute left-[17px] top-8 bottom-0 w-px bg-gradient-to-b from-cyan-400/70 via-cyan-400/20 to-transparent hidden md:block" />

          {/* Timeline Dot */}
          <div className="absolute left-[13px] top-7 w-[9px] h-[9px] rounded-full bg-cyan-400 shadow-[0_0_25px_6px_rgba(34,211,238,0.25)] hidden md:block" />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:ml-14"
          >

            {/* ================= MAIN EXPERIENCE ================= */}

            <div className="relative rounded-[28px] border border-white/[0.08] bg-[#050505] overflow-hidden">

              {/* Top Glow Line */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

              <div className="p-6 sm:p-8 md:p-10">

                {/* ================= COMPANY HEADER ================= */}

                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-7">

                  <div className="flex gap-5">

                    {/* Company Icon */}
                    <div className="hidden sm:flex shrink-0 w-14 h-14 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.05] items-center justify-center text-cyan-400 text-2xl shadow-[0_0_30px_rgba(34,211,238,0.06)]">
                      <FaServer />
                    </div>

                    <div>
                      <p className="text-cyan-400 text-xs sm:text-sm tracking-[0.2em] uppercase font-medium">
                        Node.js Developer Intern
                      </p>

                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 tracking-tight">
                        Talentrise Technokrate
                        <span className="text-gray-500"> Pvt. Ltd.</span>
                      </h2>

                      <p className="text-gray-500 mt-3">
                        Backend Development Internship
                      </p>
                    </div>

                  </div>

                  {/* Date */}
                  <div className="shrink-0">
                    <div className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-400/15 bg-cyan-400/[0.04]">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-3 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

                      <span className="text-cyan-300 text-xs sm:text-sm">
                        06 June 2026 — 12 September 2026
                      </span>
                    </div>
                  </div>

                </div>

                {/* Divider */}
                <div className="my-10 h-px bg-gradient-to-r from-cyan-400/20 via-white/[0.06] to-transparent" />

                {/* ================= PROJECTS ================= */}

                <div>

                  <div className="flex items-end justify-between mb-6">
                    <div>
                      <p className="text-gray-600 text-xs tracking-[0.2em] uppercase mb-2">
                        Selected Work
                      </p>

                      <h3 className="text-2xl font-semibold">
                        Projects Worked On
                      </h3>
                    </div>

                    <span className="hidden sm:block text-gray-700 text-sm font-mono">
                      03 PROJECTS
                    </span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

                    {projects.map((project, index) => (
                      <motion.div
                        key={project.name}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.12,
                        }}
                        whileHover={{ y: -6 }}
                        className="group relative"
                      >

                        <div className="relative h-full rounded-2xl border border-white/[0.07] bg-[#080808] p-5 overflow-hidden transition-all duration-300 group-hover:border-cyan-400/25">

                          {/* Hover Glow */}
                          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-cyan-400/[0.04] blur-3xl group-hover:bg-cyan-400/[0.08] transition-all duration-500" />

                          {/* Number */}
                          <div className="flex items-center justify-between mb-7">
                            <span className="text-4xl font-bold text-white/[0.08] group-hover:text-cyan-400/20 transition-colors">
                              {project.number}
                            </span>

                            <span className="text-[10px] uppercase tracking-wider text-gray-600 border border-white/[0.06] rounded-full px-2.5 py-1">
                              {project.type}
                            </span>
                          </div>

                          {/* Project Name */}
                          <h4 className="text-xl font-semibold group-hover:text-cyan-400 transition-colors">
                            {project.name}
                          </h4>

                          {/* Description */}
                          <p className="text-gray-500 text-sm leading-6 mt-4">
                            {project.description}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mt-6">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[11px] text-gray-500 border border-white/[0.06] rounded-full px-2.5 py-1 group-hover:border-cyan-400/10 transition-colors"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                        </div>

                      </motion.div>
                    ))}

                  </div>
                </div>

                {/* ================= RESPONSIBILITIES ================= */}

                <div className="mt-12">

                  <div className="mb-6">
                    <p className="text-gray-600 text-xs tracking-[0.2em] uppercase mb-2">
                      Contribution
                    </p>

                    <h3 className="text-2xl font-semibold">
                      Key Responsibilities
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">

                    {responsibilities.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{
                          opacity: 0,
                          x: index % 2 === 0 ? -15 : 15,
                        }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.05,
                        }}
                        className="flex gap-3 group"
                      >
                        <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all" />

                        <p className="text-gray-500 text-sm leading-6 group-hover:text-gray-400 transition-colors">
                          {item}
                        </p>
                      </motion.div>
                    ))}

                  </div>
                </div>

                {/* ================= TECHNOLOGIES ================= */}

                <div className="mt-12 pt-8 border-t border-white/[0.06]">

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">

                    <div>
                      <p className="text-gray-600 text-xs tracking-[0.2em] uppercase mb-2">
                        Tech Stack
                      </p>

                      <h3 className="text-lg font-semibold">
                        Technologies Used
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">

                      {technologies.map((tech) => (
                        <div
                          key={tech.name}
                          className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/[0.07] bg-white/[0.02] text-gray-500 hover:text-cyan-400 hover:border-cyan-400/25 hover:bg-cyan-400/[0.03] transition-all duration-300"
                        >
                          <span className="text-cyan-400 text-sm">
                            {tech.icon}
                          </span>

                          <span className="text-xs">
                            {tech.name}
                          </span>
                        </div>
                      ))}

                    </div>

                  </div>
                </div>

                {/* ================= CERTIFICATE ================= */}

                <div className="mt-12 pt-8 border-t border-white/[0.06]">

                  <div className="mb-6">
                    <p className="text-gray-600 text-xs tracking-[0.2em] uppercase mb-2">
                      Certification
                    </p>

                    <h3 className="text-2xl font-semibold">
                      Internship Certificate
                    </h3>
                  </div>

                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25 }}
                    className="group relative rounded-2xl border border-white/[0.08] bg-[#080808] p-5 sm:p-6 overflow-hidden hover:border-cyan-400/30 transition-all duration-300"
                  >

                    {/* Certificate Glow */}
                    <div className="absolute -top-20 -right-20 w-48 h-48 bg-cyan-400/[0.04] rounded-full blur-3xl group-hover:bg-cyan-400/[0.08] transition-all duration-500" />

                    <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

                      {/* Certificate Info */}
                      <div className="flex items-start gap-4">

                        <div className="shrink-0 w-12 h-12 rounded-xl border border-cyan-400/20 bg-cyan-400/[0.05] flex items-center justify-center text-cyan-400 text-xl">
                          <FaCertificate />
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold group-hover:text-cyan-400 transition-colors">
                            Node.js Developer Internship
                          </h4>

                          <p className="text-gray-500 text-sm mt-1">
                            Talentrise Technokrate Pvt. Ltd.
                          </p>

                          <p className="text-gray-600 text-xs mt-2">
                            06 June 2026 — 12 September 2026
                          </p>
                        </div>

                      </div>

                      {/* Certificate Buttons */}
                      <div className="flex flex-wrap gap-3">

                        {/* View Certificate */}
                        <a
                          href="/internship-certificate.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-cyan-400/20 bg-cyan-400/[0.04] text-cyan-400 text-sm hover:bg-cyan-400/10 hover:border-cyan-400/40 transition-all"
                        >
                          <FaExternalLinkAlt className="text-xs" />
                          View
                        </a>

                        {/* Download Certificate */}
                        <a
                          href="/internship-certificate.pdf"
                          download
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-400 text-black text-sm font-medium hover:bg-cyan-300 transition-all"
                        >
                          <FaDownload className="text-xs" />
                          Download
                        </a>

                      </div>

                    </div>
                  </motion.div>
                </div>

                {/* ================= FOOTER ================= */}

                <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-gray-700">

                  <div className="flex items-center gap-2">
                    <FaDatabase className="text-cyan-400/70" />

                    <span>
                      Backend Development • APIs • Database
                    </span>
                  </div>

                  <span className="font-mono tracking-wider">
                    2026
                  </span>

                </div>

              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;