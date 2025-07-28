import React from "react";
import { projectsData } from "../data/PortfolioCardData";
import type { PortfolioProject } from "../types/index";
import { NavLink } from "react-router-dom";
import PortfolioCard from "../components/PortfolioCard";

const Portfolio: React.FC = () => {
  return (
     <section className="pt-28 md:pt-32 pb-10 md:pb-20 px-4 md:px-12 lg:px-24 bg-white relative overflow-hidden">
      <div
        className="absolute w-[45rem] h-[45rem] top-0 right-0 rounded-bl-[100%] filter blur-3xl opacity-50 z-0 hidden sm:block"
        style={{
          background: "linear-gradient(to bottom, #78BA9F 70%, #12334E 30%)",
          animation: "blob 8s infinite",
          animationDelay: "2s",
        }}
      />
      <div
        className="absolute w-[60rem] h-[55rem] bottom-[8rem] left-[-10rem] rounded-tr-[100%] filter blur-3xl opacity-50 z-0 hidden sm:block"
        style={{
          background: "linear-gradient(to bottom, #78BA9F 70%, #12334E 30%)",
          animation: "blob 8s infinite",
          animationDelay: "2s",
        }}
      />
      <style>
        {`
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.05); }
            66% { transform: translate(-20px, 20px) scale(0.95); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
        `}
      </style>

      <div className="max-w-6xl mx-auto px-4 md:px-6 mb-14 md:mb-20">
        <p className="text-lg text-[#08162C] font-semibold mb-4">
          <NavLink to="/">Home &gt;</NavLink>
          <span className="text-[#78BA9F] font-semibold"> Portfolio</span>
        </p>
        <div className="space-y-2 relative z-20">
          <h1 className="text-4xl md:text-[5rem] font-semibold text-[#08162C] mb-4">
            Effective solutions for unique client problems
          </h1>
        </div>
        <p className="mt-6 px-3 text-base md:text-lg text-[#252525] leading-relaxed max-w-3xl">
          Our design-first approach has helped transform innovative businesses
          like these.
        </p>
      </div>

      <div className="space-y-12 relative z-20">
        {projectsData.map((project: PortfolioProject) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
