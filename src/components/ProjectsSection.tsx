import React from "react";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Button } from "./common/Button";
import { projects } from "../data/ProjectsData";
import ProjectCard from "./ProjectCard";

const ProjectsSection: React.FC = () => {
  return (
    <section className="py-10 sm:py-12 px-4 md:px-12 lg:px-24 max-w-[91rem] mx-auto ">
      <h2 className="text-2xl sm:text-3xl md:text-6xl font-semibold text-center mb-6 text-[#08162C]">
        Featured Projects
      </h2>
      <p className="text-center text-[#252525] font-semibold text-base sm:text-lg md:text-xl max-w-4xl mx-auto mb-10 relative z-20">
        Explore our showcase of successful projects that demonstrate our
        expertise in delivering innovative software solutions across various
        industries.
      </p>

      <div className="grid grid-cols-1 min-[700px]:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-8 flex justify-end relative z-20">
        <NavLink to="/portfolio">
          <Button
            className="flex items-center text-sm sm:text-lg md:text-xl font-semibold group  transition-colors cursor-pointer"
            variant="ghost"
          >
            VIEW ALL
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
              <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 group-hover:text-[#45BCA0] transition-colors" />
            </span>
          </Button>
        </NavLink>
      </div>
    </section>
  );
};

export default ProjectsSection;
