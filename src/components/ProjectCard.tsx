import React from "react";
import { Button } from "./common/Button";
import { ArrowRight } from "lucide-react";
import type { Project } from "../types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div
      className="relative w-full max-w-[400px] mx-auto aspect-[4/6] rounded-2xl overflow-hidden shadow-lg group transition-transform duration-300 hover:scale-[1.03]"
    >
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover z-0 transition-all duration-500 group-hover:scale-200 group-hover:opacity-0"
      />
      <div
        className={`absolute inset-0 z-10 ${project.overlay} ${project.hoverOverlay} flex flex-col justify-start items-start p-6 sm:p-8 md:p-10 transition-all duration-500`}
      >
        <h3 className="[@media(max-width:431px)]:text-[22px] text-3xl  sm:text-2xl [@media(min-width:768px)_and_(max-width:865px)]:text-2xl text-white md:text-3xl [@media(min-width:1024px)_and_(max-width:1083px)]:text-sm lg:text-xl xl:text-2xl 2xl:text-3xl font-extrabold">
          {project.title}
        </h3>
        <p className="text-xl [@media(max-width:431px)]:text-lg text-[#F0F0F0] sm:text-lg [@media(min-width:768px)_and_(max-width:865px)]:text-sm [@media(min-width:1024px)_and_(max-width:1083px)]:text-xs lg:text-sm xl:text-base 2xl:text-lg mt-2 font-semibold">
          {project.subtitle}
        </p>
        <p className="text-lg [@media(max-width:431px)]:text-[14px] sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-lg [@media(min-width:768px)_and_(max-width:865px)]:text-xs [@media(min-width:1024px)_and_(max-width:1083px)]:text-[10px] text-[#F0F0F0] mt-4 sm:mt-6 max-w-[90%] opacity-0 translate-x-10 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
          {project.description}
        </p>
        <a
          href={`/portfolio#${project.title
            .toLowerCase()
            .replace(/\s+/g, "-")}`}
        >
          <Button
            className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 opacity-0 translate-y-10 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 cursor-pointer"
            variant="ghost"
            aria-label={`View details for ${project.title}`}
          >
            <ArrowRight className="w-8 h-8 sm:w-10 sm:h-10 p-0.5 bg-[#191A23] rounded-full text-[#45BCA0] rotate-[-30deg]" />
          </Button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard; 