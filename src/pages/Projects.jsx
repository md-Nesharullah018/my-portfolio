

import React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { FiGithub, FiArrowUpRight } from "react-icons/fi";

const ProjectCard = ({ project, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-15, 15]);
  const springConfig = { stiffness: 300, damping: 20 };
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

  return (
    <motion.div
      style={{ rotateX: rotateXSpring, rotateY: rotateYSpring, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="relative w-full h-96 md:h-[400px] rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/20 shadow-2xl cursor-pointer overflow-hidden"
    >

      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover rounded-3xl filter brightness-75 transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-3xl" />

      <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end text-white z-10">
        <span className="text-orange-500 font-mono text-xs tracking-widest uppercase">
          {project.category}
        </span>
        <h3 className="text-2xl md:text-4xl font-extrabold mt-2">{project.title}</h3>
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] md:text-xs px-3 py-1 bg-white/10 border border-white/20 rounded-full font-semibold uppercase"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-4">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-full text-xs md:text-sm font-bold hover:bg-white hover:text-black transition-all"
          >
            View <FiArrowUpRight />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl md:text-3xl hover:text-orange-500 transition-colors"
          >
            <FiGithub />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const allProjects = [
    {
      title: "ControlDesk",
      category: "MERN",
      tags: ["Node.js", "Express.js", "React.js", "MongoDB", "Tailwind CSS"],
      image:
      "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?q=80&w=1600&auto=format&fit=crop",
      live: "https://control-desk-frontend.vercel.app/login",
      github: "https://github.com/md-Nesharullah018/control-desk.git",
    },
    {
      title: "Employee Task Manager",
      category: "Frontend",
      tags: ["React", "Context API", "Tailwind CSS"],
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop",
      live: "https://unique-pavlova-6ff1a3.netlify.app/",
      github: "https://github.com/md-Nesharullah018/Employee-Task-Manager.git",
    },
    {
      title: "Vault Pro",
      category: "Frontend",
      tags: ["Next.js", "Chart.js", "Tailwind"],
      image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
      live: "#",
      github: "#",
    },
    {
      title: "Smart ParkFinder",
      category: "Frontend",
      tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
      image:
      "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=1600&auto=format&fit=crop",
      live: "#",
      github: "#",
    },
  ];

  return (
    <section className="relative bg-[#030303] py-32 px-6 md:px-20 overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-orange-600/20 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/20 blur-[150px] rounded-full animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <h2 className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-[0.8]">
            SELECTED <br /> <span className="text-orange-500">PROJECTS</span>
          </h2>
          <p className="text-slate-400 max-w-xs text-right font-medium border-r-2 border-orange-500 pr-4">
            A collection of interactive and fully responsive digital projects built with passion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {allProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;