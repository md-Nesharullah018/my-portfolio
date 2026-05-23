import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiNextdotjs,
  SiCplusplus,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
      { name: "React", icon: FaReact, color: "text-cyan-400" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-300" },
      { name: "REST API", icon: TbApi, color: "text-pink-400" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: FaJava, color: "text-red-500" },
      { name: "C / C++", icon: SiCplusplus, color: "text-blue-400" },
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    ],
  },
];

const Skills = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#020617] to-[#020617] px-6 py-20">


      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center text-4xl md:text-5xl font-bold text-white mb-16"
      >
        My <span className="text-pink-500">Skills</span>
      </motion.h1>

      <div className="max-w-6xl mx-auto grid gap-12">
        {skillGroups.map((group, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-semibold text-pink-400 mb-6">
              {group.title}
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {group.skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.12 }}
                    className="flex flex-col items-center justify-center gap-3 bg-black/30 rounded-xl p-4 border border-white/10"
                  >
                    <Icon className={`text-4xl ${skill.color}`} />
                    <span className="text-white text-sm font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;




