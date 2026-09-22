

// import React from "react";
// import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
// import { FiGithub, FiArrowUpRight } from "react-icons/fi";

// const ProjectCard = ({ project, index }) => {
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   const rotateX = useTransform(y, [-0.5, 0.5], [15, -15]);
//   const rotateY = useTransform(x, [-0.5, 0.5], [-15, 15]);
//   const springConfig = { stiffness: 300, damping: 20 };
//   const rotateXSpring = useSpring(rotateX, springConfig);
//   const rotateYSpring = useSpring(rotateY, springConfig);

//   const handleMouseMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const mouseX = e.clientX - rect.left;
//     const mouseY = e.clientY - rect.top;
//     x.set(mouseX / rect.width - 0.5);
//     y.set(mouseY / rect.height - 0.5);
//   };

//   const handleMouseLeave = () => {
//     x.set(0);
//     y.set(0);
//   };

//   return (
//     <motion.div
//       style={{ rotateX: rotateXSpring, rotateY: rotateYSpring, transformStyle: "preserve-3d" }}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       initial={{ opacity: 0, y: 60, scale: 0.9 }}
//       whileInView={{ opacity: 1, y: 0, scale: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8, delay: index * 0.15 }}
//       className="relative w-full h-96 md:h-[400px] rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/20 shadow-2xl cursor-pointer overflow-hidden"
//     >

//       <img
//         src={project.image}
//         alt={project.title}
//         className="absolute inset-0 w-full h-full object-cover rounded-3xl filter brightness-75 transition-transform duration-700 group-hover:scale-110"
//       />
//       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-3xl" />

//       <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end text-white z-10">
//         <span className="text-orange-500 font-mono text-xs tracking-widest uppercase">
//           {project.category}
//         </span>
//         <h3 className="text-2xl md:text-4xl font-extrabold mt-2">{project.title}</h3>
//         <div className="flex flex-wrap gap-2 mt-3">
//           {project.tags.map((tag) => (
//             <span
//               key={tag}
//               className="text-[10px] md:text-xs px-3 py-1 bg-white/10 border border-white/20 rounded-full font-semibold uppercase"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>

//         <div className="flex gap-4 mt-4">
//           <a
//             href={project.live}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-full text-xs md:text-sm font-bold hover:bg-white hover:text-black transition-all"
//           >
//             View <FiArrowUpRight />
//           </a>
//           <a
//             href={project.github}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-2xl md:text-3xl hover:text-orange-500 transition-colors"
//           >
//             <FiGithub />
//           </a>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const Projects = () => {
//   const allProjects = [
//     {
//       title: "ControlDesk",
//       category: "MERN",
//       tags: ["Node.js", "Express.js", "React.js", "MongoDB", "Tailwind CSS"],
//       image:
//       "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?q=80&w=1600&auto=format&fit=crop",
//       live: "https://control-desk-woad.vercel.app",
//       github: "https://github.com/md-Nesharullah018/controlDesk.git",
//     },
//     {
//       title: "Employee Task Manager",
//       category: "Frontend",
//       tags: ["React", "Context API", "Tailwind CSS"],
//       image:
//         "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop",
//       live: "https://unique-pavlova-6ff1a3.netlify.app/",
//       github: "https://github.com/md-Nesharullah018/Employee-Task-Manager.git",
//     },
//     {
//       title: "Vault Pro",
//       category: "Frontend",
//       tags: ["Next.js", "Chart.js", "Tailwind"],
//       image:
//       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
//       live: "https://vault-pro-ten.vercel.app/dashboard",
//       github: "https://github.com/md-Nesharullah018/Vault-Pro.git",
//     },
//     {
//       title: "Threat Guard Cybersecurity Threat Detection System ",
//       category: "Frontend",
//       tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
//       image:
//       "https://primathon.in/blog/wp-content/uploads/2024/03/AI-Cybersecurity-Leveraging-Artificial-Intelligence-for-Enhanced-Cyber-Safety.png",
//       live: "https://netra-secure-ai-tau.vercel.app/",
//       github: "https://github.com/md-Nesharullah018/NetraSecure-AI.git",
     
//     },
//   ];

//   return (
//     <section className="relative bg-[#030303] py-32 px-6 md:px-20 overflow-hidden">

