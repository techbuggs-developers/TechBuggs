import React from "react";
import type { PortfolioProject } from "../types/index";

interface PortfolioCardProps {
  project: PortfolioProject;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ project }) => {
  return (
    <div
      id={project.title.toLowerCase().replace(/\s+/g, "-")}
      className="flex flex-col bg-white justify-between rounded-3xl shadow-2xl p-6 md:p-10 max-w-[40rem] lg:max-w-[60rem] mx-auto"
    >
      <div className="flex flex-col lg:flex-row gap-10 justify-between">
        <div className="text-left flex flex-col justify-between">
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl mb-4 font-bold text-[#08162C]">
              {project.title}
            </h3>
            <p className="text-sm text-[#78BA9F] font-semibold mb-4">
              {project.subtitle}
            </p>
            <p className="text-sm sm:text-base md:text-base text-[#252525] mb-6 max-w-[35rem]">
              {project.description}
            </p>
          </div>

          <div className="flex gap-6 justify-center lg:justify-end flex-wrap mt-4">
            {project.icons.map((icon, index) => (
              <div key={index} className="relative group">
                <img
                  src={icon.src}
                  alt={icon.name}
                  loading="lazy"
                  className="w-10 h-10 sm:w-12 sm:h-12"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full max-w-[360px]   mx-auto rounded-2xl overflow-hidden shadow-lg">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard; 