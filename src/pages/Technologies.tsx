import React from "react";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import TechnologyCard from "../components/TechnologyCard";
import { technologyStack } from "../data/technologyStack";

const Technologies: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className=" px-4 md:px-12 lg:px-24 bg-white pt-28 md:pt-32 pb-10 md:pb-20 relative overflow-hidden min-h-screen">
      <div
        className="absolute w-[40rem] h-[35rem] top-0 right-0 rounded-bl-[100%] filter blur-3xl opacity-45 z-0 hidden sm:block"
        style={{
          background: "linear-gradient(to bottom, #78BA9F 20%, #12334E 80%)",
          animation: "blob 8s infinite",
          animationDelay: "2s",
        }}
        role="presentation"
        aria-hidden="true"
      />
      <div
        className="absolute w-[32rem] h-[35rem] bottom-0 left-0 rounded-tr-[100%] filter blur-3xl opacity-45 z-0 hidden sm:block"
        style={{
          background: "linear-gradient(to right, #78BA9F 90%, #12334E 10%)",
          animation: "blob 8s infinite",
          animationDelay: "2s",
        }}
        role="presentation"
        aria-hidden="true"
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
        <h1 className="text-4xl md:text-[5rem] font-semibold mt-6 sm:mt-20 text-[#08162C] text-center mb-12">
          Our Technologies
        </h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-5 sm:gap-x-12 gap-y-14 sm:gap-y-20 w-full max-w-6xl mx-auto relative overflow-visible z-10">
        {technologyStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <TechnologyCard
              name={tech.name}
              img={tech.img}
              color={tech.color}
              onClick={() => navigate(`/technologies/${tech.slug}`)}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