//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-orange-600/20 blur-[150px] rounded-full animate-pulse" />
//         <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/20 blur-[150px] rounded-full animate-pulse" />
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
//           <h2 className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-[0.8]">
//             SELECTED <br /> <span className="text-orange-500">PROJECTS</span>
//           </h2>
//           <p className="text-slate-400 max-w-xs text-right font-medium border-r-2 border-orange-500 pr-4">
//             A collection of interactive and fully responsive digital projects built with passion.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
//           {allProjects.map((project, index) => (
//             <ProjectCard key={index} project={project} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;







import React from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import { FiGithub, FiArrowUpRight, FiExternalLink } from "react-icons/fi";


// =====================================================
// PROJECT CARD
// =====================================================

const ProjectCard = ({ project, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8]);

  const springConfig = {
    stiffness: 250,
    damping: 20,
  };

  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const isReverse = index % 2 !== 0;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.08,
      }}
      className="relative"
    >

      {/* =================================================
          PROJECT NUMBER
      ================================================= */}

      <div
        className={`flex items-center gap-4 mb-5 ${
          isReverse ? "md:justify-end" : ""
        }`}
      >
        <span className="text-cyan-400 font-mono text-sm tracking-widest">
          0{index + 1}
        </span>

        <div className="h-px w-16 bg-cyan-400/40" />

        <span className="text-gray-600 text-xs uppercase tracking-[0.3em]">
          {project.category}
        </span>
      </div>


      {/* =================================================
          PROJECT LAYOUT
      ================================================= */}

      <div
        className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
          isReverse ? "lg:flex-row-reverse" : ""
        }`}
      >

        {/* =================================================
            IMAGE
        ================================================= */}

        <motion.div
          style={{
            rotateX: rotateXSpring,
            rotateY: rotateYSpring,
            transformStyle: "preserve-3d",
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={`group relative lg:col-span-7 ${
            isReverse ? "lg:order-2" : "lg:order-1"
          }`}
        >

          <div className="relative h-[280px] sm:h-[350px] md:h-[430px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">

            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            {/* Cyan hover overlay */}
            <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/10 transition-all duration-500" />

            {/* Border glow */}
            <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-cyan-400/40 transition-all duration-500" />

            {/* Image top label */}
            <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
              <span className="text-[10px] text-gray-300 uppercase tracking-[0.25em]">
                {project.category}
              </span>
            </div>

            {/* View icon */}
            <div className="absolute top-5 right-5 w-11 h-11 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              <FiArrowUpRight className="text-cyan-400 text-xl" />
            </div>

          </div>

        </motion.div>


        {/* =================================================
            CONTENT
        ================================================= */}

        <div
          className={`lg:col-span-5 ${
            isReverse ? "lg:order-1" : "lg:order-2"
          }`}
        >

          <motion.div
            initial={{
              opacity: 0,
              x: isReverse ? 40 : -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
          >

            {/* Small line */}
            <div className="flex items-center gap-3 mb-5">

              <span className="w-8 h-px bg-cyan-400" />

              <span className="text-cyan-400 text-xs font-mono uppercase tracking-[0.25em]">
                Featured Project
              </span>

            </div>


            {/* Title */}
            <h3 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight text-white leading-tight">
              {project.title}
            </h3>


            {/* Description */}
            <p className="text-gray-400 text-sm md:text-base leading-7 mt-5 max-w-lg">
              {project.description}
            </p>


            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-7">

              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full text-[10px] md:text-xs font-medium text-gray-300 bg-white/[0.04] border border-white/10 hover:border-cyan-400/40 hover:text-cyan-300 transition-colors"
                >
                  {tag}
                </span>
              ))}

            </div>


            {/* Buttons */}
            <div className="flex items-center gap-4 mt-8">

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-400 text-black text-sm font-semibold hover:bg-cyan-300 transition-all"
              >
                Live Demo

                <FiExternalLink className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>


              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-white/15 text-gray-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-400/5 transition-all"
                aria-label={`GitHub repository for ${project.title}`}
              >
                <FiGithub className="text-lg" />
              </a>

            </div>

          </motion.div>

        </div>

      </div>


      {/* Divider */}
      {index !== 3 && (
        <div className="mt-20 lg:mt-28 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      )}

    </motion.article>
  );
};


// =====================================================
// PROJECTS SECTION
// =====================================================

const Projects = () => {

  const allProjects = [

    {
      title: "ControlDesk",
      category: "MERN",
      description:
        "A full-stack task management platform with authentication, task lifecycle management, CRUD operations and a responsive dashboard.",
      tags: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
      ],
      image:
        "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?q=80&w=1600&auto=format&fit=crop",
      live:
        "https://control-desk-woad.vercel.app",
      github:
        "https://github.com/md-Nesharullah018/controlDesk.git",
    },

    {
      title: "Employee Task Manager",
      category: "Frontend",
      description:
        "A responsive employee task management application designed to organize, track and manage tasks through a clean dashboard interface.",
      tags: [
        "React",
        "Context API",
        "Tailwind CSS",
      ],
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop",
      live:
        "https://unique-pavlova-6ff1a3.netlify.app/",
      github:
        "https://github.com/md-Nesharullah018/Employee-Task-Manager.git",
    },

    {
      title: "Vault Pro",
      category: "Frontend",
      description:
        "A modern financial dashboard interface with charts, analytics and responsive UI components built for an interactive user experience.",
      tags: [
        "Next.js",
        "Chart.js",
        "Tailwind CSS",
      ],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
      live:
        "https://vault-pro-ten.vercel.app/dashboard",
      github:
        "https://github.com/md-Nesharullah018/Vault-Pro.git",
    },

    {
      title: "Threat Guard",
      category: "Cybersecurity",
      description:
        "An AI-focused cybersecurity interface designed for threat detection and security monitoring with a modern responsive frontend.",
      tags: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
      ],
      image:
        "https://primathon.in/blog/wp-content/uploads/2024/03/AI-Cybersecurity-Leveraging-Artificial-Intelligence-for-Enhanced-Cyber-Safety.png",
      live:
        "https://netra-secure-ai-tau.vercel.app/",
      github:
        "https://github.com/md-Nesharullah018/NetraSecure-AI.git",
    },

  ];


  return (

    <section className="relative min-h-screen bg-[#000000] text-white py-28 md:py-36 px-5 md:px-10 lg:px-16 overflow-hidden">


      {/* =================================================
          BACKGROUND GRID
      ================================================= */}

      <div
        className="absolute inset-0 opacity-[0.045] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />


      {/* =================================================
          BACKGROUND GLOW
      ================================================= */}

      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/[0.06] blur-[140px] rounded-full pointer-events-none" />

      <div className="absolute bottom-20 right-0 w-[400px] h-[300px] bg-blue-500/[0.04] blur-[130px] rounded-full pointer-events-none" />


      {/* =================================================
          MAIN CONTAINER
      ================================================= */}

      <div className="relative z-10 max-w-7xl mx-auto">


        {/* =================================================
            HEADER
        ================================================= */}

        <div className="mb-24 md:mb-32">

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
          >

            <p className="text-cyan-400 text-xs md:text-sm font-mono tracking-[0.4em] uppercase mb-6">
              My Work
            </p>

          </motion.div>


          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">

            <motion.h2
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className="text-5xl sm:text-6xl md:text-8xl xl:text-9xl font-black tracking-tighter leading-[0.8]"
            >

              SELECTED
              <br />

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500">
                PROJECTS
              </span>

            </motion.h2>


            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className="max-w-sm lg:text-right"
            >

              <p className="text-gray-500 text-sm md:text-base leading-7">
                A collection of projects where I experiment with modern
                technologies, backend systems and interactive user experiences.
              </p>

              <div className="flex items-center lg:justify-end gap-3 mt-6">

                <span className="w-10 h-px bg-cyan-400" />

                <span className="text-cyan-400 text-xs font-mono">
                  04 PROJECTS
                </span>

              </div>

            </motion.div>

          </div>

        </div>


        {/* =================================================
            PROJECT LIST
        ================================================= */}

        <div className="space-y-20 lg:space-y-28">

          {allProjects.map((project, index) => (

            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />

          ))}

        </div>


      </div>

    </section>
  );
};

export default Projects;