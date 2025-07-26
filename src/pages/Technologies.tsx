import React from "react";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";

import AndroidImg from "../assets/TechStackImages/Android.png";
import AngularImg from "../assets/TechStackImages/Angular.png";
import FigmaImg from "../assets/TechStackImages/Figma.png";
import FlutterImg from "../assets/TechStackImages/Flutter.png";
import NextjsImg from "../assets/TechStackImages/Nextjs.png";
import NodejsImg from "../assets/TechStackImages/Nodejs.png";
import PythonImg from "../assets/TechStackImages/python.webp";
import ReactImg from "../assets/TechStackImages/react-native.webp";

const techStack = [
  { name: "React", img: ReactImg, color: "text-sky-400", slug: "react" },
  { name: "Next.js", img: NextjsImg, color: "text-black", slug: "nextjs" },
  {
    name: "Angular",
    img: AngularImg,
    color: "text-[#E51536]",
    slug: "angular",
  },
  { name: "Node.js", img: NodejsImg, color: "text-[#83CD29]", slug: "nodejs" },
  { name: "Python", img: PythonImg, color: "text-yellow-500", slug: "python" },
  {
    name: "Flutter",
    img: FlutterImg,
    color: "text-[#02539A]",
    slug: "flutter",
  },
  { name: "Figma", img: FigmaImg, color: "text-[#FF7262]", slug: "figma" },
  {
    name: "Android",
    img: AndroidImg,
    color: "text-[#97C023]",
    slug: "android",
  },
  {
    name: "React Native",
    img: ReactImg,
    color: "text-sky-400",
    slug: "react-native",
  },
];

const Technologies: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className=" px-4 md:px-12 lg:px-24 bg-white pt-28 md:pt-32 pb-0 md:pb-20 relative overflow-hidden min-h-screen">
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
      <div className="max-w-6xl mx-auto px-4 md:px-6  mb-14 md:mb-20">
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
            className="group relative flex flex-col justify-center items-center p-4 bg-white rounded-xl shadow-2xl hover:scale-110 transition-transform cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            onClick={() => navigate(`/technologies/${tech.slug}`)}
            tabIndex={0}
            role="button"
            aria-label={`View details for ${tech.name}`}
          >
            <div
              className={`transition-all duration-500 mb-4 group-hover:translate-y-3 flex items-center justify-center rounded-full cursor-pointer`}
            >
              <img
                src={tech.img}
                alt={tech.name}
                className="w-10 h-10 object-contain transition-transform duration-500  group-hover:scale-120"
                loading="lazy"
              />
            </div>
            <p
              className={`text-center text-sm font-medium relative ${tech.color} z-10 transition-transform duration-500 group-hover:-translate-y-24 group-hover:scale-120`}
            >
              {tech.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
