import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiNodedotjs,
  SiPython,
  SiFlutter,
  SiFigma,
  SiAndroid,
} from "react-icons/si";

const techStack = [
  { name: "React", icon: SiReact, color: "text-sky-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black" },
  { name: "Angular", icon: SiAngular, color: "text-red-600" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
  { name: "Python", icon: SiPython, color: "text-yellow-500" },
  { name: "Flutter", icon: SiFlutter, color: "text-blue-400" },
  { name: "Figma", icon: SiFigma, color: "text-pink-500" },
  { name: "Android", icon: SiAndroid, color: "text-green-500" },
  { name: "React Native", icon: SiReact, color: "text-sky-400" },
];

const Technologies: React.FC = () => {
  return (
    <section className="py-10 sm:py-20 px-4 md:px-12 lg:px-24 bg-white pt-32 pb-20 relative overflow-hidden min-h-screen">
      {/* Decorative gradients */}
      <div
        className="absolute w-[40rem] h-[35rem] top-0 right-0 rounded-bl-[100%] filter blur-3xl opacity-45 z-0 hidden sm:block"
        style={{
          background: "linear-gradient(to bottom, #78BA9F 20%, #12334E 80%)",
          animation: "blob 8s infinite",
          animationDelay: "2s",
        }}
      />
      <div
        className="absolute w-[32rem] h-[35rem] bottom-0 left-0 rounded-tr-[100%] filter blur-3xl opacity-45 z-0 hidden sm:block"
        style={{
          background: "linear-gradient(to right, #78BA9F 90%, #12334E 10%)",
          animation: "blob 8s infinite",
          animationDelay: "2s",
        }}
      />
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
      `}</style>
      <div className="max-w-6xl mx-auto px-4 md:px-6 mt-20 mb-14 md:mb-20">
        <p className="text-lg text-[#08162C] font-semibold mb-4">
          <NavLink to="/">Home &gt;</NavLink>
          <span className="text-[#78BA9F] font-semibold"> Technologies</span>
        </p>
        <h1 className="text-4xl md:text-[5rem] font-semibold text-[#08162C] text-center mb-12">
          Our Technologies
        </h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-5 sm:gap-x-12 gap-y-20 w-full max-w-6xl mx-auto relative overflow-visible z-10">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="group relative flex flex-col justify-center items-center p-4 bg-white rounded-xl shadow-2xl hover:scale-110 transition-transform"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div
              className={`transition-all duration-500 ${tech.color} mb-2 group-hover:translate-y-3`}
            >
              <tech.icon
                size={40}
                className="transition-all duration-500 group-hover:scale-150 group-hover:drop-shadow-[0_0_3px_currentColor]"
              />
            </div>
            <p className="text-center text-sm relative z-10 transition-transform duration-500 group-hover:-translate-y-24 group-hover:scale-150">
              {tech.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Technologies; 